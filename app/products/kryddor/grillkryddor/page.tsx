"use client";

import React from "react";
import ProductResponse from "@/app/ui/products/productResponse";


const baseString: string[] = ["Grillkryddor"];

export default function GrillKryddorPage() {


    return <div>
        <ProductResponse
            baseString={baseString}
        />
    </div>
}