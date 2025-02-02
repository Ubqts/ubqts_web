'use client';
import { authOptions } from "@/lib/auth"
import SignUpForm from "@/src/components/Form/SignUpForm"
// import { getServerSession } from "next-auth"
import { useSession } from "next-auth/react"
import { useState, useEffect } from "react"

// const Page = async () => {
const Page = () => {
    const [loading, setLoading] = useState(true);
    // const session = await getServerSession(authOptions);
    const { data: session } = useSession();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return null;

    if (session?.user.role === "admin") {
        return (
            <div className="w-full">
                <SignUpForm />
            </div>
        )
    }

    return (
        <div className="w-full">
            <h1 style={{ textAlign: "center", marginBottom: "15px" }}>Error: 403</h1>
            <h2>權限不足，請先登入管理員帳號</h2>
        </div>
    )
}

export default Page