const e=document.querySelector("body"),t=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");let a=null;t.addEventListener("click",(()=>{t.disabled=!0,d.disabled=!1,a=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;e.style.background=t}),1e3)})),d.addEventListener("click",(()=>{d.disabled=!0,t.disabled=!1,clearInterval(a)}));
//# sourceMappingURL=01-color-switcher.0ac285d7.js.map