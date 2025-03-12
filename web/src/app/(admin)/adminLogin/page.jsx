'use client';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import LoginPage from "@/components/admin/loginPage";


export default function Page() {


        const router = useRouter();


        return (
                <div className="flex flex-col items-center justify-center">

                        <LoginPage />

                </div>
        );

}
