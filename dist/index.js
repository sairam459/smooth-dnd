!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).SmoothDnD={})}(this,function(e){"use strict";var l,t,r="smooth-dnd-container-instance",b="smooth-dnd-draggable-wrapper",i="animated",m="__smooth_dnd_draggable_translation_value",a="__smooth_dnd_draggable_visibility_value",C="smooth-dnd-ghost",w="smooth-dnd-container",u="smooth-dnd-extra-size-for-insertion",v="smooth-dnd-stretcher-element",h="smooth-dnd-stretcher-instance",s="smooth-dnd-disable-touch-action",c="smooth-dnd-no-user-select",d="smooth-dnd-prevent-auto-scroll-class",y="smooth-dnd-drop-preview-default-class",x="smooth-dnd-drop-preview-inner-class",E="smooth-dnd-drop-preview-constant-class",D="smooth-dnd-drop-preview-flex-container-class",n=Object.freeze({containerInstance:r,defaultGroupName:"@@smooth-dnd-default-group@@",wrapperClass:b,defaultGrabHandleClass:"smooth-dnd-default-grap-handle",animationClass:i,translationValue:m,visibilityValue:a,ghostClass:C,containerClass:w,extraSizeForInsertion:u,stretcherElementClass:v,stretcherElementInstance:h,isDraggableDetached:"smoth-dnd-is-draggable-detached",disbaleTouchActions:s,noUserSelectClass:c,preventAutoScrollClass:d,dropPlaceholderDefaultClass:y,dropPlaceholderInnerClass:x,dropPlaceholderWrapperClass:E,dropPlaceholderFlexContainerClass:D}),S={groupName:void 0,behaviour:"move",orientation:"vertical",getChildPayload:void 0,animationDuration:250,autoScrollEnabled:!0,shouldAcceptDrop:void 0,shouldAnimateDrop:void 0};function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(t=l=l||{}).x="x",t.y="y",t.xy="xy";function p(e,t,n){return"x"===n?{left:Math.max(e.left,t.left),top:e.top,right:Math.min(e.right,t.right),bottom:e.bottom}:{left:e.left,top:Math.max(e.top,t.top),right:e.right,bottom:Math.min(e.bottom,t.bottom)}}function O(e){var t=window.getComputedStyle(e),n=t.overflow;if("auto"===n||"scroll"===n)return l.xy;var o=t["overflow-x"],r="auto"===o||"scroll"===o,i=t["overflow-y"],a="auto"===i||"scroll"===i;return r&&a?l.xy:r?l.x:a?l.y:null}function R(e,t){var n=window.getComputedStyle(e),o=n.overflow,r=n["overflow-".concat(t)];return"auto"===o||"scroll"===o||("auto"===r||"scroll"===r)}function A(t,n){var o=[];function e(){o&&(o.forEach(function(e){return e.removeEventListener("scroll",n)}),window.removeEventListener("scroll",n))}return function(){var e=t;for(;e;)(R(e,"x")||R(e,"y"))&&o.push(e),e=e.parentElement}(),{dispose:function(){e(),o=null},start:function(){o&&(o.forEach(function(e){return e.addEventListener("scroll",n)}),window.addEventListener("scroll",n))},stop:e}}var I=function(e,t){return{left:Math.max(e.left,t.left),top:Math.max(e.top,t.top),right:Math.min(e.right,t.right),bottom:Math.min(e.bottom,t.bottom)}},B=function(e){var t=e.getBoundingClientRect(),n={left:t.left,right:t.right,top:t.top,bottom:t.bottom};if(P(e,"x")&&!T(e,"x")){var o=n.right-n.left;n.right=n.right+e.scrollWidth-o}if(P(e,"y")&&!T(e,"y")){var r=n.bottom-n.top;n.bottom=n.bottom+e.scrollHeight-r}return n},T=function(e,t){var n=window.getComputedStyle(e),o=n.overflow,r=n["overflow-".concat(t)];return"auto"===o||"scroll"===o||"hidden"===o||("auto"===r||"scroll"===r||"hidden"===r)},P=function(e,t){return"x"===t?e.scrollWidth>e.clientWidth:e.scrollHeight>e.clientHeight},z=function(e,t){var n=e,o=t||B(e);for(n=e.parentElement;n;)P(n,"x")&&T(n,"x")&&(o=p(o,n.getBoundingClientRect(),"x")),P(n,"y")&&T(n,"y")&&(o=p(o,n.getBoundingClientRect(),"y")),n=n.parentElement;return o},N=function(e,n){for(var o=e;o;){if(o[r]){var t=function(){var t=o[r];if(n.some(function(e){return e===t}))return{v:t}}();if("object"===f(t))return t.v}o=o.parentElement}return null},L=function(e,t){for(var n=e;n;){if(n.matches(t))return n;n=n.parentElement}return null},M=function(e,t){return-1<e.className.split(" ").map(function(e){return e}).indexOf(t)},j=function(e,t){if(e){var n=e.className.split(" ").filter(function(e){return e});-1===n.indexOf(t)&&(n.unshift(t),e.className=n.join(" "))}},_=function(e,t){if(e){var n=e.className.split(" ").filter(function(e){return e&&e!==t});e.className=n.join(" ")}},F=function(e,t){return e.removeChild(e.children[t])},V=function(e,t,n){n>=e.children.length?e.appendChild(t):e.insertBefore(t,e.children[n])},X=function(){window.getSelection?window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges():window.document.selection&&window.document.selection.empty()},H=function(e){if(e){var t=window.getComputedStyle(e);if(t)return t.cursor}return null};function Y(e){return!(e.bottom<=e.top||e.right<=e.left)}function k(e){var l=e.element,s=e.draggables;return function(e,t){var n=e.removedIndex,o=e.addedIndex,r=e.droppedElement,i=null;if(null!==n&&(i=F(l,n),s.splice(n,1)),null!==o){var a=window.document.createElement("div");a.className="".concat(b),a.appendChild(i&&i.firstElementChild?i.firstElementChild:r),V(l,a,o),o>=s.length?s.push(a):s.splice(o,0,a)}t&&t(e)}}var G=Object.freeze({domDropHandler:k,reactDropHandler:function(){return{handler:function(){return function(e,t){t&&t(e)}}}}}),W={size:"offsetWidth",distanceToParent:"offsetLeft",translate:"transform",begin:"left",end:"right",dragPosition:"x",scrollSize:"scrollWidth",offsetSize:"offsetWidth",scrollValue:"scrollLeft",scale:"scaleX",setSize:"width",setters:{translate:function(e){return"translate3d(".concat(e,"px, 0, 0)")}}},q={size:"offsetHeight",distanceToParent:"offsetTop",translate:"transform",begin:"top",end:"bottom",dragPosition:"y",scrollSize:"scrollHeight",offsetSize:"offsetHeight",scrollValue:"scrollTop",scale:"scaleY",setSize:"height",setters:{translate:function(e){return"translate3d(0,".concat(e,"px, 0)")}}};function U(o){return{get:function(e,t){return e[o[t]||t]},set:function(e,t,n){e[o[t]]=o.setters[t]?o.setters[t](n):n}}}function J(o,s){o[u]=0;var r=U("horizontal"===s?W:q),c={translation:0};function e(){var e,t;n(o),t=(e=o).getBoundingClientRect(),c.scaleX=e.offsetWidth?(t.right-t.left)/e.offsetWidth:1,c.scaleY=e.offsetHeight?(t.bottom-t.top)/e.offsetHeight:1}function n(e){c.rect=B(e);var t=z(e,c.rect);Y(t)&&(c.lastVisibleRect=c.visibleRect),c.visibleRect=t}function i(e){if(e.tagName){var t=e.getBoundingClientRect();return"vertical"===s?t.bottom-t.top:t.right-t.left}return r.get(e,"size")*r.get(c,"scale")}function t(e){return r.get(e,"dragPosition")}return window.addEventListener("resize",function(){n(o)}),setTimeout(function(){e()},10),{getSize:i,getContainerRectangles:function(){return{rect:c.rect,visibleRect:c.visibleRect,lastVisibleRect:c.lastVisibleRect}},getBeginEndOfDOMRect:function(e){return{begin:r.get(e,"begin"),end:r.get(e,"end")}},getBeginEndOfContainer:function(){return{begin:r.get(c.rect,"begin")+c.translation,end:r.get(c.rect,"end")+c.translation}},getBeginEndOfContainerVisibleRect:function(){return{begin:r.get(c.visibleRect,"begin")+c.translation,end:r.get(c.visibleRect,"end")+c.translation}},getBeginEnd:function(e){var t,n=(t=e,(r.get(t,"distanceToParent")+(t[m]||0))*r.get(c,"scale")+(r.get(c.rect,"begin")+c.translation)-r.get(o,"scrollValue"));return{begin:n,end:n+i(e)*r.get(c,"scale")}},getAxisValue:t,setTranslation:function(e,t){t?r.set(e.style,"translate",t):e.style.removeProperty("transform"),e[m]=t},getTranslation:function(e){return e[m]},setVisibility:function(e,t){void 0!==e[a]&&e[a]===t||(t?e.style.removeProperty("visibility"):e.style.visibility="hidden",e[a]=t)},isVisible:function(e){return void 0===e[a]||e[a]},isInVisibleRect:function(e,t){var n=c.visibleRect,o=n.left,r=n.top,i=n.right,a=n.bottom;a-r<2&&(a=r+30);var l=c.rect;return"vertical"===s?e>l.left&&e<l.right&&r<t&&t<a:o<e&&e<i&&t>l.top&&t<l.bottom},setSize:function(e,t){r.set(e,"setSize",t)},getTopLeftOfElementBegin:function(e){var t=0;return{top:"horizontal"===s?(t=e,c.rect.top):(t=c.rect.left,e),left:t}},getScrollSize:function(e){return r.get(e,"scrollSize")},getScrollValue:function(e){return r.get(e,"scrollValue")},setScrollValue:function(e,t){return r.set(e,"scrollValue",t)},invalidate:e,invalidateRects:function(){n(o)},getPosition:function(e){return t(e)},setBegin:function(e,t){r.set(e,"begin",t)}}}function K(e,t,n){var o,r,i,a=n.left,l=n.right,s=n.top,c=n.bottom,u=e.x,d=e.y;if(u<a||l<u||d<s||c<d)return null;i="x"===t?(o=a,r=l,u):(o=s,r=c,d);var f=r-o,g=400<f?100:f/4;return r-i<g?{direction:"end",speedFactor:(g-(r-i))/g}:i-o<g?{direction:"begin",speedFactor:(g-(i-o))/g}:null}function Q(l,e){var s=1<arguments.length&&void 0!==e?e:"y",c=null,u=null,d=null,f=null;return{animate:function(e,t){d=e,f=t,function a(){null===c&&(c=requestAnimationFrame(function(e){null===u&&(u=e);var t=e-u;u=e;var n,o,r,i=t/1e3*f;o=s,r=i="begin"===d?0-i:i,(n=l)&&(n!==window?"x"===o?n.scrollLeft+=r:n.scrollTop+=r:"x"===o?n.scrollBy(r,0):n.scrollBy(0,r)),c=null,a()}))}()},stop:function(){null!==c&&(cancelAnimationFrame(c),c=null),u=null}}}function Z(e){return function(){return z(e,e.getBoundingClientRect())}}var $,ee,te,ne=function(e){var u=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1500,r=e.reduce(function(e,t){var n=function(e){for(var t=[],n=e.element;n;){var o=O(n);if(o&&!M(n,d)){var r={};switch(o){case l.xy:r.x={animator:Q(n,"x")},r.y={animator:Q(n,"y")};break;case l.x:r.x={animator:Q(n,"x")};break;case l.y:r.y={animator:Q(n,"y")}}t.push({axisAnimations:r,getRect:Z(n),scrollerElement:n})}n=n.parentElement}return t}(t).filter(function(t){return!e.find(function(e){return e.scrollerElement===t.scrollerElement})});return[].concat(g(e),g(n))},[]);return function(e){var t,o,n=e.draggableInfo;e.reset?r.forEach(function(e){e.axisAnimations.x&&e.axisAnimations.x.animator.stop(),e.axisAnimations.y&&e.axisAnimations.y.animator.stop()}):n&&(t=r,o=n.mousePosition,t.forEach(function(e){var t=e.axisAnimations,n=(0,e.getRect)();t.x&&(t.x.scrollParams=K(o,"x",n),e.cachedRect=n),t.y&&(t.y.scrollParams=K(o,"y",n),e.cachedRect=n)}),r.forEach(function(e){var t=e.axisAnimations,n=t.x,o=t.y;if(n)if(n.scrollParams){var r=n.scrollParams,i=r.direction,a=r.speedFactor;n.animator.animate(i,a*u)}else n.animator.stop();if(o)if(o.scrollParams){var l=o.scrollParams,s=l.direction,c=l.speedFactor;o.animator.animate(s,c*u)}else o.animator.stop()}))}};"undefined"!=typeof window&&(($=Element)&&$.prototype&&!$.prototype.matches&&($.prototype.matches=$.prototype.matchesSelector||$.prototype.mozMatchesSelector||$.prototype.msMatchesSelector||$.prototype.oMatchesSelector||$.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;0<=--n&&t.item(n)!==this;);return-1<n}),(ee=Node||Element)&&ee.prototype&&null==ee.prototype.firstElementChild&&Object.defineProperty(ee.prototype,"firstElementChild",{get:function(){for(var e,t=this.childNodes,n=0;e=t[n++];)if(1===e.nodeType)return e;return null}}),Array.prototype.some||(Array.prototype.some=function(e){if(null==this)throw new TypeError("Array.prototype.some called on null or undefined");if("function"!=typeof e)throw new TypeError;for(var t=Object(this),n=t.length>>>0,o=2<=arguments.length?arguments[1]:void 0,r=0;r<n;r++)if(r in t&&e.call(o,t[r],r,t))return!0;return!1}));var oe={overflow:"hidden",display:"block"},re={height:"100%",display:"table-cell","vertical-align":"top"},ie=(o(te={},".".concat(w),{position:"relative","min-height":"30px","min-width":"30px"}),o(te,".".concat(w,".horizontal"),{display:"table"}),o(te,".".concat(w,".horizontal > .").concat(v),{display:"inline-block"}),o(te,".".concat(w,".horizontal > .").concat(b),re),o(te,".".concat(w,".vertical > .").concat(b),oe),o(te,".".concat(b),{"box-sizing":"border-box"}),o(te,".".concat(b,".horizontal"),re),o(te,".".concat(b,".vertical"),oe),o(te,".".concat(b,".animated"),{transition:"transform ease"}),o(te,".".concat(C),{"box-sizing":"border-box"}),o(te,".".concat(C,".animated"),{transition:"all ease-in-out"}),o(te,".".concat(C," *"),{"pointer-events":"none"}),o(te,".".concat(s," *"),{"touch-action":"none","-ms-touch-action":"none"}),o(te,".".concat(c),{"-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}),o(te,".".concat(x),{flex:"1"}),o(te,".".concat(w,".horizontal > .").concat(E),{height:"100%",overflow:"hidden",display:"table-cell","vertical-align":"top"}),o(te,".".concat(w,".vertical > .").concat(E),{overflow:"hidden",display:"block",width:"100%"}),o(te,".".concat(D),{width:"100%",height:"100%",display:"flex","justify-content":"stretch","align-items":"stretch"}),o(te,".".concat(y),{"background-color":"rgba(150, 150, 150, 0.1)",border:"1px solid #ccc"}),te);function ae(o){return Object.keys(o).reduce(function(e,t){var n=o[t];return"object"===f(n)?"".concat(e).concat(t,"{").concat(ae(n),"}"):"".concat(e).concat(t,":").concat(n,";")},"")}function le(e){if(e&&"undefined"!=typeof window){var t=window.document.head||window.document.getElementsByTagName("head")[0],n=window.document.createElement("style"),o=ae({"body *":{cursor:"".concat(e," !important")}});return n.type="text/css",n.styleSheet?n.styleSheet.cssText=o:n.appendChild(window.document.createTextNode(o)),t.appendChild(n),n}return null}var se,ce,ue=["mousedown","touchstart"],de=["mousemove","touchmove"],fe=["mouseup","touchend"],ge=null,pe=null,me=null,ve=null,he=[],ye=!1,be=!1,we=!1,xe=!1,Ee=null,Ce=null,De=null,Se=null,Oe=(se=null,ce=!1,{start:function(){ce||(ce=!0,function e(){se=requestAnimationFrame(function(){ge.forEach(function(e){return e.layout.invalidateRects()}),setTimeout(function(){null!==se&&e()},50)})}())},stop:function(){null!==se&&(cancelAnimationFrame(se),se=null),ce=!1}}),Re="undefined"!=typeof window&&!!(window.navigator.userAgent.match(/Android/i)||window.navigator.userAgent.match(/webOS/i)||window.navigator.userAgent.match(/iPhone/i)||window.navigator.userAgent.match(/iPad/i)||window.navigator.userAgent.match(/iPod/i)||window.navigator.userAgent.match(/BlackBerry/i)||window.navigator.userAgent.match(/Windows Phone/i));function Ae(){"undefined"!=typeof window&&ue.forEach(function(e){window.document.addEventListener(e,He,{passive:!1})})}function Ie(){return ve&&ve.ghostParent?ve.ghostParent:pe&&pe.parentElement||window.document.body}var Be,Te,Pe,ze,Ne,Le,Me=(Ne=1,Le=5,function(e,t,n){Be=Qe(e),Pe=n,(Te="number"==typeof t?t:Re?200:0)&&(ze=setTimeout(Xe,Te)),de.forEach(function(e){return window.document.addEventListener(e,je)},{passive:!1}),fe.forEach(function(e){return window.document.addEventListener(e,_e)},{passive:!1}),window.document.addEventListener("drag",Fe,{passive:!1})});function je(e){var t=Qe(e),n=t.clientX,o=t.clientY;if(Te)(Math.abs(Be.clientX-n)>Le||Math.abs(Be.clientY-o)>Le)&&Ve();else if(Math.abs(Be.clientX-n)>Ne||Math.abs(Be.clientY-o)>Ne)return Xe()}function _e(){Ve()}function Fe(){Ve()}function Ve(){clearTimeout(ze),de.forEach(function(e){return window.document.removeEventListener(e,je)},{passive:!1}),fe.forEach(function(e){return window.document.removeEventListener(e,_e)},{passive:!1}),window.document.removeEventListener("drag",Fe,{passive:!1})}function Xe(){clearTimeout(ze),Ve(),Pe()}function He(e){var t=Qe(e);if(!ye&&(void 0===t.button||0===t.button)&&(pe=L(t.target,"."+b))){var n=L(pe,"."+w),o=he.filter(function(e){return e.element===n})[0],r=o.getOptions().dragHandleSelector,i=o.getOptions().nonDragAreaSelector,a=!0;if(r&&!L(t.target,r)&&(a=!1),i&&L(t.target,i)&&(a=!1),a){o.layout.invalidate(),j(window.document.body,s),j(window.document.body,c);window.document.addEventListener("mouseup",function e(){_(window.document.body,s),_(window.document.body,c),window.document.removeEventListener("mouseup",e)})}a&&Me(t,o.getOptions().dragBeginDelay,function(){X(),nt(t,H(e.target)),de.forEach(function(e){window.document.addEventListener(e,Ye,{passive:!1})}),fe.forEach(function(e){window.document.addEventListener(e,Ke,{passive:!1})})})}}function Ye(e){e.preventDefault();var t=Qe(e);if(ve){var n=ve.container.getOptions();"contain"===n.behaviour?function(e,t){var n,o,r,i,a=e.clientX,l=e.clientY,s=1<arguments.length&&void 0!==t?t:"vertical",c=ve.container.layout.getBeginEndOfContainerVisibleRect();i="vertical"===s?(n=l,o="y",r="top",ve.size.offsetHeight):(n=a,o="x",r="left",ve.size.offsetWidth);var u=c.begin,d=c.end-i,f=Math.max(u,Math.min(d,n+me.positionDelta[r]));me.topLeft[o]=f,ve.position[o]=Math.max(c.begin,Math.min(c.end,n+me.centerDelta[o])),ve.mousePosition[o]=Math.max(c.begin,Math.min(c.end,n)),ve.position[o]<c.begin+i/2&&(ve.position[o]=c.begin+2),ve.position[o]>c.end-i/2&&(ve.position[o]=c.end-2)}(t,n.orientation):De?"y"===De?(me.topLeft.y=t.clientY+me.positionDelta.top,ve.position.y=t.clientY+me.centerDelta.y,ve.mousePosition.y=t.clientY):"x"===De&&(me.topLeft.x=t.clientX+me.positionDelta.left,ve.position.x=t.clientX+me.centerDelta.x,ve.mousePosition.x=t.clientX):(me.topLeft.x=t.clientX+me.positionDelta.left,me.topLeft.y=t.clientY+me.positionDelta.top,ve.position.x=t.clientX+me.centerDelta.x,ve.position.y=t.clientY+me.centerDelta.y,ve.mousePosition.x=t.clientX,ve.mousePosition.y=t.clientY),rt(),(xe=!Ee(ve))&&Ue()}else nt(t,H(e.target))}var ke,Ge,We,qe,Ue=(ke=Je,We=!(Ge=20),function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];qe&&clearTimeout(qe),We&&!qe?ke.call.apply(ke,[null].concat(t)):qe=setTimeout(function(){qe=null,ke.call.apply(ke,[null].concat(t))},Ge)});function Je(){xe&&(xe=!1,Ze(ve,ge))}function Ke(){var e;de.forEach(function(e){window.document.removeEventListener(e,Ye,{passive:!1})}),fe.forEach(function(e){window.document.removeEventListener(e,Ke,{passive:!1})}),Ce({reset:!0}),Se&&((e=Se)&&"undefined"!=typeof window&&(window.document.head||window.document.getElementsByTagName("head")[0]).removeChild(e),Se=null),ve&&(Oe.stop(),Je(),we=!0,function(e){function i(){_(me.ghost,"animated"),me.ghost.style.transitionDuration=null,Ie().removeChild(me.ghost),e()}function t(e,t,n){var o=e.top,r=e.left;j(me.ghost,"animated"),n&&j(me.ghost.firstElementChild,n),me.topLeft.x=r,me.topLeft.y=o,rt(t),setTimeout(function(){i()},t+20)}function n(e,t){j(me.ghost,"animated"),rt(e,.9,!0),setTimeout(function(){t()},e+20)}if(ve.targetElement){var o=he.filter(function(e){return e.element===ve.targetElement})[0];if(!(m=o.getOptions()).shouldAnimateDrop||m.shouldAnimateDrop(ve.container.getOptions(),ve.payload))t(o.getDragResult().shadowBeginEnd.rect,Math.max(150,o.getOptions().animationDuration/2),o.getOptions().dropClass);else i()}else{var r=he.filter(function(e){return e===ve.container})[0];if(r){var a=r.getOptions(),l=a.behaviour,s=a.removeOnDropOut;if("move"!==l&&"contain"!==l||!be&&s||!r.getDragResult())n(r.getOptions().animationDuration,i);else{var c=r.layout.getContainerRectangles();if(!Y(c.visibleRect)&&Y(c.lastVisibleRect))t({top:c.lastVisibleRect.top,left:c.lastVisibleRect.left},r.getOptions().animationDuration,r.getOptions().dropClass);else{var u=r.getDragResult(),d=u.removedIndex,f=u.elementSize,g=r.layout;r.getTranslateCalculator({dragResult:{removedIndex:d,addedIndex:d,elementSize:f,pos:void 0,shadowBeginEnd:void 0}});var p=0<d?g.getBeginEnd(r.draggables[d-1]).end:g.getBeginEndOfContainer().begin;t(g.getTopLeftOfElementBegin(p),r.getOptions().animationDuration,r.getOptions().dropClass)}}}else n(S.animationDuration,i)}var m}(function(){tt(ye=!1);for(var e=ge||[],t=e.shift();void 0!==t;)ve.targetElement!==t.element&&ve.container.element!==t.element||t.handleDrop(ve),t=e.shift();Ee=De=ve=me=pe=ge=null,we=!1}))}function Qe(e){return e.touches?e.touches[0]:e}function Ze(n,e){var o=!1;e.forEach(function(e){var t=e.handleDrag(n);o=!!t.containerBoxChanged||!1,t.containerBoxChanged=!1}),o&&(o=!1,requestAnimationFrame(function(){he.forEach(function(e){e.layout.invalidateRects(),e.onTranslated()})}))}function $e(e){var t=e,n=null;return function(e){return!(null!==n||!ye||we)&&(n=requestAnimationFrame(function(){ye&&!we&&(Ze(e,t),Ce({draggableInfo:e})),n=null}),!0)}}function et(e,t){return e.getOptions().autoScrollEnabled?ne(t,e.getScrollMaxSpeed()):function(e){return null}}function tt(o){he.forEach(function(e){var t=o?e.getOptions().onDragStart:e.getOptions().onDragEnd;if(t){var n={isSource:e===ve.container,payload:ve.payload};e.isDragRelevant(ve.container,ve.payload)?n.willAcceptDrop=!0:n.willAcceptDrop=!1,t(n)}})}function nt(e,t){if(null!==pe){ye=!0;var n=he.filter(function(e){return pe.parentElement===e.element})[0];n.setDraggables(),De=n.getOptions().lockAxis?n.getOptions().lockAxis.toLowerCase():null,y=pe,b=he.filter(function(e){return y.parentElement===e.element})[0],w=b.draggables.indexOf(y),x=b.getOptions().getGhostParent,E=y.getBoundingClientRect(),ve={container:b,element:y,size:{offsetHeight:E.bottom-E.top,offsetWidth:E.right-E.left},elementIndex:w,payload:b.getOptions().getChildPayload?b.getOptions().getChildPayload(w):void 0,targetElement:null,position:{x:0,y:0},groupName:b.getOptions().groupName,ghostParent:x?x():null,invalidateShadow:null,mousePosition:null,relevantContainers:null},o=pe,r={x:e.clientX,y:e.clientY},i=ve.container,a=t,l=r.x,s=r.y,c=o.getBoundingClientRect(),u=c.left,d=c.top,f=c.right,g=c.bottom,p=I(i.layout.getContainerRectangles().visibleRect,c),m=p.left+(p.right-p.left)/2,v=p.top+(p.bottom-p.top)/2,(h=o.cloneNode(!0)).style.zIndex="1000",h.style.boxSizing="border-box",h.style.position="fixed",h.style.top="0px",h.style.left="0px",h.style.transform=null,h.style.removeProperty("transform"),i.shouldUseTransformForGhost()?h.style.transform="translate3d(".concat(u,"px, ").concat(d,"px, 0)"):(h.style.top="".concat(d,"px"),h.style.left="".concat(u,"px")),h.style.width=f-u+"px",h.style.height=g-d+"px",h.style.overflow="visible",h.style.transition=null,h.style.removeProperty("transition"),h.style.pointerEvents="none",h.style.userSelect="none",i.getOptions().dragClass?setTimeout(function(){j(h.firstElementChild,i.getOptions().dragClass);var e=window.getComputedStyle(h.firstElementChild).cursor;Se=le(e)}):Se=le(a),j(h,i.getOptions().orientation||"vertical"),j(h,C),me={ghost:h,centerDelta:{x:m-l,y:v-s},positionDelta:{left:u-l,top:d-s},topLeft:{x:u,y:d}},ve.position={x:e.clientX+me.centerDelta.x,y:e.clientY+me.centerDelta.y},ve.mousePosition={x:e.clientX,y:e.clientY},ge=he.filter(function(e){return e.isDragRelevant(n,ve.payload)}),ve.relevantContainers=ge,Ee=$e(ge),Ce&&Ce({reset:!0,draggableInfo:void 0}),Ce=et(n,ge),ge.forEach(function(e){return e.prepareDrag(e,ge)}),tt(!0),Ee(ve),Ie().appendChild(me.ghost),Oe.start()}var o,r,i,a,l,s,c,u,d,f,g,p,m,v,h,y,b,w,x,E}var ot=qe=ze=null;function rt(e,t,n){var o=0<arguments.length&&void 0!==e?e:0,r=1<arguments.length&&void 0!==t?t:1,i=2<arguments.length&&void 0!==n&&n,a=me.ghost,l=me.topLeft,s=l.x,c=l.y,u=!ve.container||ve.container.shouldUseTransformForGhost(),d=u?"translate3d(".concat(s,"px,").concat(c,"px, 0)"):null;if(1!==r&&(d=d?"".concat(d," scale(").concat(r,")"):"scale(".concat(r,")")),0<o)return me.ghost.style.transitionDuration=o+"ms",void requestAnimationFrame(function(){d&&(a.style.transform=d),u||(a.style.left=s+"px",a.style.top=c+"px"),ot=null,i&&(a.style.opacity="0")});null===ot&&(ot=requestAnimationFrame(function(){d&&(a.style.transform=d),u||(a.style.left=s+"px",a.style.top=c+"px"),ot=null,i&&(a.style.opacity="0")}))}function it(){if(ye&&!be&&!we){xe=!(be=!0);var t=Object.assign({},ve,{targetElement:null,position:{x:Number.MAX_SAFE_INTEGER,y:Number.MAX_SAFE_INTEGER},mousePosition:{x:Number.MAX_SAFE_INTEGER,y:Number.MAX_SAFE_INTEGER}});ge.forEach(function(e){e.handleDrag(t)}),ve.targetElement=null,ve.cancelDrop=!0,Ke(),be=!1}}"undefined"!=typeof window&&function(){if("undefined"!=typeof window){var e=window.document.head||window.document.getElementsByTagName("head")[0],t=window.document.createElement("style");t.id="smooth-dnd-style-definitions";var n=ae(ie);t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(window.document.createTextNode(n)),e.appendChild(t)}}();var at=(Ae(),{register:function(e){var t;t=e,he.push(t),ye&&ve&&t.isDragRelevant(ve.container,ve.payload)&&(ge.push(t),t.prepareDrag(t,ge),Ce&&Ce({reset:!0,draggableInfo:void 0}),Ce=et(t,ge),Ee=$e(ge),t.handleDrag(ve))},unregister:function(e){!function(e){if(he.splice(he.indexOf(e),1),ye&&ve){ve.container===e&&e.fireRemoveElement(),ve.targetElement===e.element&&(ve.targetElement=null);var t=ge.indexOf(e);-1<t&&(ge.splice(t,1),Ce&&Ce({reset:!0,draggableInfo:void 0}),Ce=et(e,ge),Ee=$e(ge))}}(e)},isDragging:function(){return ye},cancelDrag:it});function lt(e,t,n){var o=2<arguments.length&&void 0!==n?n:S.animationDuration;t?(j(e,i),e.style.transitionDuration=o+"ms"):(_(e,i),e.style.removeProperty("transition-duration"))}function st(n){var o=[];return Array.prototype.forEach.call(n.children,function(e){if(e.nodeType===Node.ELEMENT_NODE){var t=e;M(e,b)||(t=function(e){if(Tt.wrapChild){var t=window.document.createElement("div");return t.className="".concat(b),e.parentElement.insertBefore(t,e),t.appendChild(e),t}return e}(e)),t[m]=0,o.push(t)}else n.removeChild(e)}),o}function ct(e){var p=e.layout;return function(e,t){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2];return function e(t,n,o,r,i){var a=4<arguments.length&&void 0!==i&&i;if(r<o)return o;if(o===r){var l=p.getBeginEnd(t[o]),s=l.begin,c=l.end;return a?n<(c+s)/2?o:o+1:o}var u=Math.floor((r+o)/2),d=p.getBeginEnd(t[u]),f=d.begin,g=d.end;return n<f?e(t,n,o,u-1,a):g<n?e(t,n,u+1,r,a):a?n<(g+f)/2?u:u+1:u}(e,t,0,e.length-1,n)}}function ut(e){var t,n,o,r,i=e.element,a=e.draggables,l=e.layout,s=e.getOptions,c=(n=(t={element:i,draggables:a,layout:l,getOptions:s}).element,o=t.draggables,r=t.layout,function(){o.forEach(function(e){lt(e,!1),r.setTranslation(e,0),r.setVisibility(e,!0)}),n[h]&&(n[h].parentNode.removeChild(n[h]),n[h]=null)}),u=(Tt.dropHandler||k)({element:i,draggables:a,layout:l,getOptions:s});return function(e,t){var n=t.addedIndex,o=t.removedIndex,r=2<arguments.length&&void 0!==arguments[2]&&arguments[2];if(c(),o=e.elementIndex,!e.cancelDrop&&(e.targetElement||s().removeOnDropOut||r)){var i={removedIndex:o,addedIndex:n,payload:e.payload};null!==o&&null!==n&&u(i,s().onDrop)}}}function dt(e){var o=e.element,r=e.getOptions,i=null;return function(e){var t=e.draggableInfo,n=i;return null==i&&t.container.element===o&&"copy"!==r().behaviour&&(n=i=t.elementIndex),{removedIndex:n}}}function ft(e){var n=e.draggables,o=e.layout;return function(e){var t=e.dragResult;null!==t.removedIndex&&o.setVisibility(n[t.removedIndex],!1)}}function gt(e){var r=e.element,i=e.layout;return function(e){var t=e.draggableInfo,n=document.elementFromPoint(t.position.x,t.position.y);if(n){var o=N(n,t.relevantContainers);if(o&&o.element===r)return{pos:i.getPosition(t.position)}}return{pos:null}}}function pt(e){var n=e.layout,o=null;return function(e){var t=e.draggableInfo;return null===e.dragResult.pos?o=null:{elementSize:o=o||n.getSize(t.size)}}}function mt(e){var o=e.element;return function(e){var t=e.draggableInfo,n=e.dragResult;!function(e,t,n){t&&(!(2<arguments.length&&void 0!==n)||n)?e.targetElement=t:e.targetElement===t&&(e.targetElement=null)}(t,o,!!n.pos)}}function vt(){return function(e){return null!==e.dragResult.pos?{addedIndex:0}:{addedIndex:null}}}function ht(e){var r=e.layout,i=null;return function(e){var t=e.dragResult.addedIndex;if(t===i)return null;i=t;var n=r.getBeginEndOfContainer(),o=n.begin;n.end;return{shadowBeginEnd:{rect:r.getTopLeftOfElementBegin(o)}}}}function yt(e){var g=e.layout,p=e.element,m=e.getOptions,v=null;return function(e){var t=e.dragResult,n=t.elementSize,o=t.shadowBeginEnd,r=t.addedIndex,i=t.dropPlaceholderContainer,a=m();if(a.dropPlaceholder){var l="boolean"==typeof a.dropPlaceholder?{}:a.dropPlaceholder,s=l.animationDuration,c=l.className,u=l.showOnTop;if(null===r)return i&&null!==v&&p.removeChild(i),v=null,{dropPlaceholderContainer:void 0};if(!i){var d=document.createElement("div"),f=document.createElement("div");f.className=D,d.className="".concat(x," ").concat(c||y),(i=document.createElement("div")).className="".concat(E),i.style.position="absolute",void 0!==s&&(i.style.transition="all ".concat(s,"ms ease")),i.appendChild(f),f.appendChild(d),g.setSize(i.style,n+"px"),i.style.pointerEvents="none",u?p.appendChild(i):p.insertBefore(i,p.firstElementChild)}return v!==r&&o.dropArea&&g.setBegin(i.style,o.dropArea.begin-g.getBeginEndOfContainer().begin+"px"),v=r,{dropPlaceholderContainer:i}}return null}}function bt(e){var o=Dt(e);return function(e){var t=e.draggableInfo,n=e.dragResult;return t.invalidateShadow?o({draggableInfo:t,dragResult:n}):null}}function wt(e){var t,i,a,o=(i=(t=e).draggables,a=ct({layout:t.layout}),function(e){var t=e.dragResult,n=t.shadowBeginEnd,o=t.pos;if(n)return n.begin+n.beginAdjustment<=o&&n.end>=o?null:o<n.begin+n.beginAdjustment?a(i,o):o>n.end?a(i,o)+1:i.length;var r=a(i,o,!0);return null!==r?r:i.length});return function(e){var t=e.dragResult,n=null;return null!==t.pos&&null===(n=o({dragResult:t}))&&(n=t.addedIndex),{addedIndex:n}}}function xt(){var r=null;return function(e){var t=e.dragResult,n=t.addedIndex,o=t.shadowBeginEnd;n!==r&&null!==r&&o&&(o.beginAdjustment=0),r=n}}function Et(e){var u=e.element,d=e.draggables,f=e.layout,g=e.getOptions,p=null;return function(e){var t=e.dragResult,n=t.addedIndex,o=t.removedIndex,r=t.elementSize;if(null===o)if(null!==n){if(!p){var i=f.getBeginEndOfContainer();i.end=i.begin+f.getSize(u);var a=f.getScrollSize(u)>f.getSize(u)?i.begin+f.getScrollSize(u)-f.getScrollValue(u):i.end,l=0<d.length?f.getBeginEnd(d[d.length-1]).end-d[d.length-1][m]:i.begin;if(a<l+r){(p=window.document.createElement("div")).className=v+" "+g().orientation;var s=0<d.length?r+l-a:r;return f.setSize(p.style,"".concat(s,"px")),u.appendChild(p),u[h]=p,{containerBoxChanged:!0}}}}else if(p){f.setTranslation(p,0);var c=p;return p=null,u.removeChild(c),{containerBoxChanged:!(u[h]=null)}}}}function Ct(e){var s=e.draggables,c=e.layout,u=null,d=null;return function(e){var t=e.dragResult,n=t.addedIndex,o=t.removedIndex,r=t.elementSize;if(n!==u||o!==d){for(var i=0;i<s.length;i++)if(i!==o){var a=s[i],l=0;null!==o&&o<i&&(l-=r),null!==n&&n<=i&&(l+=r),c.setTranslation(a,l)}return{addedIndex:u=n,removedIndex:d=o}}}}function Dt(e){var x=e.draggables,E=e.layout,C=null;return function(e){var t=e.draggableInfo,n=e.dragResult,o=n.addedIndex,r=n.removedIndex,i=n.elementSize,a=n.pos,l=n.shadowBeginEnd;if(null===a)return{shadowBeginEnd:C=null};if(null===o||!t.invalidateShadow&&o===C)return null;var s=o-1,c=Number.MIN_SAFE_INTEGER,u=0,d=0,f=null,g=null;if(s===r&&s--,-1<s){var p=E.getSize(x[s]);if(g=E.getBeginEnd(x[s]),i<p){var m=(p-i)/2;c=g.end-m}else c=g.end;u=g.end}else g={end:E.getBeginEndOfContainer().begin},u=E.getBeginEndOfContainer().begin;var v=Number.MAX_SAFE_INTEGER,h=o;if(h===r&&h++,h<x.length){var y=E.getSize(x[h]);if(f=E.getBeginEnd(x[h]),i<y){var b=(y-i)/2;v=f.begin+b}else v=f.begin;d=f.begin}else f={begin:E.getContainerRectangles().rect.end},d=E.getContainerRectangles().rect.end-E.getContainerRectangles().rect.begin;var w=g&&f?E.getTopLeftOfElementBegin(g.end):null;return C=o,{shadowBeginEnd:{dropArea:{begin:u,end:d},begin:c,end:v,rect:w,beginAdjustment:l?l.beginAdjustment:0}}}}function St(){var a=null;return function(e){var t=e.dragResult,n=t.pos,o=t.addedIndex,r=t.shadowBeginEnd;if(null!==n){if(null!=o&&null===a){if(n<r.begin){var i=n-r.begin-5;r.beginAdjustment=i}a=o}}else a=null}}function Ot(e){var t=e.getOptions,n=!1,o=t();return function(e){var t=!!e.dragResult.pos;t!==n&&((n=t)?o.onDragEnter&&o.onDragEnter():o.onDragLeave&&o.onDragLeave())}}function Rt(e){var t=e.getOptions,s=null,c=t();return function(e){var t=e.dragResult,n=t.addedIndex,o=t.removedIndex,r=e.draggableInfo,i=r.payload,a=r.element;if(c.onDropReady&&null!==n&&s!==n){var l=s=n;null!==o&&o<n&&l--,c.onDropReady({addedIndex:l,removedIndex:o,payload:i,element:a?a.firstElementChild:void 0})}}}function At(e){return"drop-zone"===e.getOptions().behaviour?It(e)(dt,ft,gt,pt,mt,vt,ht,Ot,Rt):It(e)(dt,ft,gt,pt,mt,bt,wt,xt,Et,Ct,Dt,yt,St,Ot,Rt)}function It(i){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=t.map(function(e){return e(i)}),r=null;return function(n){return r=o.reduce(function(e,t){return Object.assign(e,t({draggableInfo:n,dragResult:e}))},r||{addedIndex:null,removedIndex:null,elementSize:null,pos:null,shadowBeginEnd:null})}}}function Bt(y){return function(e){var t,n,o,r,i,a,l,s=Object.assign({},S,e),c=null,u=null,d=(n=h,o=st(t=y),r=n(),j(t,"".concat(w," ").concat(r.orientation)),{element:t,draggables:o,getOptions:n,layout:J(t,r.orientation,r.animationDuration)}),f=At(d),g=ut(d),p=A(y,function(){d.layout.invalidateRects(),m()});function m(){null!==u&&(u.invalidateShadow=!0,c=f(u),u.invalidateShadow=!1)}function v(e,t){for(var n=st(t),o=0;o<n.length;o++)e[o]=n[o];for(var r=0;r<e.length-n.length;r++)e.pop()}function h(){return s}return{element:y,draggables:d.draggables,isDragRelevant:(a=(i=d).element,l=i.getOptions,function(e,t){var n=l();if(n.shouldAcceptDrop)return n.shouldAcceptDrop(e.getOptions(),t);var o=e.getOptions();return"copy"!==n.behaviour&&L(a,"."+b)!==e.element&&(e.element===a||!(!o.groupName||o.groupName!==n.groupName))}),layout:d.layout,dispose:function(e){var t;p.dispose(),t=e.element,Tt.wrapChild&&Array.prototype.forEach.call(t.children,function(e){e.nodeType===Node.ELEMENT_NODE&&M(e,b)&&(t.insertBefore(e.firstElementChild,e),t.removeChild(e))})},prepareDrag:function(e,t){var n=e.element,o=d.draggables;v(o,n),e.layout.invalidateRects(),o.forEach(function(e){return lt(e,!0,h().animationDuration)}),p.start()},handleDrag:function(e){return c=f(u=e)},handleDrop:function(e){p.stop(),c&&c.dropPlaceholderContainer&&y.removeChild(c.dropPlaceholderContainer),u=null,f=At(d),g(e,c),c=null},fireRemoveElement:function(){g(u,Object.assign({},c,{addedIndex:null}),!0),c=null},getDragResult:function(){return c},getTranslateCalculator:function(e){return Ct(d)(e)},onTranslated:function(){m()},setDraggables:function(){v(d.draggables,y)},getScrollMaxSpeed:function(){return Tt.maxScrollSpeed},shouldUseTransformForGhost:function(){return!0===Tt.useTransformForGhost},getOptions:h,setOptions:function(e){s=!1===(!(1<arguments.length&&void 0!==arguments[1])||arguments[1])?Object.assign({},S,e):Object.assign({},S,s,e)}}}}var Tt=function(e,t){var n=Bt(e)(t);return e[r]=n,at.register(n),{dispose:function(){at.unregister(n),n.dispose(n)},setOptions:function(e,t){n.setOptions(e,t)}}};function Pt(e,t,n){Object.defineProperty(e,n,{set:function(e){t[n]=e},get:function(){return t[n]}})}Tt.wrapChild=!0,Tt.cancelDrag=function(){at.cancelDrag()},Tt.isDragging=function(){return at.isDragging()};function zt(e,t){return console.warn('default export is deprecated. please use named export "smoothDnD"'),Tt(e,t)}zt.cancelDrag=function(){Tt.cancelDrag()},zt.isDragging=function(){return Tt.isDragging()},Pt(zt,Tt,"useTransformForGhost"),Pt(zt,Tt,"maxScrollSpeed"),Pt(zt,Tt,"wrapChild"),Pt(zt,Tt,"dropHandler"),e.smoothDnD=Tt,e.constants=n,e.dropHandlers=G,e.default=zt,Object.defineProperty(e,"__esModule",{value:!0})});
