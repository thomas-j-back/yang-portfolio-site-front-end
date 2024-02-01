import React, { FunctionComponent } from 'react'
import { BigIconInfoBlockProps } from '../../../models/ui_components/bigIconInfoBlock'
import Image from 'next/image'
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const BigIconInfoBlock: FunctionComponent<BigIconInfoBlockProps> = ({
    icon,
    title,
    description
}) => (
    //
    <div>
        <div className="flex flex-col pb-2 items-left">
            <div>
                <FontAwesomeIcon className="mb-6 text-5xl text-light-gray" icon={icon} />
            </div>
            <div className="text-dark-gray">
                <p className="font-bold text-lg mb-2">{title}</p>
                <p>{description}</p>
            </div>

        </div>
    </div>
)
