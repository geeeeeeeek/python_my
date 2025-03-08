'use client';
import {useEffect} from "react";
import {useRouter} from "next/navigation";

export default function Page() {

    const router = useRouter();

    useEffect(() => {
        // 在页面加载后重定向
        router.push('/admin/main');
    }, [router]);

    return (
        <div>
            <h1>Welcome</h1>
            <p>欢迎回来..........</p>
        </div>
    )
}