webpackHotUpdate(6,{

/***/ 1049:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var _redux = __webpack_require__(753);

var _reactRedux = __webpack_require__(1063);

var _Search = __webpack_require__(1047);

var searchAction = _interopRequireWildcard(_Search);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\00.Project\\001.kjg\\001. Source\\hello-next\\components\\Search.js';


var Search = function (_Component) {
	(0, _inherits3.default)(Search, _Component);

	function Search() {
		(0, _classCallCheck3.default)(this, Search);

		return (0, _possibleConstructorReturn3.default)(this, (Search.__proto__ || (0, _getPrototypeOf2.default)(Search)).apply(this, arguments));
	}

	(0, _createClass3.default)(Search, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _porps = this.porps,
			    number = _porps.number,
			    searchAction = _porps.searchAction;

			searchAction.getPost(number);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var searchAction = this.porps.searchAction;

			if (this.props.number !== nextProps.number) {
				searchAction.getPost(nextProps.number);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    post = _props.post,
			    error = _props.error,
			    loading = _props.loading;

			return _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 23
				}
			});
		}
	}]);

	return Search;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		post: state.post.data,
		loading: state.post.pending,
		error: state.post.error
	};
}, function (dispatch) {
	return {
		SearchAction: (0, _redux.bindActionCreators)(searchAction, dispatch)
	};
})(Search);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\00.Project\\001.kjg\\001. Source\\hello-next\\components\\Search.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\00.Project\\001.kjg\\001. Source\\hello-next\\components\\Search.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi42ZWVlZWE3MzFlYWNjZTMzMGFhNC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2guanM/NjI0MzFjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCAqIGFzIHNlYXJjaEFjdGlvbiBmcm9tICcuLi9TdG9yZS9tb2R1bGVzL1NlYXJjaCdcclxuXHJcbmNsYXNzIFNlYXJjaCBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHRjb25zdCB7IG51bWJlciAsIHNlYXJjaEFjdGlvbiB9ID0gdGhpcy5wb3JwcztcclxuXHRcdHNlYXJjaEFjdGlvbi5nZXRQb3N0KG51bWJlcik7XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XHJcblx0XHRjb25zdCB7IHNlYXJjaEFjdGlvbiB9ID0gdGhpcy5wb3JwcztcclxuXHRcdGlmKHRoaXMucHJvcHMubnVtYmVyICE9PSBuZXh0UHJvcHMubnVtYmVyKXtcclxuXHRcdFx0c2VhcmNoQWN0aW9uLmdldFBvc3QobmV4dFByb3BzLm51bWJlcilcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJlbmRlcigpe1xyXG5cdFx0Y29uc3QgeyBwb3N0LCBlcnJvciwgbG9hZGluZyB9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0ey8qIDxidXR0b24gb25DbGljaz17dGhpcy5zZWFyY2h9PuqygOyDiTwvYnV0dG9uPiAqL31cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0IChcclxuXHQoc3RhdGUpID0+ICh7XHJcblx0XHRwb3N0IDogc3RhdGUucG9zdC5kYXRhLFxyXG5cdFx0bG9hZGluZzogc3RhdGUucG9zdC5wZW5kaW5nLFxyXG5cdFx0ZXJyb3I6IHN0YXRlLnBvc3QuZXJyb3JcclxuXHR9KSxcclxuXHQoZGlzcGF0Y2gpID0+ICh7XHJcblx0XHRTZWFyY2hBY3Rpb24gOiBiaW5kQWN0aW9uQ3JlYXRvcnMoc2VhcmNoQWN0aW9uLCBkaXNwYXRjaClcclxuXHR9KVxyXG4pKFNlYXJjaCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvU2VhcmNoLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUlBO0FBSkE7QUFBQTs7Ozs7QUFPQTtBQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTs7QUFPQTtBQUFBO0FBUEE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==