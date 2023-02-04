
interface Node {
    innerText: string;
    value: string; // For <input>
    click: () => {};
}

export var nodes: Node[];

/**
 * 讀檔
 * @param filename The filename
 * @param encoding 'utf8'
 */
export function read(filename: string, encoding?: "utf8"): string
export function write(filename: string, content: string): null

/**
 * 重複執行此腳本
 * @param isRepeat Check whether you should run it
 * @param delay Repeat the whole WAS after @delay ms
 */
export function repeat(isRepeat: boolean, delay?: number): null

export function run(uuid: string): Promise<null>
export function download(url: string, filename: string): Promise<null>

//#region Mouse
export function mouseEnter(node: Node): null
export function mouseMove(node: Node, x: number, y: number): null
export function mouseLeave(node: Node): null
export function mouseDown(node: Node, x: number, y: number): null
export function mouseUp(node: Node, x: number, y: number): null
export function mouseClick(node: Node): null
export function mouseDblClick(node: Node): null
export function mouseContextmenu(node: Node, x: number, y: number): null
// TODO: DA mouse part
// https://docs.emily.tips/web-tool
//#endregion Mouse

export function clearSessionData(): Promise<null>
