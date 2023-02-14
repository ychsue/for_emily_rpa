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
export function remove(filename: string): null

/**
 * 重複執行此腳本
 * @param isRepeat Check whether you should run it
 * @param delay Repeat the whole WAS after @delay ms
 */
export function repeat(isRepeat: boolean, delay?: number): null

export function run(uuid: string): Promise<null>
export function sleep(ms: number): Promise<undefined>
export function download(url: string, filename: string): Promise<null>

//#region Mouse
export function mouseEnter(node: Element): null
export function mouseMove(node: Element, x: number, y: number): null
export function mouseLeave(node: Element): null
export function mouseDown(node: Element, x?: number, y?: number): null
export function mouseUp(node: Element, x?: number, y?: number): null
export function mouseClick(node: Element): null
export function mouseDblClick(node: Element): null
export function mouseContextmenu(node: Element, x: number, y: number): null

// TODO: DA mouse part
export interface DAMouse {
    enable: (isEnable: boolean) => Promise<void>;
    move: (node: Element, offsetX: number, offsetY: number) => Promise<void>;
    clickLeft: () => Promise<void>;
    clickRight: () => Promise<void>;
    // drag: (unknown, unknown) => Promise<void>; // TODO
}
export var mouse: DAMouse;
// https://docs.emily.tips/web-tool
//#endregion Mouse

export function clearSessionData(): Promise<undefined>
