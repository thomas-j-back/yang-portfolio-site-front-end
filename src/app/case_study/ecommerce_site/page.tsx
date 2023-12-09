import { CaseInfoBlock } from "../../ui_components/case_info_block"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


export default function caseStudy() {
    return (
        <div>
            <div className="ecommerce-hero-banner-bg text-white px-8 md:px-20 lg:px-32 xl:px-52 h-96">
            </div>
            <div className="py-8 px-8 md:px-20 lg:px-32 xl:px-52 md:mb-10 mb-2">
                <h1 className="font-bold text-4xl mb-5 text-dark-text">
                    E-commerce Checkout Experience
                </h1>
                <p className="text-soft-gray">R+F encountered an issue with some of their skincare products being restricted from shipping to certain areas in the US. The solution will <strong>reduce expenses, replace manual processes to manage shipping restrictions and improve customer experience.</strong></p>
                <div className="flex flex-row justify-between py-16">
                    <CaseInfoBlock
                        icon={faArrowRight}
                        title="Timeline"
                        infoRows={[
                            'Jan - May 2022'
                        ]} />
                    <CaseInfoBlock
                        icon={faArrowRight}
                        title="Role"
                        infoRows={[
                            'Jan - May 2022'
                        ]} />
                    <CaseInfoBlock
                        icon={faArrowRight}
                        title="Tools"
                        infoRows={[
                            'Jan - May 2022'
                        ]} />
                    <CaseInfoBlock
                        icon={faArrowRight}
                        title="Design Strategy"
                        infoRows={[
                            'Jan - May 2022'
                        ]} />
                </div>
            </div>

        </div>)
}