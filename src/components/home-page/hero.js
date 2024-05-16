import PropTypes from 'prop-types';
import Link from 'next/link';
import SwiperComps, { Slide } from '../swiper';
import classes from './hero.module.scss';

function Hero({ heroItems, settings }) {
    settings = {
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        speed: 1000,
        pagination: { clickable: true, type: 'bullets' },
        navigation: true,
        slidesPerView: 1,
    };
    return (
        <div>
            {heroItems?.map((heroItem) => (
                <div
                    className={`animation-style-01 ${heroItem.heroBG
                        .split(' ')
                        .map((item) => classes[item])
                        .join(' ')}`}
                    key={heroItem.id}
                >
                    <div className="container">
                        <div className="content">
                            <span
                                className={`subtitle-animation ${classes.subtitle}`}
                            >
                                {heroItem?.subtitle}
                            </span>
                            <div
                                className={`title-animation ${classes.title}`}
                                dangerouslySetInnerHTML={{
                                    __html: heroItem.title,
                                }}
                            />
                            <div
                                className={`desc-animation ${classes.desc}`}
                                dangerouslySetInnerHTML={{
                                    __html: heroItem.desc,
                                }}
                            />
                            <div
                                className={`btn-animation ${classes.btn_wrap}`}
                            >
                               
                                <Link
                                    href="/contact"
                                    className={`${classes.btn} ${classes.btn_primary} ${classes.btn_hover__white}`}
                                >
                                    {heroItem?.btnPrimaryText}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

Hero.propTypes = {
    heroItems: PropTypes.instanceOf(Object).isRequired,
    settings: PropTypes.shape({
        slidesPerView: PropTypes.number,
        spaceBetween: PropTypes.number,
        autoplay: PropTypes.bool,
        breakpoints: PropTypes.shape({}),
    }),
};

export default Hero;
