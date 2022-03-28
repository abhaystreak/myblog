import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'
function MyApp({ Component, pageProps }) {
  return(
 <>
   <Head>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>

  <script defer src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
   </Head>
   <Navbar/>
   <Component{...pageProps}/>
 </>
  )
}

export default MyApp
