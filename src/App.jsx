import React from "react";
import ProductCard from "./components/ProductCard";
import "./styles/App.css";


function App() {
  const products = [
    {
      image: "https://static.vecteezy.com/system/resources/thumbnails/055/130/517/small_2x/sleek-white-wireless-headphones-premium-audio-bluetooth-noise-cancelling-gear-free-png.png",
      name: "Noise Cancelling Headphones",
      price: "1999",
      description: "Crystal clear sound with deep bass."
    },
    {
      image: "https://www.pngkit.com/png/full/316-3163883_smartwatches-smartwatch.png",
      name: "Smartwatch",
      price: "1499",
      description: "Track fitness, heart rate, and more."
    },
    {
      image: "https://png.pngtree.com/png-vector/20240814/ourmid/pngtree-travel-backpack-png-image_13480332.png",
      name: "Travel Backpack",
      price: "999",
      description: "Durable and waterproof."
    },
    {
      image: "https://www.pngall.com/wp-content/uploads/2016/04/Running-Shoes-PNG.png",
      name: "Running Shoes",
      price: "1799",
      description: "Lightweight and comfortable."
    },
    {
      image: "https://www.seekpng.com/png/full/771-7711272_element-gaming-mechanical-keyboard.png",
      name: "Mechanical Keyboard",
      price: "2199",
      description: "RGB backlit keys with clicky sound."
    },
    {
      image: "https://www.pngarts.com/files/16/DSLR-Camera-Free-PNG-Image.png",
      name: "DSLR Camera",
      price: "14999",
      description: "Capture moments with clarity."
    }
  ];

  return (
    <div className="app">
      {/* Header */}
      <header className="store-header">
        <h1>🌿 Marvin Mini E-Commerce Store 🌿</h1>
      </header>

      {/* Products Grid */}
      <main className="product-list">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </main>

      {/* Footer ni*/}
      <footer className="store-footer">
        <p>© {new Date().getFullYear()} Marvin Mini E-Commerce Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
