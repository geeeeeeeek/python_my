import Carousel from "@/components/index/sections/carousel";
import Image from "next/image";
import CompanyNews from "@/components/index/sections/companyNews";
import TalkToUs from "@/components/index/sections/talkToUs";
import OurTeam from "@/components/index/sections/ourTeam";
import WhoWeAre from "@/components/index/sections/whoWeAre";
import OurMission from "@/components/index/sections/ourMission";
import WorkWithMe from "@/components/index/sections/workWithMe";
import TimeLine from "@/components/index/sections/timeLine";
import CustomersSay from "@/components/index/sections/customersSay";
import Testimonials from "@/components/index/sections/testimonials";
import Stats from "@/components/index/sections/stats";
import WhyChooseUs from "@/components/index/sections/whyChooseUs";
import Advantages from "@/components/index/sections/advantages";

export default function Page() {


    return (
        <div className="flex flex-col">
            <div className="w-full h-[200px]">
                <Carousel title="About Us"/>
            </div>

            <div className="">

                {/* Who We Are 区域 */}
                <WhoWeAre />

                {/*Our mission section */}
                <div className="">
                    <OurMission />
                </div>
                
                {/* Our Advantages 区域 */}
                <Advantages />

                {/*TimeLine*/}
                {/*<div className="w-full">*/}
                {/*    <TimeLine />*/}
                {/*</div>*/}

                {/* Our Team 区域 */}
                {/*<div className="pb-16 lg:pb-24">*/}
                {/*    <OurTeam />*/}
                {/*</div>*/}


                {/*<Stats />*/}


                <WorkWithMe />


            </div>
        </div>
    );
}