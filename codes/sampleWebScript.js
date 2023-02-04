//@ts-check
/// <reference path="../dts/forWebScript.d.ts" />

const { default: _ } = require("lodash");
const { download, run } = require("../dts/forWebScript");

(async () => {
    //#region 要複製的區段

    await download('a', 'b').then(() => run('a').then(() => { }));
    _.delay(() => { }, 500);

    //#endregion 要複製的區段
})() 
