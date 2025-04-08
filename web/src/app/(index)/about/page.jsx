import Carousel from "@/components/index/carousel";
import Image from "next/image";
import FromTheBlog from "@/components/index/sections/fromTheBlog";
import TalkToUs from "@/components/index/sections/talkToUs";
import OurTeam from "@/components/index/sections/ourTeam";
import WhoWeAre from "@/components/index/sections/whoWeAre";
import OurMission from "@/components/index/sections/ourMission";
import WorkWithMe from "@/components/index/sections/workWithMe";
import TimeLine from "@/components/index/sections/timeLine";
import CustomersSay from "@/components/index/sections/customersSay";
import Testimonials from "@/components/index/sections/testimonials";

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


                {/*横幅图*/}
                {/*<div className="container mx-auto h-[300px] md:h-[600px] rounded-2xl">*/}
                {/*    <img*/}
                {/*        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"*/}
                {/*        className="object-cover w-full h-full rounded-2xl"*/}
                {/*    />*/}
                {/*</div>*/}

                {/* Blog section */}
                <div className="py-16 lg:py-24">
                    <FromTheBlog />
                </div>

                {/*CustomersSay section*/}
                 <CustomersSay />

                {/*Testimonials*/}
                <Testimonials />


                {/*talk to us section*/}
                <TalkToUs />

                <WorkWithMe />

            </div>
        </div>
    );
}