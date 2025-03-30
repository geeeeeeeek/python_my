'use client'

import {useState, useEffect} from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import {ChevronDownIcon, PhoneIcon, PlayCircleIcon} from '@heroicons/react/20/solid'
import {AnimatePresence, motion} from 'framer-motion'


const subItemList = [
    {
        name: 'Analytics',
        href: '#',
        subItems: [
            { name: 'Traffic Analysis', href: '#' },
            { name: 'User Behavior',  href: '#' },
            { name: 'Conversion Tracking', href: '#' }
        ]
    },
    {
        name: 'Engagement',
        href: '#',
    },
    {
        name: 'Security',
        href: '#',
    },
]

// 添加导航菜单配置
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
        subItems: subItemList
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
]



export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [popoverOpen, setPopoverOpen] = useState(false)
    const [activeSubMenu, setActiveSubMenu] = useState(null)
    const [isVisible, setIsVisible] = useState(true)
    const [prevScrollPos, setPrevScrollPos] = useState(0)

    // 处理滚动事件
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            
            // 在顶部时始终显示
            if (currentScrollPos <= 10) {
                setIsVisible(true);
                setPrevScrollPos(currentScrollPos);
                return;
            }
            
            // 判断滚动方向：向上滚动时显示，向下滚动时隐藏
            const isScrollingUp = prevScrollPos > currentScrollPos;
            
            setIsVisible(isScrollingUp);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    console.log('popoverOpen---', popoverOpen)

    return (
        <header 
            className={`bg-white fixed top-0 left-0 right-0 w-full z-50 shadow-sm transition-transform duration-300 ease-in-out ${
                isVisible ? 'translate-y-0' : '-translate-y-full'
            }`}
        >

            <nav aria-label="Global"
                 className="h-16 mx-auto flex items-stretch justify-between px-4 lg:px-6 md:px-4">
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
                                className="px-4 flex items-center justify-center hover:bg-yellow-500 text-sm/6 font-semibold text-gray-900"
                            >
                                {item.name}
                            </a>
                        ) : (
                            <Popover
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => setPopoverOpen(true)}
                                onMouseLeave={() => {
                                    setPopoverOpen(false)
                                    setActiveSubMenu(null)
                                }}
                            >
                                <a className="px-4 hover:bg-yellow-500 cursor-pointer h-full flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                                    {item.name}
                                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400"/>
                                </a>

                                <AnimatePresence>
                                    {popoverOpen && (
                                        <PopoverPanel
                                            static
                                            as={motion.div}
                                            initial={{opacity: 0, y: 10}}
                                            animate={{opacity: 1, y: 0}}
                                            exit={{opacity: 0, y: 10}}
                                            transition={{duration: 0.2}}
                                            className="absolute left-0 top-full mt-1 z-10 w-[220px] bg-white shadow-lg ring-1 ring-gray-900/5"
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
                                                                className="flex items-center gap-x-4 rounded-lg p-3 hover:bg-gray-50"
                                                            >
                                                                <div>
                                                                    <div className="text-sm font-semibold text-gray-900">{subItem.name}</div>
                                                                </div>
                                                            </a>

                                                            <AnimatePresence>
                                                                {activeSubMenu === subItem.name && subItem.subItems && (
                                                                    <motion.div
                                                                        initial={{opacity: 0, x: 20}}
                                                                        animate={{opacity: 1, x: 0}}
                                                                        exit={{opacity: 0, x: 20}}
                                                                        transition={{duration: 0.2}}
                                                                        className="absolute left-full top-0 ml-2 w-64 bg-white shadow-lg ring-1 ring-gray-900/5 p-2"
                                                                    >
                                                                        {subItem.subItems.map((subSubItem) => (
                                                                            <a
                                                                                key={subSubItem.name}
                                                                                href={subSubItem.href}
                                                                                className="block rounded-lg p-3 hover:bg-gray-50"
                                                                            >
                                                                                <div className="text-sm font-semibold text-gray-900">{subSubItem.name}</div>
                                                                            </a>
                                                                        ))}
                                                                    </motion.div>
                                                                )}
                                                            </AnimatePresence>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </PopoverPanel>
                                    )}
                                </AnimatePresence>
                            </Popover>
                        )
                    ))}
                </div>

            </nav>
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
                                        <Disclosure as="div" key={item.name} className="-mx-3">
                                            <DisclosureButton
                                                className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                                {item.name}
                                                <ChevronDownIcon aria-hidden="true"
                                                                 className="size-5 flex-none group-data-[open]:rotate-180"/>
                                            </DisclosureButton>
                                            <DisclosurePanel className="mt-2 space-y-2">
                                                {item.subItems.map((subItem) => (
                                                    <DisclosureButton
                                                        key={subItem.name}
                                                        as="a"
                                                        href={subItem.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {subItem.name}
                                                    </DisclosureButton>
                                                ))}
                                            </DisclosurePanel>
                                        </Disclosure>
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
                </DialogPanel>
            </Dialog>
        </header>
    )
}
