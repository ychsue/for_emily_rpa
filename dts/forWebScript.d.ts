/// <reference path="./common.d.ts"/>
// Doc:  https://docs.emily.tips/web-tool

// interface Node {
//     innerText: string;
//     value: string; // For <input>
//     click: () => {};
// }

export var nodes: Element[];

/**
 * 讀檔
 * @param filename The filename
 * @param encoding 'utf8'
 */
export function read(filename: string, encoding?: "utf8"): string
export function write(filename: string, content: string): null


export function run(uuid: string): Promise<null>

