
          window.__NEXT_REGISTER_PAGE('/lunch', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 1047:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getPost = undefined;

var _defineProperty2 = __webpack_require__(847);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(123);

var _extends3 = _interopRequireDefault(_extends2);

var _axios = __webpack_require__(755);

var _axios2 = _interopRequireDefault(_axios);

var _reduxActions = __webpack_require__(1071);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _handleActions;

function getPostAPI(postId) {
	return _axios2.default.get('https://jsonplaceholder.typicode.com/posts/' + postId);
}

var GET_POST_PENDING = 'GET_POST_PENDING';
var GET_POST_SUCCESS = 'GET_POST_SUCCESS';
var GET_POST_FAILURE = 'GET_POST_FAILURE';

var getPost = exports.getPost = function getPost(postId) {
	return function (dispatch) {
		dispatch({ type: GET_POST_PENDING });
		return getPostAPI(postId).then(function (response) {
			dispatch({
				type: GET_POST_SUCCESS,
				payload: response
			});
		}).catch(function (error) {
			dispatch({
				type: GET_POST_FAILURE,
				payload: error
			});
		});
	};
};
var initialState = {
	pending: false,
	error: false,
	data: {
		title: '',
		body: ''
	}
};

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, (0, _defineProperty3.default)(_handleActions, GET_POST_PENDING, function (state, action) {
	return (0, _extends3.default)({}, state, {
		pending: true,
		error: false
	});
}), (0, _defineProperty3.default)(_handleActions, GET_POST_SUCCESS, function (state, action) {
	var _action$payload$data = action.payload.data,
	    title = _action$payload$data.title,
	    body = _action$payload$data.body;

	return (0, _extends3.default)({}, state, {
		pending: false,
		data: {
			title: title, body: body
		}
	});
}), (0, _defineProperty3.default)(_handleActions, GET_POST_FAILURE, function (state, action) {
	return (0, _extends3.default)({}, state, {
		pending: false,
		error: true
	});
}), _handleActions), initialState);

// function search(){	
// 	const instance = axios.create({
// 		baseURL: 'https://openapi.naver.com/',
// 		timeout: 1000,
// 		headers: {
// 			'X-Naver-Client-Id': 'LUIPzqCRXRTILrs7cQxw',
// 			'X-Naver-Client-Secret': 'YzVBZxZwcP',	
// 			// 'Access-Control-Allow-Origin': '*',
// 			// 'Access-Control-Allow-Methods': 'POST, GET'
// 		}
// 	});

// 	const searchText = '논현동'
// 	const url = 'v1/search/local.xml?query='+ searchText +' 식당&display=10&start=1&sort=random';
// 	instance.get(url)
// 		.then((response)=>{
// 			console.log(response.status);
// 			console.log(response);
// 			// res.status(200).send(response.data);
// 		})
// 		.catch((e)=>{
// 			console.log(e);
// 		// res.status(500).send(e);
// 		});
// 	// const  header = {
// 	// 	'X-Naver-Client-Id' : 'LUIPzqCRXRTILrs7cQxw',
// 	// 	'X-Naver-Client-Secret' : 'YzVBZxZwcP',
// 	// 	'Access-Control-Allow-Origin': '*',
// 	// 	'Access-Control-Allow-Methods': 'POST, GET'
// 	// }

// 	// axios.get(url,header)
// 	// .then( response => { console.log(response); } ) // SUCCESS
// 	// .catch( response => { console.log(response); } ); // ERROR
// export default function reducer(state = initialState, action){
// 	return state;
// }

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\00.Project\\001.kjg\\001. Source\\hello-next\\Store\\modules\\Search.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\00.Project\\001.kjg\\001. Source\\hello-next\\Store\\modules\\Search.js"); } } })();

/***/ }),

/***/ 1048:
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

var _reactNaverMap = __webpack_require__(1054);

var _reactNaverMap2 = _interopRequireDefault(_reactNaverMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\00.Project\\001.kjg\\001. Source\\hello-next\\components\\Map.js';


var Map = function (_React$Component) {
  (0, _inherits3.default)(Map, _React$Component);

  function Map() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Map);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Map.__proto__ || (0, _getPrototypeOf2.default)(Map)).call.apply(_ref, [this].concat(args))), _this), _this.clientId = 'LUIPzqCRXRTILrs7cQxw', _this.state = {
      lat: 37.4982445,
      lng: 127.0343027
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Map, [{
    key: 'onMapClick',
    value: function onMapClick(event) {
      console.log('on Map Click');
      console.log(event);
    }
  }, {
    key: 'onInit',
    value: function onInit(map, naver) {
      console.log('onInit');
      console.log(map);
      console.log(naver);
    }
  }, {
    key: 'onBoundChange',
    value: function onBoundChange(bounds) {
      console.log('bounds');
      console.log(bounds);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactNaverMap2.default, {
        clientId: this.clientId,
        style: { width: '500px', height: '500px' },
        initialPosition: { lat: this.state.lat, lng: this.state.lng },
        initialZoom: 12

        // onInit={(map, naver) => {this.onInit(map,naver)}}  // map: naver map object, naver: window.naver object
        // onBoundChange={(bounds) => {this.onBoundChange(bounds)}}  // bounds: naver.maps.LatLngBounds
        // onMapClick={(event) => {this.onMapClick(event)}}  // event: PointerEvent 
        , __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      });
    }
  }]);

  return Map;
}(_react2.default.Component);

exports.default = Map;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\00.Project\\001.kjg\\001. Source\\hello-next\\components\\Map.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\00.Project\\001.kjg\\001. Source\\hello-next\\components\\Map.js"); } } })();

/***/ }),

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
			// const { number , searchAction } = this.porps;
			// searchAction.getPost(number);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			// const { searchAction } = this.porps;
			// if(this.props.number !== nextProps.number){
			// 	searchAction.getPost(nextProps.number)
			// }
		}
	}, {
		key: 'render',
		value: function render() {
			// const { post, error, loading } = this.props;

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
		// post : state.post.data,
		// loading: state.post.pending,
		// error: state.post.error
	};
}, function (dispatch) {
	return {
		// SearchAction : bindActionCreators(searchAction, dispatch)
	};
})(Search);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\00.Project\\001.kjg\\001. Source\\hello-next\\components\\Search.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\00.Project\\001.kjg\\001. Source\\hello-next\\components\\Search.js"); } } })();

/***/ }),

/***/ 1079:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(754);


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

/***/ 754:
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

var _Map = __webpack_require__(1048);

var _Map2 = _interopRequireDefault(_Map);

var _Search = __webpack_require__(1049);

var _Search2 = _interopRequireDefault(_Search);

var _Layout = __webpack_require__(557);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\00.Project\\001.kjg\\001. Source\\hello-next\\pages\\lunch.js?entry';


var App = function (_React$Component) {
  (0, _inherits3.default)(App, _React$Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);

    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
  }

  (0, _createClass3.default)(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react2.default.createElement(_Search2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }), _react2.default.createElement(_Map2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }));
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\00.Project\\001.kjg\\001. Source\\hello-next\\pages\\lunch.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\00.Project\\001.kjg\\001. Source\\hello-next\\pages\\lunch.js"); } } })();
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
    })(module.exports.default || module.exports, "/lunch")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

},[1079]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGx1bmNoLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vU3RvcmUvbW9kdWxlcy9TZWFyY2guanM/YzdmODJmZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hcC5qcz9jN2Y4MmZmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoLmpzP2M3ZjgyZmYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/YzdmODJmZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9jN2Y4MmZmIiwid2VicGFjazovLy8uL3BhZ2VzL2x1bmNoLmpzP2M3ZjgyZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBoYW5kbGVBY3Rpb25zIH0gZnJvbSAncmVkdXgtYWN0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBnZXRQb3N0QVBJKHBvc3RJZCkge1xyXG5cdHJldHVybiBheGlvcy5nZXQoYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8ke3Bvc3RJZH1gKVxyXG59XHJcblxyXG5jb25zdCBHRVRfUE9TVF9QRU5ESU5HID0gJ0dFVF9QT1NUX1BFTkRJTkcnO1xyXG5jb25zdCBHRVRfUE9TVF9TVUNDRVNTID0gJ0dFVF9QT1NUX1NVQ0NFU1MnO1xyXG5jb25zdCBHRVRfUE9TVF9GQUlMVVJFID0gJ0dFVF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFBvc3QgPSAocG9zdElkKSA9PiBkaXNwYXRjaCA9PiB7XHJcblx0ZGlzcGF0Y2goe3R5cGUgOiBHRVRfUE9TVF9QRU5ESU5HfSk7XHJcblx0cmV0dXJuIGdldFBvc3RBUEkocG9zdElkKS50aGVuKFxyXG5cdFx0KHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0XHR0eXBlIDogR0VUX1BPU1RfU1VDQ0VTUyxcclxuXHRcdFx0XHRwYXlsb2FkIDogcmVzcG9uc2VcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHQpLmNhdGNoKGVycm9yID0+IHtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZSA6IEdFVF9QT1NUX0ZBSUxVUkUsXHJcblx0XHRcdHBheWxvYWQ6IGVycm9yXHJcblx0XHR9KVxyXG5cdH0pXHJcbn1cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdHBlbmRpbmc6IGZhbHNlLFxyXG5cdGVycm9yOiBmYWxzZSxcclxuXHRkYXRhOiB7XHJcblx0XHR0aXRsZSA6ICcnLFxyXG5cdFx0Ym9keSA6ICcnXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVBY3Rpb25zKHtcclxuXHRbR0VUX1BPU1RfUEVORElOR106IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0cGVuZGluZyA6IHRydWUsXHJcblx0XHRcdGVycm9yIDogZmFsc2VcclxuXHRcdH07XHJcblx0fSxcclxuXHRbR0VUX1BPU1RfU1VDQ0VTU10gOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cdFx0Y29uc3QgeyB0aXRsZSwgYm9keX0gPSBhY3Rpb24ucGF5bG9hZC5kYXRhO1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdHBlbmRpbmc6ZmFsc2UsXHJcblx0XHRcdGRhdGE6e1xyXG5cdFx0XHRcdHRpdGxlLCBib2R5XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0fSxcclxuXHRbR0VUX1BPU1RfRkFJTFVSRV0gOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cdFx0cmV0dXJue1xyXG5cdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0cGVuZGluZzogZmFsc2UsXHJcblx0XHRcdGVycm9yIDogdHJ1ZVxyXG5cdFx0fVxyXG5cdH1cclxufSwgaW5pdGlhbFN0YXRlKTtcclxuXHJcbi8vIGZ1bmN0aW9uIHNlYXJjaCgpe1x0XHJcbi8vIFx0Y29uc3QgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4vLyBcdFx0YmFzZVVSTDogJ2h0dHBzOi8vb3BlbmFwaS5uYXZlci5jb20vJyxcclxuLy8gXHRcdHRpbWVvdXQ6IDEwMDAsXHJcbi8vIFx0XHRoZWFkZXJzOiB7XHJcbi8vIFx0XHRcdCdYLU5hdmVyLUNsaWVudC1JZCc6ICdMVUlQenFDUlhSVElMcnM3Y1F4dycsXHJcbi8vIFx0XHRcdCdYLU5hdmVyLUNsaWVudC1TZWNyZXQnOiAnWXpWQlp4WndjUCcsXHRcclxuLy8gXHRcdFx0Ly8gJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcclxuLy8gXHRcdFx0Ly8gJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnOiAnUE9TVCwgR0VUJ1xyXG4vLyBcdFx0fVxyXG4vLyBcdH0pO1xyXG5cclxuLy8gXHRjb25zdCBzZWFyY2hUZXh0ID0gJ+uFvO2YhOuPmSdcclxuLy8gXHRjb25zdCB1cmwgPSAndjEvc2VhcmNoL2xvY2FsLnhtbD9xdWVyeT0nKyBzZWFyY2hUZXh0ICsnIOyLneuLuSZkaXNwbGF5PTEwJnN0YXJ0PTEmc29ydD1yYW5kb20nO1xyXG4vLyBcdGluc3RhbmNlLmdldCh1cmwpXHJcbi8vIFx0XHQudGhlbigocmVzcG9uc2UpPT57XHJcbi8vIFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlLnN0YXR1cyk7XHJcbi8vIFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuLy8gXHRcdFx0Ly8gcmVzLnN0YXR1cygyMDApLnNlbmQocmVzcG9uc2UuZGF0YSk7XHJcbi8vIFx0XHR9KVxyXG4vLyBcdFx0LmNhdGNoKChlKT0+e1xyXG4vLyBcdFx0XHRjb25zb2xlLmxvZyhlKTtcclxuLy8gXHRcdC8vIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4vLyBcdFx0fSk7XHJcbi8vIFx0Ly8gY29uc3QgIGhlYWRlciA9IHtcclxuLy8gXHQvLyBcdCdYLU5hdmVyLUNsaWVudC1JZCcgOiAnTFVJUHpxQ1JYUlRJTHJzN2NReHcnLFxyXG4vLyBcdC8vIFx0J1gtTmF2ZXItQ2xpZW50LVNlY3JldCcgOiAnWXpWQlp4WndjUCcsXHJcbi8vIFx0Ly8gXHQnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxyXG4vLyBcdC8vIFx0J0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnOiAnUE9TVCwgR0VUJ1xyXG4vLyBcdC8vIH1cclxuXHJcbi8vIFx0Ly8gYXhpb3MuZ2V0KHVybCxoZWFkZXIpXHJcbi8vIFx0Ly8gLnRoZW4oIHJlc3BvbnNlID0+IHsgY29uc29sZS5sb2cocmVzcG9uc2UpOyB9ICkgLy8gU1VDQ0VTU1xyXG4vLyBcdC8vIC5jYXRjaCggcmVzcG9uc2UgPT4geyBjb25zb2xlLmxvZyhyZXNwb25zZSk7IH0gKTsgLy8gRVJST1JcclxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKXtcclxuLy8gXHRyZXR1cm4gc3RhdGU7XHJcbi8vIH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9TdG9yZS9tb2R1bGVzL1NlYXJjaC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE5hdmVyTWFwIGZyb20gJ3JlYWN0LW5hdmVyLW1hcCdcclxuXHJcbmNsYXNzIE1hcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY2xpZW50SWQgPSAnTFVJUHpxQ1JYUlRJTHJzN2NReHcnIFxyXG5cclxuICBzdGF0ZSA9IHtcclxuICAgIGxhdCA6MzcuNDk4MjQ0NSxcclxuICAgIGxuZyA6IDEyNy4wMzQzMDI3XHJcbiAgfVxyXG4gIFxyXG4gIG9uTWFwQ2xpY2soZXZlbnQpe1xyXG4gICAgY29uc29sZS5sb2coJ29uIE1hcCBDbGljaycpXHJcbiAgICBjb25zb2xlLmxvZyhldmVudClcclxuICB9XHJcbiAgb25Jbml0KG1hcCwgbmF2ZXIpe1xyXG4gICAgY29uc29sZS5sb2coJ29uSW5pdCcpXHJcbiAgICBjb25zb2xlLmxvZyhtYXApXHJcbiAgICBjb25zb2xlLmxvZyhuYXZlcilcclxuICB9XHJcbiAgb25Cb3VuZENoYW5nZShib3VuZHMpe1xyXG4gICAgY29uc29sZS5sb2coJ2JvdW5kcycpXHJcbiAgICBjb25zb2xlLmxvZyhib3VuZHMpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBcclxuICAgICAgPE5hdmVyTWFwXHJcbiAgICAgICAgY2xpZW50SWQgPSB7dGhpcy5jbGllbnRJZH1cclxuICAgICAgICBzdHlsZT17e3dpZHRoOic1MDBweCcsIGhlaWdodDonNTAwcHgnfX1cclxuICAgICAgICBpbml0aWFsUG9zaXRpb249e3tsYXQ6IHRoaXMuc3RhdGUubGF0LCBsbmc6IHRoaXMuc3RhdGUubG5nfX1cclxuICAgICAgICBpbml0aWFsWm9vbT17MTJ9XHJcblxyXG4gICAgICAgIC8vIG9uSW5pdD17KG1hcCwgbmF2ZXIpID0+IHt0aGlzLm9uSW5pdChtYXAsbmF2ZXIpfX0gIC8vIG1hcDogbmF2ZXIgbWFwIG9iamVjdCwgbmF2ZXI6IHdpbmRvdy5uYXZlciBvYmplY3RcclxuICAgICAgICAvLyBvbkJvdW5kQ2hhbmdlPXsoYm91bmRzKSA9PiB7dGhpcy5vbkJvdW5kQ2hhbmdlKGJvdW5kcyl9fSAgLy8gYm91bmRzOiBuYXZlci5tYXBzLkxhdExuZ0JvdW5kc1xyXG4gICAgICAgIC8vIG9uTWFwQ2xpY2s9eyhldmVudCkgPT4ge3RoaXMub25NYXBDbGljayhldmVudCl9fSAgLy8gZXZlbnQ6IFBvaW50ZXJFdmVudCBcclxuICAgICAgICAvPlxyXG4gICAgXHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcFxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL01hcC5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0ICogYXMgc2VhcmNoQWN0aW9uIGZyb20gJy4uL1N0b3JlL21vZHVsZXMvU2VhcmNoJ1xyXG5cclxuY2xhc3MgU2VhcmNoIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdC8vIGNvbnN0IHsgbnVtYmVyICwgc2VhcmNoQWN0aW9uIH0gPSB0aGlzLnBvcnBzO1xyXG5cdFx0Ly8gc2VhcmNoQWN0aW9uLmdldFBvc3QobnVtYmVyKTtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcclxuXHRcdC8vIGNvbnN0IHsgc2VhcmNoQWN0aW9uIH0gPSB0aGlzLnBvcnBzO1xyXG5cdFx0Ly8gaWYodGhpcy5wcm9wcy5udW1iZXIgIT09IG5leHRQcm9wcy5udW1iZXIpe1xyXG5cdFx0Ly8gXHRzZWFyY2hBY3Rpb24uZ2V0UG9zdChuZXh0UHJvcHMubnVtYmVyKVxyXG5cdFx0Ly8gfVxyXG5cdH1cclxuXHJcblx0cmVuZGVyKCl7XHJcblx0XHQvLyBjb25zdCB7IHBvc3QsIGVycm9yLCBsb2FkaW5nIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHR7LyogPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNlYXJjaH0+6rKA7IOJPC9idXR0b24+ICovfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QgKFxyXG5cdChzdGF0ZSkgPT4gKHtcclxuXHRcdC8vIHBvc3QgOiBzdGF0ZS5wb3N0LmRhdGEsXHJcblx0XHQvLyBsb2FkaW5nOiBzdGF0ZS5wb3N0LnBlbmRpbmcsXHJcblx0XHQvLyBlcnJvcjogc3RhdGUucG9zdC5lcnJvclxyXG5cdH0pLFxyXG5cdChkaXNwYXRjaCkgPT4gKHtcclxuXHRcdC8vIFNlYXJjaEFjdGlvbiA6IGJpbmRBY3Rpb25DcmVhdG9ycyhzZWFyY2hBY3Rpb24sIGRpc3BhdGNoKVxyXG5cdH0pXHJcbikoU2VhcmNoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9TZWFyY2guanMiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgbGlua1N0eWxlID0ge1xyXG4gICAgbWFyZ2luUmlnaHQ6ICcxcmVtJ1xyXG59XHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YSBzdHlsZT17bGlua1N0eWxlfT7tmYg8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiYWJvdXRcIj48YSBzdHlsZT17bGlua1N0eWxlfT7shozqsJw8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBwcmVmZXRjaCAgaHJlZj1cIi9zc3ItdGVzdFwiPjxhIHN0eWxlPXtsaW5rU3R5bGV9PlNTUiDthYzsiqTtirg8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBwcmVmZXRjaCAgaHJlZj1cIi9sdW5jaFwiPjxhIHN0eWxlPXtsaW5rU3R5bGV9PuyngOuPhCDthYzsiqTtirg8L2E+PC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYWRlci5qcyIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBNYXAgZnJvbScuLi9jb21wb25lbnRzL01hcCdcclxuaW1wb3J0IFNlYXJjaCBmcm9tJy4uL2NvbXBvbmVudHMvU2VhcmNoJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPFNlYXJjaD48L1NlYXJjaD5cclxuICAgICAgICA8TWFwPjwvTWFwPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIClcclxuICB9XHJcbn1cclxuIFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvbHVuY2guanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOztBQUlBO0FBRUE7QUFIQTtBQUhBOztBQVVBO0FBRUE7QUFIQTtBQUlBO0FBZkE7QUFBQTtBQWdCQTtBQUVBO0FBQ0E7O0FBRUE7QUFJQTtBQUxBO0FBSEE7QUFDQTtBQU9BO0FBR0E7QUFFQTtBQUVBO0FBSEE7QUFKQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBRkE7QUFaQTtBQW9CQTtBQUVBO0FBRUE7QUFIQTtBQXJCQTtBQUNBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEdBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFJQTtBQUFBO0FBREE7Ozs7O0FBSUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFSQTtBQUNBO0FBREE7QUFZQTtBQVpBO0FBQUE7Ozs7O0FBekJBO0FBQ0E7QUF3Q0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBR0E7QUFFQTtBQUNBOzs7QUFBQTtBQUlBO0FBSkE7QUFBQTs7Ozs7QUFPQTtBQUNBO0FBQUE7O0FBRUE7QUFDQTtBQUhBO0FBQ0E7QUFGQTs7QUFNQTtBQUNBO0FBUEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBOzs7Ozs7OztBQUNBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUdBO0FBSEE7QUFBQTs7Ozs7QUFOQTtBQUNBO0FBWUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        