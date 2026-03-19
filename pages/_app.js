import CavaniState from "@/src/Context";
import CavaniHead from "@/src/layout/CavaniHead";
import { SiteDataProvider } from "@/src/context/SiteDataContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <CavaniState>
      <SiteDataProvider>
        <CavaniHead />
        <Component {...pageProps} />
      </SiteDataProvider>
    </CavaniState>
  );
}
