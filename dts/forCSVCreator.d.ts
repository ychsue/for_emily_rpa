///<reference path="common.d.ts"/>

// Doc:  https://docs.emily.tips/excel2txt

/**
 * key: txt file name
 * value: the content of the txt file
 */
export var input: Array<{ [key: string]: string }>;

/**
* [eachRow] &
* header: Looks like {columnName:value}
*/
export interface CCOutput extends Array<{ [key: string]: string | number }> {
    header: Array<string>;
}

export interface CCAPI {
    files: (a?: any) => string[]; // TODO
    read: (fileName: string, encoding?: "utf8") => string;
    remove: (fileName: string) => undefined;
    write: (fileName: string, content: string, a?: string) => undefined // TODO
}

export var output: CCOutput;
export var api: CCAPI;