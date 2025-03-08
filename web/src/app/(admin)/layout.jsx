import {ThemeProvider} from "@/theme/theme-provider";
import {Montserrat} from 'next/font/google';
import "@/styles/globals.css";
import {AntdRegistry} from '@ant-design/nextjs-registry';
import {ConfigProvider} from "antd";
import ReduxProvider from "@/redux/redux-provider";


const font = Montserrat({subsets: ["latin"], weight: "400"})

export const metadata = {
    title: "后台管理",
    description: "后台管理系统",
    icons: [{rel: "icon", url: "/favicon.ico"}],
}


export default function RootLayout({children}) {
    return (
        <ReduxProvider>
            <html lang="en">
            <body>

            <AntdRegistry>
                <ConfigProvider
                    theme={{
                        components: {
                            Menu: {
                                itemBorderRadius: 0,
                                itemMarginInline: 0,
                                darkItemBg: '#3398cc', // 整体背景色
                                darkSubMenuItemBg: '#3398cc', // 子菜单背景色
                                darkItemColor: '#fff', // 文字颜色
                                darkItemSelectedBg: '#2189be', // 选中颜色
                            },
                            Tabs: {
                                itemActiveColor: '#000',
                                itemSelectedColor: '#3398cc',
                                itemHoverColor: '#000',
                                colorPrimaryBorder: '#fff',// 描边
                                horizontalMargin: '0 0 0 0',
                            },
                            Table: {
                                headerBorderRadius: 0,
                                headerBg: '#fff',
                            },
                            Button: {
                                borderRadius: 0
                            },
                            Input: {
                                borderRadius: 0
                            },
                            Select: {
                                borderRadius: 0
                            },
                        },
                    }}
                >
                    {children}
                </ConfigProvider>
            </AntdRegistry>

            </body>
            </html>
        </ReduxProvider>
    );
}
