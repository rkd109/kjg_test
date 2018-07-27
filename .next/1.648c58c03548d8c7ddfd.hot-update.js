webpackHotUpdate(1,{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS42NDhjNThjMDM1NDhkOGM3ZGRmZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2RvY3VtZW50LmpzPzRjNGNkZDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERvY3VtZW50LCB7SGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gJ25leHQvZG9jdW1lbnQnO1xyXG5pbXBvcnQgZmx1c2ggZnJvbSAnc3R5bGVkLWpzeC9zZXJ2ZXInXHJcbmltcG9ydCB7IHByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBzdG9yZSBmcm9tICcuL1NvdHJlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50e1xyXG5cdHN0YXRpYyBnZXRJbml0aWFsUHJvcHMoe3JlbmRlclBhZ2V9KXtcclxuXHRcdGNvbnN0IHtodG1sLCBoZWFkfSA9IHJlbmRlclBhZ2UoKTtcclxuXHRcdGNvbnN0IHN0eWxlcyA9IGZsdXNoKCk7XHJcblx0XHRyZXR1cm57aHRtbCwgaGVhZCwgc3R5bGVzfVxyXG5cdH1cclxuXHRcclxuXHRyZW5kZXIgKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PHByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcblx0XHRcdFx0PGh0bWw+XHJcblx0XHRcdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHRcdFx0PHRpdGxlPk5leHQuanMgIOyXsOyKtTwvdGl0bGU+XHJcblx0XHRcdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdFx0XHQ8Ym9keT5cclxuXHRcdFx0XHRcdFx0PE1haW4gLz5cclxuXHRcdFx0XHRcdFx0PE5leHRTY3JpcHQgLz5cclxuXHRcdFx0XHRcdDwvYm9keT5cclxuXHRcdFx0XHQ8L2h0bWw+XHJcblx0XHRcdDwvcHJvdmlkZXI+XHJcblx0XHQpXHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvX2RvY3VtZW50LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFLQTtBQUxBO0FBQUE7Ozs7QUFmQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBSkE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=