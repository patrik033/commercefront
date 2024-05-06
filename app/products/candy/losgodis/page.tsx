"use client";

import React from "react";
import ProductResponse from "@/app/ui/products/productResponse";


const baseString: string[] = ["LösGodis"];

export default function LosgodisPage() {

    return <div>
        <ProductResponse
            baseString={baseString}
        />
    </div>
}
