    ! function() {
      "use strict";
      let MenuSV = function(t) {
        var e, n, i;
        let r = t.parentElement;
        function a(t) {
          let n = t.currentTarget;
          e && n !== e && l(e), l(n), navigator.vibrate(20)
        }
        function l(t) {
          let n = document.getElementById(t.getAttribute("aria-controls"));
          "true" === t.getAttribute("aria-expanded") ?
            (t.setAttribute("aria-expanded", !1), n.setAttribute("aria-hidden", !0), e = !1) :
            (t.setAttribute("aria-expanded", !0), n.setAttribute("aria-hidden", !1),
              function t(e) {
                let n = win.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                  i = e.offsetParent,
                  r = i.getBoundingClientRect().left,
                  a = r + e.offsetWidth;
                a + 32 > n && e.classList.add("submenuSV")
              }(n), e = t)
        }
        function u(t) {
          27 === t.keyCode && (null !== t.target.closest('ul[aria-hidden="false"]') ?
            (e.focus(), l(e)) :
            "true" === t.target.getAttribute("aria-expanded") && l(e))
        }
        function d(t) {
          e && !t.target.closest("#" + r.id) && l(e)
        }
        this.init = function() {
          t.classList.remove("no-js"),
            t.querySelectorAll("ul").forEach(e => {
              let r = e.parentElement;
              
              if (void 0 !== e) {
                let l = function t(e) {
                  let r = e.getElementsByTagName("a")[0],
                    a = r.innerHTML,
                    l = r.attributes,
                    u = document.createElement("button");
                  
                  if (null !== r) {
                    for (n = 0, u.innerHTML = a.trim(), i = l.length; n < i; n++) {
                      let d = l[n];
                      "href" !== d.name && u.setAttribute(d.name, d.value)
                    }
                    e.replaceChild(u, r)
                  }
                  return u
                }(r);
                
                (function t(e, n) {
                  let i = e.getAttribute("id"),
                    r;
                  r = null === i 
                        ?   n.textContent.trim().replace(/\s+/g, "-").toLowerCase() + "-підменю" 
                        :   i + "-підменю",
                    n.setAttribute("aria-controls", r),
                    n.setAttribute("aria-expanded", !1),
                    e.setAttribute("id", r),
                    e.setAttribute("aria-hidden", !0)
                })(e, l),
                l.addEventListener("click", a),
                  t.addEventListener("keyup", u)
              }
            }), document.addEventListener("click", d)
        }
      };
      
      document.addEventListener("DOMContentLoaded",
        function() {
          let e = document.querySelectorAll(".menuSV");
          e.forEach(e => {
            new MenuSV(e).init()
          })
        })
    }();
