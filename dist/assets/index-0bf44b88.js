(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))d(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&d(f)}).observe(document,{childList:!0,subtree:!0});function p(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(i){if(i.ep)return;i.ep=!0;const s=p(i);fetch(i.href,s)}})();let L=()=>Math.floor(Math.random()*13),r=0,l=document.getElementById("mensaje"),a=document.getElementById("nuevaPartida"),n=document.getElementById("boton"),c=document.getElementById("boton2"),o=document.getElementById("btn-plantarse"),u=()=>{let e=document.getElementById("puntuacion");e&&(e.innerHTML=r.toString())},m=()=>{let e=L(),t=document.getElementById("carta");switch(e>7&&e<10&&(e=e+2),e===0&&e++,console.log(e),!0){case e===1:t instanceof HTMLImageElement&&(t.src="../public/1_as-copas.jpeg");break;case e===2:t instanceof HTMLImageElement&&(t.src="../public/2_dos-copas.jpeg");break;case e===3:t instanceof HTMLImageElement&&(t.src="../public/3_tres-copas.jpeg");break;case e===4:t instanceof HTMLImageElement&&(t.src="../public/4_cuatro-copas.jpeg");break;case e===5:t instanceof HTMLImageElement&&(t.src="../public/5_cinco-copas.jpeg");break;case e===6:t instanceof HTMLImageElement&&(t.src="../public/6_seis-copas.jpeg");break;case e===7:t instanceof HTMLImageElement&&(t.src="../public/7_siete-copas.jpeg");break;case e===10:t instanceof HTMLImageElement&&(t.src="../public/10_sota-copas.jpeg"),e=.5;break;case e===11:t instanceof HTMLImageElement&&(t.src="../public/11_caballo-copas.jpeg"),e=.5;break;case e===12:t instanceof HTMLImageElement&&(t.src="../public/12_rey-copas.jpeg"),e=.5;break}r=r+e,r>7.5&&(l instanceof HTMLDivElement&&(l.innerHTML="GAME OVER"),o instanceof HTMLButtonElement&&(o.disabled=!0),n instanceof HTMLButtonElement&&(n.disabled=!0),a instanceof HTMLButtonElement&&(a.style.display="block")),r===7.5&&(l instanceof HTMLDivElement&&(l.innerHTML="¡ Lo has clavado! ¡Enhorabuena!"),o instanceof HTMLButtonElement&&(o.disabled=!0),n instanceof HTMLButtonElement&&(n.disabled=!0),a instanceof HTMLButtonElement&&(a.style.display="block"))},E=()=>{switch(!0){case r<=4:l instanceof HTMLDivElement&&(l.innerHTML="Has sido muy conservador"),o instanceof HTMLButtonElement&&(o.disabled=!0),n instanceof HTMLButtonElement&&(n.disabled=!0),a instanceof HTMLButtonElement&&(a.style.display="block"),c instanceof HTMLButtonElement&&(c.style.display="block");break;case(r>4&&r<=5):l instanceof HTMLDivElement&&(l.innerHTML="¿Te ha entrado el canguelo eh?"),o instanceof HTMLButtonElement&&(o.disabled=!0),n instanceof HTMLButtonElement&&(n.disabled=!0),a instanceof HTMLButtonElement&&(a.style.display="block"),c instanceof HTMLButtonElement&&(c.style.display="block");break;case(r>5&&r<=7):l instanceof HTMLDivElement&&(l.innerHTML="Casi, casi..."),o instanceof HTMLButtonElement&&(o.disabled=!0),n instanceof HTMLButtonElement&&(n.disabled=!0),a instanceof HTMLButtonElement&&(a.style.display="block"),c instanceof HTMLButtonElement&&(c.style.display="block");break}},b=()=>{location.reload()};document.addEventListener("DOMContentLoaded",u);a!=null&&a instanceof HTMLButtonElement&&a.addEventListener("click",b);n!=null&&n instanceof HTMLButtonElement&&n.addEventListener("click",m);n!=null&&n instanceof HTMLButtonElement&&n.addEventListener("click",u);o!=null&&o instanceof HTMLButtonElement&&o.addEventListener("click",E);c!=null&&c instanceof HTMLButtonElement&&(c.addEventListener("click",m),c.addEventListener("click",u));