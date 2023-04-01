import type { AppProps } from 'next/app';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// css
import '@/styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}