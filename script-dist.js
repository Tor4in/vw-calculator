let width=document.querySelector("#width"),wrap_width=document.querySelector("#wrap-width"),copyPast=(e,t)=>{if(width.value&&wrap_width.value){let a,r;.05>(a=+width.value/(+wrap_width.value/100))%1?a=parseInt(a):a.toFixed(2),r=t?`clamp(${parseInt(width.value/2)}px, ${a}vw, ${width.value}px)`:a+"vw",navigator.clipboard.writeText(r).then((()=>{navigator.clipboard.readText().then((t=>{document.querySelector(e).innerHTML=t}))}))}};