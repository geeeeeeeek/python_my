import WhoWeAre from "@/components/index/sections/whoWeAre";
import OurMission from "@/components/index/sections/ourMission";
import WorkWithMe from "@/components/index/sections/workWithMe";
import Advantages from "@/components/index/sections/advantages";
import Banner from "@/components/index/sections/banner";

export default function Page() {


    return (
        <div className="flex flex-col">
            <div className="w-full h-[200px]">
                <Banner title="About Us" imageUrl=""/>
            </div>

            <div className="">

                {/* Who We Are 区域 */}
                <WhoWeAre/>

                {/*Our mission section */}
                <OurMission/>

                {/* Our Advantages 区域 */}
                <Advantages/>


                <WorkWithMe/>


            </div>
        </div>
    );
}