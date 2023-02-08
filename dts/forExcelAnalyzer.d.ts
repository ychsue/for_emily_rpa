// Doc:  https://docs.emily.tips/excel2txt

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