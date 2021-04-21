export const amplifyConfigure = {
  Auth: {
    identityPoolId: process.env.REACT_APP_AWS_IDENTITY_POOL_ID,
    region: process.env.REACT_APP_AWS_REGION,
    userPoolWebClientId: process.env.REACT_APP_AWS_USER_POOL_CLIENT_ID,
  },
}
