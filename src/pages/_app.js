import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/global.scss';
import '@/styles/index.css';
import { useEffect } from 'react';
import { registerServiceWorker } from '@/util/registerSW';

export default function App({ Component, pageProps }) {
  useEffect(()=>{
    registerServiceWorker();
  },[]);
  return <Component {...pageProps} />;
}
