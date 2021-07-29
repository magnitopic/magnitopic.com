import '../styles/globals.css'
import Footer from '../components/Footer';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
	  <>
	  	<Head>
		  	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
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
