import Head from 'next/head';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Layout from '../components/layout/layout';
import '../styles/globals.scss';
import { ScrollToTop } from '../components/scroll';

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const isAuthPage =
        router.pathname === '/login' || router.pathname === '/register';

    if (isAuthPage) {
        return (
            <>
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <link rel="icon" href="/favicon.png" />
                </Head>
                <ToastContainer />
                <Component {...pageProps} />
                <ScrollToTop />
            </>
        );
    }

    return (
        <Layout>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <ToastContainer />

            <Component {...pageProps} />
            <ScrollToTop />
        </Layout>
    );
}
MyApp.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.instanceOf(Object).isRequired,
};

export default MyApp;
