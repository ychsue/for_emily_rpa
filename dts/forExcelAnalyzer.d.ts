// Doc:  https://docs.emily.tips/excel2txt
///<reference path="common.d.ts"/>

/**
 * [eachRow] & 
 * 
 * eachRow: Looks like {columnName:value}
 */
export var input: Array<{ [key: string]: any }>;

/**
 * key: file name of a .txt file. ".txt" is excluded
 * 
 * value: its content 
 */
export var output: { [key: string]: string };

export interface API {
    cell: (addr?: "A1"|string) => string|undefined
    files: ()=>string[]
    read: (fName: string) => string
    remove: (fName: string) => undefined
    write: (fName: string, content: string) => undefined
}

export var api: API;