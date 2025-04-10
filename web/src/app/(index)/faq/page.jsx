
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Carousel from "@/components/index/carousel";
import WhyChooseUs from "@/components/index/sections/whyChooseUs";
import FaqList from "@/components/index/sections/faqList";
import FacilityArea from "@/components/index/sections/facilityArea";




export default function Page() {


    return (
        <div className="bg-white">

            <div  className="w-full h-[200px]">
                <Carousel title="Faq"/>
            </div>

            <FaqList />

            <FacilityArea />

            <WhyChooseUs />
        </div>
    )
}
