import '../styles/globals.css'
import Footer from '../components/Footer.jsx';
import Meta from '../components/Meta.jsx';

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
