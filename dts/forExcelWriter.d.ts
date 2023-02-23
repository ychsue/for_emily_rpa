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
    setCell: (sheetName: string, r?: 0 | number, c?: 0 | number, value: string | number, style?: EWStyle) => null
    // setColWidth: (name, c, w) => {… }
    // setRowHeight: (name, r, h) => {… }
    sheetNames: () => string[]
    write: (fileName: string, content: string, a?: string) => null
}

export namespace EWStyle {
    namespace alignment {
        const vertical: string;
        const horizontal: string;
        const wrapText: boolean;
    }
    namespace font {
        const name: string;
        const sz: number;
        namespace color {
            const rgb: string;
        }
        const bold: boolean;
        const italic: boolean;
        const underline: boolean;
        const strike: boolean;
    }
    namespace fill {
        namespace fgColor {
            const rgb_1: string;
            export { rgb_1 as rgb };
        }
    }
    namespace border {
        namespace top {
            export const style: string;
            export namespace color_1 {
                const rgb_2: string;
                export { rgb_2 as rgb };
            }
            export { color_1 as color };
        }
        namespace bottom {
            const style_1: string;
            export { style_1 as style };
            export namespace color_2 {
                const rgb_3: string;
                export { rgb_3 as rgb };
            }
            export { color_2 as color };
        }
        namespace left {
            const style_2: string;
            export { style_2 as style };
            export namespace color_3 {
                const rgb_4: string;
                export { rgb_4 as rgb };
            }
            export { color_3 as color };
        }
        namespace right {
            const style_3: string;
            export { style_3 as style };
            export namespace color_4 {
                const rgb_5: string;
                export { rgb_5 as rgb };
            }
            export { color_4 as color };
        }
    }
}

export var api: EWAPI;