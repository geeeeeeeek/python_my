
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Carousel from "@/components/index/sections/carousel";
import WhyChooseUs from "@/components/index/sections/whyChooseUs";
import NewsList from "@/components/index/sections/newsList";
import WhoWeAre from "@/components/index/sections/whoWeAre";
import OurMission from "@/components/index/sections/ourMission";
import TimeLine from "@/components/index/sections/timeLine";
import OurTeam from "@/components/index/sections/ourTeam";
import CompanyNews from "@/components/index/sections/companyNews";
import CustomersSay from "@/components/index/sections/customersSay";
import Testimonials from "@/components/index/sections/testimonials";
import Stats from "@/components/index/sections/stats";
import TalkToUs from "@/components/index/sections/talkToUs";
import WorkWithMe from "@/components/index/sections/workWithMe";
import RecommendedForYou from "@/components/index/sections/recommendedForYou";
import FacilityArea from "@/components/index/sections/facilityArea";
import Banner from "@/components/index/sections/banner";




export default function Page() {



    return (
        <div className="">

            <div  className="w-full h-[200px]">
                <Banner title="test" imageUrl=""/>
            </div>


            {/* Who We Are 区域 */}
            <WhoWeAre />

            {/*Our mission section */}
            <div className="py-16 lg:py-24">
                <OurMission />
            </div>

            {/*TimeLine*/}
            <div className="pb-16 lg:pb-24">
                <TimeLine />
            </div>

            {/* Our Team 区域 */}
            <div className="pb-16 lg:pb-24">
                <OurTeam />
            </div>


            {/* Blog section */}
            <div className="py-16 lg:py-24">
                <CompanyNews />
            </div>

            {/*CustomersSay section*/}
            <CustomersSay />

            {/*Testimonials*/}
            <Testimonials />

            <TalkToUs />

            <WorkWithMe />

            <RecommendedForYou />

            <FacilityArea />

            <Stats />

            <WhyChooseUs />

        </div>
    )
}
