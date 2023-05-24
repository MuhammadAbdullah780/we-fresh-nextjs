import type { AppProps } from "next/app";

// Styles
import "../styles/globals.scss";
import "../styles/typography.scss";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
