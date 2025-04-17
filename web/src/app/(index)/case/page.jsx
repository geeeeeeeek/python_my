import CaseList from "@/components/index/sections/caseList";
import Banner from "@/components/index/sections/banner";


export default function Page() {


    return (
        <div className="bg-mainColorLight">

            <div  className="w-full h-[200px]">
                <Banner title="Case" imageUrl=""/>
            </div>

            <CaseList  pageNumber={1} total={100} />

        </div>
    )
}
