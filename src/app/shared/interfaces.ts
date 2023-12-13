export interface User {
  email: String
  password: String
  returnSecureToken?: boolean
}

export interface FbAuthResponse {
  idToken: String
  expiresIn: String
}

export interface Post {
  id?: string
  title: string
  text: string
  author: string
  date: Date
}

export interface fbCreateResponse {
  name: string
}
