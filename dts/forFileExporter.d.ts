///<reference path="common.d.ts"/>

export interface FileExporterAPI {
    files: () => Array<string>;
    remove: (filename: string) => void;
    write: (filename: string, content: string) => void;
    read: (filename: string) => string;
}

export var api: FileExporterAPI;

export var input: { src: string, dst: string }[];
export var output: { src: string, dst: string }[];