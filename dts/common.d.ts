export var mode: "learn" | string;
export var folder: string; // The workspace folder
// Runtime
// insertTextFromFile
// archive
// setHighlighting
// learnViewPort
// ignoreRecord
export function readText(filename: string,encoding?: string): string
export function writeText(filename: string, context: string): null
export function remove(filename: string): null
export function rename(oldName: string, newName: string): null
/**
 * 重複執行此腳本
 * @param isRepeat Check whether you should run it
 * @param delay Repeat the whole WAS after @delay ms
 */
export function repeat(isRepeat: boolean, delay?: number): null

//#region Mouse
export function mouseEnter(node: Element): null
export function mouseMove(node: Element, x: number, y: number): null
export function mouseLeave(node: Element): null
export function mouseDown(node: Element, x?: number, y?: number): null
export function mouseUp(node: Element, x?: number, y?: number): null
export function mouseClick(node: Element): null
export function mouseDblClick(node: Element): null
export function mouseContextmenu(node: Element, x: number, y: number): null
export function clearSessionData(): Promise<undefined>
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

export function sleep(ms: number): Promise<undefined>

// insertText
// locateNodes
// runTask
export function download(url: string, filename: string): Promise<null>
// detectFrames
// native
export interface CommonVUE {
    // TODO
    API: CommonAPI;
}
export interface CommonAPI {
    // TODO
    clipboard: {
        readText: () => string;
        writeText: (text: string) => null;
    }
}

export var vue: CommonVUE;
