import type { User } from "@/types/user";

const normalizeUsers = (data: any): User[] => {
  if (Array.isArray(data)) {
    return data;
  }
  if(data.users && Array.isArray(data.users)) {
    return data.users;
  }
  // throw new Error("Formato de dados inesperado");

  return [];
};

export default normalizeUsers;
