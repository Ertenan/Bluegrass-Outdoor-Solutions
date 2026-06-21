# Deployment Guide

This document describes how to deploy the Bluegrass Outdoor Solutions static website to **GitHub Pages**, and how to handle form submissions and API secrets securely.

---

## 1. Next.js Static Export Configuration

Since GitHub Pages only hosts static assets (HTML, CSS, JS, images), Next.js must be configured for a static export.

### Configuration Changes (`next.config.js` or `next.config.mjs`)
Ensure your Next.js configuration is set to `'export'`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export as Next.js Image optimization requires a Node server
  },
  // If hosting under a subpath (e.g. github.com/username/repo-name), define basePath:
  // basePath: '/repo-name',
};

module.exports = nextConfig;
```

---

## 2. GitHub Pages Deployment Steps

### Method A: Automated Deployment via GitHub Actions (Recommended)

1. Create a directory and workflow file at `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches:
         - main

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: 'pages'
     cancel-in-progress: true

   jobs:
     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4

         - name: Setup Node
           uses: actions/setup-node@v4
           with:
             node-version: '20'
             cache: 'npm'

         - name: Install dependencies
           run: npm ci

         - name: Build with Next.js
           run: npm run build

         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: ./out

         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
           env:
             # Include any public/frontend env variables needed at build time:
             NEXT_PUBLIC_COMPANY_PHONE: "513-687-9089"
             NEXT_PUBLIC_SERVICE_AREA: "Union, Florence, Northern Kentucky"
             NEXT_PUBLIC_CONTACT_EMAIL: "tbethan21@gmail.com"
             NEXT_PUBLIC_TURNSTILE_SITE_KEY: "your_cloudflare_turnstile_site_key"
   ```

2. Enable GitHub Pages in your repository:
   - Go to **Settings > Pages** on your GitHub repository.
   - Under **Build and deployment**, select **GitHub Actions** as the source.

### Method B: Manual Deployment

1. Run the static export command locally:
   ```bash
   npm run build
   ```
   This generates a static build in the `./out` directory.
2. Publish the contents of the `./out` directory to the `gh-pages` branch or configure GitHub Pages to serve from that branch.

---

## 3. Secure Handling of Secrets & Form Submission

> [!WARNING]
> **Do not store SMTP credentials or secret keys in `.env` or GitHub repository variables for the Next.js static build.**
> In a static site, all built environment variables (even those without `NEXT_PUBLIC_`) are bundled into the client-side JavaScript, exposing them to the public.

To keep your AWS SES credentials and Turnstile secret key secure, choose one of the following integration patterns:

### Option 1: AWS Lambda API Gateway (Recommended for custom SMTP/SES)
Deploy a lightweight serverless backend to handle form submissions securely.

1. **Deploy AWS Lambda Function:**
   Create an AWS Lambda function running Node.js that accepts POST requests.
2. **Configure AWS Lambda Environment Variables:**
   Store your secrets securely in the Lambda configuration:
   - `SMTP_HOST`: `email-smtp.us-east-1.amazonaws.com` (or your AWS SES region host)
   - `SMTP_PORT`: `587`
   - `SMTP_USER`: `[Your AWS SES SMTP Username]`
   - `SMTP_PASSWORD`: `[Your AWS SES SMTP Password]`
   - `TURNSTILE_SECRET_KEY`: `[Your Cloudflare Turnstile Secret Key]`
   - `VERIFIED_FROM_EMAIL`: `noreply@bluegrassoutdoorsolutions.com`
   - `TO_EMAIL`: `tbethan21@gmail.com`
3. **Lambda Code Workflow:**
   - The Lambda function extracts the form data and the Turnstile token (`cf-turnstile-response`) sent from the client-side form.
   - It makes a POST request to Cloudflare to verify the token:
     `https://challenges.cloudflare.com/turnstile/v0/siteverify` with the Turnstile secret key and the token.
   - If verification succeeds, it sends the email via AWS SES using NodeMailer (using the secure environment variables).
4. **Client Form Submission:**
   Point the contact form submission handler to the AWS API Gateway endpoint URL pointing to your Lambda function.

### Option 2: Static Form Provider (e.g., Web3Forms)
A simpler alternative that does not require hosting an AWS Lambda function.

1. **Sign Up:** Register for a free access key on [Web3Forms](https://web3forms.com) or [Formspree](https://formspree.io).
2. **Configure Domain:** Restrict the access key to your GitHub Pages domain (preventing other sites from using your key).
3. **Captcha:** Web3Forms natively supports Cloudflare Turnstile and spam honeypots.
4. **Submission:**
   Submit form data directly to `https://api.web3forms.com/submit` including the public access key and the Turnstile token. The service handles emailing you the content directly.

---

## 4. Bot Protection (Cloudflare Turnstile & Honeypot)

### Turnstile Integration
1. Register your site on the [Cloudflare Dashboard](https://dash.cloudflare.com) to get a **Site Key** (public) and a **Secret Key** (secret).
2. Add the Turnstile React component (e.g., `@marsidev/react-turnstile`) to your contact form component.
3. Pass the public `NEXT_PUBLIC_TURNSTILE_SITE_KEY` as a build environment variable.

### Honeypot Field Integration
Create an input field hidden from human users using CSS:

```tsx
<div style={{ display: 'none' }} aria-hidden="true">
  <label htmlFor="bot_trap">Do not fill this out if you are human</label>
  <input
    id="bot_trap"
    name="bot_trap"
    type="text"
    tabIndex={-1}
    autoComplete="off"
  />
</div>