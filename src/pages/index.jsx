import Head from 'next/head';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import AboutOne from '../components/about';
import BannerFour from '../components/banner/index-4';
import Counter from '../components/counter';
import Hero from '../components/home-page/hero';
import LatestBlog from '../components/home-page/latest-blog';
import LatestProject from '../components/home-page/latest-project';
import Footer from '../components/layout/footer';
import Newsletter from '../components/newsletter/newsletter';
import VideoComponent from '../components/video/video';
import { getAllItems, getFeaturedItems } from '../lib/items-util';

function HomePage({
    heroItems,
    bannerFourItems,
    bannerSection,
    bannerItems,
    aboutItems,
    projects,
    projectSectionItems,
    brandItems,
    services,
    serviceSectionItems,
    bannerTwoItems,
    teamItems,
    teamSectionItems,
    testimonialItems,
    testimonialSectionItems,
    blogs,
    blogSectionItems,
    newsletterItems,
    footerItems,
}) {
    return (
        <>
            <Head>
                <title>Home - BuiltView</title>sdfsdf
                <meta
                    name="description"
                    content="Builtview - We Construct
                    your Dream"
                />
            </Head>
            <Hero heroItems={heroItems} />
            <AboutOne aboutItems={aboutItems} />
            <Counter />
            <div>
                <Container>
                    <div className="PartnerContainer">
                        <div className="LogoPart">
                            <img
                                src="/images/procore logo.png"
                                alt="logo"
                                style={{
                                    width: '20rem',
                                }}
                            />
                        </div>
                        <div
                            style={{
                                backgroundColor: 'gray',
                                width: '4px',
                                height: '100%',
                            }}
                        >
                            {' '}
                        </div>
                        <div
                            style={{
                                width: '100%',
                            }}
                        >
                            In partnership with Procore, BuiltView delivers
                            seamless tools for efficient project management and
                            building visualization.
                        </div>
                    </div>
                </Container>
            </div>
            <h2 className="title-video-main align-self-center title-to-be-moved-up">
                Our Product
            </h2>
            <VideoComponent />
            <BannerFour
                bannerFourItems={bannerFourItems}
                bannerSection={bannerSection}
            />
            <LatestProject
                projects={projects}
                projectSectionItems={projectSectionItems}
            />
            <LatestBlog blogs={blogs} blogSectionItems={blogSectionItems} />
            <Newsletter newsletterItems={newsletterItems} />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const heroItems = getAllItems('heros');
    const bannerFourItems = getAllItems('banner-4');
    const bannerSection = getAllItems('banner-section');
    const bannerItems = getAllItems('banner');
    const aboutItems = getAllItems('about');
    const projectSectionItems = getAllItems('project-section');
    const projects = getAllItems('projects');
    const LatestProject = getFeaturedItems(projects);
    const brandItems = getAllItems('brand');
    const services = getAllItems('services');
    const serviceSectionItems = getAllItems('service-section');
    const HomePageServices = getFeaturedItems(services);
    const bannerTwoItems = getAllItems('banner-2');
    const teamItems = getAllItems('team');
    const teamSectionItems = getAllItems('team-section');
    const testimonialItems = getAllItems('testimonial');
    const testimonialSectionItems = getAllItems('testimonial-section');
    const blogSectionItems = getAllItems('blog-section');
    const blogs = getAllItems('blogs');
    const LatestBlog = getFeaturedItems(blogs);
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            heroItems,
            bannerItems,
            aboutItems,
            projectSectionItems,
            projects: LatestProject,
            brandItems,
            services: HomePageServices,
            serviceSectionItems,
            bannerTwoItems,
            teamItems,
            teamSectionItems,
            testimonialItems,
            testimonialSectionItems,
            blogSectionItems,
            blogs: LatestBlog,
            newsletterItems,
            footerItems,
            bannerFourItems,
            bannerSection,
        },
    };
}

HomePage.propTypes = {
    heroItems: PropTypes.instanceOf(Object).isRequired,
    bannerItems: PropTypes.instanceOf(Object).isRequired,
    aboutItems: PropTypes.instanceOf(Object).isRequired,
    projects: PropTypes.instanceOf(Object).isRequired,
    projectSectionItems: PropTypes.instanceOf(Object).isRequired,
    brandItems: PropTypes.instanceOf(Object).isRequired,
    services: PropTypes.instanceOf(Object).isRequired,
    serviceSectionItems: PropTypes.instanceOf(Object).isRequired,
    bannerTwoItems: PropTypes.instanceOf(Object).isRequired,
    teamItems: PropTypes.instanceOf(Object).isRequired,
    teamSectionItems: PropTypes.instanceOf(Object).isRequired,
    testimonialItems: PropTypes.instanceOf(Object).isRequired,
    testimonialSectionItems: PropTypes.instanceOf(Object).isRequired,
    blogs: PropTypes.instanceOf(Object).isRequired,
    blogSectionItems: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
    bannerFourItems: PropTypes.instanceOf(Object).isRequired,
    bannerSection: PropTypes.instanceOf(Object).isRequired,
};

export default HomePage;
