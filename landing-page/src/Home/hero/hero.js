import "./hero.css";
function Hero() {
  return (
    <div className="hero">
      <div className="heroContainer">
        <div className="leftcol">
          <h1>
            YOUR FEET DESERVE <br></br>THE BEST
          </h1>
          <p id="sub">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <button id="primary">Shop Now</button>
          <button id="secondary">Category</button>
          <p>Also Available On*</p>
          <img
            style={{ marginLeft: "0px" }}
            src="../../../images/flipkart.png"
            alt=""
          />
          <img src="../../../images/amazon.png" alt="" />
        </div>
        <div className="rightcol">
          <img src="../../../images/shoe_image.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
