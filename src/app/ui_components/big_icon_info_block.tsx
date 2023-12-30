import React, { FunctionComponent } from 'react'
import { BigIconInfoBlockProps } from '../../models/ui_components/bigIconInfoBlock'
import Image from 'next/image'
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const BigIconInfoBlock: FunctionComponent<BigIconInfoBlockProps> = ({
    icon,
    title,
    description
}) => (
    //
    <div className="text-base">
        <div className="flex flex-row pb-2 items-center text-light-gray ">
            <FontAwesomeIcon className="mr-4" icon={icon} />
            <p className="font-bold">{title}</p>
        </div>
        <div>
            <p>{description}</p>
        </div>

    </div>
)
