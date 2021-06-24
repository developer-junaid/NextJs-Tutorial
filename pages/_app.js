import Layout from "../components/Layout"; // Layout
import "../styles/globals.css"; // Apply global styles

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
