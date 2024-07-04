// @bun
var t=(r)=>{return new Promise((e)=>setTimeout(e,r))};var n=(r,e,o=!0)=>{return r.length>e?`${r.slice(0,o?Math.max(e-3,0):e)}${o?"...":""}`:r};export{t as wait,n as cutText};
