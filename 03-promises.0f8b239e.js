function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},t.parcelRequired7c6=n);var l=n("eWCmQ");Array.from(document.querySelectorAll("label")),Array.from(document.querySelectorAll("input"));const i=document.querySelector(".form"),u=(document.querySelector('button[type="submit"]'),(e,t)=>new Promise(((o,r)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):r({position:e,delay:t})}),t)})));i.addEventListener("submit",(t=>{t.preventDefault();const o=Number(i.elements.amount.value),r=Number(i.elements.step.value),n=Number(i.elements.delay.value);for(let t=1;t<=o;t+=1){u(t,n+r*(t-1)).then((({position:t,delay:o})=>{e(l).Notify.success(`✅ Fulfilled promise ${t} in ${o} ms`)})).catch((({position:t,delay:o})=>{e(l).Notify.failure(`❌ Rejected promise ${t} in ${o} ms`)}))}}));
//# sourceMappingURL=03-promises.0f8b239e.js.map