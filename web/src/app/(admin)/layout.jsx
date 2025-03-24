// 'use client';
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

    const primaryColor = '#3399cc';

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
                                itemPaddingInline: 56,
                                darkItemBg: primaryColor, // 整体背景色
                                darkSubMenuItemBg: primaryColor, // 子菜单背景色
                                darkItemColor: '#fff', // 文字颜色
                                darkItemSelectedBg: '#2189be', // 选中颜色
                                motionDurationSlow: '0.1s', // 动效速度
                            },
                            Tabs: {
                                itemActiveColor: '#000',
                                itemSelectedColor: primaryColor,
                                itemHoverColor: '#000',
                                colorPrimaryBorder: '#fff',// 描边
                                horizontalMargin: '0 0 0 0',
                            },
                            Table: {
                                headerBorderRadius: 0,
                                headerBg: '#fafafa',
                                headerColor: '#333',
                                borderRadius: 0,
                                colorBorderSecondary: '#f1f1f1',
                                borderColor: '#eee',
                                cellFontSizeMD:14, // middle尺寸的
                                cellPaddingBlockMD: 12,
                                cellPaddingInlineMD: 8,
                            },
                            Pagination: {
                                borderRadius: 0,
                            },
                            Button: {
                                borderRadius: 0,
                                colorPrimary: primaryColor,
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
