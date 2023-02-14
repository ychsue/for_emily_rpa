export interface WoSAPI {
    files: () => Array<string>;
    stat: (filename: string) => STAT;
    read: (filename: string, encoding?: "utf8") => string;
    write: (filename: string, content: string) => void;
    rename: (oldName: string, newName: string) => void; // TODO
    remove: (filename: string) => void;

    run: (uuid: string, folder?: string) => Promise<void>;
    readCSV: (filename: string, separator?: "," | string, skipLines?: 0 | number, headers?: string[]) => Promise<{ [key: string]: any }[]>; // TODO
    splitCSV: (filename: string, separator: string, skiplines: number, newname: string, maxRows: number) => Promise<string[]>; // TODO
    writeCSV: (filename: string, rows: Array<{ [key: string]: string | number }>, header: string[]) => Promise<void>; //TODO

    zip: (password?: string) => ZIP; // TODO

    clipboard: Clipboard; // TODO
    googlesheet: (id: string) => Promise<any>; // TODO
    ocr: (filename: string) => string; // TODO
    stt: (filename: string, lang: string, sampleRate: number) => Promise<string>; // TODO
    translate: (text: string, lang: string) => Promise<string>;
    twilio: (...args: any) => any; // TODO
    webhook: WebHook // TODO
}

export interface Stat {
    dev: number;
    mode: number;
    nlink: number;
    uid: number;
    gid: number;
    rdev: number;
    blksize: number;
    ino: number;
    size: number;
    blocks: number;
    atimeMs: number;
    mtimeMs: number;
    ctimeMs: number;
    birthtimeMs: number;
    atime: Date;
    mtime: Date;
    ctime: Date;
    birthtime: Date;
}


export interface ZIP {
    load: (filename: string) => Promise<void>;
    files: () => Promise<string[]>;
    extract: (path: string) => Promise<void>;
    add: (filename: string) => Promise<any>; // TODO
    save: (filename: string) => Promise<void>; // TODO
}

export interface WebHook {
    create: (a?: any) => any; //TODO
    read: (a?: any) => any; // TODO
}

export type TxtFiles = { [key: string]: string | number };

export var input: TxtFiles;
export var output: TxtFiles;
export var api: WoSAPI;