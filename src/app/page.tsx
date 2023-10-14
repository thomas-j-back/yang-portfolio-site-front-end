import { CasePreview } from './ui_components/case_preview'

export default function Home() {
    return (<div>
        hello there
        <CasePreview
            title="Web design"
            proficiencies={['UX Design', 'Responsive Design']}
            description="designing a clear...."
            previewImage="/public/next.svg"
        ></CasePreview>
        <CasePreview
            title="Web design"
            proficiencies={['UX Design', 'Responsive Design']}
            description="designing a clear...."
            previewImage="/public/next.svg"
        ></CasePreview>
    </div>)
}