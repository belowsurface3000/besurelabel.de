import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { allReducers } from "../store/reducers/allReducers"
import "../styles/style.scss";
import Header from '../components/Header';
import Navigation from "../components/Navigation"
import NavigationButton from "../components/NavigationButton";
import Background from '../components/Background';
import CookieBanner from '../components/CookieBanner';
import Footer from '../components/Footer';

// Create Redux store
const myStore = createStore(allReducers, composeWithDevTools());

function App({ Component, pageProps }) {
  return (
    <Provider store={myStore}>
      <Header />
      <Background />
      <CookieBanner />
      <Navigation />
      <NavigationButton />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}

export default App