"use client";

import React from "react";
import ProductResponse from "@/app/ui/products/productResponse";


const baseString: string[] = ["Örtmixer",];

export default function OrtmixerKryddorPage() {

    return <div>
        <ProductResponse
            baseString={baseString}
        />
    </div>
}