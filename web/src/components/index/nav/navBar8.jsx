'use client'

import {useState} from 'react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import {ChevronDownIcon} from '@heroicons/react/20/solid'

// 导航菜单配置
const navigationItems = [
    {
        name: 'Home',
        href: '#',
        type: 'link'
    },
    {
        name: 'Products',
        href: '#',
        type: 'dropdown',
        subItems: [
            {
                name: 'Women',
                href: '#',
                subItems: [
                    {name: 'Blue Style', href: '#'},
                    {name: 'Red Style', href: '#'},
                    {name: 'Yellow Style', href: '#'}
                ]
            },
            {
                name: 'Man',
                href: '#',
            },
            {
                name: 'Sports',
                href: '#',
            },
        ]
    },
    {
        name: 'About',
        href: '#',
        type: 'link'
    },
    {
        name: 'Contact',
        href: '#',
        type: 'link'
    },
    {
        name: 'News',
        href: '#',
        type: 'link'
    },
    {
        name: 'Download',
        href: '#',
        type: 'link'
    },
    {
        name: 'Faq',
        href: '#',
        type: 'link'
    },
]

export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const [activeSubMenu, setActiveSubMenu] = useState(null)
    const [expandedMobileItems, setExpandedMobileItems] = useState({})

    // 切换移动菜单项的折叠/展开状态
    const toggleMobileItem = (itemName) => {
        setExpandedMobileItems(prev => ({
            ...prev,
            [itemName]: !prev[itemName]
        }))
    }

    return (
        <div>
            {/* 顶部信息栏 */}
            <div className="bg-blue-600 text-white py-2 px-4">
                <div className="mx-auto max-w-7xl flex justify-between items-center">
                    <div className="flex items-center space-x-4 text-sm">
                        <a href="mailto:info@example.com" className="hover:text-blue-100 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            info@example.com
                        </a>
                        <a href="tel:+1234567890" className="hover:text-blue-100 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            +123 456 7890
                        </a>
                    </div>
                    <div className="hidden md:flex items-center space-x-3">
                        <a href="#" className="hover:text-blue-100">
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd"
                                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                            </svg>
                        </a>
                        <a href="#" className="hover:text-blue-100">
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                            </svg>
                        </a>
                        <a href="#" className="hover:text-blue-100">
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd"
                                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* 主导航栏 */}
            <header className="bg-white shadow-sm">
                <nav
                    aria-label="Global"
                    className="h-16 mx-auto flex items-stretch justify-between px-4 lg:px-6 md:px-4"
                >
                    <div className="flex items-center lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                className="h-8 w-auto"
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
                    <div className="hidden lg:flex items-stretch lg:gap-x-6">
                        {navigationItems.map((item) => (
                            item.type === 'link' ? (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="px-4 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 text-sm/6 font-semibold text-gray-900"
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
                                    <button className="px-4 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 cursor-pointer h-full flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                                        {item.name}
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className={`size-5 flex-none text-gray-400 transition-transform duration-200 ${
                                                activeDropdown === item.name ? 'rotate-180' : ''
                                            }`}
                                        />
                                    </button>

                                    {/* 下拉菜单 */}
                                    <div
                                        className={`absolute left-0 top-full mt-1 z-10 w-[220px] bg-white shadow-lg ring-1 ring-gray-900/5 rounded-lg transition-all duration-200 ${
                                            activeDropdown === item.name
                                                ? 'opacity-100 visible translate-y-0'
                                                : 'opacity-0 invisible translate-y-2'
                                        }`}
                                    >
                                        <div className="p-2">
                                            <div className="grid grid-cols-1 gap-4">
                                                {item.subItems.map((subItem) => (
                                                    <div
                                                        key={subItem.name}
                                                        className="group relative"
                                                        onMouseEnter={() => setActiveSubMenu(subItem.name)}
                                                        onMouseLeave={() => setActiveSubMenu(null)}
                                                    >
                                                        <a
                                                            href={subItem.href}
                                                            className="flex items-center gap-x-4 rounded-lg p-3 text-gray-900 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 group"
                                                        >
                                                            <div>
                                                                <div className="text-sm font-semibold">
                                                                    {subItem.name}
                                                                </div>
                                                            </div>
                                                        </a>

                                                        {/* 二级下拉菜单 */}
                                                        {subItem.subItems && (
                                                            <div
                                                                className={`absolute left-full top-0 ml-2 w-64 bg-white shadow-lg ring-1 ring-gray-900/5 rounded-lg p-2 transition-all duration-200 ${
                                                                    activeSubMenu === subItem.name
                                                                        ? 'opacity-100 visible translate-x-0'
                                                                        : 'opacity-0 invisible translate-x-2'
                                                                }`}
                                                            >
                                                                {subItem.subItems.map((subSubItem) => (
                                                                    <a
                                                                        key={subSubItem.name}
                                                                        href={subSubItem.href}
                                                                        className="block rounded-lg p-3 text-sm font-semibold text-gray-900 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
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

            {/* 移动菜单 - 使用原生实现替代Dialog */}
            {mobileMenuOpen && (
                <>
                    {/* 背景遮罩 */}
                    <div
                        className="fixed inset-0 z-[59] bg-black/25"
                        onClick={() => setMobileMenuOpen(false)}
                        aria-hidden="true"
                    />

                    {/* 侧边菜单面板 - 替代DialogPanel */}
                    <div
                        className="fixed inset-y-0 right-0 z-[60] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
                        role="dialog"
                        aria-modal="true"
                    >
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
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigationItems.map((item) => (
                                        item.type === 'link' ? (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </a>
                                        ) : (
                                            <div key={item.name} className="-mx-3">
                                                {/* 替代DisclosureButton */}
                                                <button
                                                    onClick={() => toggleMobileItem(item.name)}
                                                    className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                                    aria-expanded={expandedMobileItems[item.name] ? 'true' : 'false'}
                                                >
                                                    {item.name}
                                                    <ChevronDownIcon
                                                        aria-hidden="true"
                                                        className={`size-5 flex-none transition-transform duration-200 ${
                                                            expandedMobileItems[item.name] ? 'rotate-180' : ''
                                                        }`}
                                                    />
                                                </button>

                                                {/* 替代DisclosurePanel */}
                                                {expandedMobileItems[item.name] && (
                                                    <div className="mt-2 space-y-2">
                                                        {item.subItems.map((subItem) => (
                                                            <a
                                                                key={subItem.name}
                                                                href={subItem.href}
                                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                                                            >
                                                                {subItem.name}
                                                            </a>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    ))}
                                </div>
                                <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}