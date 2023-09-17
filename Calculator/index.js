Swal.fire({
    title: 'CALCULATOR <br> For n! , e^n and [n] functions to work, First, type the number then click on their respective buttons, I hope that you will enjoy this Calculator .',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
      
      
      
          let mode = document.getElementById("span_main")
          let circle = document.getElementById("span_under")
          let body = document.getElementById("body")
          let btn = document.getElementById("btn")
          let screen = document.getElementById("screen")
          let ans = document.getElementById("ans")
          let m = document.getElementById("mode")
          let b = document.getElementsByClassName("b")
          let backspace = document.getElementById("backspace")
          let flask = document.getElementsByClassName("fa")
          let scientific = document.getElementById("scientific")
          let z = document.getElementsByClassName("z")
  
          let main = document.getElementById("main")
          let container = document.getElementById("container")
  
          let g = true
          let h = true
          let tap=true
  
          flask[0].addEventListener("click", () => {
  
              if (h == true) {
                  if (main.style.getPropertyValue("background") == "black") {
                      scientific.style.cssText = "background:black; height:calc(86.5vh - 150px); color:white; transition:height 0.6s linear;"
                      btn.style.cssText = "z-index:-1;"
                  }
                  else if (main.style.getPropertyValue("background") == "white") {
                      scientific.style.cssText = "height:calc(86.5vh - 150px); background:white; color:black; transition:height 0.6s;";
                      btn.style.cssText = "z-index:-1; background:white; color:black;"
                  }
  
                  h = false
              }
              else if (h == false) {
                  //   scientific.style.cssText="height:0;" ;
                  if (main.style.getPropertyValue("background") == "black") {
  
                      btn.style.cssText = "color:white; background:black; z-index:0; transition:z-index 1.4s;"
                      scientific.style.cssText = "background:black; height:0; transition:height 0.7s;";
                  }
                  else if (main.style.getPropertyValue("background") == "white") {
  
                      btn.style.cssText = "background:white; color:black; z-index:0; transition:z-index 1.4s;"
                      scientific.style.cssText = "background:white; height:0; transition:height 0.7s;";
                  }
  
                  h = true
              }
          })
  
  
  
  
          mode.addEventListener("click", () => {
              if (g == true) {
                  mode.style.cssText = "background:rgb(17, 17, 17); transition:1.5s;"
                  circle.style.cssText = "background:white;transform:translate(0%,0%) scale(0.8); transition:1.5s;"
                  body.style.cssText = "color:black; transition:color 1.5s;"
                  btn.style.cssText = "background:white; transition:1.5s; color:black;"
                  scientific.style.cssText = "background:white; transition:1.5s; height:0;"
                  main.style.cssText = "background:white; transition:1.5s; color:black;"
  
                  ans.style.cssText = "background:white; color:black; transition:1.5s;"
                  m.style.cssText = "background:white; transition:1.5s;"
                  g = false
              }
              else if (g == false) {
                  mode.style.cssText = "background:white; transition:1.5s;"
                  circle.style.cssText = "background:rgb(17, 17, 17);transform:translate(100%,0%) scale(0.8); transition:1.5s;"
                  main.style.cssText = "background:black; transition:1.5s; color:white;"
                  btn.style.cssText = "background:black; transition:1.5s; color:white;"
                  ans.style.cssText = "background:black; transition:1.5s;"
                  m.style.cssText = "background:black; transition:1.5s;"
  
                  g = true
              }
  
  
  
  
  
          });
          let string = ""
          let replaced = ""
          let y = ""
          let x=''
          let f=""
  
  
          Array.from(z).forEach((r) => {
              r.addEventListener("click", () => {
                  tap=false
  
                   f = r.innerText
                  
                  // try{
                  if (f == "n!") {
                      f=''
                      tap=true
                      
                      
                      
                      if(fac(eval(string)).toString(10).length>8){
                          screen.innerHTML = fac(eval(string))
                     
                      // string=fac(eval(string)).toString(10)
                      
                      screen.style.cssText = "font-size:1.5rem; transition:1s;"
                      // replaced=fac(eval(string)).toString(10)
                 
              
              }
              else{
                  screen.innerHTML = fac(eval(string))
                      replaced=fac(eval(string)).toString(10)
                      string=fac(eval(string)).toString(10)
              }
                  }
  
                  else if (f == "[n]") {
                      f=''
                      tap=true
                      screen.innerHTML = greatest_integer(eval(string))
                      replaced=greatest_integer(eval(string)).toString(10)
                      string=greatest_integer(eval(string)).toString(10)
                      
                  }
                  else if (f == "e^n") {
                      f=''
                      tap=true
                      screen.innerHTML = e_power(eval(string))
                      replaced= e_power(eval(string)).toString(10)
                      string= e_power(eval(string)).toString(10)
                      
                  }
              
  
                   else if (f == "√") {
                     screen.innerHTML=f+replaced
              
  
                  }
                  else if(f=="^"){
                      screen.innerHTML=x+"^"+y
                  }
  
                  else {
                      screen.innerHTML = f+replaced
  
                      
                  }
  
              })
  
          })
  
  
          Array.from(b).forEach((e) => {
              e.addEventListener("click", () => {
  
  
  
                  if (e.innerHTML == "=") {
                      try {
                          if(tap==true){
  
                          if (Number.isInteger(eval(string))) {
                              string = eval(string)
                              string = string.toString(10)
                              replaced = string
                              screen.innerHTML = string
                          }
                          else if (Number.isInteger(eval(string)) == false && eval(string).toString(10).length < 12) {
                              string = eval(string)
  
                              string = string.toString(10)
                              replaced = string
                              screen.innerHTML = string
                          }
                          else {
  
                              string = eval(string).toFixed(6)
  
                              replaced = string
                              screen.innerHTML = string
                          }
                      }
  
  
                      else{
                          
                          if (f == "√") {
                     screen.innerHTML=square_root(eval(string)).toFixed(4)
              replaced=square_root(eval(string)).toFixed(4)
              string=square_root(eval(string)).toFixed(4)
              f=''
  
                  }
                  else if(f=="^"){
                      
                      screen.innerHTML=xpowery(x,y)
                      replaced=xpowery(x,y)
                      string=xpowery(x,y)
                      f=''
                      x=''
                      y=''
  
                  }
                  else{
                      
                          screen.innerHTML=window[f](eval(string)).toFixed(7)
                          replaced=window[f](eval(string)).toFixed(7)
                          string=window[f](eval(string)).toFixed(7)
                          f=""
                         
                  }
                  tap=true
                      }
                      }
                      catch (error) {
                          screen.innerHTML = "Error"
  
                      }
                  }
                  else if (e.innerHTML == "C") {
                      string = ""
                      replaced = ""
                      f=""
                      screen.innerHTML = string
                  }
                  else if (e.innerHTML == "×") {
                      if (string == "") {
                          screen.innerHTML = f+""
                      }
                      else if (string.slice(string.length - 1, string.length) == "-" || string.slice(string.length - 1, string.length) == "+" || string.slice(string.length - 1, string.length) == "/" || string.slice(string.length - 1, string.length) == "*") {
                          replaced = replaced.slice(0, -1)
  
                          string = replaced + "*"
                          replaced += "×"
                          screen.innerHTML = replaced
                      }
  
                      else {
                          replaced += "×"
                          string += "*"
                          screen.innerHTML = f+replaced
  
                      }
                  }
  
                  else if (e.innerHTML == "÷") {
                      if (string == "") {
                          screen.innerHTML = f+""
                      }
  
                      else if (string.slice(string.length - 1, string.length) == "-" || string.slice(string.length - 1, string.length) == "+" || string.slice(string.length - 1, string.length) == "*" || string.slice(string.length - 1, string.length) == "/") {
                          replaced = replaced.slice(0, -1)
                          string = replaced + "/"
                          replaced += "÷"
                          screen.innerHTML = f+replaced
                      }
  
                      else {
                          replaced += "÷"
                          string += "/"
                          screen.innerHTML = f+replaced
                      }
                  }
  
                  else if (e == backspace) {
                      if(replaced==""){
                          f=""
                          screen.innerHTML=""
                      }
                      else{
  
                      replaced = replaced.slice(0, -1)
  
                      string = replaced
                      screen.innerHTML = f+replaced
                      }
  
  
                  }
                  else if (e.innerHTML == "+") {
                      if (string.slice(string.length - 1, string.length) == "-" || string.slice(string.length - 1, string.length) == "*" || string.slice(string.length - 1, string.length) == "/") {
                          replaced = replaced.slice(0, -1)
                          replaced += "+"
                          string = replaced
                          screen.innerHTML = f+replaced
                      }
                      else if (string == "") {
                          screen.innerHTML = f+""
                      }
                      else {
                          replaced = replaced + e.innerHTML
                          string = string + e.innerHTML
                          screen.innerHTML = f+replaced
                      }
                  }
                  else if (e.innerHTML == "−") {
                      if (string.slice(string.length - 1, string.length) == "+") {
                          replaced = replaced.slice(0, -1)
                          replaced += "−"
                          string += "-"
                          screen.innerHTML = f+replaced
                      }
                      else {
                          replaced += "−"
                          string += "-"
                          screen.innerHTML = f+replaced
                      }
                  }
  
                  else {
                      
  
  
                      replaced = replaced + e.innerHTML
                      string = string + e.innerHTML
                      screen.innerHTML = f+replaced
                      screen.style.cssText = "font-size:3.65rem; transition:0.5s;"
  
                      if(tap==true){
                          x=eval(string)
                      }
                      else if(tap==false){
                           y+=e.innerHTML
                      }
  
                      
                  }
              })
          })
  
          function sin(x) {
  
              return Math.sin(x)
          }
          function cos(x) {
  
              return Math.cos(x)
          }
          function tan(x) {
  
              return Math.tan(x)
          }
          function ln(x) {
  
              return Math.log(x)
          }
          function log(x) {
  
              return Math.log10(x)
          }
          function arcsin(x) {
  
              return Math.asin(x)
          }
          function arccos(x) {
  
              return Math.acos(x)
          }
          function arctan(x) {
  
              return Math.atan(x)
          }
          function e(x) {
  
              return Math.E
          }
          function π(x) {
  
              return Math.PI
          }
          function fac(x) {
              if (x < 0) return "error";
              if (x == 1 || x == 0) return 1;
              return x * fac(x - 1);
          }
  
          function greatest_integer(x) {
              return Math.floor(x)
          }
  
          function e_power(x){
              return Math.pow(Math.E,x).toFixed(4)
          }
  
          function square_root(x) {
              return Math.sqrt(x)
          }
  
          function xpowery(x,y){
              return Math.pow(x,y).toFixed(4)
          }
  
  