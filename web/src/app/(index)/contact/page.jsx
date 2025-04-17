import GetInTouch from "@/components/index/sections/getInTouch";
import RecommendedForYou from "@/components/index/sections/recommendedForYou";
import FacilityArea from "@/components/index/sections/facilityArea";
import Banner from "@/components/index/sections/banner";
import api from "@/utils/axiosApi";



export default async function Page() {

    const sectionData = await getSectionData()
    console.log(sectionData)

    return (
        <div className="flex flex-col">
            <div className="w-full h-[200px]">
                <Banner title="Contact" bannerData={sectionData.bannerData}/>
            </div>

            <GetInTouch contactData={sectionData.contactData}/>

            <RecommendedForYou/>

            <FacilityArea/>

        </div>
    );
}

async function getSectionData() {
    try {
        const {code, msg, data} = await api.get('/myapp/index/contact/section');
        if (code === 0) {
            return data;
        } else {
            console.error(`获取数据错误: ${msg}`);
            return null;
        }
    } catch (err) {
        console.error("获取数据失败:", err);
        return null;
    }
}