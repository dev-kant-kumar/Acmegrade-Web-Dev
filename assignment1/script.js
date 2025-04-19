const footerYear = document.getElementById("footer-year");
const currentYear = new Date().getFullYear();
footerYear.innerText = currentYear;

const products = [
  {
    id: 1,
    image: "./assets/products/p1.png",
    alt: "Wireless Headphones",
    title: "Wireless Bluetooth Headphones",
    description:
      "High-fidelity sound, noise cancellation, and 30-hour battery life.",
    price: "₹2,000",
    priceDesc: "Inclusive of all taxes",
    inStock: true,
  },
  {
    id: 2,
    image: "./assets/products/p2.png",
    alt: "Smartwatch",
    title: "Smart Fitness Watch",
    description: "Track steps, heart rate, and sleep with AMOLED display.",
    price: "₹3,999",
    priceDesc: "Inclusive of all taxes",
    inStock: true,
  },
  {
    id: 3,
    image: "./assets/products/p3.webp",
    alt: "Gaming Mouse",
    title: "Ergonomic Gaming Mouse",
    description:
      "RGB lighting and 6 programmable buttons for pro-level gaming.",
    price: "₹1,499",
    priceDesc: "Limited Time Offer",
    inStock: true,
  },
  {
    id: 4,
    image: "./assets/products/p4.webp",
    alt: "Mechanical Keyboard",
    title: "Mechanical RGB Keyboard",
    description: "Tactile switches and full RGB lighting with aluminum build.",
    price: "₹2,899",
    priceDesc: "Free shipping available",
    inStock: true,
  },
  {
    id: 5,
    image: "./assets/products/p5.webp",
    alt: "Bluetooth Speaker",
    title: "Portable Bluetooth Speaker",
    description: "360° sound, waterproof design, and 12-hour playtime.",
    price: "₹2,499",
    priceDesc: "Inclusive of all taxes",
    inStock: true,
  },
  {
    id: 6,
    image: "./assets/products/p6.webp",
    alt: "Laptop Stand",
    title: "Adjustable Laptop Stand",
    description: "Aluminum body with height adjustment and heat dissipation.",
    price: "₹999",
    priceDesc: "Best Seller",
    inStock: true,
  },
];

const productsContainer = document.getElementById("products-container");

products.map((products) => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
     <section class="product-card-img">
      <img src="${products.image}" alt="${products.alt}"/>
                    </section>
                    <section class="product-card-desc">
                        <div class="product-desc-wrapper">
                            <div class="product-desc">
                                <p class="title">${products.title}</p>
                                <p class="desc">
                                   ${products.description}
                                </p>
                            </div>
                            <div class="product-price">
                                <p class="price">${products.price}</p>
                                <p class="price-desc">${products.priceDesc}</p>
                            </div>
                        </div>
                        <div class="product-card-btn">
                            <button class="add-to-cart-btn">Add to Cart</button>
                            <button>Buy Now</button>
                        </div>
     </section>
    `;

  productsContainer.appendChild(card);
});
