import { CaseInfoBlock } from "../../ui_components/case_info_block"
import { BigIconInfoBlock } from "../../ui_components/big_icon_info_block"
import { faCalendar, faUser, faScrewdriverWrench, faPenRuler } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'


export default function caseStudy() {
    return (
        <div>
            <div className="ecommerce-hero-banner-bg text-white px-8 md:px-20 lg:px-32 xl:px-52 h-screen">
            </div>
            <div className="py-8 px-8 md:px-20 lg:px-32 xl:px-52">
                <h1 className="font-bold text-5xl mb-7 text-dark-text">
                    E-commerce Checkout Experience
                </h1>
                <p className="text-soft-gray">R+F encountered an issue with some of their skincare products being restricted from shipping to certain areas in the US. The solution will <strong>reduce expenses, replace manual processes to manage shipping restrictions and improve customer experience.</strong></p>
                {/* <div className="flex sm:flex-row flex-col py-16 flex-column sm:justify-between justify-center flex-wrap sm:flex-nowrap"> */}

                <div className="sm:gap-y-0 grid xs:grid-cols-2 sm:grid-cols-4 grid-cols-1 justify-center content-center py-16 gap-4">
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
                <h1 className="font-bold text-2xl mb-7 text-dark-text">
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
                <h1 className="font-bold text-2xl mb-7 text-dark-text">
                    Problems
                </h1>
                <p className="text-2xl font-light mb-16">How might we comply with shipping laws while minimizing product disruptions for customers in specific zip codes?</p>
                <div className="flex justify-end grow-1">
                    <div className="md:w-4/6 big-icon-info-div grid gap-4 sm:grid-cols-2 grid-cols-1">
                        <BigIconInfoBlock
                            icon={faPenRuler}
                            title={'Poor customer experience'}
                            description={'Multiple orders were canceled and reprocessed, causing delays in updating customers about items not shipping. This led to increased contact with the call center.'}
                        />
                        <BigIconInfoBlock
                            icon={faPenRuler}
                            title={'Additional cost'}
                            description={'Manual intervention was required to stop sales orders from shipping through DHL, resulting in extra expenses.'}
                        />
                        <BigIconInfoBlock
                            icon={faPenRuler}
                            title={'High-risk manual process'}
                            description={'Failure to block orders may result in fines of $1,000 per missed order that ships.'}
                        />
                        <BigIconInfoBlock
                            icon={faPenRuler}
                            title={'Extra cost for product scrapping'}
                            description={'Legacy products incurred additional costs for their disposal or scrapping.'}
                        />
                        <BigIconInfoBlock
                            icon={faPenRuler}
                            title={'High-risk manual process'}
                            description={'Failure to block orders may result in fines of $1,000 per missed order that ships.'}
                        />
                    </div>
                </div>
            </div>
            <div className="py-16 px-8 md:px-20 lg:px-32 xl:px-52 md:mb-10 mb-2">
                <h1 className="font-bold text-2xl mb-7 text-dark-text">
                    Design Process
                </h1>
                <div className="flex justify-end grow-1 mb-10">
                    <div className="sm:w-4/6 grid gap-4 xs:grid-cols-3 grid-cols-1 w-full">
                        <div className="text-dark-gray">
                            <p className="font-bold text-lg mb-2">Displaying warning tooltips</p>
                            <p>Multiple orders were canceled and reprocessed, causing delays in updating.</p>
                        </div>
                        <div className="text-dark-gray">
                            <p className="font-bold text-lg mb-2">Highlighting restriction</p>
                            <p>Manual intervention was required to stop sales orders from shipping through DHL.</p>
                        </div>
                        <div className="text-dark-gray">
                            <p className="font-bold text-lg mb-2">Highlighting restriction</p>
                            <p>Manual intervention was required to stop sales orders from shipping through DHL.</p>
                        </div>
                    </div>
                </div>
                <Image
                    width={450}
                    height={400}
                    alt={"Core Experiences"}
                />
                <div className="text-dark-gray grid sm:grid-cols-[30%_60%] grid-cols-1">
                    <div className="sm:mb-0 mb-4">
                        <p className="text-sm mb-4">DESIGN</p>
                        <p className="font-bold text-lg mb-2">Research</p>
                    </div>
                    <div>
                        <p>Misalignment with Business Requirement Documentation Misalignment with Business Requirement Documentation Misalignment with Business Requirement DocumentationMisalignment with Business Requirement Documentation.</p>
                    </div>
                </div>
            </div>
            <div className="py-16 px-8 md:px-20 lg:px-32 xl:px-52 md:mb-10 mb-2">

            </div>

        </div>)
}