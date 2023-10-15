import { CasePreview } from './ui_components/case_preview'

export default function Home() {
    return (<div>
        hello there
        <CasePreview
            title="Web design"
            proficiencies={['UX Design', 'Responsive Design', 'Web Design']}
            description="Designing a clear information guide, offering product alternatives, implementing zip code checkout control to benefit Customer Care, reduce costs, and enhance user’s satisfaction."
            previewImage="/public/placeholder.png"
        ></CasePreview>
        <CasePreview
            title="Web design"
            proficiencies={['UX Design']}
            description="Designing a clear information guide, offering product alternatives, implementing zip code checkout control to benefit Customer Care, reduce costs, and enhance user’s satisfaction."
            previewImage="/public/vercel.svg"
        ></CasePreview>
    </div>)
}