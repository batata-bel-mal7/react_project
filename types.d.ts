export type role = 'seller' | 'customer'
export interface User {
  firstName: string
  lastName: string
  profileImage: number
  roles: role[]
}
