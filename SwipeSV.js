class SwipeSV {
      constructor(el, opt = {}) {
        this.evtMap = {
          swipeL: [],
          swipeU: [],
          swipeD: [],
          swipeR: [],
          swipeLS: [],
          swipeRS: [],
          swipeUS: [],
          swipeDS: []
        };
          this.el = el;
          this.xDown = 0;
          this.yDown = 0;
          this.minDist = 100;
          this.maxDist = 250;
          this.isMouseDown = false;
          this.listenForMouseEvents = true;
          this.opt = Object.assign({ triggerPercent: 0.3 }, opt);
        el.addEventListener(
          "touchstart",
          evt => this.handleTouchStart(evt), false);
        el.addEventListener(
          "touchend",
          evt => this.handleTouchEnd(evt), false);
        el.addEventListener(
          "mousedown",
          evt => this.handleMouseDown(evt), false);
        el.addEventListener(
          "mouseup",
          evt => this.handleMouseUp(evt), false);
      }
      on(evt, cb) {
        this.evtMap[evt].push(cb)
      }
      off(evt, lcb) {
        this.evtMap[evt] = this.evtMap[evt].filter(cb => cb !== lcb)
      }
      trigger(evt, data) {
        this.evtMap[evt].map(handler => handler(data))
      }
      handleTouchStart(evt) {
        this.xDown = evt.touches[0].clientX;
        this.yDown = evt.touches[0].clientY;
      }
      handleMouseDown(evt) {
        if (this.listenForMouseEvents == false) return;
        this.xDown = evt.clientX;
        this.yDown = evt.clientY;
        this.isMouseDown = true;
      }
      handleMouseUp(evt) {
        if (this.isMouseDown == false) return;
        const deltaX = evt.clientX - this.xDown,
          deltaY = evt.clientY - this.yDown,
          distMoved = Math.abs(
            Math.abs(deltaX) > Math.abs(deltaY) ?
            deltaX :
            deltaY),
          activePct = distMoved / this.el.offsetWidth;
        if (activePct > this.opt.triggerPercent) {
          if (Math.abs(deltaX) > Math.abs(deltaY)) {
            deltaX < 0 ?
              this.trigger("swipeL") :
              this.trigger("swipeR");
          } else {
            deltaY > 0 ?
              this.trigger("swipeU") :
              this.trigger("swipeD");
          }
        }
      }
      handleTouchEnd(evt) {
        const deltaX = evt.changedTouches[0].clientX - this.xDown;
        const deltaY = evt.changedTouches[0].clientY - this.yDown;
        const distMoved = Math.abs(
          Math.abs(deltaX) > Math.abs(deltaY) ?
          deltaX :
          deltaY);
        const activePct = distMoved / this.el.offsetWidth;
        if (activePct > this.opt.triggerPercent) {
          if (Math.abs(deltaX) > Math.abs(deltaY)) {
            deltaX < 0 ?
              this.trigger("swipeL") :
              this.trigger("swipeR");
          } else {
            deltaY > 0 ?
              this.trigger("swipeU") :
              this.trigger("swipeD");
          }
        }
        if (deltaX < 0) {
          const swipeSV = document.querySelector(".swipeSV");
          if (Math.abs(deltaX) >= this.minDist &&
            Math.abs(deltaY) <= this.maxDist) {
            this.trigger("swipeLS");
          }
        }
        if (deltaX > 0) {
          const swipeSV = document.querySelector(".swipeSV");
          if (Math.abs(deltaX) >= this.minDist &&
            Math.abs(deltaY) <= this.maxDist) {
            this.trigger("swipeRS");
          }
        }
        if (deltaY < 0) {
          const swipeSV = document.querySelector(".swipeSV");
          if (Math.abs(deltaY) >= this.minDist &&
            Math.abs(deltaX) <= this.maxDist) {
            this.trigger("swipeUS");
          }
        }
        if (deltaY > 0) {
          const swipeSV = document.querySelector(".swipeSV");
          if (Math.abs(deltaY) >= this.minDist &&
            Math.abs(deltaX) <= this.maxDist) {
            this.trigger("swipeDS");
          }
        }
      }
    }
