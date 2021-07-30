import '../styles/globals.css'
import Footer from '../components/Footer';
import Meta from '../components/Meta';

function MyApp({ Component, pageProps }) {
  return (
	  <>
	  	<Meta/>
		<Component {...pageProps} />
		<Footer/>
	  </>
  )
}

export default MyApp
