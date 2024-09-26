import { authOptions } from "@/lib/auth"
import SignUpForm from "@/src/components/Form/SignUpForm"
import { getServerSession } from "next-auth"

const page = async () => {
    const session = await getServerSession(authOptions);

    // if (session?.user) {
        return (
            <div className="w-full">
                <SignUpForm />
            </div>
        )
    // }

    return (
        <div className="w-full">
            <h1 style={{ textAlign: "center", marginBottom: "15px" }}>Error: 403</h1>
            <h2>權限不足，請先登入管理員帳號</h2>
        </div>
    )
}

export default page