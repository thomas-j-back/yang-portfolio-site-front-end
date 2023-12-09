import React, { FunctionComponent } from 'react'
import { CasePreviewProps } from '../../models/ui_components/casePreview'
import Image from 'next/image'
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const CasePreview: FunctionComponent<CasePreviewProps> = ({
    title,
    proficiencies,
    description,
    previewImage,
    pageRoute
}) => (
    //
    <div className="py-8 px-8 md:px-20 lg:px-28 flex flex-col-reverse even:sm:flex-row odd:sm:flex-row-reverse justify-between gap-x-4 md:mb-10 mb-2">
        <div className="max-w-sm flex flex-col justify-between">
            <div className="flex-1">
                <h1 className="font-bold text-3xl ">{title}</h1>
                <div className="flex flex-row flex-wrap justify-start gap-x-2 gap-y-4 py-6">
                    {
                        proficiencies.map((name, i) => {
                            return <div key={i + name} className="font-normal rounded-md py-1 px-3 text-xs bg-accent text-accent-dark">
                                {name}
                            </div>
                        })
                    }
                </div>
                <p className="text-sm font-normal">{description}</p>
            </div>
            <Link className="sm:relative bottom-0 left-0 mt-4 text-md" href={pageRoute}>
                View Project <FontAwesomeIcon className="ml-2 text-lg" icon={faArrowRight} />
            </Link>
        </div>
        <div className="pb-6 md:pb-0">
            <Link href={pageRoute}>
                <Image
                    src={previewImage}
                    width={450}
                    height={400}
                    alt={title}
                />
            </Link>

        </div>
    </div>
)