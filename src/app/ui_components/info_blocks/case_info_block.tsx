import React, { FunctionComponent } from 'react'
import { CaseInfoBlockProps } from '../../../models/ui_components/caseInfoBlock'
import Image from 'next/image'
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const CaseInfoBlock: FunctionComponent<CaseInfoBlockProps> = ({
    icon,
    title,
    infoRows,
    bulleted
}) => (
    //
    <div className="text-black text-sm">
        <div className="text-sm bg-faint-gray flex flex-row p-4 items-center rounded-md mb-4">
            <FontAwesomeIcon className="mr-4" icon={icon} />
            <h1 className="font-semibold">{title}</h1>
        </div>
        <ul className="leading-6">
            {
                infoRows.map((name, i) => {
                    if (bulleted) {
                        return (<li className="list-disc list-inside" key={i + name}>
                            {name}
                        </li>)
                    } else {
                        return (<div key={i + name}>
                            {name}
                        </div>)
                    }

                })
            }
        </ul>

    </div>
)
