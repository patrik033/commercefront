"use client";

import React from "react";
import ProductResponse from "@/app/ui/products/productResponse";


const baseString: string[] = ["Cigaretter"];

export default function CigarettesPage() {
    return <div>
        <ProductResponse
            baseString={baseString}
        />
    </div>
}