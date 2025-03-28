'use client';

import {useRouter} from "next/navigation";
import { ModeToggle } from "@/theme/theme-toggle";


export default function Form() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center p-4 gap-y-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => router.back()}>Back
            </button>
            <p>Form page</p>

            <input placeholder="please input"  className="border-2 border-gray-300 p-2 rounded-lg"/>

            <button className="btn">Button1</button>

            <button className="btn">Button2</button>

            <ModeToggle />


        </div>
    );
}