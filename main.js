(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{x:()=>v});var t={baseUrl:"https://mesto.nomoreparties.co/v1/plus-cohort-1",headers:{authorization:"9dedcca4-8ae6-4859-924d-49410349cdda","Content-Type":"application/json"}};function n(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function r(e){e.classList.add("popup_opened"),document.addEventListener("keydown",c)}function o(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",c)}function c(e){"Escape"===e.key&&o(document.querySelector(".popup_opened"))}var a=document.querySelector(".elements");function u(e,o){var c=function(e){var o=document.querySelector("#element").content.querySelector(".element").cloneNode(!0),c=o.querySelector(".element__title"),a=o.querySelector(".element__image"),u=o.querySelector(".element__trash"),l=o.querySelector(".element__like-quantity"),i=o.querySelector(".element__btn-like");return c.textContent=e.name,a.src=e.link,a.alt=e.name,a.addEventListener("click",(function(){!function(e,t,n){var o=document.querySelector(".popup-image"),c=o.querySelector(".popup-image__image"),a=o.querySelector(".popup-image__name");c.src=t,c.alr=n,a.textContent=n,r(o)}(0,e.link,e.name)})),l.textContent=e.likes.length,function(e,t){return e===t}(v,e.owner._id)||(u.style.display="none"),function(e,t){return Array.from(t).some((function(t){return t._id===e&&(console.log(t._id+e),t._id===e)}))}(v,e.likes)&&i.classList.add("element__btn-like_active"),u.addEventListener("click",(function(){!function(e,r){(function(e){return fetch("".concat(t.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:t.headers}).then(n)})(r).then((function(){e.remove()})).catch((function(e){console.log(e)}))}(o,e._id)})),i.addEventListener("click",(function(){!function(e,r,o){e.classList.contains("element__btn-like_active")?function(e){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:t.headers}).then(n)}(r).then((function(t){e.classList.toggle("element__btn-like_active"),o.textContent=t.likes.length})).catch((function(e){return console.log(e)})):function(e){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:t.headers}).then(n)}(r).then((function(t){e.classList.toggle("element__btn-like_active"),o.textContent=t.likes.length})).catch((function(e){return console.log(e)}))}(i,e._id,l)})),o}(e);o.prepend(c)}var l=["inputSelector","submitButtonSelector"];function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=function(e,t,n){var r=n.inactiveButtonClass;p(e)?(t.classList.add(r),t.disabled=!0):(t.classList.remove(r),t.disabled=!1)},p=function(e){return e.some((function(e){return!e.validity.valid}))};function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f=document.querySelector(".profile__text-name"),m=document.querySelector(".profile__text-profession"),_=document.querySelector(".profile__avatar"),v=null;Promise.all([fetch("".concat(t.baseUrl,"/users/me"),{headers:t.headers}).then(n),fetch("".concat(t.baseUrl,"/cards "),{headers:t.headers}).then(n)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];f.textContent=o.name,m.textContent=o.about,_.src=o.avatar,v=o._id,c.reverse().forEach((function(e){u(e,a)}))})).catch((function(e){console.log(e)}));var y,h,b,S=document.querySelector(".popup__form-profile"),q=S.querySelector(".popup__name-profile"),g=S.querySelector(".popup__about-profile"),E=S.querySelector(".popup__button-profile"),C=document.querySelector(".popup__form-place"),L=C.querySelector(".popup__name-place"),k=C.querySelector(".popup__link-place"),x=C.querySelector(".popup__button-place"),O=document.querySelector(".popup__form-avatar"),A=O.querySelector(".popup__link-avatar"),j=O.querySelector(".popup__button-avatar");S.addEventListener("submit",(function(){var e,r,c,a,u,l,i,s;e=E,r=q,c=g,a=f,u=m,l=B,console.log(c.value),e.textContent="Сохранение ...",(i=r.value,s=c.value,fetch("".concat(t.baseUrl,"/users/me"),{method:"PATCH",headers:t.headers,body:JSON.stringify({name:i,about:s})}).then(n)).then((function(){a.textContent=r.value,u.textContent=c.value,o(l)})).catch((function(e){console.log(e)})).finally((function(){e.textContent="Сохранение"}))})),C.addEventListener("submit",(function(){var e,r;x.textContent="Сохранение ...",(e=L.value,r=k.value,fetch("".concat(t.baseUrl,"/cards"),{method:"POST",headers:t.headers,body:JSON.stringify({name:e,link:r})}).then(n)).then((function(e){u(e,a),C.reset(),s([L,k],x,{inactiveButtonClass:"popup__button_disabled"}),o(I)})).catch((function(e){console.log(e)})).finally((function(){x.textContent="Сохранение"}))})),O.addEventListener("submit",(function(){var e;j.textContent="Сохранение ...",(e=A.value,fetch("".concat(t.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:t.headers,body:JSON.stringify({avatar:e})}).then(n)).then((function(){_.src=A.value,O.reset(),s([A],j,{inactiveButtonClass:"popup__button_disabled"}),o(N)})).finally((function(){j.textContent="Сохранение"}))})),h=(y={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"}).formSelector,b=i(y,["formSelector"]),Array.from(document.querySelectorAll(h)).forEach((function(e){e.addEventListener("submit",(function(e){return e.preventDefault()})),function(e,t){var n=t.inputSelector,r=t.submitButtonSelector,o=i(t,l),c=Array.from(e.querySelectorAll(n)),a=e.querySelector(r);s(c,a,o),c.forEach((function(t){t.addEventListener("input",(function(){!function(e,t,n){var r=Object.assign({},n);t.validity.valid?function(e,t,n){var r=n.inputErrorClass,o=n.errorClass,c=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(r),c.classList.remove(o),c.textContent=""}(e,t,r):function(e,t,n,r){var o=r.inputErrorClass,c=r.errorClass,a=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o),a.classList.add(c),a.textContent=n}(e,t,t.validationMessage,r)}(e,t,o),s(c,a,o)}))}))}(e,b)}));var w,U=document.querySelector(".profile__edit-btn"),P=document.querySelector(".profile__add-btn"),T=document.querySelector(".profile__avatar-button"),B=document.querySelector(".popup-profile"),I=document.querySelector(".popup-place"),N=document.querySelector(".popup-avatar"),D=document.querySelector(".popup-image"),J=B.querySelector(".popup__btn-close"),H=I.querySelector(".popup__btn-close"),M=N.querySelector(".popup__btn-close"),z=D.querySelector(".popup__btn-close");P.addEventListener("click",(function(){r(I)})),U.addEventListener("click",(function(){q.value=f.textContent,g.value=m.textContent,r(B)})),T.addEventListener("click",(function(){r(N)})),J.addEventListener("click",(function(){o(B)})),H.addEventListener("click",(function(){o(I)})),M.addEventListener("click",(function(){o(N)})),z.addEventListener("click",(function(){o(D)})),w=document.querySelectorAll(".popup"),Array.from(w).forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup")&&o(e)}))}))})();