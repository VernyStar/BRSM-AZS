const doc = document,
     html = doc.documentElement,
      win = window,
       ls = localStorage;
        X = doc.createElement("style");
X.textContent = `.moon,.moon::after,.sun{-webkit-box-sizing:border-box;display:block}.moon,.sun{position:relative}.moon::after,.sun::after,.sun::before{content:"";position:absolute}[data-theme=dark]{--main-bg:hsla(273, 54%, 19%, 1)}[data-theme=light]{--main-bg:hsla(184, 95%, 63%, 1)}body{height:100vh;width:100%;display:flex;justify-content:center;align-items:center;background:var(--main-bg)}.moon,.moon::after{box-sizing:border-box;border-radius:50%}.moon{overflow:hidden;-webkit-transform:rotate(-135deg) scale(var(--ggs,1));-ms-transform:rotate(-135deg) scale(var(--ggs,1));transform:rotate(-135deg) scale(var(--ggs,1));width:20px;height:20px;border:2px solid;border-bottom-color:transparent}.moon::after{border:2px solid transparent;-webkit-transform:rotate(-135deg) scale(var(--ggs,1));-ms-transform:rotate(-135deg) scale(var(--ggs,1));transform:rotate(-135deg) scale(var(--ggs,1));width:12px;height:18px;-webkit-box-shadow:0 0 0 2px;box-shadow:0 0 0 2px;top:8px;left:2px}.sun{box-sizing:border-box;-webkit-transform:scale(var(--ggs,1));-ms-transform:scale(var(--ggs,1));transform:scale(var(--ggs,1));width:24px;height:24px;background:-o-linear-gradient(top,currentColor 4px,transparent 0) 5px -6px/2px 6px no-repeat,-o-linear-gradient(top,currentColor 4px,transparent 0) 5px 14px/2px 6px no-repeat,-o-linear-gradient(top,currentColor 4px,transparent 0) -8px 5px/6px 2px no-repeat,-o-linear-gradient(top,currentColor 4px,transparent 0) 14px 5px/6px 2px no-repeat;background:linear-gradient(to bottom,currentColor 4px,transparent 0) 5px -6px/2px 6px no-repeat,linear-gradient(to bottom,currentColor 4px,transparent 0) 5px 14px/2px 6px no-repeat,linear-gradient(to bottom,currentColor 4px,transparent 0) -8px 5px/6px 2px no-repeat,linear-gradient(to bottom,currentColor 4px,transparent 0) 14px 5px/6px 2px no-repeat;border-radius:100px;-webkit-box-shadow:inset 0 0 0 2px;box-shadow:inset 0 0 0 2px;border:6px solid transparent}.sun::after,.sun::before{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;width:24px;height:2px;border-right:4px solid;border-left:4px solid;left:-6px;top:5px}.sun::before{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.sun::after{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}`;
doc.head.appendChild(X);
function themeSV() { "use strict"; 
  let e, s = ls.getItem("theme"),
      o = win.matchMedia("(prefers-color-scheme:dark)"),
      i = doc.getElementById("theme"),
      c = "dark",
      d = "light",
      n = "data-theme",
  m = (e = !1) => { 
    e ? (ls.setItem("theme", c), 
        html.setAttribute(n, c), 
        i.setAttribute("class", "moon"), 
        i.style.fontSize = '0.85rem', 
        i.style.color = '#4390f3', 
        i.style.textShadow = '1px 0.5px #000080') 
      : (ls.setItem("theme", d), 
        html.setAttribute(n, d), 
        i.setAttribute("class", "sun"), 
        i.style.fontSize = '0.85rem', 
        i.style.color = '#ea7d08', 
        i.style.textShadow = '1.25px 1px #ffc100') 
  };    e = o.matches, 
  s === c && (e = !0), 
  s === d && (e = !1), m(e), 
  o.addEventListener("change", (e => { m(e.matches) })), 
  i.addEventListener("click", (() => { 
    let e = html.getAttribute(n);
      m(e === d) 
  })), i.addEventListener("click", (() => { 
          i.classList.toggle("fa-beat-fade");
      })), doc.querySelectorAll(".vibro").forEach((e => { 
        e.addEventListener("click", (() => { 
          navigator.vibrate(25); 
        })) 
      })) 
}
"loading" == doc.readyState 
    ? doc.addEventListener("DOMContentLoaded", themeSV) 
    : themeSV();
