import CaseList from "@/components/index/sections/caseList";
import Banner from "@/components/index/sections/banner";


export default function Page({params}) {
    const pageNumber = parseInt(params.pageNumber, 10) || 1;

    return (
        <div className="bg-mainColorLight">

            <div  className="w-full h-[200px]">
                <Banner title="Case" imageUrl=""/>
            </div>

            <CaseList  pageNumber={pageNumber} total={100} />

        </div>
    )
}
