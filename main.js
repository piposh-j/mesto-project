(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{x:()=>y});var t={baseUrl:"https://mesto.nomoreparties.co/v1/plus-cohort-1",headers:{authorization:"9dedcca4-8ae6-4859-924d-49410349cdda","Content-Type":"application/json"}};function n(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var r=document.querySelector(".elements");function o(e,r){var o=function(e){var r=document.querySelector("#element").content.querySelector(".element").cloneNode(!0),o=r.querySelector(".element__title"),c=r.querySelector(".element__image"),a=r.querySelector(".element__trash"),u=r.querySelector(".element__like-quantity"),l=r.querySelector(".element__btn-like");return o.textContent=e.name,c.src=e.link,c.alt=e.name,u.textContent=e.likes.length,function(e,t){return e===t}(y,e.owner._id)||(a.style.display="none"),function(e,t){return Array.from(t).some((function(t){return t._id===e&&(console.log(t._id+e),t._id===e)}))}(y,e.likes)&&l.classList.add("element__btn-like_active"),a.addEventListener("click",(function(){!function(e,r){(function(e){return fetch("".concat(t.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:t.headers}).then(n)})(r).then((function(){e.remove()})).catch((function(e){console.log(e)}))}(r,e._id)})),l.addEventListener("click",(function(){!function(e,r,o){e.classList.contains("element__btn-like_active")?function(e){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:t.headers}).then(n)}(r).then((function(t){e.classList.toggle("element__btn-like_active"),o.textContent=t.likes.length})).catch((function(e){return console.log(e)})):function(e){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:t.headers}).then(n)}(r).then((function(t){e.classList.toggle("element__btn-like_active"),o.textContent=t.likes.length})).catch((function(e){return console.log(e)}))}(l,e._id,u)})),r}(e);r.prepend(o)}var c=["inputSelector","submitButtonSelector"];function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=function(e,t,n){var r=n.inactiveButtonClass;l(e)?t.classList.add(r):t.classList.remove(r)},l=function(e){return e.some((function(e){return!e.validity.valid}))};function i(e){e.classList.add("popup_opened"),document.addEventListener("keydown",p)}function s(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",p)}function p(e){"Escape"===e.key&&s(document.querySelector(".popup_opened"))}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f=document.querySelector(".profile__text-name"),m=document.querySelector(".profile__text-profession"),_=document.querySelector(".profile__avatar"),y=null;Promise.all([fetch("".concat(t.baseUrl,"/users/me"),{headers:t.headers}).then(n),fetch("".concat(t.baseUrl,"/cards "),{headers:t.headers}).then(n)]).then((function(e){var t,n,c=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=c[0],u=c[1];f.textContent=a.name,m.textContent=a.about,_.src=a.avatar,y=a._id,u.reverse().forEach((function(e){o(e,r)}))})).catch((function(e){console.log(e)}));var v,h,b,S=document.querySelector(".popup__form-profile"),q=S.querySelector(".popup__name-profile"),g=S.querySelector(".popup__about-profile"),E=S.querySelector(".popup__button-profile"),L=document.querySelector(".popup__form-place"),C=L.querySelector(".popup__name-place"),k=L.querySelector(".popup__link-place"),x=L.querySelector(".popup__button-place"),O=document.querySelector(".popup__form-avatar"),A=O.querySelector(".popup__link-avatar"),j=O.querySelector(".popup__button-avatar");S.addEventListener("submit",(function(){var e,r;E.textContent="Сохранение ...",(e=q.value,r=g.value,fetch("".concat(t.baseUrl,"/users/me"),{method:"PATCH",headers:t.headers,body:JSON.stringify({name:e,about:r})}).then(n)).then((function(){f.textContent=q.value,m.textContent=g.value,s(B)})).catch((function(e){console.log(e)})).finally((function(){E.textContent="Сохранение"}))})),L.addEventListener("submit",(function(){var e,c;x.textContent="Сохранение ...",(e=C.value,c=k.value,fetch("".concat(t.baseUrl,"/cards"),{method:"POST",headers:t.headers,body:JSON.stringify({name:e,link:c})}).then(n)).then((function(e){o(e,r),L.reset(),u([C,k],x,{inactiveButtonClass:"popup__button_disabled"}),s(I)})).catch((function(e){console.log(e)})).finally((function(){x.textContent="Сохранение"}))})),O.addEventListener("submit",(function(){var e;j.textContent="Сохранение ...",(e=A.value,fetch("".concat(t.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:t.headers,body:JSON.stringify({avatar:e})}).then(n)).then((function(){_.src=A.value,O.reset(),u([A],j,{inactiveButtonClass:"popup__button_disabled"}),s(N)})).finally((function(){j.textContent="Сохранение"}))})),h=(v={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"}).formSelector,b=a(v,["formSelector"]),Array.from(document.querySelectorAll(h)).forEach((function(e){e.addEventListener("submit",(function(e){return e.preventDefault()})),function(e,t){var n=t.inputSelector,r=t.submitButtonSelector,o=a(t,c),l=Array.from(e.querySelectorAll(n)),i=e.querySelector(r);u(l,i,o),l.forEach((function(t){t.addEventListener("input",(function(){!function(e,t,n){var r=Object.assign({},n);t.validity.valid?function(e,t,n){var r=n.inputErrorClass,o=n.errorClass,c=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(r),c.classList.remove(o),c.textContent=""}(e,t,r):function(e,t,n,r){var o=r.inputErrorClass,c=r.errorClass,a=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o),a.classList.add(c),a.textContent=n}(e,t,t.validationMessage,r)}(e,t,o),u(l,i,o)}))}))}(e,b)}));var w,U=document.querySelector(".profile__edit-btn"),P=document.querySelector(".profile__add-btn"),T=document.querySelector(".profile__avatar-button"),B=document.querySelector(".popup-profile"),I=document.querySelector(".popup-place"),N=document.querySelector(".popup-avatar"),D=B.querySelector(".popup__btn-close"),J=I.querySelector(".popup__btn-close"),H=N.querySelector(".popup__btn-close");P.addEventListener("click",(function(e){i(I)})),U.addEventListener("click",(function(e){i(B)})),T.addEventListener("click",(function(e){i(N)})),D.addEventListener("click",(function(e){s(B)})),J.addEventListener("click",(function(e){s(I)})),H.addEventListener("click",(function(e){s(N)})),w=document.querySelectorAll(".popup"),Array.from(w).forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup")&&s(e)}))}))})();