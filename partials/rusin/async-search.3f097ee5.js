const t={searchForm:document.querySelector(".js-search"),addCountry:document.querySelector(".js-add"),list:document.querySelector(".js-list"),conteinerWrapper:document.querySelector(".js-wrapper")};t.addCountry.addEventListener("click",(function(){t.conteinerWrapper.insertAdjacentHTML("beforeend",'<input class="search-input" type="text" name="country" />')})),t.searchForm.addEventListener("submit",(function(e){e.preventDefault();const n=new FormData(e.currentTarget);(async function(t){const e=t.map((async t=>{const e=await fetch(`https://restcountries.com/v3.1/name/${t}`);if(!e.ok)throw new Error;return e.json()})),n=await Promise.allSettled(e);return n.filter((({status:t})=>"fulfilled"===t)).map((({value:t})=>t[0]))})(n.getAll("country").filter((t=>t)).map((t=>t.trim()))).then((async e=>{const n=e.map((({capital:t})=>t[0])),r=await async function(t){const e="http://api.weatherapi.com/v1",n="9832fca16a6240d9a17162137242801",r=t.map((async t=>{const r=new URLSearchParams({key:n,q:t,lang:"uk"}),a=await fetch(`${e}/current.json?${r}`);if(!a.ok)throw new Error(a.statusText);return a.json()})),a=await Promise.allSettled(r);return a.filter((({status:t})=>"fulfilled"===t)).map((({value:t})=>t))}(n);t.list.innerHTML=function(t){return t.map((({current:{condition:{icon:t,text:e},temp_c:n},location:{country:r,name:a}})=>` <li class="weather-item">\n          <div>\n            <h2>${r}</h2>\n            <h3>${a}</h3>\n          </div>\n          <img class="weather-img" src="${t}" alt="${e}" />\n          <p>${e}</p>\n          <p>${n}°C</p>\n        </li>`)).join("")}(r)})).catch((t=>console.log(t))).finally((()=>{t.searchForm.reset(),t.conteinerWrapper.innerHTML='<input class="search-input" type="text" name="country" />'}))}));
//# sourceMappingURL=async-search.3f097ee5.js.map
