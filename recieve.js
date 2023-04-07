var test1 = localStorage.getItem("test1");
var test2 = localStorage.getItem("test2");
var test3 = localStorage.getItem("test3");
var test4 = localStorage.getItem("test4");
var test5 = localStorage.getItem("test5");
var test6 = localStorage.getItem("test6");
var test7 = localStorage.getItem("test7");
var test8 = localStorage.getItem("test8");
var test9 = localStorage.getItem("test9");
var test10 = localStorage.getItem("test10");
var test11 = localStorage.getItem("test11");
var test12 = localStorage.getItem("test12");

test = [
  test1,
  test2,
  test3,
  test4,
  test5,
  test6,
  test7,
  test8,
  test9,
  test10,
  test11,
  test12,
];

result = [0, 0, 0, 0, 0, 0, 0, 0];

for (var i = 0; i < 12; i++) {
  for (var j = 0; j < 14; j++) {
    if (!!Number(test[i][j])) {
      result[j / 2] += Number(test[i][j]);
    }
  }
}
console.log(result); // i,e,n,s,t,f,j,p 순서

// localStorage.remove("test1");
// localStorage.remove("test2");
// localStorage.remove("test3");
// localStorage.remove("test4");
// localStorage.remove("test5");
// localStorage.remove("test6");
// localStorage.remove("test7");
// localStorage.remove("test8");
// localStorage.remove("test9");
// localStorage.remove("test10");
// localStorage.remove("test11");
// localStorage.remove("test12");

var url = "";
if (result[0] > result[1]) {
  url += "i";
} else url += "e";
if (result[2] > result[3]) {
  url += "n";
} else url += "s";
if (result[4] > result[5]) {
  url += "t";
} else url += "f";
if (result[6] > result[7]) {
  url += "j";
} else url += "p";
url += ".html";
location.href = "result_" + url;
