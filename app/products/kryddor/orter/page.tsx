"use client";

import React from "react";

import ProductResponse from "@/app/ui/products/productResponse";

const baseString: string[] = ["Örter"];

export default function OrterKryddorPage() {

    return <div>
        <ProductResponse
            baseString={baseString}
        />
    </div>
}