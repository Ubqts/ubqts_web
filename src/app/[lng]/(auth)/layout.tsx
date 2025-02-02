import { FC, ReactNode } from 'react'
import './layout.css'

interface AuthLayoutProps {
    children: ReactNode;
    params: { lng : string }
}

const AuthLayout: FC<AuthLayoutProps> = ({ children, params: { lng } }) => {
    return (
        <div className='loginBox'>
            {children}
        </div >
    )
}

export default AuthLayout