//@ts-check
/// <reference path="../dts/forDA.d.ts"/>

const { api } = require("../dts/forDA");

(async () => {

    //#region 實際需要的程式
    // 取得螢幕長寬
    let size = await api.screen.size()
    console.log(size)

    // 在螢幕上指定區域內(可忽略)尋找與指定圖檔最相似位置 
    let found1 = await api.screen.find('crop-1234.png', { left: 0, top: 0, width: 600, height: 600 })
    console.log(found1)

    // 在螢幕上需找與指定圖檔有95%以上相似的所有可能位置 
    let found2 = await api.screen.find('crop-1234.png', { confidence: 0.95, all: true })
    console.log(found2)

    // 最長10秒等待螢幕上指定區域(可忽略)出現與指定圖檔最相似的位置
    let found3 = await api.screen.waitFor('crop-5678', 10000, { left: 0, top: 0, width: 600, height: 600, confidence: 0.95 })

    // 從螢幕(0,0)截取長寬都是100像素的圖片
    await api.screen.capture('snapshot.png', 0, 0, 100, 100)

    let x = 25, y = 25;
    // 找到與crop-2345最相似位置(信心程度95%)後點擊相對位移(x,y)並等待500ms後繼續下個指令
    await api.clickCrop('crop-2345', x, y, { confidence: 0.95, wait: 500 })

    // 找到與crop-3456最相似位置(信心程度95%)後將滑鼠游標移到相對位移(x,y)並等待500ms後再繼續下個指令
    await api.moveToCrop('crop-3456', x, y, { confidence: 0.95, wait: 500 })

    // 移動滑鼠游標至(x,y)
    await api.mouse.move(x, y)

    // 點擊滑鼠左鍵後再點擊右鍵
    await api.mouse.clickLeft()
    await api.mouse.clickRight()

    // 將滑鼠游標從現在位置拖曳到(x,y)
    await api.mouse.drag(x, y)

    let n = 5;
    // 操作滑鼠滾輪往：上/下/左/右
    await api.mouse.scrollUp(n)
    await api.mouse.scrollDown(n)
    await api.mouse.scrollLeft(n)
    await api.mouse.scrollRight(n)

    // 從鍵盤發送 hello
    await api.keyboard.type('hello')

    // 按住與釋放按鍵
    await api.keyboard.press(api.key.A)
    await api.keyboard.release(api.key.A)

    // 發送鍵盤常用控制鍵 ENTER/ESC/BACK/TAB
    await api.keyboard.enter()
    await api.keyboard.escape()
    await api.keyboard.backspace()
    await api.keyboard.tab()

    // 發送鍵盤組合鍵 ALT+F4
    await api.keyboard.type(api.key.LeftAlt, api.key.F4)

    // 發送鍵盤：全選/複製/貼上
    await api.ctrlA()
    await api.ctrlC()
    await api.ctrlV()

    // 貼上文字快捷鍵
    await api.pasteText('hello')

    // 讀寫剪貼簿同步函式
    api.clipboard.writeText('hello')
    console.log(api.clipboard.readText())

    // 讀CSV檔API，分隔符號為逗點，讀取表頭須從檔頭略過0列
    let rows = await api.readCSV('input.csv', ',', 0)
    // 寫CSV檔API，表頭依序為name,age
    await api.writeCSV('output.csv', [{ name: 'Alice', age: 20 }, { name: 'Bob', age: 25 }], ['name', 'age'])

    // 等待5秒鐘
    await api.sleep(5000)

    // 開啟工作資料夾檔案
    await api.shell.openPath('output.csv')
    // 開啟任意檔案
    await api.shell.openPath('/Users/emily/Desktop/input.xlsx')
    // 開啟檔案總管並選取檔案
    await api.shell.showItemInFolder('/Users/emily/Desktop/input.xlsx')
    // 將檔案移至資源回收桶
    await api.shell.trashItem('/Users/emily/Desktop/input.xlsx')
    // 開啟網頁連結
    await api.shell.openExternal('https://google.com')
    //#endregion 實際需要的程式
})();