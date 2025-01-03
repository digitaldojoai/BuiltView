import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'next/navigation';
import PageNavigation from '../page-navigation';
import BlogSidebar from './blog-sidebar';
import classes from './blog.module.scss';
import BlogLeftSidebarItem from './leftsidebar-item';

function BlogLeftSidebarGrid({ blogs, blogsSidebar, categories, tags }) {
    const params = useSearchParams();
    const search = params.get('search');
    if (search) {
        blogs = blogs.filter((blog) =>
            blog.title.toLowerCase().includes(search.toLowerCase())
        );
    }
    return (
        <div className={classes.blog}>
            <Container>
                <Row className="g-4">
                    <Col lg={{ span: 4, order: 1 }} xs={{ order: 2 }}>
                        <BlogSidebar
                            blogsSidebar={blogsSidebar}
                            categories={categories}
                            tags={tags}
                        />
                    </Col>
                    <Col lg={{ span: 8, order: 2 }} xs={{ order: 1 }}>
                        <Row className="g-4">
                            {blogs.map((blog) => (
                                <BlogLeftSidebarItem
                                    key={blog.slug}
                                    blog={blog}
                                />
                            ))}
                        </Row>
                        {blogs.length > 6 && <PageNavigation />}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

BlogLeftSidebarGrid.propTypes = {
    blogs: PropTypes.instanceOf(Object).isRequired,
    blogsSidebar: PropTypes.instanceOf(Object).isRequired,
    categories: PropTypes.instanceOf(Object).isRequired,
    tags: PropTypes.instanceOf(Object).isRequired,
};

export default BlogLeftSidebarGrid;
