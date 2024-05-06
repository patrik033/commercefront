'use client'

import React, { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

type TBreadCrumbProps = {
    homeElement: ReactNode,
    separator: ReactNode,
    containerClasses?: string,
    listClasses?: string,
    activeClasses?: string,
    capitalizeLinks?: boolean
}

const Breadcrumb = ({ homeElement, separator, containerClasses, listClasses, activeClasses, capitalizeLinks }: TBreadCrumbProps) => {


    const paths = usePathname()
    const pathNames = paths.split('/').filter(path => path)

    const guidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

    return (
        <div>
            <ul className={containerClasses}>
                <li className={listClasses}>
                    <Link href={'/'}>{homeElement}</Link>
                </li>
                {pathNames.length > 0 && separator}
                {pathNames.map((segment, index) => {
                    const href = `/${pathNames.slice(0, index + 1).join('/')}`;
                    const itemClasses =
                        paths === href ? `${listClasses} ${activeClasses}` : listClasses;
                    const itemText = capitalizeLinks
                        ? segment[0].toUpperCase() + segment.slice(1)
                        : segment;

                    // Skip rendering if the segment looks like a GUID
                    if (segment.match(guidRegex)) return null;

                    //decode uri component
                    const decodedSegment = decodeURIComponent(segment);

                    return (
                        <React.Fragment key={index}>
                            <li className={itemClasses}>
                                <Link href={href}>{decodedSegment}</Link>
                            </li>
                            {pathNames.length !== index + 1 && separator}
                        </React.Fragment>
                    );
                })}
            </ul>
        </div>
    );
}

export default Breadcrumb