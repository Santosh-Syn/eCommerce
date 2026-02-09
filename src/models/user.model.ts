export type UserRole = 'customer' | 'seller' | 'admin';

export interface User {
    id: number;
    name: string;
    email: string;
    role: UserRole;
}