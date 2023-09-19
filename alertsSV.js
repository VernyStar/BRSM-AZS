const _ = document.createElement.bind(document);
const $ = document.querySelector.bind(document);
var warning = "Користувач має бути адміном";
var uspih = "Оновлено статус учасника";
var inform = "Користувач очікує на дію";
var danger = "Внутрішня помилка на сервері";
var a1 = _("button");
a1.type = "button";
a1.innerHTML = `
    <button class="button">Натискай</button>`;
document.body.appendChild(a1);
let a2 = a1.cloneNode(true),
	a3 = a1.cloneNode(true),
	a4 = a1.cloneNode(true);

a1.parentNode.append(a2);
a1.parentNode.append(a3);
a1.parentNode.append(a4);

const alertUspih = () => {
	let alUspih = _('div');
	alUspih.innerHTML += `
         <div class="info-alert sucess">
            <div class="sucess__icon"></div>
            <div class="info__title"><strong>Успіх:</strong> ${uspih}</div>
            <div class="info__close">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" height="20">
                  <path fill="#393a37" d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"></path>
               </svg>
            </div>
         </div>`;

	document.body.appendChild(alUspih);
	alUspih.querySelector('.info-alert').classList.add('active');
	setTimeout(() => {
		alUspih.classList.add('fade-out');
	}, 3000);
	setTimeout(() => {
		alUspih.classList.remove(...['active', 'fade-out']);
		alUspih.remove();
	}, 3700);
}

const alertDanger = () => {
	let alDanger = _('div');
	alDanger.innerHTML += `
         <div class="info-alert error">
            <div class="error__icon"></div>
            <div class="info__title"><strong>Помилка:</strong> ${danger}</div>
            <div class="info__close">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" height="20">
                  <path fill="#393a37" d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"></path>
               </svg>
            </div>
         </div>`;

	document.body.appendChild(alDanger);
	alDanger.querySelector('.info-alert').classList.add('active');
	setTimeout(() => {
		alDanger.classList.add('fade-out');
	}, 3000);
	setTimeout(() => {
		alDanger.classList.remove(...['active', 'fade-out']);
		alDanger.remove();
	}, 3700);
}

const alertWarning = () => {
	let alWarning = _('div');
	alWarning.innerHTML += `
      <div class="info-alert warning">
      <div class="info__icon">
         <svg xmlns="http://www.w3.org/2000/svg" height="21" viewBox="0 0 512 512">
            <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/>
         </svg>
      </div>
      <div class="info__title"><strong>Увага:</strong> ${warning}</div>
      <div class="info__close">
         <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" height="20">
            <path fill="#393a37" d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"></path>
         </svg>
      </div>
   </div>`;

	document.body.appendChild(alWarning);
	alWarning.querySelector('.info-alert').classList.add('active');
	setTimeout(() => {
		alWarning.classList.add('fade-out');
	}, 3000);
	setTimeout(() => {
		alWarning.classList.remove(...['active', 'fade-out']);
		alWarning.remove();
	}, 3700);
}

const alertInform = () => {
	let alInfo = _('div');
	alInfo.innerHTML += `
      <div class="info-alert">
         <div class="info__icon">
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
               <path d="m12 1.5c-5.79844 0-10.5 4.70156-10.5 10.5 0 5.7984 4.70156 10.5 10.5 10.5 5.7984 0 10.5-4.7016 10.5-10.5 0-5.79844-4.7016-10.5-10.5-10.5zm.75 15.5625c0 .1031-.0844.1875-.1875.1875h-1.125c-.1031 0-.1875-.0844-.1875-.1875v-6.375c0-.1031.0844-.1875.1875-.1875h1.125c.1031 0 .1875.0844.1875.1875zm-.75-8.0625c-.2944-.00601-.5747-.12718-.7808-.3375-.206-.21032-.3215-.49305-.3215-.7875s.1155-.57718.3215-.7875c.2061-.21032.4864-.33149.7808-.3375.2944.00601.5747.12718.7808.3375.206.21032.3215.49305.3215.7875s-.1155.57718-.3215.7875c-.2061.21032-.4864.33149-.7808.3375z" fill="#393a37"></path>
            </svg>
         </div> 
         <div class="info__title"><strong>Інфо:</strong> ${inform}</div>
         <div class="info__close">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" height="20">
               <path fill="#393a37" d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"></path>
            </svg>
         </div>
      </div>`;

	document.body.appendChild(alInfo);
	alInfo.querySelector('.info-alert').classList.add('active');
	setTimeout(() => {
		alInfo.classList.add('fade-out');
	}, 3000);
	setTimeout(() => {
		alInfo.classList.remove(...['active', 'fade-out']);
		alInfo.remove();
	}, 4000);
}

a1.addEventListener('click', alertUspih);
a2.addEventListener('click', alertDanger);
a3.addEventListener('click', alertInform);
a4.addEventListener('click', alertWarning);

const fonts = _('link');
const style = _('style');
const css = `.info__title{margin-inline:auto}.message-box strong{padding-right:0.5rem;font-size:1.25rem}.info-alert,body{display:-webkit-box;display:-ms-flexbox;-webkit-box-direction:normal}*,::after,::before{-webkit-tap-highlight-color:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;text-decoration:none;background:0 0;list-style:none;outline:0;border:none;padding:0;margin:0}body{height:100vh;width:100%;display:flex;position:fixed;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#24221e;gap:1rem}.info-alert{font-family:"Open Sans",Helvetica,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;width:85vw;padding:1rem 0.75rem;max-width:325px;display:flex;-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;background:#CDE8F6;border-radius:8px;border:2px solid #2697d1;-webkit-box-shadow:0 0 5px -3px #111;box-shadow:0 0 5px -3px #111;visibility:hidden}.info-alert.active{visibility:visible;display:flex;align-items:center}.info__icon{width:20px;height:20px;background:-o-radial-gradient(center,circle,#fff 49.5%,transparent 49.51%);background:radial-gradient(circle at center,#fff 49.5%,transparent 49.51%);-webkit-transform:translateY(-2px);-ms-transform:translateY(-2px);transform:translateY(-2px);margin-right:15px}.info__icon path{fill:#509AF8}.info__title{font-weight:375;font-size:12px;color:#447EAF}.info__close{width:20px;height:20px;cursor:pointer;margin-left:auto}.error__icon,.sucess__icon{width:22px;height:22px;position:relative}.info__close path{fill:#0C2A75}.info-alert.error{background:#ECC8C5;border-radius:8px;border:2px solid #d37f78}.error__icon{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;background:#B83C37;border:2px solid #B83C37;border-radius:22px}.error__icon::before,.sucess__icon{-webkit-box-sizing:border-box;display:block}.error__icon::before{content:"";box-sizing:border-box;position:absolute;width:10px;height:2px;color:#ff6078;background:#fffdf4;border-radius:5px;top:8px;left:4px}.info-alert.error .info__title{margin-left:.5rem;color:#B83C37}.info-alert.error .info__close path{fill:#750C0C}.info-alert.warning{background:#F8F4D5;border-radius:8px;border:2px solid #e9dd7e}.info-alert.warning .info__icon path{fill:#F8CE50}.info-alert.warning .info__title{color:#96722E}.info-alert.warning .info__close path{fill:#754D0C}.info-alert.warning .info__icon{margin-top:2px;background:-o-radial-gradient(circle,#fff 38.5%,transparent 38.51%) center bottom;background:radial-gradient(circle,#fff 38.5%,transparent 38.51%) center bottom}.info-alert.sucess{background:#DDF3D5;border-radius:8px;border:2px solid #6CE441}.sucess__icon{box-sizing:border-box;background:#597151;-webkit-transform:scale(var(--ggs,1));-ms-transform:scale(var(--ggs,1));transform:scale(var(--ggs,1));border:2px solid #597151;border-radius:100px}.sucess__icon::after{content:"";display:block;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;left:3.5px;top:-.75px;width:6px;height:10px;border-color:#fff;border-width:0 2px 2px 0;border-style:solid;-webkit-transform-origin:bottom left;-ms-transform-origin:bottom left;transform-origin:bottom left;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.info-alert.sucess .info__title{margin-inline:auto;color:#597151}.info-alert.sucess .info__close path{fill:#27750C}.button{position:relative;padding:10px 22px;border-radius:6px;border:none;color:#fff;cursor:pointer;background-color:#7d2ae8;-webkit-transition:.2s;transition:.2s}.button:active{-webkit-transform:scale(.96);-ms-transform:scale(.96);transform:scale(.96)}.button:after,.button:before{position:absolute;content:"";width:150%;left:50%;height:100%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);z-index:-1000;background-repeat:no-repeat}.button:hover:before{top:-70%;background-image:radial-gradient(circle,#7d2ae8 20%,transparent 20%),radial-gradient(circle,transparent 20%,#7d2ae8 20%,transparent 30%),radial-gradient(circle,#7d2ae8 20%,transparent 20%),radial-gradient(circle,#7d2ae8 20%,transparent 20%),radial-gradient(circle,transparent 10%,#7d2ae8 15%,transparent 20%),radial-gradient(circle,#7d2ae8 20%,transparent 20%),radial-gradient(circle,#7d2ae8 20%,transparent 20%),radial-gradient(circle,#7d2ae8 20%,transparent 20%),radial-gradient(circle,#7d2ae8 20%,transparent 20%);background-size:10% 10%,20% 20%,15% 15%,20% 20%,18% 18%,10% 10%,15% 15%,10% 10%,18% 18%;background-position:50% 120%;-webkit-animation:.6s greentopBubbles;animation:.6s greentopBubbles}@-webkit-keyframes greentopBubbles{0%{background-position:5% 90%,10% 90%,10% 90%,15% 90%,25% 90%,25% 90%,40% 90%,55% 90%,70% 90%}50%{background-position:0 80%,0 20%,10% 40%,20% 0,30% 30%,22% 50%,50% 50%,65% 20%,90% 30%}100%{background-position:0 70%,0 10%,10% 30%,20% -10%,30% 20%,22% 40%,50% 40%,65% 10%,90% 20%;background-size:0 0,0 0,0 0,0 0,0 0,0 0}}@keyframes greentopBubbles{0%{background-position:5% 90%,10% 90%,10% 90%,15% 90%,25% 90%,25% 90%,40% 90%,55% 90%,70% 90%}50%{background-position:0 80%,0 20%,10% 40%,20% 0,30% 30%,22% 50%,50% 50%,65% 20%,90% 30%}100%{background-position:0 70%,0 10%,10% 30%,20% -10%,30% 20%,22% 40%,50% 40%,65% 10%,90% 20%;background-size:0 0,0 0,0 0,0 0,0 0,0 0}}.button:hover::after{bottom:-70%;background-image:radial-gradient(circle,#7d2ae8 20%,transparent 20%),radial-gradient(circle,#7d2ae8 20%,transparent 20%),radial-gradient(circle,transparent 10%,#7d2ae8 15%,transparent 20%),radial-gradient(circle,#7d2ae8 20%,transparent 20%),radial-gradient(circle,#7d2ae8 20%,transparent 20%),radial-gradient(circle,#7d2ae8 20%,transparent 20%),radial-gradient(circle,#7d2ae8 20%,transparent 20%);background-size:15% 15%,20% 20%,18% 18%,20% 20%,15% 15%,20% 20%,18% 18%;background-position:50% 0;-webkit-animation:.6s greenbottomBubbles;animation:.6s greenbottomBubbles}@-webkit-keyframes greenbottomBubbles{0%{background-position:10% -10%,30% 10%,55% -10%,70% -10%,85% -10%,70% -10%,70% 0}50%{background-position:0 80%,20% 80%,45% 60%,60% 100%,75% 70%,95% 60%,105% 0}100%{background-position:0 90%,20% 90%,45% 70%,60% 110%,75% 80%,95% 70%,110% 10%;background-size:0 0,0 0,0 0,0 0,0 0,0 0}}@keyframes greenbottomBubbles{0%{background-position:10% -10%,30% 10%,55% -10%,70% -10%,85% -10%,70% -10%,70% 0}50%{background-position:0 80%,20% 80%,45% 60%,60% 100%,75% 70%,95% 60%,105% 0}100%{background-position:0 90%,20% 90%,45% 70%,60% 110%,75% 80%,95% 70%,110% 10%;background-size:0 0,0 0,0 0,0 0,0 0,0 0}}.fade-out{-webkit-animation:.7s cubic-bezier(.25,.46,.45,.94) both fade-out-bck;animation:.7s cubic-bezier(.25,.46,.45,.94) both fade-out-bck}@-webkit-keyframes fade-out-bck{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}100%{-webkit-transform:translateZ(-80px);transform:translateZ(-80px);opacity:0}}@keyframes fade-out-bck{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}100%{-webkit-transform:translateZ(-80px);transform:translateZ(-80px);opacity:0}}`;

fonts.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Alice&family=Black+Ops+One&family=Comfortaa:wght@300&family=Marck+Script&family=Orbitron&family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:700,600,300&family=Tektur:wght@400;500;600;700&display=swap');
fonts.setAttribute('rel', 'stylesheet');
style.textContent = css;

document.head.appendChild(style);
document.head.appendChild(fonts);
document.title = "Спливаючі вікна (Успіх/Помилка/Попередження/Інформація)";

// Застосування: виклик функцій alertUspih(), alertDanger(), alertWarning(), alertInform();
// Внутрішній текст вказувати змінними uspih, danger, inform та warning відповідно (наприклад, let uspih = 'Ви успішно зареєструвалися');