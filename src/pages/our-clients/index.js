import Head from 'next/head';
import PropTypes from 'prop-types';
import BannerTwo from '../../components/banner/index-2';
import BrandTwo from '../../components/brand/index-2';
import Breadcrumb from '../../components/breadcrumb';
import Footer from '../../components/layout/footer';
import Newsletter from '../../components/newsletter/newsletter';
import TestimonialTwo from '../../components/testimonial/index-2';
import { getAllItems } from '../../lib/items-util';

function OurClients({
    brandItems,
    bannerTwoItems,
    testimonialItems,
    testimonialSectionItems,
    newsletterItems,
    footerItems,
}) {
    return (
        <>
            <Head>
                <title>Our Clients - BuiltView</title>
                {/* <meta
                    name="description"
                    content="BuiltView - Construction React Next JS Template Industry, Products Manufacturing Company, building companies, architecture firms, and the like can take to their advantage by using BuiltView - Construction React Next JS Template."
                /> */}
            </Head>
            <Breadcrumb
                subTitle="Our Clients"
                title="Happy Clients"
                desc="We turn our clients’ construction dreams into reality"
            />
            <BrandTwo brandItems={brandItems} />
            <BannerTwo bannerTwoItems={bannerTwoItems} />
            <TestimonialTwo
                testimonialItems={testimonialItems}
                testimonialSectionItems={testimonialSectionItems}
            />
            <Newsletter newsletterItems={newsletterItems} />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const brandItems = getAllItems('brand');
    const bannerTwoItems = getAllItems('banner-2');
    const testimonialItems = getAllItems('testimonial');
    const testimonialSectionItems = getAllItems('testimonial-section');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            brandItems,
            bannerTwoItems,
            testimonialItems,
            testimonialSectionItems,
            newsletterItems,
            footerItems,
        },
    };
}

OurClients.propTypes = {
    brandItems: PropTypes.instanceOf(Object).isRequired,
    bannerTwoItems: PropTypes.instanceOf(Object).isRequired,
    testimonialItems: PropTypes.instanceOf(Object).isRequired,
    testimonialSectionItems: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default OurClients;
