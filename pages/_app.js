import '../styles/globals.css'
import Footer from '../components/Footer';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
	  <>
	  	<Head>
			<meta charset="UTF-8"></meta>
			<meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
			<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
		</Head>
		<Component {...pageProps} />
		<Footer/>
	  </>
  )
}

export default MyApp
