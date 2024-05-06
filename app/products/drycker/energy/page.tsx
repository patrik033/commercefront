"use client";

import React from "react";
import ProductResponse from "@/app/ui/products/productResponse";


const baseString: string[] = ["Energi Dricka"];

export default function EnergyPage() {
    return <div>
        <ProductResponse
            baseString={baseString}
        />
    </div>
}