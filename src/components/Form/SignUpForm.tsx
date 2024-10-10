'use client'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import './LoginForm.css'
import { useRouter } from 'next/navigation'

const FormSchema = z.object({
    username: z.string().min(1, '帳號不得為空').min(4, '帳號長度不得小於4').max(20, '帳號長度不得大於20'),
    password: z.string().min(1, '密碼不得為空').min(6, '密碼長度不得小於6').max(30, '密碼長度不得大於30'),
    confirmPassword: z.string().min(1, '請確認密碼'),
    role: z.enum(['admin', 'user']),
}).refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: '密碼不一致',
})

const SignUpForm = () => {
    const router = useRouter()
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            password: "",
            confirmPassword: "",
            role: "user",
        },
    })

    const onSubmit = async (values: z.infer<typeof FormSchema>) => {
        const response = await fetch('/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: values.username,
                password: values.password,
                role: values.role,
            }),
        })

        if (response.status === 201) {
            alert('User created successfully, redirecting to home page')
            router.push('/#')
        } else if (response.status === 409) {
            console.error('User already exists')
            alert('Failed to create user: user already exists')
        } else {
            console.error('Failed to create user')
            alert('Failed to create user: something went wrong')
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <div className="test space-y-2">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>帳號</FormLabel>
                                <FormControl>
                                    <Input placeholder="請輸入帳號" {...field} />
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
                                <FormLabel>密碼</FormLabel>
                                <FormControl>
                                    <Input placeholder="請輸入密碼" type='password' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>確認密碼</FormLabel>
                                <FormControl>
                                    <Input placeholder="請再次輸入密碼" type='password' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>身分</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="請選擇身分" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="user">訪客</SelectItem>
                                        <SelectItem value="admin">管理員</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button className='submitBtn' type="submit">新增帳號</Button>
            </form>
        </Form>
    )
}

export default SignUpForm