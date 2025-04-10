import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

export default function Pagination() {
    return (
        <div className="flex items-center justify-center">
            <div className="flex gap-2">
                {/* 上一页按钮 */}
                <a
                    href="#"
                    className="flex items-center justify-center h-10 w-10 border border-gray-300 hover:bg-gray-100 transition-colors text-gray-700"
                >
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon className="h-5 w-5" />
                </a>

                {/* 页码 1 */}
                <a
                    href="#"
                    className="flex items-center justify-center h-10 w-10 border border-gray-300 hover:bg-gray-100 transition-colors text-gray-700"
                >
                    1
                </a>
                
                {/* 页码 2 - 当前页 */}
                <a
                    href="#"
                    className="flex items-center justify-center h-10 w-10 border border-mainColor3 bg-mainColor3 text-white font-medium"
                >
                    2
                </a>
                
                {/* 页码 3 */}
                <a
                    href="#"
                    className="flex items-center justify-center h-10 w-10 border border-gray-300 hover:bg-gray-100 transition-colors text-gray-700"
                >
                    3
                </a>
                
                {/* 下一页按钮 */}
                <a
                    href="#"
                    className="flex items-center justify-center h-10 w-10 border border-gray-300 hover:bg-gray-100 transition-colors text-gray-700"
                >
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon className="h-5 w-5" />
                </a>
            </div>
        </div>
    )
}
