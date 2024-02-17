export type KPIBlockProps = {
    type: KPITypes,
    value: string,
    title: string,
    description: string
}

export enum KPITypes {
    percentage,
    multiple,
    normal
}