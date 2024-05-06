"use client";

import React from "react";
import ProductResponse from "@/app/ui/products/productResponse";

const baseString: string[] = ["Dricka", "Energi Dricka"];

export default function DryckerPage() {


    return <div>
        <ProductResponse
            baseString={baseString}
        />
    </div>
}