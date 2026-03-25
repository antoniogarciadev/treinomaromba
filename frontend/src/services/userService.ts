import type { User } from '@/types/user'

// dummyjson endpoint requires query string ?limit=100 (não /limit=100)
const API = 'https://dummyjson.com/users?limit=100'

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch(API)

  if (!res.ok) {
    throw new Error(`Falha ao buscar usuários: ${res.status} ${res.statusText}`)
  }

  const data = await res.json()
  return data.users as User[]
}


export const createUser = async (user: Partial<User>) => {
  const res = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  })
  return res.json()
}
export const updateUser = async (id: number, user: Partial<User>) => {
  const res = await fetch(`${API}/${id}`, {
    method: 'PATCH', // 🔥 troca aqui
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  })
  return res.json()
}

export const deleteUser = async (id: number) => {
  await fetch(`${API}/${id}`, {
    method: 'DELETE'
  })
}