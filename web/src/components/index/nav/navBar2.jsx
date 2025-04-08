'use client'

import {useEffect, useState} from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import {ChevronDownIcon} from '@heroicons/react/20/solid'
import {usePathname} from "next/navigation";

// 导航菜单配置
const sectionData =  {
    "siteLogo": "1743579693076.jpg",
    "basicGlobal": {
        "id": 1,
        "global_phone": "+86-1239998888",
        "global_email": "hello2025@gmail.com",
        "global_company_name": "sky ltd.group",
        "global_address": "Beijing dongsan Road",
        "global_wechat": "9878899",
        "global_wechat_qrcode": "1742884043091.jpg",
        "global_facebook": "http://www.facebook.com/hello",
        "global_twitter": "https://twitter.com/hello",
        "global_linkedin": "https://linkedin.com/in/java1001",
        "global_whatsapp": "98888",
        "global_youtube": "https://youtube.com/",
        "global_instagram": "https://instagram.com/"
    },
    "navigationItems": [
        {
            "name": "Home",
            "href": "/",
            "type": "link"
        },
        {
            "name": "Product",
            "href": "/product",
            "type": "dropdown",
            "subItems": [
                {
                    "id": 41,
                    "name": "ddd",
                    "href": "/product/41",
                    "type": "link",
                    "subItems": []
                },
                {
                    "id": 40,
                    "name": "ccc",
                    "href": "/product/40",
                    "type": "link",
                    "subItems": []
                },
                {
                    "id": 8,
                    "name": "Man",
                    "href": "/product/8",
                    "type": "dropdown",
                    "subItems": [
                        {
                            "id": 36,
                            "name": "Cats",
                            "href": "/product/36",
                            "type": "link",
                            "sort": 0
                        },
                        {
                            "id": 35,
                            "name": "Sports",
                            "href": "/product/35",
                            "type": "link",
                            "sort": 0
                        }
                    ]
                },
                {
                    "id": 7,
                    "name": "Woman",
                    "href": "/product/7",
                    "type": "dropdown",
                    "subItems": [
                        {
                            "id": 39,
                            "name": "Funny",
                            "href": "/product/39",
                            "type": "link",
                            "sort": 0
                        },
                        {
                            "id": 38,
                            "name": "Middle",
                            "href": "/product/38",
                            "type": "link",
                            "sort": 0
                        },
                        {
                            "id": 37,
                            "name": "Beautiful",
                            "href": "/product/37",
                            "type": "link",
                            "sort": 0
                        }
                    ]
                },
                {
                    "id": 34,
                    "name": "Girl",
                    "href": "/product/34",
                    "type": "link",
                    "subItems": []
                }
            ]
        },
        {
            "name": "About",
            "href": "/about",
            "type": "link"
        },
        {
            "name": "Contact",
            "href": "/contact",
            "type": "link"
        },
        {
            "name": "News",
            "href": "/news",
            "type": "link"
        },
        {
            "name": "Faq",
            "href": "/faq",
            "type": "link"
        }
    ]
}


export default function NavBar({sectionData}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const [activeSubMenu, setActiveSubMenu] = useState(null)

    const pathname = usePathname();
    const [current, setCurrent] = useState(pathname);

    useEffect(()=>{
        setCurrent(pathname);
    },[pathname])

    return (
        <div>
            {/* 顶部信息栏 - 添加渐变背景 */}
            <div className="bg-gradient-to-r from-purple-500 via-purple-300 to-purple-400 text-white py-2 px-4">
                <div className="mx-auto max-w-[1200px] flex justify-between items-center">
                    <div className="flex items-center space-x-4 text-sm">
                        <a href="#" className="hover:text-blue-100 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            {sectionData['basicGlobal']['global_email']}
                        </a>
                        <a href="#" className="hover:text-blue-100 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            {sectionData['basicGlobal']['global_phone']}
                        </a>
                    </div>
                    <div className="hidden md:flex items-center space-x-3">
                        <a href={sectionData['basicGlobal']['global_facebook']} target="_blank" className="hover:text-blue-100">
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd"
                                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                            </svg>
                        </a>
                        <a href={sectionData['basicGlobal']['global_twitter']} target="_blank" className="hover:text-blue-100">
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                            </svg>
                        </a>
                        <a href={sectionData['basicGlobal']['global_instagram']} target="_blank"  className="hover:text-blue-100">
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd"
                                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                            </svg>
                        </a>
                        {/* LinkedIn 图标 */}
                        <a href={sectionData['basicGlobal']['global_linkedin']} target="_blank" className="hover:text-blue-100">
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </a>
                        {/* YouTube 图标 */}
                        <a href={sectionData['basicGlobal']['global_youtube']} target="_blank" className="hover:text-blue-100">
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                        </a>
                        {/* WhatsApp 图标 */}
                        <a href={`https://wa.me/${sectionData['basicGlobal']['global_whatsapp']}`} target="_blank" className="hover:text-blue-100">
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                        </a>
                        {/* WeChat 图标 */}
                        <a href="#" className="hover:text-blue-100" title={sectionData['basicGlobal']['global_wechat']}>
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.691 2C4.768 2 1.25 4.99 1.25 8.691c0 2.092 1.216 3.83 2.858 5.159L3.1 16.451c-.101.212.149.389.334.263l2.396-1.507c.912.247 1.87.389 2.862.389 4.075 0 7.38-2.79 7.38-6.484 0-.15-.015-.299-.025-.447C15.642 4.748 12.313 2 8.691 2zM6.829 6.33c.392 0 .654.262.654.654 0 .389-.262.65-.654.65-.389 0-.65-.261-.65-.65-.001-.392.261-.654.65-.654zm3.895 0c.39 0 .654.262.654.654 0 .389-.264.65-.654.65-.392 0-.654-.261-.654-.65 0-.392.262-.654.654-.654zM18 9.13c-3.141 0-5.678 2.145-5.678 4.883 0 .759.188 1.473.499 2.12-1.122.241-2.099.399-2.243.407-.217.023-.247.329-.058.392l.537 1.062c.099.182.294.139.341.131.1-.034 1.107-.401 1.917-.72.615.338 1.308.527 2.085.527 3.18 0 5.679-2.147 5.679-4.883 0-2.736-2.499-4.919-5.679-4.919zm-2.663 2.058c.352 0 .614.229.614.578 0 .348-.262.577-.614.577-.35 0-.578-.229-.578-.577 0-.349.228-.578.654-.654zM18 9.13c-3.141 0-5.678 2.145-5.678 4.883 0 .759.188 1.473.499 2.12-1.122.241-2.099.399-2.243.407-.217.023-.247.329-.058.392l.537 1.062c.099.182.294.139.341.131.1-.034 1.107-.401 1.917-.72.615.338 1.308.527 2.085.527 3.18 0 5.679-2.147 5.679-4.883 0-2.736-2.499-4.919-5.679-4.919zm-2.663 2.058c.352 0 .614.229.614.578 0 .348-.262.577-.614.577-.35 0-.578-.229-.578-.577 0-.349.228-.578.654-.654z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* 主导航栏 */}
            <header className="bg-white shadow-sm  px-4 lg:px-4 md:px-4">
                <nav
                    aria-label="Global"
                    className="h-16 mx-auto max-w-[1200px] flex items-stretch justify-between"
                >
                    <div className="flex items-center lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/img/${sectionData.siteLogo}`}
                                className="h-12 w-auto"
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6"/>
                        </button>
                    </div>
                    <div className="hidden lg:flex items-stretch lg:gap-x-0">
                        {sectionData && sectionData.navigationItems.map((item) => (
                            item.type === 'link' ? (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={`px-6 flex items-center justify-center ${current===item.href? 'bg-mainColor3 text-white':'text-gray-900'} hover:bg-mainColor3 hover:text-white transition-colors duration-200 text-sm/6 font-semibold`}
                                >
                                    {item.name}
                                </a>
                            ) : (
                                <div
                                    key={item.name}
                                    className="relative group"
                                    onMouseEnter={() => setActiveDropdown(item.name)}
                                    onMouseLeave={() => {
                                        setActiveDropdown(null)
                                        setActiveSubMenu(null)
                                    }}
                                >
                                    <a
                                        href={item.href}
                                        className={`px-6 ${current.indexOf(item.href)>=0 ? 'bg-mainColor3 text-white':'text-gray-900'} hover:bg-mainColor3 hover:text-white transition-colors duration-200 cursor-pointer h-full flex items-center gap-x-1 text-sm/6 font-semibold`}
                                    >
                                        {item.name}
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className={`size-5 flex-none  transition-transform duration-200 `}
                                        />
                                    </a>

                                    {/* 下拉菜单 */}
                                    <div
                                        className={`absolute left-0 top-full mt-1 z-10 w-[220px] bg-white shadow-lg ring-1 ring-gray-900/5 rounded-lg transition-all duration-200 ${
                                            activeDropdown === item.name
                                                ? 'opacity-100 visible translate-y-0'
                                                : 'opacity-0 invisible translate-y-2'
                                        }`}
                                    >
                                        <div className="p-2">
                                            <div className="grid grid-cols-1 gap-2">
                                                {item.subItems.map((subItem) => (
                                                    <div
                                                        key={subItem.name}
                                                        className="group relative"
                                                        onMouseEnter={() => setActiveSubMenu(subItem.name)}
                                                        onMouseLeave={() => setActiveSubMenu(null)}
                                                    >
                                                        <a
                                                            href={subItem.href}
                                                            className="flex items-center gap-x-4 rounded-md p-3 ${current===item.href? 'bg-mainColor3 text-white':'text-gray-900'}  hover:bg-mainColor3 hover:text-white transition-colors duration-200 group"
                                                        >
                                                            <div>
                                                                <div className="text-sm font-semibold">
                                                                    {subItem.name}
                                                                </div>
                                                            </div>
                                                        </a>

                                                        {/* 二级下拉菜单 */}
                                                        {subItem.subItems?.length>0 && (
                                                            <div
                                                                className={`absolute space-y-2 left-full top-0 ml-2 w-64 bg-white shadow-lg ring-1 ring-gray-900/5 rounded-lg p-2 transition-all duration-200 ${
                                                                    activeSubMenu === subItem.name
                                                                        ? 'opacity-100 visible translate-x-0'
                                                                        : 'opacity-0 invisible translate-x-2'
                                                                }`}
                                                            >
                                                                {subItem.subItems.map((subSubItem) => (
                                                                    <a
                                                                        key={subSubItem.name}
                                                                        href={subSubItem.href}
                                                                        className="block rounded-md p-3 text-sm font-semibold ${current===item.href? 'bg-mainColor3 text-white':'text-gray-900'}  hover:bg-mainColor3 hover:text-white transition-colors duration-200"
                                                                    >
                                                                        <div>
                                                                            {subSubItem.name}
                                                                        </div>
                                                                    </a>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                </nav>
            </header>

            {/* 移动菜单 */}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-[60]"/>
                <DialogPanel
                    className="fixed inset-y-0 right-0 z-[60] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6"/>
                        </button>
                    </div>
                    <div className="mt-6 flow-root -mx-3">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">

                                {sectionData && sectionData.navigationItems.map((item) => (
                                    <MobileMenuItem key={item.name} item={item} level={0} />
                                ))}

                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </div>
    )
}

function MobileMenuItem({ item, level = 0 }) {
    // 根据层级动态调整缩进和字体大小
    const paddingLeft = `${1 + level * 1.5}rem`; // 动态缩进
    const fontSize = `${Math.max(1 - level * 0.1, 0.8)}rem`; // 动态字体，最低限制为 0.8rem
    const fontWeight = level === 0 ? 'font-semibold' : 'font-medium'; // 当level > 0时字体不加粗
    const baseClasses = `block rounded-lg py-2 text-gray-900 hover:bg-gray-50 ${fontWeight}`;

    if (item.type === 'link') {
        return (
            <a
                href={item.href}
                className={`${baseClasses}`}
                style={{
                    paddingLeft,
                    fontSize, // 动态字体大小
                }}
            >
                {item.name}
            </a>
        );
    }

    if (item.type === 'dropdown') {
        return (
            <Disclosure as="div" className="">
                {({ open }) => (
                    <>
                        <Disclosure.Button
                            className={`group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 ${baseClasses}`}
                            style={{
                                paddingLeft,
                                fontSize, // 动态字体大小
                            }}
                        >
                            <span>{item.name}</span>
                            <ChevronDownIcon
                                aria-hidden="true"
                                className={`size-5 flex-none transition-transform ${open ? 'rotate-180' : ''}`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                            {item.subItems.map((subItem) => (
                                <MobileMenuItem
                                    key={subItem.name}
                                    item={subItem}
                                    level={level + 1} // 递归调用，层级加1
                                />
                            ))}
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        );
    }

    return null;
}