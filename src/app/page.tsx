import { CasePreview } from './ui_components/case_preview'

export default function Home() {
    return (
        <div>
            {/* hero banner */}
            <div className="hero-banner-bg mt-16">
                <div className="px-8 md:px-20 lg:px-28 py-20 lg:w-1/2 md:w-8/12 w-fit">
                    <h1 className="font-bold text-5xl text-white mb-5">
                        Hi! I&apos;m Yang.
                    <br />
                        UX & Visual Designer
                    </h1>
                    <p className="text-white text-sm">
                        I specialize in crafting user-centric digital experiences, from eCommerce to B2B marketing websites. Skilled in design systems and branding identity, I&apos;m eager to tackle new challenges.
                    </p>
                </div>
            </div>
            <CasePreview
                title="E-commerce Website Checking out Experiences"
                proficiencies={['Product Design', 'Customer Support', 'Shipping Restrictions']}
                description="Designing a clear information guide, offering product alternatives, implementing zip code checkout control to benefit Customer Care, reduce costs, and enhance user’s satisfaction."
                previewImage="/placeholder.png"
                pageRoute="/case_study/e_commerce_site"
            ></CasePreview>
            <CasePreview
                title="B2B Website Redesign"
                proficiencies={['Marketing', 'UX/UI Design', 'Accessibility Design']}
                description="Redesigning the Firework’s Website to Offer Clear Product Information, Build Trust, Raise Awareness, and Enhance Visitor Engagement for the Expanding Startup."
                previewImage="/placeholder.png"
                pageRoute="/case_study/b2b_site"
            ></CasePreview>
            <CasePreview
                title="Branding Identity Design for Donation Application"
                proficiencies={['Branding Guideline', 'Iconography', 'UI Design']}
                description="Revamping AngeLink's brand and product with a new logo, a unified brand identity for their website and app, and various promotional materials."
                previewImage="/placeholder.png"
                pageRoute="/case_study/angel_link"
            ></CasePreview>
            <CasePreview
                title="User-Friendly Design System for Streamlined Web Operations"
                proficiencies={['Prototyping', 'Component Libraries', 'Responsive Design']}
                description="Revamping AngeLink's brand and product with a new logo, a unified brand identity for their website and app, and various promotional materials."
                previewImage="/placeholder.png"
                pageRoute="/case_study/angel_link"
            ></CasePreview>

            {/* footer */}
            <div className="bg-footer py-12 px-8 md:px-20 lg:px-28">
                <p className="font-bold text-3xl mb-10">Thanks for stopping by, Let&apos;s chat!</p>
                <div className="flex sm:flex-row flex-col justify-between gap-x-4">
                    <div>
                        <p className="mb-5">CONTACT ME</p>
                        <p className="mb-10">yangliudesignerus@gmail.com</p>
                        <p className="mb-5">LET&apos;S CONNECT</p>
                        <div className="flex flex-column gap-3">
                            <a href="#">Linkedin</a>
                            <a href="#">Instagram</a>
                            <a href="#">Resume</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 justify-between text-2xl mt-10 sm:mt-0">
                        <a href="#">Works</a>
                        <a href="#">Fun</a>
                        <a href="#">About</a>
                    </div>
                </div>


            </div>
        </div>)
}