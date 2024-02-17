import React, { FunctionComponent } from 'react'
import { CaseInfoBlockProps } from '../../../models/ui_components/caseInfoBlock'
import Image from 'next/image'
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const CaseInfoBlock: FunctionComponent<CaseInfoBlockProps> = ({
    icon,
    title,
    infoRows
}) => (
    //
    <div className="text-light-gray text-base">
        <div className="flex flex-row pb-2 items-center">
            <FontAwesomeIcon className="mr-4" icon={icon} />
            <p className="font-bold">{title}</p>
        </div>
        <div>
            {
                infoRows.map((name, i) => {
                    return <div key={i + name} className="font-light">
                        {name}
                    </div>
                })
            }
        </div>

    </div>
)
