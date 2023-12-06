///<reference path="common.d.ts"/>

export interface FolderAPI {
    files: () => Promise<Array<string>>;
    folders: () => Promise<Array<string>>;
    mkdir: (foldername: string) => Promise<void>;
    stat: (filename: string) => Promise<STAT>;
    rename: (oldName: string, newName: string) => Promise<void>; // TODO
    remove: (filename: string) => Promise<void>;

}

export interface STAT {
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

export type TxtFiles = { [key: string]: string | number };

export var input: TxtFiles;
export var output: TxtFiles;
export var api: FolderAPI;