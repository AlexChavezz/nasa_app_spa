(()=>{"use strict";var e={169:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(645),r=n.n(a)()((function(e){return e[1]}));r.push([e.id,"*{padding:0px;margin:0px;outline:none;color:black;font-family:'Roboto', sans-serif}nav{height:7vh}#root{width:90%;margin:0px auto;height:93vh;background-color:white;color:white}#root article form{height:100px;width:80%;display:grid;grid-template-columns:repeat(3, 1fr);margin:0px auto;color:black;font-weight:bold}#root article form input{margin:10px;padding:3px;border:1px solid #ccc}#root article form input[type=\"submit\"]{grid-column:2/3;width:60%;margin:0px auto}#root article .container-content .image img{display:block;width:400px;margin:20px auto}#root article .container-content .image img b{font-weight:bold}#root article .container-content .image img:hover target{background-color:black;height:100%;position:absolute}#root div div h2{font-size:35px;font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif}\n",""]);const i=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,a){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(a)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);a&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},695:e=>{var t={};e.exports=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var i={},o=[],c=0;c<e.length;c++){var s=e[c],l=a.base?s[0]+a.base:s[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=n(u),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(t[p].references++,t[p].updater(f)):t.push({identifier:u,updater:r(f,a),references:1}),o.push(u)}return o}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=a(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var c=n(i[o]);t[c].references--}for(var s=a(e,r),l=0;l<i.length;l++){var d=n(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=s}}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a=n.css,r=n.media,i=n.sourceMap;r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(a,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var i=t[a]={id:a,exports:{}};return e[a](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),a=n(795),r=n.n(a),i=n(695),o=n.n(i),c=n(216),s=n.n(c),l=n(169),d={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=o()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};d.domAPI=r(),d.insertStyleElement=s(),t()(l.Z,d),l.Z&&l.Z.locals&&l.Z.locals;const u=async e=>{const{day:t,month:n,year:a}=p(e);if(""===t.value||""===n||""===a){const e="ZD6tZnrYEg3lvEDi9NY8Y3Mg3ZDUfJXcTdn7Myah",t=await fetch(`https://api.nasa.gov/planetary/apod?api_key=${e}`);return await t.json()}{const e="ZD6tZnrYEg3lvEDi9NY8Y3Mg3ZDUfJXcTdn7Myah",r=await fetch(`https://api.nasa.gov/planetary/apod?date=${a.value}-${n.value}-${t.value}&api_key=${e}`);return await r.json()}},p=e=>({day:e.querySelector("#day"),month:e.querySelector("#month"),year:e.querySelector("#year")}),f=async(e,t)=>{e.querySelector(".image").innerHTML=`<img src=${await t.url}>`,e.querySelector(".description").innerHTML=await t.explanation,e.querySelector(".title").innerHTML=await t.title,e.querySelector(".date").innerHTML=`Date: ${await t.date}`,e.querySelector(".copy").innerHTML=`Image Credit & Copyright:  <b>${await t.copyright}</b>`},h=async e=>{const t=document.querySelector("#root");switch(t.innerHTML="",e){case"#/PictureOfDay":t.appendChild(await(async()=>{const e=document.createElement("div");e.innerHTML='<article> <form class="form"> <div> <label>Year:</label> <input type="text" class="input-text" id="year" placeholder="YYYY"/> </div> <div> <label>Month:</label> <input type="text" class="input-text" id="month" placeholder="MM"/> </div> <div> <label>Day:</label> <input type="text" class="input-text" id="day" placeholder="DD"/> </div> <input type="submit" value="send" class="btn btn-primary"/> </form> <div class="container-content"> <div class="image"> <div class="target"></div> </div> <div> <h2 class="title"></h2> <span class="date"></span> </div> <div> <p class="description"></p> <span class="copy"> </span> </div> </div> </article>';const t=await u(e);return f(e,t),(e=>{e.querySelector("form").addEventListener("submit",(()=>{u(e).then((t=>f(e,t)))}))})(e),e})());break;case"#/NeoWs":t.appendChild(await(async()=>{const e=document.createElement("div");e.innerHTML=' <div class="d-flex"> <h2>Near Earth Objects</h2> </div>';const t=await(async()=>{const e=await fetch("https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-07-13&end_date=2021-07-18&api_key=ZD6tZnrYEg3lvEDi9NY8Y3Mg3ZDUfJXcTdn7Myah");return await e.json()})();return console.log(t),e})())}};h(window.location.hash),window.addEventListener("hashchange",(()=>{h(window.location.hash)}))})()})();