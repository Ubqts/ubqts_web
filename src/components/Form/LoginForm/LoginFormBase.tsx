'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import './LoginFormBase.css'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { TFunction } from 'i18next'

type LoginFormBaseProps = {
    t: ((key: string) => string) & TFunction<"translation", undefined>;
};

const LoginFormBase = ({ t }: LoginFormBaseProps) => {
    const router = useRouter();

    const FormSchema = z.object({
        username: z.string(),
        password: z.string().min(1, t("password-warning")),
    });
    
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof FormSchema>) => {
        const signInData = await signIn('credentials', {
            username: values.username,
            password: values.password,
            redirect: false,
        });
        if (signInData?.error) {
            console.error(signInData.error);
            alert(t("login-fail"));
        } else {
            // console.log('success');
            alert(t("login-success"));
            router.refresh();
            // router.push('/#');
            window.location.href = '/#';
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <div className="test space-y-2">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t("account")}</FormLabel>
                                <FormControl>
                                    <Input placeholder={t("account-placeholder")} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t("password")}</FormLabel>
                                <FormControl>
                                    <Input placeholder={t("password-placeholder")} type='password' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button className='submitBtn' type="submit">{t("submit")}</Button>
            </form>
        </Form>
    )
}

export default LoginFormBase