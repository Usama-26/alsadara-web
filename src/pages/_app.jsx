import "@/styles/globals.css";
import "@/styles/font.css";

export default function App({ Component, pageProps }) {
  return (
    <main className="font-sans">
      <Component {...pageProps} />
    </main>
  );
}
