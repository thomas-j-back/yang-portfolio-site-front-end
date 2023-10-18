import React, { FunctionComponent } from 'react'
import { CasePreviewProps } from '../../models/ui_components/casePreview'
import Image from 'next/image'

export const CasePreview: FunctionComponent<CasePreviewProps> = ({
    title,
    proficiencies,
    description,
    previewImage
}) => (
    //
    <div className="py-8 px-8 md:px-20 flex flex-col-reverse even:sm:flex-row odd:sm:flex-row-reverse justify-between gap-x-10">
        <div className="max-w-sm flex flex-col justify-between">
            <div className="flex-1">
                <h1 className="font-bold text-3xl ">{title}</h1>
                <div className="flex flex-row flex-wrap justify-start gap-x-2 gap-y-4 py-6">
                    {
                        proficiencies.map(name => {
                            return <div className="font-normal rounded-md py-1 px-3 text-xs bg-accent text-accent-dark">
                                {name}
                            </div>
                        })
                    }
                </div>
                <p className="text-sm font-normal">{description}</p>
            </div>
            <div className="sm:relative bottom-0 left-0">
                <p className="text-md">View Project</p>
            </div>
        </div>
        <div className="pb-6 md:pb-0">
            <Image
                src={previewImage}
                width={400}
                height={400}
                alt="title"
            />
        </div>
    </div>
)