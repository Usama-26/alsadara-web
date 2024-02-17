import "@/styles/globals.css";
import "@/styles/font.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {
  return (
    <main className="font-sans">
      <Component {...pageProps} />
    </main>
  );
}
