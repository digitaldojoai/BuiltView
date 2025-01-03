import Head from 'next/head';
import PropTypes from 'prop-types';
import BannerFive from '../components/banner/index-5';
import Breadcrumb from '../components/breadcrumb';
import Footer from '../components/layout/footer';
import Newsletter from '../components/newsletter/newsletter';
import ProjectFullwidth from '../components/projects/fullwidth';
import { getAllItems } from '../lib/items-util';
import Pricing from '../components/pricing/pricing';
import Procore from '../components/procorebanner/procore';
import Faq from '../components/faqComponent/faqs.js';

function ProjectFullwidthPage({
    projects,
    bannerTwoItems,
    newsletterItems,
    footerItems,
    faqItems,
}) {
    return (
        <>
            <Head>
                <title>FAQ</title>
                <meta name="description" content="FAQ" />
            </Head>
            <Breadcrumb
                subTitle="FAQs"
                title="Frequently Asked Questions"
                desc=""
                bg="/images/hero/faq.jpg"
            />
            <Faq faqItems={faqItems} />

            <Newsletter newsletterItems={newsletterItems} />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const allItems = getAllItems('projects');
    const bannerTwoItems = getAllItems('banner-2');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');
    const faqItems = getAllItems('faq');

    return {
        props: {
            projects: allItems,
            bannerTwoItems,
            newsletterItems,
            footerItems,
            faqItems,
        },
    };
}

ProjectFullwidthPage.propTypes = {
    projects: PropTypes.instanceOf(Object).isRequired,
    bannerTwoItems: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
    faqItems: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectFullwidthPage;
