let i_count = 0;
let e_count = 0;
let n_count = 0;
let s_count = 0;
let t_count = 0;
let f_count = 0;
let j_count = 0;
let p_count = 0;
let count_arr = [
  i_count,
  e_count,
  n_count,
  s_count,
  t_count,
  f_count,
  j_count,
  p_count,
];

let type_i = document.getElementsByClassName("i")[0];
let type_e = document.getElementsByClassName("e")[0];
let type_n = document.getElementsByClassName("n")[0];
let type_s = document.getElementsByClassName("s")[0];
let type_t = document.getElementsByClassName("t")[0];
let type_f = document.getElementsByClassName("f")[0];
let type_j = document.getElementsByClassName("j")[0];
let type_p = document.getElementsByClassName("p")[0];
let type_arr = [type_i, type_e, type_n, type_s, type_t, type_f, type_j, type_p];

const btn = document.querySelectorAll("input");

function test1() {
  for (let i = 0; i < type_arr.length; i++) {
    if (type_arr[i]) {
      type_arr[i].checked ? (count_arr[i] += 1) : console.log(1);
    }
  }
  localStorage.setItem("test1", count_arr);
  location.href = "test2.html";
}
function test2() {
  for (let i = 0; i < type_arr.length; i++) {
    if (type_arr[i]) {
      type_arr[i].checked ? (count_arr[i] += 1) : console.log(1);
    }
  }
  localStorage.setItem("test2", count_arr);
  location.href = "test3.html";
}
function test3() {
  for (let i = 0; i < type_arr.length; i++) {
    if (type_arr[i]) {
      type_arr[i].checked ? (count_arr[i] += 1) : console.log(1);
    }
  }
  localStorage.setItem("test3", count_arr);
  location.href = "test4.html";
}
function test4() {
  for (let i = 0; i < type_arr.length; i++) {
    if (type_arr[i]) {
      type_arr[i].checked ? (count_arr[i] += 1) : console.log(1);
    }
  }
  localStorage.setItem("test4", count_arr);
  location.href = "test5.html";
}
function test5() {
  localStorage.setItem("test5", count_arr);
  location.href = "test6.html";
}
function test6() {
  for (let i = 0; i < type_arr.length; i++) {
    if (type_arr[i]) {
      type_arr[i].checked ? (count_arr[i] += 1) : console.log(1);
    }
  }
  localStorage.setItem("test6", count_arr);
  location.href = "test7.html";
}
function test7() {
  for (let i = 0; i < type_arr.length; i++) {
    if (type_arr[i]) {
      type_arr[i].checked ? (count_arr[i] += 1) : console.log(1);
    }
  }
  localStorage.setItem("test7", count_arr);
  location.href = "test8.html";
}
function test8() {
  for (let i = 0; i < type_arr.length; i++) {
    if (type_arr[i]) {
      type_arr[i].checked ? (count_arr[i] += 1) : console.log(1);
    }
  }
  localStorage.setItem("test8", count_arr);
  location.href = "test9.html";
}
function test9() {
  for (let i = 0; i < type_arr.length; i++) {
    if (type_arr[i]) {
      type_arr[i].checked ? (count_arr[i] += 1) : console.log(1);
    }
  }
  localStorage.setItem("test9", count_arr);
  location.href = "test10.html";
}
function test10() {
  for (let i = 0; i < type_arr.length; i++) {
    if (type_arr[i]) {
      type_arr[i].checked ? (count_arr[i] += 1) : console.log(1);
    }
  }
  localStorage.setItem("test10", count_arr);
  location.href = "test11.html";
}
function test11() {
  for (let i = 0; i < type_arr.length; i++) {
    if (type_arr[i]) {
      type_arr[i].checked ? (count_arr[i] += 1) : console.log(1);
    }
  }
  localStorage.setItem("test11", count_arr);
  location.href = "test12.html";
}
function test12() {
  for (let i = 0; i < type_arr.length; i++) {
    if (type_arr[i]) {
      type_arr[i].checked ? (count_arr[i] += 1) : console.log(1);
    }
  }
  localStorage.setItem("test12", count_arr);
  location.href = "result.html";
}

// btn[0].addEventListener("click", () => {
//   localStorage.setItem("test1", count_arr);
//   location.href = "test2.html";
// });
// btn[1].addEventListener("click", () => {
//   localStorage.setItem("test1", count_arr);
//   location.href = "test2.html";
// });
// let num = document.getElementsByClassName("i");

// for (let i = 0; i < num.length; i++) {
//   if (num[i].checked) {
//     i_count++;
//   }
// }

// num = document.getElementsByClassName("e");
// for (let i = 0; i < num.length; i++) {
//   if (num[i].checked) {
//     e_count++;
//   }
// }

// num = document.getElementsByClassName("n");
// for (let i = 0; i < num.length; i++) {
//   if (num[i].checked) {
//     n_count++;
//   }
// }

// num = document.getElementsByClassName("s");
// for (let i = 0; i < num.length; i++) {
//   if (num[i].checked) {
//     s_count++;
//   }
// }

// num = document.getElementsByClassName("t");
// for (let i = 0; i < num.length; i++) {
//   if (num[i].checked) {
//     t_count++;
//   }
// }

// num = document.getElementsByClassName("f");
// for (let i = 0; i < num.length; i++) {
//   if (num[i].checked) {
//     f_count++;
//   }
// }

// num = document.getElementsByClassName("p");
// for (let i = 0; i < num.length; i++) {
//   if (num[i].checked) {
//     p_count++;
//   }
// }

// num = document.getElementsByClassName("j");
// for (let i = 0; i < num.length; i++) {
//   if (num[i].checked) {
//     j_count++;
//   }
// }
