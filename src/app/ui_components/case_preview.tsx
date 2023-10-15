import React, { FunctionComponent } from 'react'
import { CasePreviewProps } from '../../models/ui_components/casePreview'
import Image from 'next/image'

export const CasePreview: FunctionComponent<CasePreviewProps> = ({
    title,
    proficiencies,
    description,
    previewImage
}) => (
    <div className="py-8 px-14 flex flex-col-reverse sm:flex-row justify-between">
        <div className="max-w-sm">
            <h1 className="font-bold text-3xl ">{title}</h1>
            <div className="flex flex-row justify-start gap-x-2 gap-y-4 py-6">
                {
                    proficiencies.map(name => {
                        return <div className="rounded-md py-2 px-4 text-xs bg-accent text-accent-dark">
                            {name}
                        </div>
                    })
                }
            </div>
            <p className="text-sm">{description}</p>
        </div>
        <div >
            <Image
                src={previewImage}
                width={200}
                height={200}
                alt="title"
            />
        </div>


    </div>
)