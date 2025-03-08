import {ThemeProvider} from "@/theme/theme-provider";
import {Montserrat, Aboreto} from 'next/font/google';
import Footer from "@/components/Footer";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { AntdRegistry } from '@ant-design/nextjs-registry';


const font = Montserrat({subsets: ["latin"], weight: "400"})

export const metadata = {
    title: "Starter - Home",
    description: "I am description",
    icons: [{rel: "icon", url: "/favicon.ico"}],
}



export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body
            className={`${font.className} bg-white text-black dark:bg-black dark:text-white transition duration-500`}>

        <ThemeProvider attribute="class" defaultTheme="light">
            <Navbar />
            <AntdRegistry>{children}</AntdRegistry>
            <Footer/>
        </ThemeProvider>

        </body>
        </html>
    );
}
