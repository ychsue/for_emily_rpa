// input{} loads workspace txt file as value and filename as key
// output[{}] represents row objects of output sheet
//@ts-check

let input = {};
let output = [];

//以上不取

let meta = {};

let cols = ["溫度", "降雨機率"];
Object.keys(input).forEach((key) => {
    cols.forEach((col) => {
        if (key.includes(col)) {
            let area = key.split(" ")[0];
            if (meta[area] == undefined) {
                meta[area] = {};
            }
            meta[area][col] = input[key];
        }
    });
});

// Output
Object.keys(meta).forEach(area => {
    let obj = meta[area];
    obj["地區"] = area;
    output.push(obj);
});

console.log(meta);
console.log(output);