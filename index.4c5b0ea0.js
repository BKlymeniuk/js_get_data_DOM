var t=Array.from(document.querySelectorAll(".population"),function(t){return t.textContent}),e=0,n=0,r=t.map(function(t){return parseInt(t.replace(/,/g,""))}),o=!0,a=!1,l=void 0;try{for(var u,c=r[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var i=u.value;isNaN(i)||(n+=i,e=n/r.length)}}catch(t){a=!0,l=t}finally{try{o||null==c.return||c.return()}finally{if(a)throw l}}document.querySelector(".total-population").textContent=n.toLocaleString("en-US"),document.querySelector(".average-population").textContent=e.toLocaleString("en-US");
//# sourceMappingURL=index.4c5b0ea0.js.map
