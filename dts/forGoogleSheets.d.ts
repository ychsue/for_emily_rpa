///<reference path="common.d.ts"/>

// Doc:  https://docs.emily.tips/google-sheets

import { GoogleSpreadsheet } from "google-spreadsheet";


type Rows = { [key: string]: string | number }[]; // TODO

export interface GSRows extends Rows {
    header?: string[];
}

export interface GSAPI {
    addRows: (sheetName: string, rows: GSRows) => Promise<undefined>;
    addSheet: (header: string[], rows: GSRows, sheetName: string) => Promise<undefined>;
    /**
     * 
     * @param sheetName sheets' name
     * @param rowIndex default is 0: index of the row you want to delete
     * @returns a promise
     */
    delRow: (sheetName: string, rowIndex?: number) => Promise<null>;
    delSheet: (sheetName: string) => Promise<undefined>;

    files: () => string[];

    getCell: (sheetName: string, rowIndex = 0, colIndex = 0) => Promise<string | number>;
    getRows: (sheetName: string) => Promise<GSRows>;

    read: (filename: string, encoding?: "utf8") => string;
    remove: (filename: string) => undefined;

    setCell: (sheetName: string, rowIndex = 0, colIndex = 0, value: string | number) => Promise<>;

    sheetNames: () => string[];
    write: (filename: string, textdata: string) => undefined;

}

export var api: GSAPI;
export var input: GoogleSpreadsheet;