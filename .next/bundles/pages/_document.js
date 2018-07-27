
          window.__NEXT_REGISTER_PAGE('/_document', function() {
            var comp = module.exports =
webpackJsonp([1],{

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(32);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(34);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(33);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _document = __webpack_require__(423);

var _document2 = _interopRequireDefault(_document);

var _server = __webpack_require__(235);

var _server2 = _interopRequireDefault(_server);

var _reactRedux = __webpack_require__(1063);

var _Sotre = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Sotre\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _Sotre2 = _interopRequireDefault(_Sotre);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\00.Project\\001.kjg\\001. Source\\hello-next\\pages\\_document.js?entry';


var MyDocument = function (_Document) {
	(0, _inherits3.default)(MyDocument, _Document);

	function MyDocument() {
		(0, _classCallCheck3.default)(this, MyDocument);

		return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
	}

	(0, _createClass3.default)(MyDocument, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement('provider', { store: _Sotre2.default, __source: {
					fileName: _jsxFileName,
					lineNumber: 15
				}
			}, _react2.default.createElement('html', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 16
				}
			}, _react2.default.createElement(_document.Head, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 17
				}
			}, _react2.default.createElement('title', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 18
				}
			}, 'Next.js  \uC5F0\uC2B5')), _react2.default.createElement('body', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 20
				}
			}, _react2.default.createElement(_document.Main, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 21
				}
			}), _react2.default.createElement(_document.NextScript, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 22
				}
			}))));
		}
	}], [{
		key: 'getInitialProps',
		value: function getInitialProps(_ref) {
			var renderPage = _ref.renderPage;

			var _renderPage = renderPage(),
			    html = _renderPage.html,
			    head = _renderPage.head;

			var styles = (0, _server2.default)();
			return { html: html, head: head, styles: styles };
		}
	}]);

	return MyDocument;
}(_document2.default);

exports.default = MyDocument;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\00.Project\\001.kjg\\001. Source\\hello-next\\pages\\_document.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\00.Project\\001.kjg\\001. Source\\hello-next\\pages\\_document.js"); } } })();
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
    })(module.exports.default || module.exports, "/_document")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(238);


/***/ })

},[549]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXF9kb2N1bWVudC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL19kb2N1bWVudC5qcz9lMDdmZWE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEb2N1bWVudCwge0hlYWQsIE1haW4sIE5leHRTY3JpcHQgfSBmcm9tICduZXh0L2RvY3VtZW50JztcclxuaW1wb3J0IGZsdXNoIGZyb20gJ3N0eWxlZC1qc3gvc2VydmVyJ1xyXG5pbXBvcnQgeyBwcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9Tb3RyZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudHtcclxuXHRzdGF0aWMgZ2V0SW5pdGlhbFByb3BzKHtyZW5kZXJQYWdlfSl7XHJcblx0XHRjb25zdCB7aHRtbCwgaGVhZH0gPSByZW5kZXJQYWdlKCk7XHJcblx0XHRjb25zdCBzdHlsZXMgPSBmbHVzaCgpO1xyXG5cdFx0cmV0dXJue2h0bWwsIGhlYWQsIHN0eWxlc31cclxuXHR9XHJcblx0XHJcblx0cmVuZGVyICgpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxwcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG5cdFx0XHRcdDxodG1sPlxyXG5cdFx0XHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0XHRcdDx0aXRsZT5OZXh0LmpzICDsl7DsirU8L3RpdGxlPlxyXG5cdFx0XHRcdFx0PC9IZWFkPlxyXG5cdFx0XHRcdFx0PGJvZHk+XHJcblx0XHRcdFx0XHRcdDxNYWluIC8+XHJcblx0XHRcdFx0XHRcdDxOZXh0U2NyaXB0IC8+XHJcblx0XHRcdFx0XHQ8L2JvZHk+XHJcblx0XHRcdFx0PC9odG1sPlxyXG5cdFx0XHQ8L3Byb3ZpZGVyPlxyXG5cdFx0KVxyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL19kb2N1bWVudC5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFLQTtBQUxBO0FBQUE7Ozs7QUFmQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBSkE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        