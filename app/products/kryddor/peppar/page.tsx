"use client";

import React from "react";
import ProductResponse from "@/app/ui/products/productResponse";


const baseString: string[] = ["Peppar"];

export default function PepparKryddorPage() {

    return <div>
        <ProductResponse
            baseString={baseString}
        />
    </div>
}