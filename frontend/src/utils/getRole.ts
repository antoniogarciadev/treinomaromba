import { ADMIN_IDS, ADMINS } from "@/config/admins";

export const getRole = (email: string, id?: number): "admin" | "user" => {
    if(ADMINS.includes(email)) return 'admin';
    if(id && ADMIN_IDS.includes(id)) return 'admin';
    return ADMINS.includes(email) ? 'admin' : 'user'
}

// export const getRole = (email: string): 'admin' | 'user' => {
//     if(ADMINS.includes(email)) return 'admin'l
//     return ADMINS.includes(email) ? 'admin' : 'user'
// }