(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "E:\\happy-sonday_react\\next-basic\\pages\\index.jsx";



const App = () => {
  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
      children: ["username", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        value: username,
        onChange: e => setUsername(e.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: [username, " \uAE43\uD5C8\uBE0C \uAC80\uC0C9\uD558\uAE30"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: `/users/${username}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: "\uAC80\uC0C9\uD558\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, undefined);
}; //NOTE:간단한 api 호출을 통한 SSR 실습1
// const index = ({user}) =>{
//     const username =user && user.name;
//     return <div>{username}</div>
// }
// export const getServerSideProps = async () => {
//     try {
//         const res = await fetch("https://api.github.com/users/jerrynim");
//         if(res.status===200){
//             const user = await res.json();
//             return { props: { user }};
//         }
//         return {props:{}};
//     } catch (error) {
//         console.log(e);
//         return {props:{}};
//     }
// }
// const App = () => {
//     const [name,setName] =useState("");
//     const router =useRouter();
//     return (
//NOTE: 정적 리소스 파일 불러오기
// <div>
//     <button type="button" onClick={()=>router.push('/tomato')}>tomato바로가기</button>
// <p>이름</p>
// <input  
// value={name}
// onChange={(e)=> setName(e.target.value)}
// style={{ marginRight:"12px"}}
// />
// <button type="button" onClick={()=> router.push(`/vegetable/${name}`)}>
//     {name}으로 바로가기
// </button>
// <img src="/wallpaper.jpg" alt="" />
// </div>
//NOTE: 정적 동적 라우팅 연습
// <div>
//     <h2>Link to 'potato' Page</h2>
//     <Link href ="/vegetable/potato">
//         <a>Move to '/vegetable/potato'</a>
//     </Link>
// </div>
//     );
// };
//export default index;


/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/index.jsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWJhc2ljLWFwcC8uL3BhZ2VzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9uZXh0LWJhc2ljLWFwcC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9uZXh0LWJhc2ljLWFwcC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9uZXh0LWJhc2ljLWFwcC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dC1iYXNpYy1hcHAvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL25leHQtYmFzaWMtYXBwL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vbmV4dC1iYXNpYy1hcHAvaWdub3JlZHxFOlxcaGFwcHktc29uZGF5X3JlYWN0XFxuZXh0LWJhc2ljXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQXBwIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInVzZVN0YXRlIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFNQSxNQUFNQSxHQUFHLEdBQUcsTUFBSztBQUNiLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0Esc0JBQ0k7QUFBQSw0QkFDSTtBQUFBLDBDQUVJO0FBQU8sYUFBSyxFQUFFRixRQUFkO0FBQXdCLGdCQUFRLEVBQUdHLENBQUQsSUFBS0YsV0FBVyxDQUFDRSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVjtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUtJO0FBQUEsaUJBQUlMLFFBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxKLGVBTUksOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUcsVUFBU0EsUUFBUyxFQUEvQjtBQUFBLDZCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQVlILENBZEQsQyxDQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFLQTtBQUtRO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNSO0FBQ0E7QUFJQTs7O0FBQ0EsK0RBQWVELEdBQWYsRTs7Ozs7Ozs7Ozs7QUMzRkEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+e1xyXG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZVxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXt1c2VybmFtZX0gb25DaGFuZ2U9eyhlKT0+c2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8cD57dXNlcm5hbWV9IOq5g+2XiOu4jCDqsoDsg4ntlZjquLA8L3A+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlcnMvJHt1c2VybmFtZX1gfT5cclxuICAgICAgICAgICAgICAgIDxhPuqygOyDie2VmOq4sDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcblxyXG5cclxuLy9OT1RFOuqwhOuLqO2VnCBhcGkg7Zi47Lac7J2EIO2Gte2VnCBTU1Ig7Iuk7Iq1MVxyXG4vLyBjb25zdCBpbmRleCA9ICh7dXNlcn0pID0+e1xyXG4vLyAgICAgY29uc3QgdXNlcm5hbWUgPXVzZXIgJiYgdXNlci5uYW1lO1xyXG4vLyAgICAgcmV0dXJuIDxkaXY+e3VzZXJuYW1lfTwvZGl2PlxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4vLyAgICAgdHJ5IHtcclxuLy8gICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvamVycnluaW1cIik7XHJcbi8vICAgICAgICAgaWYocmVzLnN0YXR1cz09PTIwMCl7XHJcbi8vICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCByZXMuanNvbigpO1xyXG4vLyAgICAgICAgICAgICByZXR1cm4geyBwcm9wczogeyB1c2VyIH19O1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICByZXR1cm4ge3Byb3BzOnt9fTtcclxuLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbi8vICAgICAgICAgcmV0dXJuIHtwcm9wczp7fX07XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcblxyXG4vLyBjb25zdCBBcHAgPSAoKSA9PiB7XHJcbi8vICAgICBjb25zdCBbbmFtZSxzZXROYW1lXSA9dXNlU3RhdGUoXCJcIik7XHJcbi8vICAgICBjb25zdCByb3V0ZXIgPXVzZVJvdXRlcigpO1xyXG5cclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuLy8gICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBcclxuICAgICAgICAvL05PVEU6IOygleyggSDrpqzshozsiqQg7YyM7J28IOu2iOufrOyYpOq4sFxyXG4gICAgICAgIC8vIDxkaXY+XHJcbiAgICAgICAgLy8gICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpPT5yb3V0ZXIucHVzaCgnL3RvbWF0bycpfT50b21hdG/rsJTroZzqsIDquLA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgLy8gPHA+7J2066aEPC9wPlxyXG4gICAgICAgIC8vIDxpbnB1dCAgXHJcbiAgICAgICAgLy8gdmFsdWU9e25hbWV9XHJcbiAgICAgICAgLy8gb25DaGFuZ2U9eyhlKT0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8vIHN0eWxlPXt7IG1hcmdpblJpZ2h0OlwiMTJweFwifX1cclxuICAgICAgICBcclxuICAgICAgICAvLyAvPlxyXG4gICAgICAgIC8vIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpPT4gcm91dGVyLnB1c2goYC92ZWdldGFibGUvJHtuYW1lfWApfT5cclxuICAgICAgICAvLyAgICAge25hbWV97Jy866GcIOuwlOuhnOqwgOq4sFxyXG4gICAgICAgIC8vIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAvLyA8aW1nIHNyYz1cIi93YWxscGFwZXIuanBnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAvLyA8L2Rpdj5cclxuXHJcbiAgICAgICAgLy9OT1RFOiDsoJXsoIEg64+Z7KCBIOudvOyasO2MhSDsl7DsirVcclxuICAgICAgICAvLyA8ZGl2PlxyXG4gICAgICAgIC8vICAgICA8aDI+TGluayB0byAncG90YXRvJyBQYWdlPC9oMj5cclxuICAgICAgICAvLyAgICAgPExpbmsgaHJlZiA9XCIvdmVnZXRhYmxlL3BvdGF0b1wiPlxyXG4gICAgICAgIC8vICAgICAgICAgPGE+TW92ZSB0byAnL3ZlZ2V0YWJsZS9wb3RhdG8nPC9hPlxyXG4gICAgICAgIC8vICAgICA8L0xpbms+XHJcbiAgICBcclxuXHJcbiAgICAgICAgLy8gPC9kaXY+XHJcbi8vICAgICApO1xyXG4vLyB9O1xyXG5cclxuXHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9