function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return l.Date.now()};function v(e,t,n){var o,r,i,a,f,u,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function j(e){return c=e,f=setTimeout(T,t),l?b(e):a}function S(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function T(){var e=g();if(S(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-u);return s?d(n,i-(e-c)):n}(e))}function h(e){return f=void 0,v&&o?b(e):(o=r=void 0,a)}function w(){var e=g(),n=S(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return j(u);if(s)return f=setTimeout(T,t),b(u)}return void 0===f&&(f=setTimeout(T,t)),a}return t=y(t)||0,p(n)&&(l=!!n.leading,i=(s="maxWait"in n)?m(y(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},w.flush=function(){return void 0===f?a:h(g())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const b={form:document.querySelector(".feedback-form"),email:document.querySelector("input[name=email]"),message:document.querySelector("textarea[name=message")};b.form.addEventListener("input",e(t)((function(e){j[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))}),1e3)),b.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),console.log(j)}));const j={};!function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);e&&(b.email.value=t.email,b.message.value=t.message)}();
//# sourceMappingURL=03-feedback.a4311e22.js.map
