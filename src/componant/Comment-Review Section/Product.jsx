

const Product = () => {

    return (
        <>
            <div className="image-container">
                <img src="https://retailwire.com/wp-content/uploads/zcdayrowlc0.jpg" alt="Morning Set" />
            </div>
            <div className="product-info">
                <h2>Morning Set</h2>
                <p>Set of coffee and chocolate cookies as a top tier among our customers and a perfect way to start your day.</p>
                <div className="price-order">
                    <span className="price">$8</span>
                    <button className="order-button">Comment</button>
                </div>
            </div>
        </>
    );
};

export default Product;