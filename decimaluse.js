var Decimal=require("decimal");

var a = 0.1;
var b = 0.2;

//浮点数在变为String的时候会出现精度的损失，直接进行运算也会出现精度问题
console.log('0.1 以二进制表示：', a.toString(2));
console.log('0.2 以二进制表示：', b.toString(2));
console.log('直接加法运算 0.1 + 0.2 =', a + b);

//直接通过
console.log(new Decimal(a).add(new Decimal(b)).toNumber())
