import {ThemeProvider} from "@/theme/theme-provider";
import {Montserrat, Aboreto, Open_Sans} from 'next/font/google';
import "@/styles/globals.css";
import IndexLayout from "@/components/index/indexLayout";


const font = Open_Sans({subsets: ["latin"], weight: ['400', '700']})

export const metadata = {
    title: "我是首页",
    description: "I am description",
    icons: [{rel: "icon", url: "/favicon.ico"}],
}


export default function RootLayout({children}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
        </head>
        <body className={`${font.className} bg-white`}>

        <ThemeProvider attribute="class" defaultTheme="light">
            <IndexLayout>{children}</IndexLayout>
        </ThemeProvider>

        </body>
        </html>
    );
}
