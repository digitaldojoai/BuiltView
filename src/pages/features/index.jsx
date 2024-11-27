import Head from 'next/head';
import PropTypes from 'prop-types';
import { FaPlay } from 'react-icons/fa';
import BannerTwo from '../../components/banner/index-2';
import BannerTwoTwo from '../../components/banner/index-22';
import BannerFourFour from '../../components/banner/index-44';
import Breadcrumb from '../../components/breadcrumb';
import Footer from '../../components/layout/footer';
import Newsletter from '../../components/newsletter/newsletter';
import VideoComponent from '../../components/video/video';
import { getAllItems } from '../../lib/items-util';
import { useRef, useState } from 'react';

function ServicePage({
    aboutItemsTwo,
    services,
    serviceSectionItems,
    bannerTwoItems,
    bannerTwoTwoItems,
    brandItems,
    bannerFourFourItems,
    bannerSection,
    testimonialItems,
    testimonialSectionItems,
    newsletterItems,
    footerItems,
}) {
    const videoRef = useRef();
    const [isPlaying, setIsPlaying] = useState('');

    const handlePlayPause = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying('play');
        } else {
            videoRef.current.pause();
            setIsPlaying('');
        }
    };

    const handleVideo = () => {
        if (isPlaying === 'play') {
            videoRef.current.pause();
            setIsPlaying('');
        } else {
            videoRef.current.play();
            setIsPlaying('play');
        }
    };
    return (
        <>
            <Head>
                <title>Features - BuiltView</title>
                {/* <meta
                    name="description"
                    content="BuiltView - Construction React Next JS Template Industry, Products Manufacturing Company, building companies, architecture firms, and the like can take to their advantage by using BuiltView - Construction React Next JS Template."
                /> */}
            </Head>
            <Breadcrumb
                subTitle="What we offer"
                title="Our Features"
                bg="/images/hero/faq.jpg"
            />
            {/* <AboutTwo aboutItemsTwo={aboutItemsTwo} />
            <AllServices
                services={services}
                serviceSectionItems={serviceSectionItems}
            /> */}
            <div className="container-banners-features">
                <h2 className="d-flex title-video-main align-self-center">
                    Main Features
                </h2>

                <BannerTwo bannerTwoItems={bannerTwoItems} />
                <BannerTwoTwo bannerTwoTwoItems={bannerTwoTwoItems} />
            </div>
            {/* <BrandOne brandItems={brandItems} /> */}
            <BannerFourFour
                bannerFourFourItems={bannerFourFourItems}
                bannerSection={bannerSection}
            />
            <h2
                className="title-video-main align-self-center title-to-be-moved-up"
                style={{
                    marginTop: '0',
                }}
            >
                Our Product
            </h2>
            <VideoComponent />
            <h2 className="title-video-main align-self-center title-to-be-moved-up ComingSoonVideo">
                New features coming soon - stay updated
            </h2>
            <div className="video-container ">
                <FaPlay
                    className={`${isPlaying} play-button`}
                    onClick={handlePlayPause}
                />

                <video ref={videoRef} onClick={handleVideo}>
                    <track kind="captions" src="/#" label="English" />
                    <source src="/images/coming-soon.mp4" type="video/mp4" />
                </video>
            </div>
            ;
            <Newsletter newsletterItems={newsletterItems} />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const aboutItemsTwo = getAllItems('about-2');
    const bannerTwoTwoItems = getAllItems('banner-22');
    const AllServices = getAllItems('services');
    const serviceSectionItems = getAllItems('service-section');
    const bannerTwoItems = getAllItems('banner-2');
    const brandItems = getAllItems('brand');
    const testimonialSectionItems = getAllItems('testimonial-section');
    const bannerFourFourItems = getAllItems('banner-44');
    const bannerSection = getAllItems('banner-section');
    const testimonialItems = getAllItems('testimonial');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            aboutItemsTwo,
            services: AllServices,
            serviceSectionItems,
            bannerTwoItems,
            brandItems,
            bannerFourFourItems,
            bannerSection,
            testimonialItems,
            testimonialSectionItems,
            newsletterItems,
            footerItems,
            bannerTwoTwoItems,
        },
    };
}

ServicePage.propTypes = {
    aboutItemsTwo: PropTypes.instanceOf(Object).isRequired,
    services: PropTypes.instanceOf(Object).isRequired,
    serviceSectionItems: PropTypes.instanceOf(Object).isRequired,
    bannerTwoItems: PropTypes.instanceOf(Object).isRequired,
    bannerTwoTwoItems: PropTypes.instanceOf(Object).isRequired,
    brandItems: PropTypes.instanceOf(Object).isRequired,
    bannerFourFourItems: PropTypes.instanceOf(Object).isRequired,
    bannerSection: PropTypes.instanceOf(Object).isRequired,
    testimonialItems: PropTypes.instanceOf(Object).isRequired,
    testimonialSectionItems: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ServicePage;
