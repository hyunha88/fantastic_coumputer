function result() {
  console.log(1);
  let i_count = 0;
  let e_count = 0;
  let n_count = 0;
  let s_count = 0;
  let t_count = 0;
  let f_count = 0;
  let j_count = 0;
  let p_count = 0;

  let num = document.getElementsByClassName("i");
  console.log(num);
  for (let i = 0; i < num.length; i++) {
    if (num[i].checked) {
      i_count++;
    }
  }

  num = document.getElementsByClassName("e");
  for (let i = 0; i < num.length; i++) {
    if (num[i].checked) {
      e_count++;
    }
  }

  num = document.getElementsByClassName("n");
  for (let i = 0; i < num.length; i++) {
    if (num[i].checked) {
      n_count++;
    }
  }

  num = document.getElementsByClassName("s");
  for (let i = 0; i < num.length; i++) {
    if (num[i].checked) {
      s_count++;
    }
  }

  num = document.getElementsByClassName("t");
  for (let i = 0; i < num.length; i++) {
    if (num[i].checked) {
      t_count++;
    }
  }

  num = document.getElementsByClassName("f");
  for (let i = 0; i < num.length; i++) {
    if (num[i].checked) {
      f_count++;
    }
  }

  num = document.getElementsByClassName("p");
  for (let i = 0; i < num.length; i++) {
    if (num[i].checked) {
      p_count++;
    }
  }

  num = document.getElementsByClassName("j");
  for (let i = 0; i < num.length; i++) {
    if (num[i].checked) {
      j_count++;
    }
  }

  if (e_count > i_count) {
    //1
    if (n_coount > s_coount) {
      if (f_count > t_count) {
        if (j_count > p_count) {
          location.href = "result_enfj.html";
        }
      }
    }
  }

  if (e_count > i_count) {
    //2
    if (n_count > s_count) {
      if (f_count > t_count) {
        if (p_count > j_count) {
          location.href = "result_enfp.html";
        }
      }
    }
  }

  if (e_count > i_count) {
    //3
    if (n_count > s_count) {
      if (t_count > f_count) {
        if (p_count > j_count) {
          location.href = "result_entp.html";
        }
      }
    }
  }

  if (e_count > i_count) {
    //4
    if (n_count > s_count) {
      if (t_count > p_count) {
        if (j_count > p_count) {
          location.href = "result_entj.html";
        }
      }
    }
  }

  if (e_count > i_count) {
    //5
    if (s_count > n_count) {
      if (f_count > t_count) {
        if (p_count > j_count) {
          location.href = "result_esfp.html";
        }
      }
    }
  }

  if (e_count > i_count) {
    //6
    if (s_count > n_count) {
      if (f_count > t_count) {
        if (j_count > p_count) {
          location.href = "result_esfj.html";
        }
      }
    }
  }

  if (e_count > i_count) {
    //7
    if (s_count > n_count) {
      if (t_count > f_count) {
        if (p_count > j_count) {
          location.href = "result_estp.html";
        }
      }
    }
  }

  if (e_count > i_count) {
    //8
    if (s_count > n_count) {
      if (t_count > f_count) {
        if (j_count > t_count) {
          location.href = "result_estj.html";
        }
      }
    }
  }

  if (i_count > e_count) {
    //9
    if (s_count > n_count) {
      if (f_count > t_count) {
        if (p_count > j_count) {
          location.href = "result_isfp.html";
        }
      }
    }
  }

  if (i_count > e_count) {
    //10
    if (s_count > n_count) {
      if (f_count > t_count) {
        if (j_count > p_count) {
          location.href = "result_isfj.html";
        }
      }
    }
  }

  if (i_count > e_count) {
    //11
    if (s_count > n_count) {
      if (t_count > f_count) {
        if (p_count > j_count) {
          location.href = "result_istp.html";
        }
      }
    }
  }

  if (i_count > e_count) {
    //12
    if (s_count > n_count) {
      if (t_count > f_count) {
        if (j_count > p_count) {
          location.href = "result_istj.html";
        }
      }
    }
  }

  if (i_count > e_count) {
    //13
    if (n_count > s_count) {
      if (t_count > f_count) {
        if (p_count > j_count) {
          location.href = "result_intp.html";
        }
      }
    }
  }

  if (i_count > e_count) {
    //14
    if (n_count > s_count) {
      if (t_count > f_count) {
        if (j_count > p_count) {
          location.href = "result_intj.html";
        }
      }
    }
  }

  if (i_count > e_count) {
    //15
    if (n_count > s_count) {
      if (f_count > t_count) {
        if (p_count > j_count) {
          location.href = "result_infp.html";
        }
      }
    }
  }

  if (i_count > e_count) {
    //16
    if (n_count > s_count) {
      if (f_count > t_count) {
        if (j_count > p_count) {
          location.href = "result_infj.html";
        }
      }
    }
  }
}
