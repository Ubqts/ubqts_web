'use client';
import React, { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export type Account = {
    id: number;
    name: string;
    password: string;
};
export type AccountRequest = {
    account: Account['name'];
    password: Account['password'];
};
export type AccountResponse = {
    account: Account['name'];
    token: string;
};

export type AccountContext = {
    user?: Account | null;
    setUser?: (user: Account) => void;
};

export const AccountContext = createContext<AccountContext>({
    user: null,
    setUser: () => {},
});

type Props = {
    children: React.ReactNode;
};
export function AccountProvider({ children }: Props) {
    const [user, setUser] = useState<Account | undefined>();
    const [userList, setUserList] = useState<Account[]>([]);
    const router = useRouter();

    //GET
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch('/api/account', {
                    method: 'GET',
                });
                const data = await res.json();
                setUser(data);
            } catch (error) {
                console.error(error);
            }
        };
        const fetchUserList = async () => {
            const UserListInit = await fetchUser();
            const UserListJSON: Account[] = UserListInit['user'];
            setUserList(UserListJSON);
        }
        fetchUserList();
        const token = localStorage.getItem('jwt-token: ');
        function decodeJWT(token: string): Record<string, any> | null{
            try {
                const parts = token.split('.');
                if (parts.length !== 3) {
                    return null;    // Invalid token
                }
                const payload = Buffer.from(parts[1], 'base64').toString('utf-8');
                return JSON.parse(payload);
            } catch (error) {
                console.error(error);
                return null;
            }
        }
        if (!token) {
            alert('請先登入');
            router.push('/login');
        } else {
            const decodedPayload = decodeJWT(token);
            const name = decodedPayload?.name;
            if (!name) {
                alert('找不到使用者');
            } else {
                const temp: Account | undefined = userList?.find(item => item.name === name);
                setUser(temp);
            }
        }
    }, []);

    return (
        <AccountContext.Provider value={{ user, setUser }}>
            {children}
        </AccountContext.Provider>
    );
}