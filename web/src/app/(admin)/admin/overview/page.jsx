'use client';
import React, {useEffect, useState} from 'react';
import OverViewInfo from "@/components/admin/overview/overViewInfo";
import VisitInfo from "@/components/admin/overview/visitInfo";
import SysInfo from "@/components/admin/overview/sysInfo";

export default function Page() {


    return (
        <>
            <div className="bg-gray-100 px-4 py-4">
                <div className="flex flex-col gap-4">
                    <OverViewInfo />
                    <VisitInfo />
                    <SysInfo />
                </div>
            </div>
        </>
    );
};