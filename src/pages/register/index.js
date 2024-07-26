import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../../components/breadcrumb';
import Footer from '../../components/layout/footer';
import Newsletter from '../../components/newsletter/newsletter';
import { getAllItems } from '../../lib/items-util';
import Register from '../../components/register';

function LoginRegisterPage({ newsletterItems, footerItems }) {
    return (
        <>
            <Head>
                <title>Login || Register - BuiltView</title>
                {/* <meta
                    name="description"
                    content="BuiltView - Construction React Next JS Template Industry, Products Manufacturing Company, building companies, architecture firms, and the like can take to their advantage by using BuiltView - Construction React Next JS Template."
                /> */}
            </Head>

            <Register />
        </>
    );
}

export function getStaticProps() {
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            newsletterItems,
            footerItems,
        },
    };
}

LoginRegisterPage.propTypes = {
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default LoginRegisterPage;
