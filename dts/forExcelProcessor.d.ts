// Doc:  https://docs.emily.tips/excel2txt

/**
 * [eachRow] & 
 * 
 * eachRow: Looks like {columnName:value}
 */
export var input: Array<{ [key: string]: any }>;

export interface EPOutput extends Array<{ [key: string]: string | number }> {
    header: Array<string>;
}

export interface EPAPI {
    cell: (addr: "A1" | string) => string | number // TODO
    files: (a?: any) => string[]; // TODO
    read: (fileName: string, encoding?: "utf8") => string;
    remove: (fileName: string) => undefined;
    write: (fileName: string, content: string, a?: string) => undefined // TODO
}
/**
 * key: file name of a .txt file. ".txt" is excluded
 * 
 * value: its content 
 */
export var output: EPOutput;
export var api: EPAPI;