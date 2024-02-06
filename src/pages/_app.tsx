import { RootProvider } from "@/Providers/RootProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RootProvider>
      <Component {...pageProps} />
    </RootProvider>
  );
};

export default App;
