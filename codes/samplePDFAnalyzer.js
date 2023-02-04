//@ts-check

const { input, output } = require("../dts/forPDFAnalyzer");

console.log(input.textData[0].detectLine("up"));

let a = input.getKeyObj('a', { page: 2 }, { ignoreFooter: 0.02, regExp: /點選.*/g });
console.log(a);

let dotObj = input.textData.filter((o) => o.text.includes("點選"));
console.log(dotObj);
