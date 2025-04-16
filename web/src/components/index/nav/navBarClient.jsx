'use client'
import {useState, useEffect} from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import {ChevronDownIcon} from '@heroicons/react/20/solid'
import {usePathname} from "next/navigation";
import Link from "next/link";

// 移动端菜单项组件
function MobileMenuItem({ item, level = 0 }) {
    // 根据层级动态调整缩进和字体大小
    const paddingLeft = `${1 + level * 1.5}rem`; // 动态缩进
    const fontSize = `${Math.max(1 - level * 0.1, 0.8)}rem`; // 动态字体，最低限制为 0.8rem
    const fontWeight = level === 0 ? 'font-semibold' : 'font-medium'; // 当level > 0时字体不加粗
    const baseClasses = `block rounded-none py-2 text-gray-900 hover:bg-gray-50 ${fontWeight}`;

    if (item.type === 'link') {
        return (
            <Link
                href={item.href}
                className={`${baseClasses}`}
                style={{
                    paddingLeft,
                    fontSize, // 动态字体大小
                }}
            >
                {item.name}
            </Link>
        );
    }

    if (item.type === 'dropdown') {
        return (
            <Disclosure as="div" className="">
                {({ open }) => (
                    <>
                        <Disclosure.Button
                            className={`group flex w-full items-center justify-between rounded-none py-2 pr-3.5 ${baseClasses}`}
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

// 桌面端导航栏组件
export function DesktopNav({ navigationItems, current }) {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    return (
        <div className="hidden lg:flex items-stretch lg:gap-x-10">
            {navigationItems.map((item) => (
                item.type === 'link' ? (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`px-0 flex items-center justify-center ${current===item.href? 'text-mainColorNormal':'text-gray-900'} hover:text-mainColorNormal transition-colors duration-200 text-base/6 font-semibold`}
                    >
                        {item.name}
                    </Link>
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
                        <Link
                            href={item.href}
                            className={`px-0 ${current.indexOf(item.href)>=0 ? 'text-mainColorNormal':'text-gray-900'} hover:text-mainColorNormal transition-colors duration-200 cursor-pointer h-full flex items-center gap-x-0.5 text-base/6 font-semibold`}
                        >
                            {item.name}
                            <ChevronDownIcon
                                aria-hidden="true"
                                className={`size-5 flex-none transition-transform duration-200`}
                            />
                        </Link>

                        {/* 下拉菜单 */}
                        <div
                            className={`absolute left-0 top-full mt-1 z-10 min-w-[200px] w-max bg-white shadow-lg ring-1 ring-gray-900/5 rounded-none transition-all duration-200 ${
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
                                            <Link
                                                href={subItem.href}
                                                className="flex items-center gap-x-4 rounded-none p-3 ${current===item.href? 'text-mainColorNormal':'text-gray-900'}  hover:text-mainColorNormal transition-colors duration-200 group whitespace-nowrap"
                                            >
                                                <div>
                                                    <div className="text-base font-semibold">
                                                        {subItem.name}
                                                    </div>
                                                </div>
                                            </Link>

                                            {/* 二级下拉菜单 */}
                                            {subItem.subItems?.length>0 && (
                                                <div
                                                    className={`absolute space-y-2 left-full top-0 ml-2 min-w-[200px] w-max bg-white shadow-lg ring-1 ring-gray-900/5 rounded-none p-2 transition-all duration-200 ${
                                                        activeSubMenu === subItem.name
                                                            ? 'opacity-100 visible translate-x-0'
                                                            : 'opacity-0 invisible translate-x-2'
                                                    }`}
                                                >
                                                    {subItem.subItems.map((subSubItem) => (
                                                        <Link
                                                            key={subSubItem.name}
                                                            href={subSubItem.href}
                                                            className="block rounded-none p-3 text-base font-semibold ${current===item.href? 'text-mainColorNormal':'text-gray-900'} hover:text-mainColorNormal transition-colors duration-200 whitespace-nowrap"
                                                        >
                                                            <div>
                                                                {subSubItem.name}
                                                            </div>
                                                        </Link>
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
    );
}

// 移动端导航菜单组件
export function MobileNav({ sectionData, mobileMenuOpen, setMobileMenuOpen }) {
    return (
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-[60]"/>
            <DialogPanel
                className="fixed inset-y-0 right-0 z-[60] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            alt=""
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/img/${sectionData.siteLogo}`}
                            className="h-8 w-auto"
                        />
                    </Link>
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
                            <div className="flex items-center justify-center space-x-4">
                                {/* Facebook */}
                                <Link href={sectionData['basicGlobal']['global_facebook']} target="_blank" className="text-gray-700 hover:text-mainColorNormal transition-colors">
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                                    </svg>
                                </Link>
                                {/* Twitter */}
                                <Link href={sectionData['basicGlobal']['global_twitter']} target="_blank" className="text-gray-700 hover:text-mainColorNormal transition-colors">
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                                    </svg>
                                </Link>
                                {/* Instagram */}
                                <Link href={sectionData['basicGlobal']['global_instagram']} target="_blank" className="text-gray-700 hover:text-mainColorNormal transition-colors">
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd"
                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                                    </svg>
                                </Link>
                                {/* LinkedIn */}
                                <Link href={sectionData['basicGlobal']['global_linkedin']} target="_blank" className="text-gray-700 hover:text-mainColorNormal transition-colors">
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                </Link>
                                {/* YouTube */}
                                <Link href={sectionData['basicGlobal']['global_youtube']} target="_blank" className="text-gray-700 hover:text-mainColorNormal transition-colors">
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    );
}

// 导航栏客户端包装器组件
export default function NavBarClient({ sectionData }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const [current, setCurrent] = useState(pathname);

    useEffect(() => {
        setCurrent(pathname);
    }, [pathname]);

    return (
        <>
            {/* 桌面端导航 */}
            <DesktopNav 
                navigationItems={sectionData.navigationItems} 
                current={current} 
            />
            
            {/* 移动端菜单按钮 */}
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

            {/* 移动端导航菜单 */}
            <MobileNav 
                sectionData={sectionData} 
                mobileMenuOpen={mobileMenuOpen} 
                setMobileMenuOpen={setMobileMenuOpen} 
            />
        </>
    );
}
