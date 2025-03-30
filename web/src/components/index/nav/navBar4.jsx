'use client'

import {useState} from 'react'
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


const products = [
    {name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon},
    {name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon},
    {name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon},
    {name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon},
    {name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon},
]
const callsToAction = [
    {name: 'Watch demo', href: '#', icon: PlayCircleIcon},
    {name: 'Contact sales', href: '#', icon: PhoneIcon},
]
const company = [
    {name: 'About us', href: '#'},
    {name: 'Careers', href: '#'},
    {name: 'Support', href: '#'},
    {name: 'Press', href: '#'},
    {name: 'Blog', href: '#'},
]

export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [popoverOpen, setPopoverOpen] = useState(false) // 控制 Popover 手动打开状态

    console.log('popoverOpen---', popoverOpen)

    return (
        <header className="bg-white">
            <nav aria-label="Global"
                 className=" h-16 mx-auto flex max-w-7xl items-stretch justify-between lg:px-8">
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
                    <a href="#"
                       className="px-4 flex items-center justify-center hover:bg-yellow-500 text-sm font-semibold text-gray-900">
                        Features
                    </a>
                    <a href="#"
                       className="px-4 flex items-center justify-center hover:bg-yellow-500 text-sm/6 font-semibold text-gray-900">
                        Marketplace
                    </a>

                    <Popover className="relative"
                             onMouseEnter={() => setPopoverOpen(true)}
                             onMouseLeave={() => setPopoverOpen(false)}
                    >
                        <a className="px-4 hover:bg-yellow-500 cursor-pointer h-full flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                            Products
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400"/>
                        </a>

                        {
                            popoverOpen && (
                                <PopoverPanel
                                    static
                                    as={motion.div}
                                    initial={{opacity: 0, scale: 0.95}}
                                    animate={{opacity: 1, scale: 1}}
                                    exit={{opacity: 0, scale: 0.95}}
                                    className="absolute left-0 top-full mt-0 z-10 w-56 bg-white p-2 shadow-md "
                                >
                                    {company.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="block rounded-lg px-3 py-2 text-sm/6 font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </PopoverPanel>
                            )
                        }


                    </Popover>

                    <a href="#"
                       className="px-4 flex items-center justify-center hover:bg-yellow-500 text-sm/6 font-semibold text-gray-900">
                        Marketplace
                    </a>
                </div>

            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10"/>
                <DialogPanel
                    className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton
                                        className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                        Product
                                        <ChevronDownIcon aria-hidden="true"
                                                         className="size-5 flex-none group-data-[open]:rotate-180"/>
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...products].map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>

                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Features
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Marketplace
                                </a>

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
