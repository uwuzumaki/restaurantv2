"use strict";
(self["webpackChunkrestaurantv2"] = self["webpackChunkrestaurantv2"] || []).push([["header"],{

/***/ "./src/Components/header.js":
/*!**********************************!*\
  !*** ./src/Components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_images_icecream_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/icecream.png */ "./src/assets/images/icecream.png");


const Header = () => {
  const content = document.querySelector(".content");

  const header = document.createElement("div");
  header.classList = "header";
  content.appendChild(header);

  const logoArea = document.createElement("div");
  logoArea.classList = "logo-area";
  header.appendChild(logoArea);

  const logo = document.createElement("div");
  logo.classList = "logo";
  logoArea.appendChild(logo);

  const logoIcon = document.createElement("img");
  logoIcon.classList = "logo-icon";
  logoIcon.src = _assets_images_icecream_png__WEBPACK_IMPORTED_MODULE_0__;
  logo.appendChild(logoIcon);

  const title = document.createElement("div");
  title.classList = "title";
  title.innerHTML = "Irene's Ice Cream";
  logoArea.appendChild(title);

  const pages = document.createElement("pages");
  pages.classList = "pages";
  header.appendChild(pages);

  const home = document.createElement("div");
  home.classList = "home nav-btn";
  home.innerHTML = "Home";
  pages.appendChild(home);

  const menu = document.createElement("div");
  menu.classList = "menu nav-btn";
  menu.innerHTML = "Menu";
  pages.appendChild(menu);

  const contact = document.createElement("div");
  contact.classList = "contact nav-btn";
  contact.innerHTML = "Contact";
  pages.appendChild(contact);

  return header;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ "./src/assets/images/icecream.png":
/*!****************************************!*\
  !*** ./src/assets/images/icecream.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d677c82b6e50792ecabf.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/Components/header.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFpRDs7QUFFakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLHdEQUFJO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnR2Mi8uL3NyYy9Db21wb25lbnRzL2hlYWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSWNvbiBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9pY2VjcmVhbS5wbmdcIjtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QgPSBcImhlYWRlclwiO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgY29uc3QgbG9nb0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsb2dvQXJlYS5jbGFzc0xpc3QgPSBcImxvZ28tYXJlYVwiO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nb0FyZWEpO1xuXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsb2dvLmNsYXNzTGlzdCA9IFwibG9nb1wiO1xuICBsb2dvQXJlYS5hcHBlbmRDaGlsZChsb2dvKTtcblxuICBjb25zdCBsb2dvSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGxvZ29JY29uLmNsYXNzTGlzdCA9IFwibG9nby1pY29uXCI7XG4gIGxvZ29JY29uLnNyYyA9IEljb247XG4gIGxvZ28uYXBwZW5kQ2hpbGQobG9nb0ljb24pO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGUuY2xhc3NMaXN0ID0gXCJ0aXRsZVwiO1xuICB0aXRsZS5pbm5lckhUTUwgPSBcIklyZW5lJ3MgSWNlIENyZWFtXCI7XG4gIGxvZ29BcmVhLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBwYWdlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYWdlc1wiKTtcbiAgcGFnZXMuY2xhc3NMaXN0ID0gXCJwYWdlc1wiO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQocGFnZXMpO1xuXG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob21lLmNsYXNzTGlzdCA9IFwiaG9tZSBuYXYtYnRuXCI7XG4gIGhvbWUuaW5uZXJIVE1MID0gXCJIb21lXCI7XG4gIHBhZ2VzLmFwcGVuZENoaWxkKGhvbWUpO1xuXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51LmNsYXNzTGlzdCA9IFwibWVudSBuYXYtYnRuXCI7XG4gIG1lbnUuaW5uZXJIVE1MID0gXCJNZW51XCI7XG4gIHBhZ2VzLmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWN0LmNsYXNzTGlzdCA9IFwiY29udGFjdCBuYXYtYnRuXCI7XG4gIGNvbnRhY3QuaW5uZXJIVE1MID0gXCJDb250YWN0XCI7XG4gIHBhZ2VzLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuXG4gIHJldHVybiBoZWFkZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=