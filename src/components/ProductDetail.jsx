import React, { useEffect, useState } from "react";
import slash from "./img/slash.png";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const ProductDetail = ({ pdata }) => {
  const { id } = useParams();

  const productId = parseInt(id);
  const product = Array.isArray(pdata.data)
    ? pdata.data.find((product) => product.id === productId)
    : null;
  console.log(product);

  const [imgId, setImgId] = useState(1);

  useEffect(() => {
    const imgBtns = document.querySelectorAll(".img-select a");
    imgBtns.forEach((imgItem) => {
      imgItem.addEventListener("click", (event) => {
        event.preventDefault();
        setImgId(parseInt(imgItem.dataset.id, 10));
      });
    });

    const slideImage = () => {
      const displayWidth = document.querySelector(
        ".img-showcase img:first-child"
      ).clientWidth;
      document.querySelector(".img-showcase").style.transform = `translateX(${
        -(imgId - 1) * displayWidth
      }px)`;
    };

    window.addEventListener("resize", slideImage);

    return () => {
      window.removeEventListener("resize", slideImage);
    };
  }, [imgId]);

  useEffect(() => {
    const slideImage = () => {
      const displayWidth = document.querySelector(
        ".img-showcase img:first-child"
      ).clientWidth;
      document.querySelector(".img-showcase").style.transform = `translateX(${
        -(imgId - 1) * displayWidth
      }px)`;
    };

    slideImage();
  }, [imgId]);

  let productIdCounter = 1;
  return (
    <div>
      <Header />
      <div className="body">
        <div class="breadcrumbs">
          <Link to="/" class="bc_item1">
            Home
          </Link>
          <img class="bc_item2" src={slash} alt="" />
          <div class="bc_item3">{product.name}</div>
        </div>
        <div class="order">
          <div class="card-wrapper">
            <div class="card">
              <div class="card_imgs">
                <div class="product-imgs">
                  <div class="img-display">
                    <div class="img-showcase">
                      {product.product_images.map((item) => (
                        <img
                          src={`https://api.munef.uz/${item.image}`}
                          alt="shoe image"
                        />
                      ))}
                    </div>
                  </div>
                  <div class="img-select">
                    {product.product_images.map((item, index) => (
                      <div class="img-item" key={index}>
                        <a href="#" data-id={productIdCounter++}>
                          <img
                            src={`https://api.munef.uz/${item.image}`}
                            alt="shoe image"
                          />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div class="product-content">
                <div class="product-detail">
                  <div class="product-name">{product.name} </div>
                  <p>{product.description}</p>
                  <h3 class="tar"> Tarkibi</h3>
                  <div class="inf">
                    <ul>
                      {Array.isArray(product.ingredients)
                        ? product.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                          ))
                        : JSON.parse(product.ingredients).map(
                            (ingredient, index) => (
                              <li key={index}>{ingredient}</li>
                            )
                          )}
                    </ul>
                  </div>
                </div>

                <div class="purchase-info">
                  <div class="narx">
                    <p>
                      Narx: <span class="narx2">{product.cost} so'm</span>
                    </p>
                  </div>

                  <Link to={`/order/${product.id}`} className="btn">Buyurtma berish</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
