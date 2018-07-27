import Document, {Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server'
import { provider } from 'react-redux'
import store from './Sotre'

export default class MyDocument extends Document{
	static getInitialProps({renderPage}){
		const {html, head} = renderPage();
		const styles = flush();
		return{html, head, styles}
	}
	
	render () {
		return (
			<provider store={store}>
				<html>
					<Head>
						<title>Next.js  연습</title>
					</Head>
					<body>
						<Main />
						<NextScript />
					</body>
				</html>
			</provider>
		)
	}
}