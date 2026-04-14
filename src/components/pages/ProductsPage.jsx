import { useState, useEffect } from "react";
import ProductCard from "../ProductCard";
// import { fakeProducts } from "../data/products";

// const fakeProducts = [
//   {
//     id: 1,
//     title: "Fjallraven - Foldsack No. 1 Backpack",
//     price: 109.95,
//     description:
//       "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/81fAn4nQTDL._AC_UX679_.jpg",
//     rating: { rate: 3.9, count: 120 },
//   },
//   {
//     id: 2,
//     title: "Mens Casual Premium Slim Fit T-Shirts",
//     price: 22.3,
//     description:
//       "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
//     category: "men's clothing",
//     image:
//       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//     rating: { rate: 4.1, count: 259 },
//   },
//   {
//     id: 3,
//     title: "Mens Cotton Jacket",
//     price: 55.99,
//     description:
//       "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors.",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//     rating: { rate: 4.7, count: 500 },
//   },
//   {
//     id: 4,
//     title: "Mens Casual Slim Fit",
//     price: 15.99,
//     description:
//       "The color could be slightly different between on the screen and in practice. Please note that body builds vary by person, therefore, detailed size information should be reviewed below on this page.",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//     rating: { rate: 2.1, count: 430 },
//   },
//   {
//     id: 5,
//     title: "John Hardy Women's Legends Naga Gold & Silver Dragon Bracelet",
//     price: 695.0,
//     description:
//       "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
//     category: "jewelery",
//     image:
//       "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_FMwebp_QL65_.jpg",
//     rating: { rate: 4.6, count: 400 },
//   },
//   {
//     id: 6,
//     title: "Solid Gold Petite Micropave",
//     price: 168.0,
//     description:
//       "Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States.",
//     category: "jewelery",
//     image:
//       "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_FMwebp_QL65_.jpg",
//     rating: { rate: 3.9, count: 70 },
//   },
//   {
//     id: 7,
//     title: "White Gold Plated Princess",
//     price: 9.99,
//     description:
//       "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for special occasions.",
//     category: "jewelery",
//     image:
//       "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_FMwebp_QL65_.jpg",
//     rating: { rate: 3.0, count: 400 },
//   },
//   {
//     id: 8,
//     title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
//     price: 10.99,
//     description:
//       "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel.",
//     category: "jewelery",
//     image:
//       "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_FMwebp_QL65_.jpg",
//     rating: { rate: 1.9, count: 100 },
//   },
//   {
//     id: 9,
//     title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
//     price: 64.0,
//     description:
//       "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7.",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
//     rating: { rate: 3.3, count: 203 },
//   },
//   {
//     id: 10,
//     title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
//     price: 109.0,
//     description:
//       "Easy upgrade for faster boot up, shutdown, carry your data with you. Enhance PC Performance. Durable and impact resistant.",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
//     rating: { rate: 2.9, count: 470 },
//   },
//   {
//     id: 11,
//     title: "Silicon Power 256GB SSD 3D NAND",
//     price: 109.0,
//     description:
//       "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance.",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/71kEqp3aZaL._AC_SX679_.jpg",
//     rating: { rate: 4.8, count: 319 },
//   },
//   {
//     id: 12,
//     title:
//       "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
//     price: 114.0,
//     description:
//       "Expand your PS4 gaming experience, Play anywhere Fast and easy setup Sleek design with high capacity, 3-year manufacturer's limited warranty.",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
//     rating: { rate: 4.8, count: 400 },
//   },
//   {
//     id: 13,
//     title: "Acer SB220Q bi 21.5 inches Full HD Zero-Frame Monitor",
//     price: 599.0,
//     description:
//       "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility issues. Ac adapter, cable and user guide included.",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
//     rating: { rate: 2.9, count: 250 },
//   },
//   {
//     id: 14,
//     title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor",
//     price: 999.99,
//     description:
//       "49 INCH SUPER ULTRAWIDE: Immersive gaming experience with a 49-inch super ultrawide curved screen and 32:9 aspect ratio.",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
//     rating: { rate: 2.2, count: 140 },
//   },
//   {
//     id: 15,
//     title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket",
//     price: 56.99,
//     description:
//       "Note: The Jackets is US standard size, Please choose size as your usual wearing. If you are pregnant, do not wear this product.",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
//     rating: { rate: 2.6, count: 235 },
//   },
//   {
//     id: 16,
//     title:
//       "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
//     price: 29.95,
//     description:
//       "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort.",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
//     rating: { rate: 2.9, count: 340 },
//   },
//   {
//     id: 17,
//     title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
//     price: 39.99,
//     description:
//       "Lightweight perfet for trip or casual wear. Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat.",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/71HblAHs1xL._AC_UY879_-2.jpg",
//     rating: { rate: 3.8, count: 679 },
//   },
//   {
//     id: 18,
//     title: "MBJ Women's Solid Short Sleeve Boat Neck V",
//     price: 9.85,
//     description:
//       "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort.",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
//     rating: { rate: 4.7, count: 130 },
//   },
//   {
//     id: 19,
//     title: "Opna Women's Short Sleeve Moisture Tunic",
//     price: 7.95,
//     description:
//       "100% Polyester, Machine wash, 100% Polyester, Moisture wicking, Long sleeve, stitched, perfet for workout and outdoor.",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
//     rating: { rate: 4.5, count: 146 },
//   },
//   {
//     id: 20,
//     title: "DANVOUY Womens T Shirt Casual Cotton Short",
//     price: 12.99,
//     description:
//       "95% COTTON, 5% SPANDEX. Made in USA or Imported. Machine Wash and Dry. Slim fitting with a round neck design.",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
//     rating: { rate: 3.6, count: 145 },
//   },
// ];

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [filterBy, setFilterBy] = useState("");

  const filteredProducts = products
    .filter((p) => category === "all" || p.category === category)
    .sort((a, b) => {
      switch (filterBy) {
        case "priceLow":
          return a.price - b.price;
        case "priceHigh":
          return b.price - a.price;
        case "id":
          return a.id - b.id;
        default:
          return 0;
      }
    });

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="products-container">
      <h1>Products Page</h1>
      <div className="filter">
        <select value={filterBy} onChange={(e) => setFilterBy(e.target.value)}>
          <option value="id">Product id</option>
          <option value="priceLow">Price low to high</option>
          <option value="priceHigh">Price high to low</option>
        </select>
        <button onClick={() => setCategory("men's clothing")}>Mens</button>
        <button onClick={() => setCategory("women's clothing")}>Womens</button>
        <button onClick={() => setCategory("electronics")}>Electronics</button>
        <button onClick={() => setCategory("jewelery")}>Jewlery</button>
        <button onClick={() => setCategory("all")}>All</button>
      </div>
      <div className="products-wrapper">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
