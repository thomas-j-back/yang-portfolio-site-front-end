import { CaseInfoBlock } from "../../ui_components/case_info_block"
import { faCalendar, faUser, faScrewdriverWrench, faPenRuler } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'


export default function caseStudy() {
    return (
        <div>
            <div className="ecommerce-hero-banner-bg text-white px-8 md:px-20 lg:px-32 xl:px-52 h-96">
            </div>
            <div className="py-8 px-8 md:px-20 lg:px-32 xl:px-52">
                <h1 className="font-bold text-5xl mb-7 text-dark-text">
                    E-commerce Checkout Experience
                </h1>
                <p className="text-soft-gray">R+F encountered an issue with some of their skincare products being restricted from shipping to certain areas in the US. The solution will <strong>reduce expenses, replace manual processes to manage shipping restrictions and improve customer experience.</strong></p>
                {/* <div className="flex sm:flex-row flex-col py-16 flex-column sm:justify-between justify-center flex-wrap sm:flex-nowrap"> */}

                <div className="sm:gap-y-0 gap-y-10 flex flex-col sm:flex-row justify-between content-center py-16 flex-wrap sm:flex-nowrap sm:content-normal">
                    <CaseInfoBlock
                        icon={faCalendar}
                        title="Timeline"
                        infoRows={[
                            'March - June 2023'
                        ]} />
                    <CaseInfoBlock
                        icon={faUser}
                        title="Role"
                        infoRows={[
                            'Lead UX Designer',
                            'Visual Designer'
                        ]} />
                    <CaseInfoBlock
                        icon={faScrewdriverWrench}
                        title="Tools"
                        infoRows={[
                            'Figma',
                            'Adobe Illustrator',
                            'Adobe After Effect'
                        ]} />
                    <CaseInfoBlock
                        icon={faPenRuler}
                        title="Design Strategy"
                        infoRows={[
                            'Web Design',
                            'Visual Design'
                        ]} />
                </div>
            </div>
            <div className="py-16 px-8 md:px-20 lg:px-32 xl:px-52 md:mb-10 mb-2 bg-fill-grey">
                <h1 className="font-bold text-xl mb-7 text-dark-text">
                    Core Experiences
                </h1>
                <p className="text-2xl font-light">How might we comply with shipping laws while minimizing product disruptions for customers in specific zip codes?</p>
                <Image
                    width={450}
                    height={400}
                    alt={"Core Experiences"}
                />
            </div>
            <div className="py-16 px-8 md:px-20 lg:px-32 xl:px-52 md:mb-10 mb-2">
                <h1 className="font-bold text-xl mb-7 text-dark-text">
                    Problems
                </h1>
                <p className="text-2xl font-light">How might we comply with shipping laws while minimizing product disruptions for customers in specific zip codes?c</p>
            </div>

        </div>)
}