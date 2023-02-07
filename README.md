# 前言
這個 package 主要是為了讓寫 [Emily.RPA](https://docs.emily.tips) 的人在寫 JS 程式時也可以享受 Intellisense 的便利性。
# 先備要件
1. 請先安裝 VSCode 與 nodejs
2. 下載此 package，然後執行 `npm install`，這樣，至少 `moment` 與 `lodash` 是可以使用的。
3. 將想寫的 Emily.RPA 的程式寫成如 `codes` 目錄下的 JS 檔案那樣
    - 檔案開頭放上 `//@ts-check`，這樣它才會認真地檢查你的程式。
    - (Optional)由於Emily 的每個 WAP 都有自己的環境，所以，針對不同 WAP，在 `dts/` 目錄裡有各WAP各自對應的定義檔 `*.d.ts`，請利用
    ``` js
    /// <reference path="../dts/你要用的WAP環境.d.ts" />
    ```
    來讓它認得要由哪取得定義。
# 使用方式
1. 首先，你可以利用目錄來將你的 Emily Prjoect 與其下的子技能們分門別類，然後，用到 WAP 的地方才變成 `.js` 檔。
2. 在個別的 `.js` 檔裡，由於為了能夠模擬 Emily.RPA 裡的環境，其實檔案前幾行與後幾行是多餘的，所以，我將實際要貼到 Emily.RPA 的部分包在 `#region Emily要的部分` 與 `#endregion Emily要的部分` 中間。
    - (理由)：當我按 `Ctrl-K,Ctrl-0` 時它就會全部 fold 起來，當我要複製程式碼時，我只要將此區域當作一行來 Copy 即可。
    - 其餘與 folding 相關常用的 shortcuts 有 `Ctrl-shift-[` 與 `Ctrl-shift-]` 。
    - 結構如下：
    ``` js
    //@ts-check
    /// <reference path="..."> //不一定需要
    ..... 一些按 Tab 自動加入的內容，或者你想要給的 fake 資料，都在此宣告

    (async ()=>{ // Async 的開頭，若用不著 await 等異部動作，可以不要

        //#region Emily要的部分
        到時要貼的程式片段，可以使用
        await 這個關鍵字。
        //#endregion Emily要的部分

    })(); // Async 的結尾，若用不著 await 等異部動作，可以不要
    ```

3. 最常用的鍵是 `tab` 鍵，因為它可以套用 intellisense 來自動補完，有時也會提供 Fix Bug 的建議。若有錯誤時，在錯誤的那一行按 `Ctrl-.` 會顯示可能的修正建議。

# 結語
當然，如果你已經將 Emily.RPA，moment，lodash 等用得很熟，那這個 package 對你應該沒甚麼用處，不過，它可以幫助我更快地找出語法與拼寫上的錯誤，希望對你也有幫助。