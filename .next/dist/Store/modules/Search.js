'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getPost = undefined;

var _defineProperty2 = require('next\\node_modules\\babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('next\\node_modules\\babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reduxActions = require('redux-actions');

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