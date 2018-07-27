
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(552);

var _link2 = _interopRequireDefault(_link);

var _Layout = __webpack_require__(557);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\00.Project\\001.kjg\\001. Source\\hello-next\\pages\\index.js?entry';


var Index = function Index() {
    return _react2.default.createElement(_Layout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement('h1', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, '\uC548\uB155, Next.js'), _react2.default.createElement('h2', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement(_link2.default, { href: '/about', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement('a', { style: { background: 'black', color: 'white' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, '\uC18C\uAC1C'))));
};

exports.default = Index;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\00.Project\\001.kjg\\001. Source\\hello-next\\pages\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\00.Project\\001.kjg\\001. Source\\hello-next\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(552);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\00.Project\\001.kjg\\001. Source\\hello-next\\components\\Header.js';


var linkStyle = {
    marginRight: '1rem'
};
var Header = function Header() {
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement(_link2.default, { href: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement('a', { style: linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, '\uD648')), _react2.default.createElement(_link2.default, { href: 'about', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement('a', { style: linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, '\uC18C\uAC1C')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/ssr-test', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, _react2.default.createElement('a', { style: linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, 'SSR \uD14C\uC2A4\uD2B8')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/lunch', __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, _react2.default.createElement('a', { style: linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, '\uC9C0\uB3C4 \uD14C\uC2A4\uD2B8')));
};

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\00.Project\\001.kjg\\001. Source\\hello-next\\components\\Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\00.Project\\001.kjg\\001. Source\\hello-next\\components\\Header.js"); } } })();

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(556);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\00.Project\\001.kjg\\001. Source\\hello-next\\components\\Layout.js';


var Layout = function Layout(_ref) {
    var children = _ref.children;
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 4
        }
    }, _react2.default.createElement(_Header2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }), children);
};

exports.default = Layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\00.Project\\001.kjg\\001. Source\\hello-next\\components\\Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\00.Project\\001.kjg\\001. Source\\hello-next\\components\\Layout.js"); } } })();

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(553);


/***/ })

},[558]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NThjOGI1MiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz81OGM4YjUyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzPzU4YzhiNTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgIOyViOuFlSwgTmV4dC5qc1xyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBzdHlsZT17e2JhY2tncm91bmQ6ICdibGFjaycsIGNvbG9yOiAnd2hpdGUnfX0+7IaM6rCcPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9oMj5cclxuICAgIDwvTGF5b3V0PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgbGlua1N0eWxlID0ge1xyXG4gICAgbWFyZ2luUmlnaHQ6ICcxcmVtJ1xyXG59XHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YSBzdHlsZT17bGlua1N0eWxlfT7tmYg8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiYWJvdXRcIj48YSBzdHlsZT17bGlua1N0eWxlfT7shozqsJw8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBwcmVmZXRjaCAgaHJlZj1cIi9zc3ItdGVzdFwiPjxhIHN0eWxlPXtsaW5rU3R5bGV9PlNTUiDthYzsiqTtirg8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBwcmVmZXRjaCAgaHJlZj1cIi9sdW5jaFwiPjxhIHN0eWxlPXtsaW5rU3R5bGV9PuyngOuPhCDthYzsiqTtirg8L2E+PC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYWRlci5qcyIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9MYXlvdXQuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        