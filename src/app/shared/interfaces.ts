export interface User {
  email: String
  password: String
  returnSecureToken?: boolean
}

export interface FbAuthResponse {
  idToken: String
  expiresIn: String
}
