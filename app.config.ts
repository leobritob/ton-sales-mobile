import 'dotenv/config'

export default {
  name: 'Ton Sales',
  description: 'Loja produtos Ton',
  version: '1.0.0',
  slug: 'tonSales',
  owner: 'ton',
  primaryColor: '#00c700',
  extra: {
    REACT_APP_AWS_IDENTITY_POOL_ID: process.env.REACT_APP_AWS_IDENTITY_POOL_ID,
    REACT_APP_AWS_REGION: process.env.REACT_APP_AWS_REGION,
    REACT_APP_AWS_USER_POOL_CLIENT_ID: process.env.REACT_APP_AWS_USER_POOL_CLIENT_ID,
    REACT_APP_USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
  },
}
