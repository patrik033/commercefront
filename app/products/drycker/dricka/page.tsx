"use client";

import React from "react";

import ProductResponse from "@/app/ui/products/productResponse";


const baseString: string[] = ["Dricka"];

export default function DrickaPage() {

    return <div>
        <ProductResponse
            baseString={baseString}
        />
    </div>
}