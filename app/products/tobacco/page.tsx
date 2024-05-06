"use client";

import React from "react";
import ProductResponse from "@/app/ui/products/productResponse";


const baseString: string[] = ["Snus", "Cigaretter"];

export default function TobaccoPage() {
    return <div>
        <ProductResponse
            baseString={baseString}
        />
    </div>
}