import React, { FunctionComponent } from 'react'
import { CasePreviewProps } from '../../models/ui_components/casePreview'

export const CasePreview: FunctionComponent<CasePreviewProps> = ({
    title,
    qualities,
    description,
    previewImage
}) => (
    <div>
        <h1>{title}</h1>

    </div>
)