import React, { FunctionComponent } from 'react'
import { KPIBlockProps, KPITypes } from '../../../models/ui_components/kpiBlock'
import Image from 'next/image'
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const KPIBlock: FunctionComponent<KPIBlockProps> = ({
    type,
    value,
    title,
    description,
    className
}) => {
    function formatType(type: KPITypes, value: string): string {
        switch (type) {
            case KPITypes.percentage:
                return value + '%'
            case KPITypes.multiple:
                return value + 'X'
            default:
                return value;
        }
    }

    return (
        <div className={className}>
            <p className="text-7xl font-extrabold mb-2">{formatType(type, value)}</p>
            <p className=" font-bold mb-1 text-lg">{title}</p>
            <p className="font-light">{description}</p>
        </div>)
}
