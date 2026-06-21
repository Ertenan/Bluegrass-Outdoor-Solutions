export const company = {
  name: 'Bluegrass Outdoor Solutions',
  founded: '2023',
  phone: process.env.NEXT_PUBLIC_COMPANY_PHONE || '513-687-9089',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'tbethan21@gmail.com',
  serviceArea:
    process.env.NEXT_PUBLIC_SERVICE_AREA || 'Union, Florence, Northern Kentucky'
};
