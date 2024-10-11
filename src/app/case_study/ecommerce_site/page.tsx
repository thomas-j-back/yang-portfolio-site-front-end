import { CaseInfoBlock } from "../../ui_components/info_blocks/case_info_block"
import { BigIconInfoBlock } from "../../ui_components/info_blocks/big_icon_info_block"
import { faCalendar, faUser, faScrewdriverWrench, faPenRuler, faListCheck, faMedal } from "@fortawesome/free-solid-svg-icons";
import { KPIBlock } from '../../ui_components/info_blocks/kpi_block'
import Image from 'next/image'
import { KPITypes } from "@/models/ui_components/kpiBlock";
import { OtherProjects } from "@/app/ui_components/other_projects/other_projects";


export default function caseStudy() {
    return (
        <main>
            <div className="ecommerce-hero-banner-bg sm:h-screen relative w-100" >
                <Image
                    priority
                    src={'/ecommerce_site/ecommerce_hero_banner.png'}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    alt="Laptops displaying R+F's checkout page"
                />
            </div>
            <section className="py-8 px-8 md:px-20 lg:px-32 xl:px-52">
                <h1 className="font-bold text-5xl mb-7 text-dark-text">
                    E-commerce Checkout Experience
                </h1>
                <p className="text-soft-gray">R+F encountered an issue with some of their skincare products being restricted from shipping to certain areas in the US. The solution will <strong>reduce expenses, replace manual processes to manage shipping restrictions and improve customer experience.</strong></p>

                <div className="sm:gap-y-0 grid xs:grid-cols-2 sm:grid-cols-4 grid-cols-1 justify-center content-center sm:py-16 py-8 gap-4">
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
                <div className="sm:gap-y-0 grid xs:grid-cols-1 sm:grid-cols-2 grid-cols-1 justify-center content-center sm:py-10 pt-8 gap-4">
                    <CaseInfoBlock
                        bulleted={true}
                        icon={faListCheck}
                        title="Responsibility"
                        infoRows={[
                            'Led end-to-end redesign for items with shipping restrictions',
                            'Collaborated with PM to define product vision',
                            'Led UX discussions with stakeholders',
                            'Facilitated user testing for validation',
                            'Created Design Components for our system'
                        ]} />
                    <CaseInfoBlock
                        bulleted={true}
                        icon={faMedal}
                        title="Result"
                        infoRows={[
                            'Decrease dropped cart rate by 25%.',
                            'Save potential extra cost by over $180,000 in one quarter',
                            'Drastically reduced customer complaint calls'
                        ]} />
                </div>
            </section >
            {/*UPDATED PAGE CONTENT*/}
            <div className="py-8 px-8 md:px-20 lg:px-32 xl:px-52">
                <h1 className="text-lg text-hero-highlight mb-4">Product Overview</h1>
                <h2 className="font-semibold text-3xl mb-4">Challenges with Previous Solutions</h2>
                <p className="text-sm mb-5">Rodan and Fileds is a B2C e-commerce company specializing in premium skincare and haircare products. This project aims to improve how we handle shipping restrictions throughout our customer&apos;s journey. However, the old solution is under performed and caused lot issue.</p>
                <div className="sm:gap-y-0 grid xs:grid-cols-3 sm:grid-cols-3 grid-cols-1 gap-6 font-semibold text-sm">
                    <div>
                        <Image
                            alt={"Frustrated user slumped over keyboard"}
                            src={"/ecommerce_site/graphics/customer_frustrated.png"}
                            width={200}
                            height={0}
                            sizes="100vw"
                            objectFit="cover" />
                        <p>Poor customer experience</p>
                    </div>
                    <div>
                        <Image alt={"Frustrated user slumped over keyboard"}
                            src={"/ecommerce_site/graphics/big_wallet.png"}
                            width={200}
                            height={0}
                            sizes="100vw"
                            objectFit="cover" />
                        <p>Intervention incurred extra costs.</p>

                    </div>
                    <div>
                        <Image alt={"Frustrated user slumped over keyboard"}
                            src={"/ecommerce_site/graphics/big_list.png"}
                            width={200}
                            height={0}
                            sizes="100vw"
                            objectFit="cover" />
                        <p>Over $18,000 of fines in 1 Week</p>

                    </div>
                </div>
            </div>
            <div className="py-8 px-8 md:px-20 lg:px-32 xl:px-52">
                <h1 className="text-lg text-hero-highlight mb-4">Main Pain Points</h1>
                <h2 className="font-semibold text-3xl mb-4">Lack of awareness and Limited support for customers decision-making</h2>
                <p className="text-sm mb-5">After analyzing our previous shipping restriction solutions, I identified two main user pain points and they are including late notifications and unclear identification, as well as communication gaps resulting in increased customer support interactions and missed sales opportunities.</p>
            </div>
            <div className="py-8 px-8 md:px-20 lg:px-32 xl:px-52">
                <h1 className="text-lg text-hero-highlight mb-4">User Groups</h1>
                <h2 className="font-semibold text-3xl mb-4">Catering to Three Distinct User Groups</h2>
                <p className="text-sm mb-5">Rodan and Fileds is a B2C e-commerce company specializing in premium skincare and haircare products. This project aims to improve how we handle shipping restrictions throughout our customer&apos;s journey. However, the old solution is under performed and caused lot issue.</p>
                <div className="sm:gap-y-0 grid xs:grid-cols-3 sm:grid-cols-3 grid-cols-1 gap-6 font-semibold text-md">
                    <div>
                        <Image
                            alt={"Guest Customers"}
                            src={"/ecommerce_site/graphics/guest_customers.png"}
                            width={200}
                            height={0}
                            sizes="100vw"
                            objectFit="cover" />
                        <p>Guest Customers</p>
                        <ul className="leading-6 text-sm font-normal">
                            <li className="list-disc list-inside">
                                No account
                            </li>
                            <li className="list-disc list-inside">
                                Limited awareness
                            </li>
                            <li className="list-disc list-inside">
                                High-international shopper
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Image
                            alt={"Loyal Customers"}
                            src={"/ecommerce_site/graphics/loyal_customers.png"}
                            width={200}
                            height={0}
                            sizes="100vw"
                            objectFit="cover" />
                        <p>Loyal Customers</p>
                        <ul className="leading-6 text-sm font-normal">
                            <li className="list-disc list-inside">
                                Has an active subscription
                            </li>
                            <li className="list-disc list-inside">
                                Higher expectations
                            </li>
                            <li className="list-disc list-inside">
                                Exclusive  treatment.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Image
                            alt={"Classic Customers"}
                            src={"/ecommerce_site/graphics/classic_customers.png"}
                            width={200}
                            height={0}
                            sizes="100vw"
                            objectFit="cover" />
                        <p >Classic Customers</p>
                        <ul className="leading-6 text-sm font-normal font-normal">
                            <li className="list-disc list-inside">
                                At least one order
                            </li>
                            <li className="list-disc list-inside">
                                Efficient shopping experience.
                            </li>
                            <li className="list-disc list-inside">
                                Limited tolerance
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className="py-16 px-8 md:px-20 lg:px-32 xl:px-52 bg-faint-gray ">
                <h1 className="text-lg text-hero-highlight mb-4">Problem Statement</h1>
                <h2 className="font-bold text-4xl mb-4">How might we effectively adhere to shipping regulations, while also enhancing user satisfaction?</h2>
            </div>

            <div className="py-16 px-8 md:px-20 lg:px-32 xl:px-52">
                <h1 className="text-lg text-hero-highlight mb-4">Research</h1>
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-16 gap-y-8">
                    <div>
                        <h2 className="font-semibold text-black text-3xl mb-4">Competitive Analysis</h2>
                        <p className="mb-5 text-sm text-hero-highlight">I began my research by examining various platforms such as REI, Sephora, and CVS. Analyzing how these platforms communicate information about shipping restricted items at different shopping stages, I gained valuable insights. </p>
                    </div>
                    <div>
                        <ul className="text-hero-highlight leading-6 text-sm font-normal">
                            <li className="list-disc list-inside"><span className="font-bold">Early Notification</span>
                                <p>Inform users about potential restrictions early in the shopping journey.</p>
                            </li>
                            <li className="list-disc list-inside"><span className="font-bold">Targeted communication</span>
                                <p>Only alert users directly affected by restrictions to avoid disrupting casual browsing.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <Image
                    alt="Design research from competitor implentations"
                    src={"/ecommerce_site/diagrams/cvs_example.png"}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }} // optional
                />
                <div className="my-16 grid sm:grid-cols-2 grid-cols-1 gap-x-16 gap-y-8">
                    <div>
                        <h2 className="font-semibold text-black text-3xl mb-4">Secondary Research</h2>
                        <p className="mb-5 text-sm text-hero-highlight">Capturing attention play a crucial role in enhancing awareness. So Finding the sweet spot in seeking the right amount of attention is key as we refine our strategy. To achieve this, I conducted secondary research to gain insights on effectively striking the balance when notifying our customers about shipping-restricted items.</p>
                    </div>
                    <div>
                        <ul className="text-hero-highlight leading-6 text-sm font-normal">
                            <li className="list-disc list-inside"><span className="font-bold">Consider urgency and user actions</span>
                                <p>Tailor communication based on importance and what users can do.</p>
                            </li>
                            <li className="list-disc list-inside"><span className="font-bold">Guide users to solutions</span>
                                <p>Provide clear pathways to resolve issues.</p>
                            </li>
                            <li className="list-disc list-inside"><span className="font-bold">Utilize color and variation</span>
                                <p>vEmploy strategic color choices and diverse approaches for better engagement.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <h1 className="text-lg text-hero-highlight mb-4">Design Discovery</h1>
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-16 gap-y-8 mb-8">
                    <div>
                        <h2 className="font-semibold text-black text-3xl mb-4">Analyzing User Needs for Shipping Restrictions Communication</h2>
                    </div>
                    <div>
                        <p className="mb-5 text-sm text-hero-highlight">My design discovery process involves analyzing user needs at different stages of the shopping journey to gain insight into how we should communicate information about shipping-restricted items.</p>

                    </div>
                </div>
                <Image
                    alt="Design discovery process"
                    src={"/ecommerce_site/diagrams/auth_ship.png"}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }} // optional
                />
                <h1 className="mt-16 text-lg text-hero-highlight mb-4">Design Exploration</h1>
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-16 gap-y-8 mb-8">
                    <div>
                        <h2 className="font-semibold text-black text-3xl mb-4">Enhance awareness during different stages of the shopping process</h2>
                    </div>
                    <div>
                        <p className="mb-5 text-sm text-hero-highlight">Based on research insights, I designed solutions to keep customers informed about shipping restrictions throughout the shopping journey. This involved exploring various UI options and A/B testing indicator placements to optimize user awareness.</p>
                    </div>
                </div>
                <div className="py-8">
                    <p className="text-lg font-semibold mb-2">🟡 Moderate Urgency</p>
                    <p className="text-hero-highlight">For moderate restrictions, we explored contextual and passive notifications. The language used is purely informative, avoiding instructions.</p>
                </div>
                <div>
                    <div className="text-sm text-hero-highlight mb-4">Design Explorations</div>
                    <Image
                        alt="Least aggressive approach design exploration"
                        src={"/ecommerce_site/diagrams/ratio_1.png"}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto', borderRadius: '5px' }} // optional
                    />
                    <div className="text-sm text-hero-highlight mb-4 mt-16">Final Design</div>

                    <Image
                        alt="Least aggressive approach design implentation"
                        src={"/ecommerce_site/diagrams/ratio_2.png"}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto', borderRadius: '5px' }} // optional
                    />
                </div>
                <div className="py-8">
                    <p className="text-lg font-semibold mb-2">🔴 Most Aggressive </p>
                    <p className="text-hero-highlight">For moderate restrictions, we explored contextual and passive notifications. The language used is purely informative, avoiding instructions.</p>
                </div>
                <div>
                    <div className="text-sm text-hero-highlight mb-4">Design Explorations</div>
                    <Image
                        alt="Most aggressive approach design exploration"
                        src={"/ecommerce_site/diagrams/2_ratio.png"}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto', borderRadius: '5px' }} // optional
                    />
                    <div className="text-sm text-hero-highlight mb-4 mt-16">Final Design</div>

                    <Image
                        alt="Most aggressive approach design implentation"
                        src={"/ecommerce_site/diagrams/2_ratio_2.png"}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto', borderRadius: '5px' }} // optional
                    />
                </div>
                <div className="py-8">
                    <p className="text-lg font-semibold mb-2">🟠 Aggressive</p>
                    <p className="text-hero-highlight">In the post-purchase stage, where restricted information is moderately urgent, this design treatment primarily targets loyal customers with an active subscription cart. Clear communication of restrictions is crucial after auto-purchase, particularly for customers making future decisions based on shipping limitations.</p>
                </div>
                <div>
                    <Image
                        alt="Aggressive approach design exploration"
                        src={"/ecommerce_site/diagrams/aggressive_1.png"}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto', borderRadius: '5px' }} // optional
                    />
                    <div className="text-sm text-hero-highlight mb-16 mt-4">To avoid banner blindness and differentiate from promotions, we opted for a modal window. This targeted approach allows users to focus on the shipping limitations immediately upon login, with a clear call to action for managing their subscriptions.</div>


                    <Image
                        alt="Aggressive approach design implementation"
                        src={"/ecommerce_site/diagrams/agressive_2.png"}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto', borderRadius: '5px' }} // optional
                    />
                    <div className="text-sm text-hero-highlight mt-4 ">For moderately urgent post-purchase scenarios (e.g., subscription updates), emails need provide comprehensive information about shipping restrictions with a clear action button for resolving any issues.</div>

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
            <OtherProjects
                currentProjectIndex={0}
            ></OtherProjects>


        </main >)
}