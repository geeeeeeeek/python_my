'use client';

import {useRouter} from 'next/navigation';


export default function Page() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => router.back()}>Back
            </button>
            <p>Product page</p>
        </div>
    );
}