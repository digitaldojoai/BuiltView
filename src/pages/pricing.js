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

function ProjectFullwidthPage({
    projects,
    bannerTwoItems,
    newsletterItems,
    footerItems,
}) {
    return (
        <>
            <Head>
                <title>Pricing</title>
                <meta name="description" content="Pricing" />
            </Head>
            <Breadcrumb
                subTitle="Pricing"
                title="Our Pricing Tables"
                desc=""
                bg="/images/hero/faq.jpg"
            />
            <Pricing />

            <Procore />
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

    return {
        props: {
            projects: allItems,
            bannerTwoItems,
            newsletterItems,
            footerItems,
        },
    };
}

ProjectFullwidthPage.propTypes = {
    projects: PropTypes.instanceOf(Object).isRequired,
    bannerTwoItems: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectFullwidthPage;
