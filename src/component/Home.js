import React, { useState, useEffect } from "react";
import "./Home.css";
import { Product } from "./Product";

export const Home = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/7/71/Amazon_Spheres_common_area_201901.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/6/6f/Arlington_Row_Bibury.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      let indexValue = (index + 1) % 3;
      const imageClass = document.getElementById("homeImage");
      imageClass.classList.remove("imageAppear");
      setIndex(indexValue);
      // imageClass.classList.add('imageAppear');
      setTimeout(function () {
        imageClass.classList.add("imageAppear");
      }, 30);
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="home">
      <div className="home__container">
        <img
          id="homeImage"
          src={images[index]}
          alt=""
          className="home__image imageAppear"
        />
        <div className="home__row">
          {/* Product */}
          <Product
            id="123123"
            title="Jaguar brand 3*3 Smooth Rubix cube"
            price={2.99}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXRW7XuNjqaeeIAbNPw9k7N-G1cBpG0TXOUw&usqp=CAU"
            rating={5}
          />
          {/* Product */}
          <Product
            id="49538094"
            title="Kenwood kMi table fan for summer, Stylish fan with K-nano technology, small and insulated, 1 year warranty"
            price={23.03}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41Kca%2BzuPJL.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Waterproof portable Bluetooth speaker with 360° lightshow and sound."
            price={199.99}
            rating={3}
            image="https://www.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw5caab395/JBL_PULSE3_HERO_BLACK_0582_x3-1605x1605px.png?sw=537&sfrm=png"
          />
          <Product
            id="23445930"
            title="Kookaburra Verve Prooigy 60 Kashmir Willow Cricket Bat (Medium)"
            price={98.99}
            rating={5}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Fny430CG-WoVYJtWPK1EFmRvBR3TLBxeEw&usqp=CAU"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="908293356"
            title="I-Discovery HIGH Quality Power Bank 6600 mAh with Quick Charge and LED Lights"
            price={50.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/31MQ25bi8XL.jpg"
          />
          <Product
            id="90829372"
            title="Acer 17.3 Predator Helios 300 Gaming Notebook with 256GB SSD"
            price={1094.98}
            rating={4}
            image="https://www.bhphotovideo.com/images/images2500x2500/acer_nh_q9vaa_001_17_3_predator_helios_300_1583313.jpg"
          />
          <Product
            id="90869372"
            title="An Autobiography Or The Story Of My Experiments With Truth"
            price={14.98}
            rating={4}
            image="https://www.gandhijisouvenir.com/wp-content/uploads/2018/09/AN-AUTOBIOGRAPHY-OR-THE-STORY-OF-MY-EXPERIMENTS-WITH-TRUTH-520x574.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
};
