"use client";

import React from "react";
const ProductResponse = dynamic(() => import("@/app/ui/products/productResponse"));
import dynamic from "next/dynamic";


const baseString: string[] = ["VanligtGodis"];

export default function VanligtGodisPage() {

    return <div>
        <ProductResponse
            baseString={baseString}
        />
    </div>
}