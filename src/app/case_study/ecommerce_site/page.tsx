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

            {/* USER GROUPS EXPLANATION SECTION */}
            <div className="py-8 px-8 md:px-20 lg:px-32 xl:px-52">
                <h1 className="text-lg text-hero-highlight mb-4">User Groups</h1>
                <h2 className="font-semibold text-3xl mb-4">Catering to Three Distinct User Groups</h2>
                <p className="text-sm mb-5">Rodan and Fileds is a B2C e-commerce company specializing in premium skincare and haircare products. This project aims to improve how we handle shipping restrictions throughout our customer&apos;s journey. However, the old solution is under performed and caused lot issue.</p>
                <div className="sm:gap-y-0 grid sm:grid-cols-3 justify-center grid-cols-1 gap-6 font-semibold text-md">
                    <div className="grid justify-center content-center">
                        <Image
                            alt={"Guest Customers"}
                            src={"/ecommerce_site/graphics/guest_customers.png"}
                            width={200}
                            height={0}
                            sizes="100vw"
                            objectFit="cover" />
                        <div className="sm:block flex flex-col justify-center">
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
                    </div>

                    <div className="grid justify-center content-center">
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
                    <div className="grid justify-center content-center">
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

            {/* COMPETITIVE ANALYSIS SECTION */}
            <div className="py-16 px-8 md:px-20 lg:px-32 xl:px-52">
                <h1 className="text-lg text-hero-highlight mb-4">Research</h1>
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-16 mb-12">
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

                {/* SECONDARY RESEARCH SECTION */}
                <div className="my-16 grid sm:grid-cols-2 grid-cols-1 gap-x-16">
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
                                <p>Employ strategic color choices and diverse approaches for better engagement.</p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* ANALYZING USER NEEDS FOR SHIPPING SECTION */}
                <h1 className="text-lg text-hero-highlight mb-4">Design Discovery</h1>
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-16 mb-8">
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

                {/* ENHANCE AWARENESS SECTION */}
                <h1 className="mt-16 text-lg text-hero-highlight mb-4">Design Exploration</h1>
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-16 mb-8">
                    <div>
                        <h2 className="font-semibold text-black text-3xl mb-4">Enhance awareness during different stages of the shopping process</h2>
                    </div>
                    <div>
                        <p className="mb-5 text-sm text-hero-highlight">Based on research insights, I designed solutions to keep customers informed about shipping restrictions throughout the shopping journey. This involved exploring various UI options and A/B testing indicator placements to optimize user awareness.</p>
                    </div>
                </div>

                {/* MODERATE URGENCY SECTION */}
                <div className="py-8">
                    <p className="text-lg font-semibold mb-2">🟡 Moderate Urgency</p>
                    <p className="text-hero-highlight">For moderate restrictions, we explored contextual and passive notifications. The language used is purely informative, avoiding instructions.</p>
                </div>
                <div className="mb-10">
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

                {/* AGGRESSIVE URGENCY SECTION */}
                <div className="py-8">
                    <p className="text-lg font-semibold mb-2">🔴 Most Aggressive </p>
                    <p className="text-hero-highlight">For moderate restrictions, we explored contextual and passive notifications. The language used is purely informative, avoiding instructions.</p>
                </div>
                <div className="mb-10">
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
                <div className="py-16">
                    <h1 className="text-lg text-hero-highlight mb-4">Design Exploration</h1>
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-16">
                        <div>
                            <h2 className="font-semibold text-black text-3xl mb-4">Enhance Awareness from Type of Product in Question</h2>
                        </div>
                        <div>
                            <p className="mb-5 text-sm text-hero-highlight">My design discovery process involves analyzing user needs at different stages of the shopping journey to gain insight into how we should communicate information about shipping-restricted items.</p>

                        </div>
                    </div>
                    <Image
                        alt="Example of awareness enhancing implementation."
                        src={"/ecommerce_site/diagrams/awareness_feature.png"}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto', borderRadius: '5px' }} // optional
                    />
                    <p className="mt-2 text-sm">Using different language for product type.</p>
                </div>
                <div className="py-16">
                    <h1 className="text-lg text-hero-highlight mb-4">Bundle</h1>
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-16">
                        <div>
                            <h2 className="font-semibold text-black text-3xl mb-4">Customization Process</h2>
                        </div>
                        <div>
                            <p className="mb-5 text-sm text-hero-highlight">In the post-purchase stage, where restricted information is moderately urgent, this design treatment primarily targets loyal customers with an active subscription cart. Clear communication of restrictions is crucial after auto-purchase, particularly for customers making future decisions based on shipping limitations.</p>

                        </div>
                    </div>
                    <Image
                        alt="Example of awareness enhancing implementation."
                        src={"/ecommerce_site/diagrams/bundle_feature.png"}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto', borderRadius: '5px' }} // optional
                    />
                </div>
                <div className="py-16">
                    <h1 className="text-lg text-hero-highlight mb-4">Post-Launch</h1>
                    <div>
                        <h2 className="font-semibold text-black text-3xl mb-4">Impacts</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-x-8 gap-y-16">
                        <KPIBlock
                            className={"text-center"}
                            type={KPITypes.normal}
                            value="$180,000"
                            title=""
                            description="Potential extra costs saved in one quarter"
                        /><KPIBlock
                            className={"text-center"}
                            type={KPITypes.percentage}
                            value="<25"
                            title=""
                            description="Decreased drop cart rate"
                        /><KPIBlock
                            className={"text-center"}
                            type={KPITypes.percentage}
                            value="<39"
                            title=""
                            description="Drastically reduced amount of customer complaint calls."
                        />
                    </div>
                </div>
            </div>
            <div className="py-20 px-8 md:px-20 lg:px-32 xl:px-52 bg-faint-gray">
                <h1 className="text-lg text-hero-highlight mb-2">Retrospect</h1>
                <div>
                    <div>
                        <h2 className="font-semibold text-black text-3xl mb-8">What we&apos;d do differently</h2>
                    </div>
                    <div className="font-dark-text">
                        <p className="text-md font-semibold">Risk Assessment and Contingency Planning</p>
                        <p className="mb-5 text-sm text-hero-highlight">Conduct a risk assessment to identify potential challenges and uncertainties that may impact effort requirements. Develop contingency plans to address such risks and allocate additional resources or adjust timelines accordingly.</p>

                    </div>
                    <div className="font-dark-text">
                        <p className="text-md font-semibold">Anticipate Change</p>
                        <p className="mb-5 text-sm text-hero-highlight">Recognize that stakeholder turnover is a possibility and build flexibility into the project plan. Be prepared to adapt and adjust course if necessary, and communicate the potential impact of stakeholder changes to the team and other stakeholders.</p>
                    </div>
                </div>
            </div>
            <div className="py-20 px-8 md:px-20 lg:px-32 xl:px-52">
                <OtherProjects
                    currentProjectIndex={0}
                ></OtherProjects>
            </div>
        </main >)
}