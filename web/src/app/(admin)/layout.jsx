// 'use client';
import {ThemeProvider} from "@/theme/theme-provider";
import {Montserrat} from 'next/font/google';
import "@/styles/globals.css";
import {AntdRegistry} from '@ant-design/nextjs-registry';
import {ConfigProvider} from "antd";
import ReduxProvider from "@/redux/redux-provider";


const font = Montserrat({subsets: ["latin"], weight: "400"})

export const metadata = {
    title: "网站后台管理",
    description: "网站后台管理系统",
    icons: [{rel: "icon", url: "/favicon.ico"}],
}


export default function RootLayout({children}) {
    return (
        <ReduxProvider>
            <html lang="en">
            <body>

            <AntdRegistry>
                <ConfigProvider
                    wave={{ disabled: true }}
                    theme={{
                        components: {
                            Menu: {
                                itemBorderRadius: 0,
                                itemMarginInline: 0,
                                itemPaddingInline: 48,
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
                                headerBg: '#3398cc',
                                headerColor: '#fff',
                                borderRadius: 0,
                                colorBorderSecondary: '#fff',
                                cellFontSizeMD:14, // middle尺寸的
                                cellPaddingBlockMD: 8,
                                cellPaddingInlineMD: 8,
                            },
                            Pagination: {
                                borderRadius: 0,
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
