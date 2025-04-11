// 'use client'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export default function Pagination({currentPage = 1, pageSize = 9, total = 100}) {

    // 计算总页数
    const totalPages = Math.ceil(total / pageSize);
    
    // 如果总页数小于等于1，不显示分页
    if (totalPages <= 1) {
        return null;
    }
    
    // 计算要显示的页码
    const getPageNumbers = () => {
        const pageNumbers = [];
        
        // 如果总页数少于等于5页，全部显示
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
            return pageNumbers;
        }
        
        // 总页数大于5，显示部分页码
        pageNumbers.push(1); // 第一页始终显示
        
        // 当前页接近开头
        if (currentPage <= 3) {
            pageNumbers.push(2, 3);
            if (totalPages > 4) pageNumbers.push('...');
            pageNumbers.push(totalPages);
            return pageNumbers;
        }
        
        // 当前页接近结尾
        if (currentPage >= totalPages - 2) {
            pageNumbers.push('...');
            for (let i = totalPages - 2; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
            return pageNumbers;
        }
        
        // 当前页在中间
        pageNumbers.push('...');
        pageNumbers.push(currentPage - 1, currentPage, currentPage + 1);
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
        return pageNumbers;
    };
    
    const pageNumbers = getPageNumbers();

    const commonButtonClasses = "flex items-center justify-center h-10 w-10 border shadow-sm hover:shadow-md transition-all duration-200";
    const activeButtonClasses = `${commonButtonClasses} border-mainColorNormal bg-mainColorNormal text-white font-medium shadow-md`;
    const inactiveButtonClasses = `${commonButtonClasses} border-gray-300 hover:bg-gray-50 text-gray-700`;
    const ellipsisClasses = `${commonButtonClasses} border-gray-300 text-gray-500`;

    return (
        <div className="flex items-center justify-center py-4">
            <div className="flex gap-2">
                {/* 上一页按钮 - 仅当不是第一页时显示 */}
                {currentPage > 1 && (
                    <Link
                        href={`/news/page/${currentPage - 1}`}
                        className={inactiveButtonClasses}
                    >
                        <span className="sr-only">Previous</span>
                        <ChevronLeftIcon className="h-5 w-5" />
                    </Link>
                )}

                {/* 动态生成页码 */}
                {pageNumbers.map((page, index) => (
                    page === '...' ? (
                        <span key={`ellipsis-${index}`} className={ellipsisClasses}>
                            ...
                        </span>
                    ) : (
                        <Link
                            key={page}
                            href={`/news/page/${page}`}
                            className={currentPage === page ? activeButtonClasses : inactiveButtonClasses}
                        >
                            {page}
                        </Link>
                    )
                ))}
                
                {/* 下一页按钮 - 仅当不是最后一页时显示 */}
                {currentPage < totalPages && (
                    <Link
                        href={`/news/page/${currentPage + 1}`}
                        className={inactiveButtonClasses}
                    >
                        <span className="sr-only">Next</span>
                        <ChevronRightIcon className="h-5 w-5" />
                    </Link>
                )}
            </div>
        </div>
    )
}
