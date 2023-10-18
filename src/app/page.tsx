import { CasePreview } from './ui_components/case_preview'

export default function Home() {
    return (
        <div>
            {/* //hero banner */}
            <div className="hero-banner-bg">
                <div className="px-8 md:px-20 py-20 lg:w-1/2 md:w-8/12 w-fit">
                    <h1 className="font-bold text-5xl text-white mb-5">
                        Hi! I'm Yang.
                    <br />
                        UX & Visual Designer
                    </h1>
                    <p className="text-white text-sm">
                        I specialize in crafting user-centric digital experiences, from eCommerce to B2B marketing websites. Skilled in design systems and branding identity, I'm eager to tackle new challenges.
                    </p>
                </div>
            </div>
            <CasePreview
                title="E-commerce Website Checking out Experiences"
                proficiencies={['UX Design', 'Responsive Design', 'Web Design']}
                description="Designing a clear information guide, offering product alternatives, implementing zip code checkout control to benefit Customer Care, reduce costs, and enhance user’s satisfaction."
                previewImage="/placeholder.png"
            ></CasePreview>
            <CasePreview
                title="Web design"
                proficiencies={['UX Design']}
                description="Designing a clear information guide, offering product alternatives, implementing zip code checkout control to benefit Customer Care, reduce costs, and enhance user’s satisfaction."
                previewImage="/placeholder.png"
            ></CasePreview>
            <CasePreview
                title="E-commerce Website Checking out Experiences"
                proficiencies={['UX Design', 'Responsive Design', 'Web Design']}
                description="Designing a clear information guide, offering product alternatives, implementing zip code checkout control to benefit Customer Care, reduce costs, and enhance user’s satisfaction."
                previewImage="/placeholder.png"
            ></CasePreview>
            <CasePreview
                title="E-commerce Website Checking out Experiences"
                proficiencies={['UX Design', 'Responsive Design', 'Web Design']}
                description="Designing a clear information guide, offering product alternatives, implementing zip code checkout control to benefit Customer Care, reduce costs, and enhance user’s satisfaction."
                previewImage="/placeholder.png"
            ></CasePreview>
            <CasePreview
                title="E-commerce Website Checking out Experiences"
                proficiencies={['UX Design', 'Responsive Design', 'Web Design']}
                description="Designing a clear information guide, offering product alternatives, implementing zip code checkout control to benefit Customer Care, reduce costs, and enhance user’s satisfaction."
                previewImage="/placeholder.png"
            ></CasePreview>
        </div>)
}