import { color } from 'framer-motion';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

function Breadcrumb({ subTitle, title, desc, bg, under, white }) {
    const style = {
        backgroundImage: `url(${bg || '/images/hero/faq.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        minHeight: '460px',
        display: 'flex',
        alignItems: 'center',
        color:'white'
    };
    return (
        <div style={style}>
            <Container>
                <div className={`${white ? 'white-text' : null} page_content`}>
                    <span className="page_subtitle">{subTitle}</span>
                    <h1 className="page_title">{title}</h1>
                    <h1 className="page_title">{under || null}</h1>
                    {}
                    <p className="page_desc">{desc}</p>
                </div>
            </Container>
        </div>
    );
}

Breadcrumb.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    bg: PropTypes.string,
    under: PropTypes.string,
    white: PropTypes.string,
};

export default Breadcrumb;
