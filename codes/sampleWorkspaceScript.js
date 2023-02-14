//@ts-check
/// <reference path="../dts/forWorkspaceScript.d.ts"/>

const { default: moment } = require("moment");
const { api, input, output } = require("../dts/forWorkspaceScript");


(async () => {

    //#region Code
    console.log(api)
    // 一筆筆列出所有工作資料夾中的檔案
    api.files().forEach((file) => console.log(file))

    // 讀取檔案的各類時戳資訊，例如檔案建立時間、修改時間、最近存取時間
    console.log(api.stat('price.txt'))

    // 讀取工作資料夾中的文字檔 price.txt
    console.log(api.read('price.txt'))

    // 寫出文字檔到工作資料夾中
    api.write('time.txt', moment().format('HH:mm:ss'))

    // 修改工作資料夾中的檔案名稱
    api.rename('time.txt', 'currentTime.txt')
    // 刪除工作資料夾中的檔案
    api.remove('price.txt')

    // 讀取工作資料夾中 price.txt 的值
    let price = input['price']
    console.log('price:', price)

    // 寫入值到工作資料夾中 new_price.txt 
    let new_price = 100
    output['new_price'] = new_price

    // 呼叫執行某個自動化技能，其識別碼為 ef4e12a6-636f-4e58-8e14-212089e6fd23
    await api.run('ef4e12a6-636f-4e58-8e14-212089e6fd23', 'ttt')

    // 將工作資料夾中的CSV格式大檔案分割成多個CSV格式小檔案，每個檔案不超過5000筆資料
    let files = await api.splitCSV('large.csv', ',', 0, 'small.csv', 2)

    // 寫出的檔案：['small(0).csv', 'small(1).csv', ... ] 存成一個檔案列表
    await api.writeCSV('list.csv', files.map((file, index) => { return { file, index } }), ['index', 'file'])

    // 讀取工作資料夾中的CSV檔案並且印出資料
    let list = await api.readCSV('list.csv')
    console.log(list)

    // 讀取 input.zip 內檔案
    let inputZip = api.zip()
    await inputZip.load('input.zip')
    let filesInZip = await inputZip.files()
    filesInZip.forEach((file) => console.log(file))

    // 解壓縮 input.zip 內的檔案 a.txt
    inputZip.extract('new_price.txt')

    // 壓縮工作資料夾中 b.jpg 與 c.pdf 成 output.zip
    let outputZip = api.zip()
    await outputZip.add('b.jpg')
    await outputZip.add('c.pdf')
    await outputZip.save('output.zip')
    //#endregion Code

})();