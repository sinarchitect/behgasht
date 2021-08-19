import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../Components/Menu';
function MyApp({ Component, pageProps }) {

  return (
  <Menu><Component {...pageProps} /></Menu>
  )

}

export default MyApp
