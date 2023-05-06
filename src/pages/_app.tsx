import type { AppProps } from 'next/app';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// css
import '@/styles/globals.scss';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}