import axios from 'axios'
import { handleActions } from 'redux-actions';

function getPostAPI(postId) {
	return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
}

const GET_POST_PENDING = 'GET_POST_PENDING';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILURE = 'GET_POST_FAILURE';

export const getPost = (postId) => dispatch => {
	dispatch({type : GET_POST_PENDING});
	return getPostAPI(postId).then(
		(response) => {
			dispatch({
				type : GET_POST_SUCCESS,
				payload : response
			})
		}
	).catch(error => {
		dispatch({
			type : GET_POST_FAILURE,
			payload: error
		})
	})
}
const initialState = {
	pending: false,
	error: false,
	data: {
		title : '',
		body : ''
	}
}

export default handleActions({
	[GET_POST_PENDING]: (state, action) => {
		return {
			...state,
			pending : true,
			error : false
		};
	},
	[GET_POST_SUCCESS] : (state, action) => {
		const { title, body} = action.payload.data;
		return {
			...state,
			pending:false,
			data: {
				title, body
			}
		};
	},
	[GET_POST_FAILURE] : (state, action) => {
		return {
			...state,
			pending: false,
			error : true
		}
	}
}, initialState);

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