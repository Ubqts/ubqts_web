import { FC, ReactNode } from 'react'
import './layout.css'


interface AuthLayoutProps {
    children: ReactNode
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
    return (
        <div className='loginBox'>
            {children}
        </div >
    )
}

export default AuthLayout