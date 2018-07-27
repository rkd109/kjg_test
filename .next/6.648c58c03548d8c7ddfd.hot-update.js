webpackHotUpdate(6,{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi42NDhjNThjMDM1NDhkOGM3ZGRmZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vU3RvcmUvbW9kdWxlcy9TZWFyY2guanM/Zjk4YzYwOSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaC5qcz9mOThjNjA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgaGFuZGxlQWN0aW9ucyB9IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xyXG5cclxuZnVuY3Rpb24gZ2V0UG9zdEFQSShwb3N0SWQpIHtcclxuXHRyZXR1cm4gYXhpb3MuZ2V0KGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvJHtwb3N0SWR9YClcclxufVxyXG5cclxuY29uc3QgR0VUX1BPU1RfUEVORElORyA9ICdHRVRfUE9TVF9QRU5ESU5HJztcclxuY29uc3QgR0VUX1BPU1RfU1VDQ0VTUyA9ICdHRVRfUE9TVF9TVUNDRVNTJztcclxuY29uc3QgR0VUX1BPU1RfRkFJTFVSRSA9ICdHRVRfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQb3N0ID0gKHBvc3RJZCkgPT4gZGlzcGF0Y2ggPT4ge1xyXG5cdGRpc3BhdGNoKHt0eXBlIDogR0VUX1BPU1RfUEVORElOR30pO1xyXG5cdHJldHVybiBnZXRQb3N0QVBJKHBvc3RJZCkudGhlbihcclxuXHRcdChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdFx0dHlwZSA6IEdFVF9QT1NUX1NVQ0NFU1MsXHJcblx0XHRcdFx0cGF5bG9hZCA6IHJlc3BvbnNlXHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0KS5jYXRjaChlcnJvciA9PiB7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGUgOiBHRVRfUE9TVF9GQUlMVVJFLFxyXG5cdFx0XHRwYXlsb2FkOiBlcnJvclxyXG5cdFx0fSlcclxuXHR9KVxyXG59XHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRwZW5kaW5nOiBmYWxzZSxcclxuXHRlcnJvcjogZmFsc2UsXHJcblx0ZGF0YToge1xyXG5cdFx0dGl0bGUgOiAnJyxcclxuXHRcdGJvZHkgOiAnJ1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlQWN0aW9ucyh7XHJcblx0W0dFVF9QT1NUX1BFTkRJTkddOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdHBlbmRpbmcgOiB0cnVlLFxyXG5cdFx0XHRlcnJvciA6IGZhbHNlXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0W0dFVF9QT1NUX1NVQ0NFU1NdIDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHRcdGNvbnN0IHsgdGl0bGUsIGJvZHl9ID0gYWN0aW9uLnBheWxvYWQuZGF0YTtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRwZW5kaW5nOmZhbHNlLFxyXG5cdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0dGl0bGUsIGJvZHlcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdFtHRVRfUE9TVF9GQUlMVVJFXSA6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0cGVuZGluZzogZmFsc2UsXHJcblx0XHRcdGVycm9yIDogdHJ1ZVxyXG5cdFx0fVxyXG5cdH1cclxufSwgaW5pdGlhbFN0YXRlKTtcclxuXHJcbi8vIGZ1bmN0aW9uIHNlYXJjaCgpe1x0XHJcbi8vIFx0Y29uc3QgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4vLyBcdFx0YmFzZVVSTDogJ2h0dHBzOi8vb3BlbmFwaS5uYXZlci5jb20vJyxcclxuLy8gXHRcdHRpbWVvdXQ6IDEwMDAsXHJcbi8vIFx0XHRoZWFkZXJzOiB7XHJcbi8vIFx0XHRcdCdYLU5hdmVyLUNsaWVudC1JZCc6ICdMVUlQenFDUlhSVElMcnM3Y1F4dycsXHJcbi8vIFx0XHRcdCdYLU5hdmVyLUNsaWVudC1TZWNyZXQnOiAnWXpWQlp4WndjUCcsXHRcclxuLy8gXHRcdFx0Ly8gJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcclxuLy8gXHRcdFx0Ly8gJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnOiAnUE9TVCwgR0VUJ1xyXG4vLyBcdFx0fVxyXG4vLyBcdH0pO1xyXG5cclxuLy8gXHRjb25zdCBzZWFyY2hUZXh0ID0gJ+uFvO2YhOuPmSdcclxuLy8gXHRjb25zdCB1cmwgPSAndjEvc2VhcmNoL2xvY2FsLnhtbD9xdWVyeT0nKyBzZWFyY2hUZXh0ICsnIOyLneuLuSZkaXNwbGF5PTEwJnN0YXJ0PTEmc29ydD1yYW5kb20nO1xyXG4vLyBcdGluc3RhbmNlLmdldCh1cmwpXHJcbi8vIFx0XHQudGhlbigocmVzcG9uc2UpPT57XHJcbi8vIFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlLnN0YXR1cyk7XHJcbi8vIFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuLy8gXHRcdFx0Ly8gcmVzLnN0YXR1cygyMDApLnNlbmQocmVzcG9uc2UuZGF0YSk7XHJcbi8vIFx0XHR9KVxyXG4vLyBcdFx0LmNhdGNoKChlKT0+e1xyXG4vLyBcdFx0XHRjb25zb2xlLmxvZyhlKTtcclxuLy8gXHRcdC8vIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4vLyBcdFx0fSk7XHJcbi8vIFx0Ly8gY29uc3QgIGhlYWRlciA9IHtcclxuLy8gXHQvLyBcdCdYLU5hdmVyLUNsaWVudC1JZCcgOiAnTFVJUHpxQ1JYUlRJTHJzN2NReHcnLFxyXG4vLyBcdC8vIFx0J1gtTmF2ZXItQ2xpZW50LVNlY3JldCcgOiAnWXpWQlp4WndjUCcsXHJcbi8vIFx0Ly8gXHQnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxyXG4vLyBcdC8vIFx0J0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnOiAnUE9TVCwgR0VUJ1xyXG4vLyBcdC8vIH1cclxuXHJcbi8vIFx0Ly8gYXhpb3MuZ2V0KHVybCxoZWFkZXIpXHJcbi8vIFx0Ly8gLnRoZW4oIHJlc3BvbnNlID0+IHsgY29uc29sZS5sb2cocmVzcG9uc2UpOyB9ICkgLy8gU1VDQ0VTU1xyXG4vLyBcdC8vIC5jYXRjaCggcmVzcG9uc2UgPT4geyBjb25zb2xlLmxvZyhyZXNwb25zZSk7IH0gKTsgLy8gRVJST1JcclxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKXtcclxuLy8gXHRyZXR1cm4gc3RhdGU7XHJcbi8vIH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9TdG9yZS9tb2R1bGVzL1NlYXJjaC5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0ICogYXMgc2VhcmNoQWN0aW9uIGZyb20gJy4uL1N0b3JlL21vZHVsZXMvU2VhcmNoJ1xyXG5cclxuY2xhc3MgU2VhcmNoIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdC8vIGNvbnN0IHsgbnVtYmVyICwgc2VhcmNoQWN0aW9uIH0gPSB0aGlzLnBvcnBzO1xyXG5cdFx0Ly8gc2VhcmNoQWN0aW9uLmdldFBvc3QobnVtYmVyKTtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcclxuXHRcdC8vIGNvbnN0IHsgc2VhcmNoQWN0aW9uIH0gPSB0aGlzLnBvcnBzO1xyXG5cdFx0Ly8gaWYodGhpcy5wcm9wcy5udW1iZXIgIT09IG5leHRQcm9wcy5udW1iZXIpe1xyXG5cdFx0Ly8gXHRzZWFyY2hBY3Rpb24uZ2V0UG9zdChuZXh0UHJvcHMubnVtYmVyKVxyXG5cdFx0Ly8gfVxyXG5cdH1cclxuXHJcblx0cmVuZGVyKCl7XHJcblx0XHQvLyBjb25zdCB7IHBvc3QsIGVycm9yLCBsb2FkaW5nIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHR7LyogPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNlYXJjaH0+6rKA7IOJPC9idXR0b24+ICovfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QgKFxyXG5cdChzdGF0ZSkgPT4gKHtcclxuXHRcdC8vIHBvc3QgOiBzdGF0ZS5wb3N0LmRhdGEsXHJcblx0XHQvLyBsb2FkaW5nOiBzdGF0ZS5wb3N0LnBlbmRpbmcsXHJcblx0XHQvLyBlcnJvcjogc3RhdGUucG9zdC5lcnJvclxyXG5cdH0pLFxyXG5cdChkaXNwYXRjaCkgPT4gKHtcclxuXHRcdC8vIFNlYXJjaEFjdGlvbiA6IGJpbmRBY3Rpb25DcmVhdG9ycyhzZWFyY2hBY3Rpb24sIGRpc3BhdGNoKVxyXG5cdH0pXHJcbikoU2VhcmNoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9TZWFyY2guanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7QUFJQTtBQUVBO0FBSEE7QUFIQTs7QUFVQTtBQUVBO0FBSEE7QUFJQTtBQWZBO0FBQUE7QUFnQkE7QUFFQTtBQUNBOztBQUVBO0FBSUE7QUFMQTtBQUhBO0FBQ0E7QUFPQTtBQUdBO0FBRUE7QUFFQTtBQUhBO0FBSkE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQUZBO0FBWkE7QUFvQkE7QUFFQTtBQUVBO0FBSEE7QUFyQkE7QUFDQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BHQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUVBO0FBQ0E7OztBQUFBO0FBSUE7QUFKQTtBQUFBOzs7OztBQU9BO0FBQ0E7QUFBQTs7QUFFQTtBQUNBO0FBSEE7QUFDQTtBQUZBOztBQU1BO0FBQ0E7QUFQQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9