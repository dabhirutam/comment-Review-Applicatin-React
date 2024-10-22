import Product from "./product";
import Comment from "./Comment";
import './Blog.css'


const Blog = () => {

    return (
        <section>
            <div className="container">
                <div className="row">
                    <h1 className="col-12">OUR PRODUCT</h1>
                    <div className="col-4">
                        <div className="product-card">
                            <Product />
                            <br />
                            <Comment />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;