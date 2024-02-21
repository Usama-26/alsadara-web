import "@/styles/globals.css";
import "@/styles/font.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "@/layouts/Layout";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <main className="font-sans">
          <Component {...pageProps} />
        </main>
      </AnimatePresence>
    </Layout>
  );
}
