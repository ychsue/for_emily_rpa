//@ts-check
/// <reference path="../dts/forGoogleSheets.d.ts"/>

const { api, input } = require("../dts/forGoogleSheets");

(async () => {

    //#region Emily要的部分

    // 利用 input 來取值
    let sheet = await input.addSheet({ title: "測試" });

    // 印出所有試算表的標題
    console.log(api.sheetNames())
    // 新增一個標題為 “new sheet” 的試算表
    let header = ['姓名', '電子郵件']
    let rows = [
        { '姓名': 'Alice', '電子郵件': 'alice@mail.com' },
        { '姓名': 'Bob', '電子郵件': 'bob@mail.com' }
    ];
    await api.addSheet(header, rows, 'new sheet')

    // 刪除一個標題為 “old sheet” 的試算表
    await api.delSheet('old sheet')

    // 新增數筆資料到標題為 “new sheet“ 的試算表
    let rows2 = [{ '姓名': 'Candy', '電子郵件': 'candy@mail.com' }]
    await api.addRows('new sheet', rows2)

    // 讀取標題為 “new sheet“ 的試算表資料
    let rows3 = await api.getRows('new sheet')
    console.log(rows3)

    // 刪除第三列, 從零算起, 不包含標頭列
    await api.delRow('new sheet', 2) // row of 'Candy' will be deleted

    // 讀取儲存格, 從零算起, 有包含標頭咧
    let cell = await api.getCell('new sheet', 2, 0)
    console.log(cell) // 'Bob'

    // 寫入儲存格, 從零算起, 有包含標頭列
    await api.setCell('new sheet', 2, 0, 'Bob Wang')

    //#endregion Emily要的部分

})();