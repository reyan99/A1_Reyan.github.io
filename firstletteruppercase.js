let str = prompt("Type a sentence:");
let arr = str.toLowerCase().split(" ");
for (var i = 0; i < arr.length; i++) {
  arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
let str2 = arr.join(" ");
console.log(str2);