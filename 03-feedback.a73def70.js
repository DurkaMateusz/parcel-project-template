function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var o,r,i,a,u,f,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function w(e){return l=e,u=setTimeout(h,t),c?b(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=i}function h(){var e=v();if(S(e))return j(e);u=setTimeout(h,function(e){var n=t-(e-f);return s?m(n,i-(e-l)):n}(e))}function j(e){return u=void 0,g&&o?b(e):(o=r=void 0,a)}function O(){var e=v(),n=S(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return w(f);if(s)return u=setTimeout(h,t),b(f)}return void 0===u&&(u=setTimeout(h,t)),a}return t=y(t)||0,p(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=r=u=void 0},O.flush=function(){return void 0===u?a:j(v())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector('[name="email"]'),w=document.querySelector('[name="message"]'),S=document.querySelector("form"),h=document.querySelector('[type="submit"]'),j={},O=e(t)((()=>{j.email=b.value,j.message=w.value,E(j)}),500);S.addEventListener("input",O);const E=function(e){localStorage.setItem("feedback-form-state",JSON.stringify(e))};window.addEventListener("DOMContentLoaded",(()=>{const e=localStorage.getItem("feedback-form-state");if(e)try{const t=JSON.parse(e);null==t.email?b.value="":b.value=t.email,null==t.message?w.value="":w.value=t.message}catch(e){console.error("Error parsing stored value:",e)}})),h.addEventListener("click",(e=>{e.preventDefault(),console.log(`Email: ${b.value}`),console.log(`Message: ${w.value}`),localStorage.removeItem("feedback-form-state"),S.reset()}));
//# sourceMappingURL=03-feedback.a73def70.js.map