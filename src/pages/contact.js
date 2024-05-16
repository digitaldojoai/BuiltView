import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../components/breadcrumb';
import Contact from '../components/contact';
import Footer from '../components/layout/footer';
import Newsletter from '../components/newsletter/newsletter';
import { getAllItems } from '../lib/items-util';

function ContactPage({ contactItems, newsletterItems, footerItems }) {
    return (
        <>
            <Head>
                <title>Contact - BuiltView</title>
                <meta
                    name="description"
                    content="BuiltView - Construction React Next JS Template Industry, Products Manufacturing Company, building companies, architecture firms, and the like can take to their advantage by using BuiltView - Construction React Next JS Template."
                />
            </Head>
            <Breadcrumb subTitle="Contact us" title="Get in Touch" desc="" />
            <Contact contactItems={contactItems} />
            <Newsletter newsletterItems={newsletterItems} />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const contactItems = getAllItems('contact');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            contactItems,
            newsletterItems,
            footerItems,
        },
    };
}

ContactPage.propTypes = {
    contactItems: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ContactPage;
