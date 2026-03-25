export interface User {
  id: number
  username: string
  email: string
  phone: string
  password: string
  role?: 'admin' | 'moderator' | 'user'
}