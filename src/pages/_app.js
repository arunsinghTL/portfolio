import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/global.scss';
import '@/styles/index.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
