'use client';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import axios from "axios";


export default function Home() {




        const router = useRouter();


        return (
                <div className="flex flex-col items-center justify-center gap-y-4 p-4">

                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => router.push('/csr')}>CSR
                        </button>

                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => router.push('/ssr')}>SSR
                        </button>

                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => router.push('/form')}>Form
                        </button>

                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => router.push('/about')}>About
                        </button>

                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={()=> router.push('/practise')}>
                                practise
                        </button>



                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={()=> router.push('/category')}>
                                Category
                        </button>


                </div>
        );

}
