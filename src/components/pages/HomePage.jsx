import maleModel from "../../assets/male-model.jpg";
import femaleModel from "../../assets/female-model.jpg";
import maleFemaleModel from "../../assets/male-female-model.jpg";

export default function HomePage() {
  return (
    <div className="home-page-container">
      <div className="content-container">
        <h2>Better Quality, Better Fit, Best Clothes</h2>
        <h3>Welcome to Shopping Spree</h3>
        <div className="content-images">
          <img src={maleModel} alt="" />
          <img src={maleFemaleModel} alt="" />
          <img src={femaleModel} alt="" />
        </div>
      </div>
    </div>
  );
}
