import React from "react";

const Home = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-around">
        <img
          src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-blue-select?wid=940&hei=1112&fmt=png-alpha&.v=1631652955000"
          width="100"
        />
        <div>
          <h5 className="m-0">iPhone 13 Pro Max</h5>
          <h5 className="m-0">Price: $1000.00</h5>
        </div>
        <button className="btn btn-primary btn-sm">Add to Cart</button>
      </div>
    </>
  );
};

export default Home;
