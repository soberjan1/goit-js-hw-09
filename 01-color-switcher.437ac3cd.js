const t={bodyColor:document.querySelector("body"),startBtn:document.querySelector("button[data-start]"),stoptBtn:document.querySelector("button[data-stop]")};let e=null;t.startBtn.addEventListener("click",(()=>{e=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),e&&(t.startBtn.disabled=!0)})),t.stoptBtn.addEventListener("click",(()=>{clearInterval(e),t.startBtn.disabled=!1}));
//# sourceMappingURL=01-color-switcher.437ac3cd.js.map
