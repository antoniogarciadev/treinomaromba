import type { User } from '@/types/user'
import normalizeUsers from '@/utils/normaliseUsers'

// dummyjson endpoint requires query string ?limit=100 (não /limit=100)
const API = 'http://localhost:5001/users'//API Local
// const API = 'https://dummyjson.com/users?limit=100'

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch(API)

  if (!res.ok) {
    throw new Error(`Falha ao buscar usuários: ${res.status} ${res.statusText}`)
  }

  const data = await res.json()

  // return data.users as User[]//Api dummyjson retorna os usuários dentro de um objeto "users", mas o json-server retorna diretamente um array de usuários. A função normalizeUsers lida com ambos os casos.

  // return data as User[]//Api local do json-server retorna os usuários diretamente como um array, enquanto o dummyjson os retorna dentro de um objeto "users". A função normalizeUsers lida com ambos os casos.

  return normalizeUsers(data)
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
