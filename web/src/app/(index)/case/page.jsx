
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Carousel from "@/components/index/sections/carousel";
import WhyChooseUs from "@/components/index/sections/whyChooseUs";
import CaseList from "@/components/index/sections/caseList";





export default function Page() {


    return (
        <div className="bg-mainColorLight">

            <div  className="w-full h-[200px]">
                <Carousel title="Case"/>
            </div>

            <CaseList />

        </div>
    )
}
