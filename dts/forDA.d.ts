// Generated by https://quicktype.io

export interface API {
    clipboard: Clipboard;
    ctrlA: () => Promise<undefined>;
    ctrlC: () => Promise<undefined>;
    ctrlV: () => Promise<undefined>;
    cmdA: () => Promise<undefined>;
    cmdC: () => Promise<undefined>;
    cmdV: () => Promise<undefined>;
    key: Key;
    keyboard: Keyboard;
    pasteText: (text: string) => Promise<undefined>;
    screen: DAScreen;
    shell: DAShell;
    sleep: (ms = 1000) => Promise<undefined>;

    clickCrop: (filename: string, offsetX: number, offsetY: number, options: DACropOptions) => Promise<undefined>;
    moveToCrop: (filename: string, offsetX: number, offsetY: number, options: DACropOptions) => Promise<undefined>;
    dragToCrop: (filename: string, offsetX: number, offsetY: number, options: DACropOptions) => Promise<undefined>;

    mouse: DAMouse;

    readCSV: (filename: string, separator: string, skiplines: number) => Promise<DARows>;
    writeCSV: (filename: string, rows: DARows, header: string[]) => Promise<undefined>;

    ocr: (pngFilename: string) => Promise<{
        text: string,
        words: string[]
    }>; // TODO
    // TODO
    // captureToOcr: (ref, offsetX, offsetY, width, height, searchLine, moveCursor) => ???
    // debug: (flag)=>undefined;
    // pollAbort: any;

    files: () => Promise<string[]>;
    read: (filename: string, coding?: "utf8") => Promise<string>;
    write: (filename: string, textdata: string) => Promise<undefined>;
    rename: (oldFilename: string, newFilename: string) => Promise<undefined>;
    remove: (filename: string) => Promise<undefined>;
}

export type DARows = { [key: string]: string | number }[]; // TODO

export interface DAMouse {
    clickLeft: () => Promise<undefined>;
    clickRight: () => Promise<undefined>;
    // config
    drag: (x: number, y: number) => Promise<undefined>;
    move: (x: number, y: number) => Promise<undefined>;
    scrollDown: (n: number) => Promise<undefined>;
    scrollLeft: (n: number) => Promise<undefined>;
    scrollRight: (n: number) => Promise<undefined>;
    scrollUp: (n: number) => Promise<undefined>;
}

export interface DAShell {
    openExternal: (url: string) => Promise<undefined>;
    openPath: (filename: string) => Promise<undefined>;
    showItemInFolder: (filename: string) => Promise<undefined>;
    trashItem: (filename: string) => Promise<undefined>;
}

// https://stackoverflow.com/questions/64773876/interface-for-function-with-multiple-arguments
type OneOrMore<T> = { 0: T } & Array<T>;
export interface Keyboard {
    backspace: () => Promise<undefined>;
    //    config
    enter: () => Promise<undefined>;
    escape: () => Promise<undefined>;
    tab: () => Promise<undefined>;
    press: (key: number) => Promise<undefined>;
    release: (key: number) => Promise<undefined>;
    type: (...input: OneOrMore<string | number>) => Promise<undefined>;
}

export interface DAScreen {
    /**
     * 
     * @param filename The PNG file's name. It will be stored at its work folder
     * @param x Left
     * @param y Top
     * @param w Width
     * @param h Height
     * @returns undefined
     */
    capture: (filename: string, x: number, y: number, w: number, h: number) => Promise<undefined>;

    find: (filename: string, options: DAScreenOptions) => Promise<DAScreenOptions>
    waitFor: (filename: string, timeout: number, options: DAScreenOptions) => Promise<DAScreenOptions>

    size: () => Promise<{
        width: number,
        height: number
    }>
}

export interface DAScreenOptions {
    left?: number;
    top?: number;
    width?: number;
    height?: number;
    confidence?: number;
    all?: boolean;
}
export interface DACropOptions {
    wait: number;
    confidence: number;
}

export interface Clipboard {
    clear: () => undefined;
    readText: () => string;
    writeText: (text: string) => undefined;
    // TODO:: For Other functions, please google "Electron clipboard"
}

export interface Key {
    Space: number;
    Escape: number;
    Tab: number;
    LeftAlt: number;
    LeftControl: number;
    RightAlt: number;
    RightControl: number;
    LeftShift: number;
    LeftSuper: number;
    RightShift: number;
    RightSuper: number;
    F1: number;
    F2: number;
    F3: number;
    F4: number;
    F5: number;
    F6: number;
    F7: number;
    F8: number;
    F9: number;
    F10: number;
    F11: number;
    F12: number;
    F13: number;
    F14: number;
    F15: number;
    F16: number;
    F17: number;
    F18: number;
    F19: number;
    F20: number;
    F21: number;
    F22: number;
    F23: number;
    F24: number;
    Num0: number;
    Num1: number;
    Num2: number;
    Num3: number;
    Num4: number;
    Num5: number;
    Num6: number;
    Num7: number;
    Num8: number;
    Num9: number;
    A: number;
    B: number;
    C: number;
    D: number;
    E: number;
    F: number;
    G: number;
    H: number;
    I: number;
    J: number;
    K: number;
    L: number;
    M: number;
    N: number;
    O: number;
    P: number;
    Q: number;
    R: number;
    S: number;
    T: number;
    U: number;
    V: number;
    W: number;
    X: number;
    Y: number;
    Z: number;
    Grave: number;
    Minus: number;
    Equal: number;
    Backspace: number;
    LeftBracket: number;
    RightBracket: number;
    Backslash: number;
    Semicolon: number;
    Quote: number;
    Return: number;
    Comma: number;
    Period: number;
    Slash: number;
    Left: number;
    Up: number;
    Right: number;
    Down: number;
    Print: number;
    Pause: number;
    Insert: number;
    Delete: number;
    Home: number;
    End: number;
    PageUp: number;
    PageDown: number;
    Add: number;
    Subtract: number;
    Multiply: number;
    Divide: number;
    Decimal: number;
    Enter: number;
    NumPad0: number;
    NumPad1: number;
    NumPad2: number;
    NumPad3: number;
    NumPad4: number;
    NumPad5: number;
    NumPad6: number;
    NumPad7: number;
    NumPad8: number;
    NumPad9: number;
    CapsLock: number;
    ScrollLock: number;
    NumLock: number;
    AudioMute: number;
    AudioVolDown: number;
    AudioVolUp: number;
    AudioPlay: number;
    AudioStop: number;
    AudioPause: number;
    AudioPrev: number;
    AudioNext: number;
    AudioRewind: number;
    AudioForward: number;
    AudioRepeat: number;
    AudioRandom: number;
}

export var api: API;