
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Carousel from "@/components/index/carousel";
import WhyChooseUs from "@/components/index/sections/whyChooseUs";
import NewsList from "@/components/index/sections/newsList";




export default function Page() {


    return (
        <div className="bg-mainColor0">

            <div  className="w-full h-[200px]">
                <Carousel title="News"/>
            </div>

            <NewsList />

            <WhyChooseUs />
        </div>
    )
}
