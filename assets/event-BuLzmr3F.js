const r={$(e){return document.getElementById(e)},query(e){return document.querySelector(e)},queryAll(e){return document.querySelectorAll(e)},name:function(e){return document.getElementsByName(e)},tag(e){return document.getElementsByTagName(e)},className(e){for(var t=[],n=document.getElementsByTagName("*"),l=0;l<n.length;l++)n[l].className==e&&(t[t.length]=n[l]);return t},bind(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n},one(e,t,n){e.addEventListener?e.addEventListener(t,function l(a){e.removeEventListener(t,l),n(a)},!1):e.attachEvent&&e.attachEvent("on"+t,function l(a){e.detachEvent(t,l),n(a)})},removeEvent(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null},preventDefault(e){e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},addMousewheel:function(e,t){var n;this.addEvent(e,"mousewheel",s=>{var s=this.getEvent(s);this.preventDefault(s),clearTimeout(n),s.deltaY>0?n=setTimeout(function(){t(l(s))},100):s.deltaY<0&&(n=setTimeout(function(){t(l(s))},100))}),this.addEvent(e,"DOMMouseScroll",function(s){var s=this.getEvent(s);this.preventDefault(s),t(l(s))});function l(a){return a.wheelDelta?-a.wheelDelta/120:a.detail/3}},event(e){return e||window.event},getTarget(e){return this.utilsEvent(e).target||this.utilsEvent(e).srcElement}};export{r as $};
