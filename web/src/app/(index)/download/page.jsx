
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Carousel from "@/components/index/sections/carousel";
import WhyChooseUs from "@/components/index/sections/whyChooseUs";
import DownloadList from "@/components/index/sections/downloadList";




export default function Page() {


    return (
        <div>

            <div  className="w-full h-[200px]">
                <Carousel title="Download"/>
            </div>

            <DownloadList />

        </div>
    )
}
