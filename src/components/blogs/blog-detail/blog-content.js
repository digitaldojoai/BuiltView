import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import Blockquote from '../../blockquote';
import RichText from '../../rich-text';
import DisqusForm from '../../disqus';
import classes from './index.module.scss';

function BlogContent({ blog, richTexts }) {
    const imagePath = `/images/blogs/${blog?.slug}/${blog?.largeImage}`;
    console.log('blog', blog);
    return (
        <Col lg={{ span: 8 }} className="pe-lg-45">
            <div className="banner">
                <img className="img-full" src={imagePath} alt={blog?.title} />
            </div>
            <div className={classes.content}>
                <span className={classes.meta}>{blog?.blogMeta}</span>
                <h2 className={classes.title}>{blog?.title}</h2>

                <p className={classes.desc}>{blog?.detailDescOne}</p>
                <h3 className={classes.subtitle}>{blog?.detailSubTitle}</h3>
                <p className={classes.desc}>{blog?.detailDescTwo}</p>
                <h3 className={classes.subtitle}>{blog.detailSubTitleTwo}</h3>
                {blog?.details?.map((detail) => (
                    <>
                        {' '}
                        <h3 key={detail.title}>{detail?.title}</h3>
                        <p>{detail?.desc}</p>
                    </>
                ))}
                {blog.detailSubTitleFour ? (
                    <>
                        <h3 className={classes.subtitle}>
                            {blog.detailSubTitleFour}
                        </h3>
                        {blog?.detailsThree.map((detail) => (
                            <>
                                {' '}
                                <h3 key={detail.title}>{detail?.title}</h3>
                                <ul
                                    dangerouslySetInnerHTML={{
                                        __html: detail.desc,
                                    }}
                                    style={{ listStyleType: 'circle' }}
                                />
                            </>
                        ))}
                    </>
                ) : (
                    <>
                        <h3 className={classes.subtitle}>
                            {blog.detailSubTitleExtra}
                        </h3>
                        {blog?.detailsE?.map((detail) => (
                            <>
                                {' '}
                                <h3 key={detail.title}>{detail?.title}</h3>
                                <p>{detail.descE}</p>
                            </>
                        ))}
                    </>
                )}
                <hr style={{ marginTop: '40px' }} />
                <h3 className={classes.subtitle}>References</h3>
                {blog?.references?.map((ref) => (
                    <p key={ref}>{ref}</p>
                ))}
            </div>
        </Col>
    );
}

BlogContent.propTypes = {
    blog: PropTypes.instanceOf(Object).isRequired,
    richTexts: PropTypes.instanceOf(Object).isRequired,
};

export default BlogContent;
