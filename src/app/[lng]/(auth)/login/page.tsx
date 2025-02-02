import { LoginForm } from '@/src/components/Form/LoginForm/client'

type PageProps = { params: { lng: string } };

const Page = async ({ params: { lng }}: PageProps) => {

    return (
        <div>
            <LoginForm lng={lng}/>
        </div>
    )
}

export default Page