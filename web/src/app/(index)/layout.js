import {ThemeProvider} from "@/theme/theme-provider";
import {Montserrat, Aboreto} from 'next/font/google';
import "@/styles/globals.css";
import IndexLayout from "@/components/index/indexLayout";


const font = Montserrat({subsets: ["latin"], weight: "400"})

export const metadata = {
    title: "我是首页",
    description: "I am description",
    icons: [{rel: "icon", url: "/favicon.ico"}],
}


export default function RootLayout({children}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${font.className} bg-blue-200`}>

        <ThemeProvider attribute="class" defaultTheme="light">
            <IndexLayout>{children}</IndexLayout>
        </ThemeProvider>

        </body>
        </html>
    );
}
