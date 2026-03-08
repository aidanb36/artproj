import type { AppProps } from "next/app";
import "../public/static/css/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
