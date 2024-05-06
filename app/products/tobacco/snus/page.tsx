"use client";

import React from "react";
import ProductResponse from "@/app/ui/products/productResponse";

const baseString: string[] = ["Snus"];

export default function SnusPage() {

    return <div>
        <ProductResponse
            baseString={baseString}
        />
    </div>
}