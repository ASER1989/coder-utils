export interface IConvert {
    toDate: (num: number | string) => Array<string>
    toTime: (num: number | string) => Array<string>
    toDateTime: (num: number | string,split:string|null) => string
    numToTime: (num: number | string, f: string | null) => Array<string>
}