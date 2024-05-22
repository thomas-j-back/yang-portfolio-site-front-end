import { IconDefinition } from "../../../node_modules/@fortawesome/fontawesome-svg-core/index";

export type CaseInfoBlockProps = {
    icon: IconDefinition,
    title: string,
    infoRows: string[],
    bulleted?: boolean
} 