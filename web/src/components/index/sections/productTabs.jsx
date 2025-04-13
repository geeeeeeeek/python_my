'use client';

import {
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
} from '@headlessui/react'

export default function ProductTabs({ product }) {
    return (
        <div className="mt-16">
            <TabGroup>
                <TabList className="flex border-b border-gray-200">
                    <Tab
                        className={({selected}) =>
                            `py-4 px-1 text-sm font-medium border-b-2 mr-8 focus:outline-none whitespace-nowrap ${
                                selected
                                    ? 'border-mainColorNormal text-mainColorNormal' 
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }`
                        }
                    >
                        Description
                    </Tab>
                    <Tab
                        className={({selected}) =>
                            `py-4 px-1 text-sm font-medium border-b-2 mr-8 focus:outline-none whitespace-nowrap ${
                                selected
                                    ? 'border-mainColorNormal text-mainColorNormal' 
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }`
                        }
                    >
                        Additional information
                    </Tab>
                </TabList>

                <TabPanels className="mt-10">
                    {/* 描述内容面板 */}
                    <TabPanel>
                        <h3 className="text-2xl font-bold mb-6">Product description</h3>
                        <p className="text-gray-700">
                            {product.longDescription}
                        </p>
                    </TabPanel>

                    {/* 额外信息面板 */}
                    <TabPanel>
                        <h3 className="text-2xl font-bold mb-6">Additional information</h3>
                        <div className="border-t border-gray-200">
                            <dl>
                                <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium text-gray-900">Weight</dt>
                                    <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">0.5 kg</dd>
                                </div>
                                <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 bg-gray-50">
                                    <dt className="text-sm font-medium text-gray-900">Dimensions</dt>
                                    <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">30 × 40 × 2 cm</dd>
                                </div>
                                <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium text-gray-900">Color</dt>
                                    <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">{product.name.split(' ')[0]}</dd>
                                </div>
                                <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 bg-gray-50">
                                    <dt className="text-sm font-medium text-gray-900">Material</dt>
                                    <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">Cotton, Polyester</dd>
                                </div>
                            </dl>
                        </div>
                    </TabPanel>

                </TabPanels>
            </TabGroup>
        </div>
    );
}