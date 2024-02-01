import { CaseInfoBlock } from "../../ui_components/info_blocks/case_info_block"
import { BigIconInfoBlock } from "../../ui_components/info_blocks/big_icon_info_block"
import { faCalendar, faUser, faScrewdriverWrench, faPenRuler } from "@fortawesome/free-solid-svg-icons";
import { KPIBlock } from '../../ui_components/info_blocks/kpi_block'
import Image from 'next/image'
import { KPITypes } from "@/models/ui_components/kpiBlock";


export default function caseStudy() {
    return (
        <div>
            <div className="ecommerce-hero-banner-bg text-white px-8 md:px-20 lg:px-32 xl:px-52">
            </div>
            <div className="py-8 px-8 md:px-20 lg:px-32 xl:px-52">
                <h1 className="font-bold text-5xl mb-7 text-dark-text">
                    E-commerce Checkout Experience
                </h1>
                <p className="text-soft-gray">R+F encountered an issue with some of their skincare products being restricted from shipping to certain areas in the US. The solution will <strong>reduce expenses, replace manual processes to manage shipping restrictions and improve customer experience.</strong></p>

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
                <h1 className="font-bold text-2xl sm:mb-7 text-dark-text">
                    Core Experiences
                </h1>
                <p className="text-2xl font-light">How might we comply with shipping laws while minimizing product disruptions for customers in specific zip codes?</p>
                <div className="sm:mt-20 sm:mb-40 mt-16 mb-5">
                    <Image
                        alt={"Core Experiences"}
                        src={"/user_friendly/user_friendly_preview.png"}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }} // optional
                    />
                </div>
            </div>
            <div className="sm:py-16 py-10 px-8 md:px-20 lg:px-32 xl:px-52 md:mb-10 mb-2">
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
            <div className="sm:py-16 py-10 px-8 md:px-20 lg:px-32 xl:px-52 md:mb-10 mb-2">
                <h1 className="font-bold text-2xl mb-7 text-dark-text">
                    Design Process
                </h1>
                <div className="flex justify-end grow-1 mb-10">
                    <div className="sm:w-4/6 grid gap-4 sm:grid-cols-3 grid-cols-1 w-full">
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
                <div className="mt-24 mb-40">
                    <Image
                        alt={"Core Experiences"}
                        src={"/user_friendly/user_friendly_preview.png"}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }} // optional
                    />
                </div>

                <div className="text-dark-gray grid sm:grid-cols-[33%_66%] grid-cols-1">
                    <div className="sm:mb-0 mb-4">
                        <p className="text-sm mb-4">DESIGN</p>
                        <p className="font-bold text-lg mb-2">Research</p>
                    </div>
                    <div>
                        <p>Misalignment with Business Requirement Documentation Misalignment with Business Requirement Documentation Misalignment with Business Requirement DocumentationMisalignment with Business Requirement Documentation.</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className="py-16 px-8 md:px-20 lg:px-32 xl:px-52 md:mb-10 mb-2">
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-16">
                    <Image
                        width={550}
                        height={550}
                        alt={"Core Experiences"}
                        src={"/user_friendly/user_friendly_preview.png"}
                    />
                    <Image
                        width={550}
                        height={550}
                        alt={"Core Experiences"}
                        src={"/user_friendly/user_friendly_preview.png"}
                    />
                </div>
                <div className="text-dark-gray grid sm:grid-cols-[33%_66%] grid-cols-1 mt-20">
                    <div className="sm:mb-0 mb-4">
                        <p className="text-sm mb-4">DESIGN</p>
                        <p className="font-bold text-md mb-2">Providing the clear restriction information.</p>
                    </div>
                    <div>
                        <p>Misalignment with Business Requirement Documentation Misalignment with Business Requirement Documentation Misalignment with Business Requirement DocumentationMisalignment with Business Requirement Documentation.</p>
                    </div>
                </div>
            </div>
            <div className="py-16 px-8 md:px-20 lg:px-32 xl:px-52  bg-fill-grey">
                <h1 className="font-bold text-2xl sm:mb-7 text-dark-text">
                    Impacts
                </h1>
                <p className="text-2xl font-light">How might we comply with shipping laws while minimizing product disruptions for customers in specific zip codes?</p>
                <div className="flex flex-col justify-center items-center gap-28 w-100 py-10">
                    <KPIBlock
                        type={KPITypes.multiple}
                        value="25"
                        title="Poor customer experience"
                        description="Multiple orders were canceled and reprocessed, causing delays in"
                    /><KPIBlock
                        type={KPITypes.percentage}
                        value="21"
                        title="Poor customer experience"
                        description="Multiple orders were canceled and reprocessed, causing delays in"
                    /><KPIBlock
                        type={KPITypes.normal}
                        value="10"
                        title="Poor customer experience"
                        description="Multiple orders were canceled and reprocessed, causing delays in"
                    />
                </div>
            </div>


        </div>)
}