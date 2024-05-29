import Head from 'next/head';
import PropTypes from 'prop-types';
import BannerFive from '../components/banner/index-5';
import Breadcrumb from '../components/breadcrumb';
import Footer from '../components/layout/footer';
import Newsletter from '../components/newsletter/newsletter';
import ProjectTwoColumns from '../components/projects/fullwidth-grid';
import { getAllItems } from '../lib/items-util';

function ProjectTwoColumnsPage({
    projects,
    bannerTwoItems,
    newsletterItems,
    footerItems,
}) {
    return (
        <>
            <Head>
                <title>Projects Two Columns - BuiltView</title>
                <meta name="description" content="Projects Two Columns" />
            </Head>
            <Breadcrumb
                subTitle="Our Clients"
                title="We Provide the Best "
                under="Tool for our Clients"
                bg="/images/hero/faq.jpg"
                desc="We turn our clients’ construction dreams into reality"
            />
            <ProjectTwoColumns projects={projects} />
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

ProjectTwoColumnsPage.propTypes = {
    projects: PropTypes.instanceOf(Object).isRequired,
    bannerTwoItems: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectTwoColumnsPage;
