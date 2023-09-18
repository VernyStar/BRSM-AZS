doc.body.style.cssText = 'position:relative;display:flex;flex-flow:column nowrap;height:100vh;width:100%;font:15px/1.25 "Alice";overflow:hidden';
doc.body.style.background = `url('${patbg}') repeat-y`;
doc.body.style.backgroundSize = 'cover';
const hp = $("DIM");
const tp = $("DER");
const fp = $("FBF");
const cp = $("ACC");
cp.innerHTML = `
   <header><img src='${logo1}' class='logo'>
           <img src='${bcode}' class='barcode'></header>
   <nav class="mobile-menu"></nav>
   <div class="overlay"></div>
   <main><section class="account">
      <span class="avatar"><img onerror="this.src='${photo}'"></span>
      <p class="name-acct"></p>
      <button type="button" id="one" class="user-info button"><i class="fas fa-pen-to-square"></i></button>
   </section>
   <section class="card">
      <div class="top-section">
         <p class="plus">BRSM Plus</p>
         <div class="border"></div>
         <div class="icons"><div class="social-media">Бали: <span style="font-family:'Orbitron';padding-left:0.5rem;color:orange;"> 1570</span></div></div>
      </div>
      <div class="bottom-section">
         <span class="title">Ваша карта</span>
         <div class="row row1">
            <div class="item"><span class="big-text">2626</span><span class="regular-text">Днів з БРСМ</span></div>
            <div class="item"><span class="big-text">100%</span><span class="regular-text">Ваш рейтинг</span></div>
            <div class="item"><span class="big-text">38,631</span><span class="regular-text">Всього балів</span></div>
         </div>
      </div>
   </section>
   <span id="one" class="rules button"></span>
   </main>
   <footer></footer>`;
(function() {
   "use strict";
   let k = $$(".rules"), 
       a = cp.querySelector("header"),
       b = doc.createElement("button"),
       g = doc.createElement("span"),
       h = doc.createElement("img"),
       j = doc.createElement("p"),
       f = cp.querySelector("footer");
            g.className = 'turbo';
            b.id = 'burger';
            b.className = 'burger';
   h.setAttribute('src', clipb);
   b.innerHTML += `
   <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 200 200">
      <g stroke-linecap="round">
         <path d="M72 82.286h28.75" fill="#009100" fill-rule="evenodd" stroke="#fff" />
         <path d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554" fill="none" stroke="#fff" />
         <path d="M72 125.143h28.75" fill="#009100" fill-rule="evenodd" stroke="#fff" />
         <path d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554" fill="none" stroke="#fff" />
         <path d="M100.75 82.286h28.75" fill="#009100" fill-rule="evenodd" stroke="#fff" />
         <path d="M100.75 125.143h28.75" fill="#009100" fill-rule="evenodd" stroke="#fff" />
      </g>
   </svg>`;
   f.style.background = `url(${futer}) bottom no-repeat`;
   f.style.backgroundSize = '92.5% 87.5%';
   j.innerText = 'Офіційні правила програми лояльності BRSM +';  
      doc.body.appendChild(g);
             a.appendChild(b);
             k.appendChild(h);
             k.appendChild(j);
      for (let i in sidemenu) {
         let a = cp.querySelector("nav");
         a.innerHTML += `
            <ul><a href="#"><i class="${sidemenu[i].klas}"></i>
         <span>${sidemenu[i].name}</span></a></ul>`;
      }
      let d = cp.querySelector("nav"), inn, fin;
      b.addEventListener("click", togSide);
      d.addEventListener("swipeleft", togSide)
      doc.addEventListener("click", m => {
         let q = m.target,
             w = q == d || b.contains(q),
             r = q == b,
             t = d.classList.contains("mobile-menu_open");
             w || r || !t || (d.classList.remove("mobile-menu_open"),
         $$(".turbo").classList.remove(O),
         b.classList.remove(A), navigator.vibrate(15));
      });
      function togSide() {
         let j = b.classList.contains(A);
             j ? (d.classList.remove("mobile-menu_open"), $$(".turbo").classList.remove(O), b.classList.remove(A), navigator.vibrate(15)) 
               : (d.classList.add("mobile-menu_open"), $$(".turbo").classList.add(O), b.classList.add(A), navigator.vibrate(15));
      };
      doc.addEventListener("touchstart", e => { 
          inn = e.changedTouches[0]; 
      });
      doc.addEventListener("touchend", e => {
              fin = e.changedTouches[0];
         let xAbs = Math.abs(inn.pageX - fin.pageX);
         let yAbs = Math.abs(inn.pageY - fin.pageY);
         if (xAbs > 100 || yAbs > 100) {
            if (xAbs > yAbs) {
               if (fin.pageX < inn.pageX) {
                  d.classList.remove("mobile-menu_open");
                  b.classList.remove(A), $$(".turbo").classList.remove(O),
                  navigator.vibrate(15);
               } else {
                  d.classList.add("mobile-menu_open");
                  b.classList.add(A), $$(".turbo").classList.add(O),
                  navigator.vibrate(15);
               }
            }
         }
      });
})();

let b = $$$('.button');
b.forEach(e => {
   e.addEventListener('click', m => {
      let current = m.currentTarget;
      let id = current.getAttribute('id');
      $('modal-container').removeAttribute('class');
      $('modal-container').classList.add(id);
      doc.body.classList.add("modal-active"),
      $$('.turbo').classList.add('opacity');
      cp.classList.add('opacity');
      navigator.vibrate(15);
   });
   let opmain = () => {
      cp.classList.add('opacity');
      $$('.turbo').classList.add('opacity');
   }
   $$(".user-info").addEventListener('click', opmain);
   $('modal-container').addEventListener('click', () => {
      $('modal-container').classList.add('out');
      doc.body.classList.remove("modal-active"),
         cp.classList.remove('opacity'),
      $$('.turbo').classList.remove('opacity');
      navigator.vibrate(15);
   })
})
let acp = doc.querySelector(".avatar");
let acc = lst.getItem("photo");
doc.querySelector(".user-info").innerHTML += "Редагувати";
doc.querySelector('.name-acct').innerHTML += 'Прізвище Ім\'я По-батькові';

async function avatar() {
    let a = await selPhoto("image/*", true);
    acp.innerHTML = a.map(file => `
        <img data-src="${URL.createObjectURL(file)}">`).join("");
}
function selPhoto(contentType, multiple) {
    return new Promise(resolve => {
        let a = doc.createElement("input");
            a.type = "file";
            a.multiple = multiple;
            a.accept = contentType;
        a.onchange = _ => {
            let b = Array.from(a.files);
            if (multiple)
                resolve(b);
            else
                resolve(b[0]);
        };
        a.click();
    });
}

function setPhoto() {
   avatar().then(function() {
      let i = acp.querySelector("img"),
      h = i.getAttribute("data-src");
      lst.setItem("photo", h);
      i.setAttribute("src", lst.getItem("photo"));
   })
}
acp.addEventListener("click", setPhoto);
acp.querySelector("img").setAttribute("src", acc);