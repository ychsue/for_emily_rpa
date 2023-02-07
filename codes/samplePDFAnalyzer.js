//@ts-check

const { input, output } = require("../dts/forPDFAnalyzer");

//#region 實際需要的程式
// 1.Resolve single value by Name:
/** @type import("../dts/forPDFAnalyzer").TargetForOne */
let target1 = { keyName: "PRODUCTION ORDER", keyBounds: { "page": 1 }, valPos: "RIGHT" };

let productOrderNum1 = input.resolve(target1);
// result: productOrderNum.text = “423022”


// 2.Resolve single value by object:
let orderObj = input.getKeyObj("PRODUCTION ORDER", { page: 1 })
/** @type import("../dts/forPDFAnalyzer").TargetForOne */
let target2 = { keyObj: orderObj, valPos: "RIGHT" }
let productOrderNum = input.resolve(target2);
// result: productOrderNum.text = “423022”

// 3.Resolve single value with regExp Filter:
/** @type import("../dts/forPDFAnalyzer").TargetForOne */
let target3 = { keyName: "Coord #", keyBounds: { page: 1 }, valPos: "RIGHT" }
/** @type import("../dts/forPDFAnalyzer").MainOptions */
let options3 = { "regExp": /\d{2}\/\d{2}\/\d{2}/ }
let issueDate = input.resolve(target3, options3);
// result: issueDate .text = “06/24/20”

// 4.Resolve multiples values by start/endKeyObjects:
let startObj = input.getKeyObj("Ship Type", { page: 1 })
let endObj = input.getKeyObj("Ship Terms", { page: 1 })
/** @type import("../dts/forPDFAnalyzer").TargetForRange */
let target4 = { startKeyObj: startObj, endKeyObj: endObj, valPos: "RIGHT" }
let interData = input.resolveRange(target4)
//Result:  interData[0].text = “AW”
//Result:  interData[1].text = “Ship Via"
//Result:  interData[2].text = “SEA”

// 5.Resolve multiples values by valBounds:
let sellerObj = input.getKeyObj("To (Seller):", { page: 1 })
let codeObj = input.getKeyObj("Code:", { page: 1 })
let accObj = input.getKeyObj("Acc Sup:", { page: 1 })
/** @type import("../dts/forPDFAnalyzer").TargetForRange */
let target5 = { valBounds: { top: sellerObj.LB.y, right: accObj.LB.x, bottom: codeObj.LT.y, page: 1 } }
let address = input.resolveRange(target5)
//Result:  address[0].text = “TAIEASY INTERNATIONAL. CO., LTD”
//Result:  address[1].text = “11F., NO. 1, JIHU RD., NEIHU DIST.,"
//Result:  address[2].text = “TAIPEI CITY 114,”
//Result:  address[3].text = “TAIWAN (R.O.C.)”
//Result:  address[4].text = “TAIPEI CITY, TAIWAN”

// 6.Resolve multiples values by relValBounds
let facObj = input.getKeyObj("Mfrag Fac:", { page: 1 })
/** @type import("../dts/forPDFAnalyzer").TargetForRange */
let target6 = { relValBounds: { top: -0.01, right: 0.25, bottom: 0.09, left: 0.0 } }
let location = input.resolveRange(target6)
//Result:  location[0].text = “FORMOSA VIET NAM TEXTILE INDUSTRY”
//Result:  location[1].text = “CO.,LTD"
//Result:  location[2].text = “MY XUAN A2 INDUSTRIAL ZONE, MY XUAN”
//Result:  location[3].text = “WARD,”
//Result:  location[4].text = “PHU MY TOWN, BA RIA - VUNG YAU”

// 7.Resolve value with ignore options
let buyerObj = input.getKeyObj("By Buyer", { page: 1 })
/** @type import("../dts/forPDFAnalyzer").TargetForOne */
let target7 = { keyObj: buyerObj, valPos: "DOWN" }
let options7 = { ignoreHeader: 0.22, ignoreFooter: 0.85 }
let downVal = input.resolveRange(target7, options7)
// downVal.text = ”To (Seller)”

//#endregion 實際需要的程式
