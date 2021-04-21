import Constants from 'expo-constants'

export const amplifyConfigure = {
  Auth: {
    mandatorySignIn: true,
    identityPoolId: Constants.manifest.extra.REACT_APP_AWS_IDENTITY_POOL_ID,
    // userPoolId: Constants.manifest.extra.REACT_APP_USER_POOL_ID,
    region: Constants.manifest.extra.REACT_APP_AWS_REGION,
    userPoolWebClientId: Constants.manifest.extra.REACT_APP_AWS_USER_POOL_CLIENT_ID,
  },
}
