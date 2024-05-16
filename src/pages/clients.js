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
                <title>Projects Two Columns - OxyBuild</title>
                <meta name="description" content="Projects Two Columns" />
            </Head>
            <Breadcrumb
                subTitle="Our Clients"
                title="We Provide the Best Tool for our Clients"
                desc="Construction of itself, because it is pain some proper style design occur are pleasure"
            />
            <ProjectTwoColumns projects={projects} />
            <BannerFive bannerTwoItems={bannerTwoItems} />
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
