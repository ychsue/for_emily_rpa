//@ts-check
/// <reference path="../dts/forWebScript.d.ts" />

const { default: _ } = require("lodash");
const { download, run, mouseDown, mouseUp, mouse, nodes, write, clearSessionData, repeat } = require("../dts/forWebScript");

(async () => {
    //#region 要複製的區段

    // 針對新聞網頁的新聞列表，擷取每則新聞摘要內容

    nodes.forEach((node, index) => {
        /** @type HTMLDivElement */
        // @ts-ignore
        let divNode = node;
        write('news-' + index + '.txt', divNode.innerText);
    })

    /** @type HTMLButtonElement|null */
    let node = document.querySelector("BUTTON#send");

    if (node) mouseDown(node);
    if (node) mouseUp(node);

    // control mouse actions
    await mouse.enable(true)
        .then(() => mouse.move(nodes[0], 0, 0))
        .then(() => mouse.clickLeft())
        .then(() => mouse.enable(false))

    // clear browser session data
    await clearSessionData()

    // 如果在現在網頁中找到「下一頁」按鈕，就在5秒後重新執行腳本
    /** @type HTMLButtonElement|null */
    let btn = document.querySelector('Button#nextPage')
    if (btn) {
        repeat(true, 5000);
        // 0.5秒後才點擊下一頁，避免腳本內還有需要執行的工作
        _.delay(() => (btn) ? btn.click() : null, 500)
    }

    // download(url, filename) API 為非同步函式，回傳一個 Promise 物件
    await download("https://example.com/pricing.pdf", "price.pdf")

    // run() API 為非同步函式，回傳一個 Promise 物件，也可以串接
    return run("96fcb9b5-e209-4051-b502-ffd142e31a87")
        .then(() => run("bb0a7f40-47e8-40ad-a7f9-d839ee8bcc5d"))

    //#endregion 要複製的區段
})() 
