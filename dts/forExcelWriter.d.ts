///<reference path="./common.d.ts"/>

export interface EWAPI {
    addSheet: (header: string[], rows: { [key: string]: string | number }[], sheetName: string) => null;
    delSheet: (sheetName: string) => null
    files: () => string[]
    getCell: (sheetName: string, r?: 0 | number, c?: 0 | number) => string | number | null
    // mergeCells: (name, sr, sc, er, ec) => {… }
    // merges: (name) => {… }
    read: (fileName: string, encoding?: 'utf8' | string) => string
    remove: (fileName: string) => null
    setCell: (sheetName: string, r: 0 | number, c: 0 | number, value: string | number, style?: EWStyle) => null
    // setColWidth: (name, c, w) => {… }
    // setRowHeight: (name, r, h) => {… }
    sheetNames: () => string[]
    write: (fileName: string, content: string, a?: string) => null
}

export interface EWStyle {
    alignment?: {
        vertical: string;
        horizontal: string;
        wrapText: boolean;
    }
    font?: {
        name: string;
        sz: number;
        color: {
            rgb: string;
        }
        bold: boolean;
        italic: boolean;
        underline: boolean;
        strike: boolean;
    }
    fill?: {
        fgColor: {
            rgb: string;
        }
    }
    border?: {
        top: BorderStyle,
        bottom: BorderStyle,
        left: BorderStyle,
        right: BorderStyle
    }
}

export interface BorderStyle {
    style: 'thin' | string,
    color: { rgb: string }
}

export var api: EWAPI;

export var input: {
    Sheets: {
        [sheetName: string]: {
            [cellName: string]: {
                v: string | number;
                t: string;
                w: string;
            }
        }
    }
}