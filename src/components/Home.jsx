import React from "react";
import "./style.css";
import Carousel from "./Carousel";
import carousel1 from "./img/carousel2.jpg";
import carousel2 from "./img/carousel1.jpg";
import carousel3 from "./img/carousel3.jpg";
import sc_img from "./img/single_cont.png";
import sc_img_m from "./img/single_cont_m.png";
import about_img from "./img/banner_munef.jpg";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ava1 from "./img/1.png";
import ava2 from "./img/2.png";
import ava3 from "./img/3.png";
import ava4 from "./img/4.png";

export default function Home({ data }) {
  const pcardData = data || [];
  const item = [
    {
      img: carousel1,
    },
    {
      img: carousel2,
    },
    {
      img: carousel3,
    },
  ];
  console.log(pcardData);

  return (
    <div>
      <Header />
      <div className="body">
        <div className="slideshow-container">
          <Carousel object={item.map((imgObj) => imgObj.img)} />
        </div>
        <div className="products" id="products">
          <div className="products_heading">Mashhur pishiriqlar</div>
          <div className="cards">
            {
            // pcardData.data.length > 0 ? (
              pcardData.data.map((product) => (
                <div className="pcard" key={product.id}>
                  <Link to={`/product_detail/${product.id}`} id="productLink">
                    <img
                      src={`https://api.munef.uz/${product.product_images[0].image}`}
                      className="pcard-img"
                      alt=""
                    />
                  </Link>
                  <div className="pcard-title">{product.name}</div>
                  <div className="for-el">
                    <div className="pcard-price">{product.cost} so'm</div>
                    <Link
                      to={`/product_detail/${product.id}`}
                      className="pcard-cart"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_132_1609)">
                          <path
                            d="M5.83366 20C6.75413 20 7.50033 19.2538 7.50033 18.3333C7.50033 17.4128 6.75413 16.6666 5.83366 16.6666C4.91318 16.6666 4.16699 17.4128 4.16699 18.3333C4.16699 19.2538 4.91318 20 5.83366 20Z"
                            fill="#4E342E"
                          />
                          <path
                            d="M14.1667 20C15.0871 20 15.8333 19.2538 15.8333 18.3333C15.8333 17.4128 15.0871 16.6666 14.1667 16.6666C13.2462 16.6666 12.5 17.4128 12.5 18.3333C12.5 19.2538 13.2462 20 14.1667 20Z"
                            fill="#4E342E"
                          />
                          <path
                            d="M19.1663 2.5H17.4997V0.833333C17.4997 0.61232 17.4119 0.400358 17.2556 0.244078C17.0993 0.0877974 16.8874 0 16.6663 0C16.4453 0 16.2334 0.0877974 16.0771 0.244078C15.9208 0.400358 15.833 0.61232 15.833 0.833333V2.5H14.1663C13.9453 2.5 13.7334 2.5878 13.5771 2.74408C13.4208 2.90036 13.333 3.11232 13.333 3.33333C13.333 3.55435 13.4208 3.76631 13.5771 3.92259C13.7334 4.07887 13.9453 4.16667 14.1663 4.16667H15.833V5.83333C15.833 6.05435 15.9208 6.26631 16.0771 6.42259C16.2334 6.57887 16.4453 6.66667 16.6663 6.66667C16.8874 6.66667 17.0993 6.57887 17.2556 6.42259C17.4119 6.26631 17.4997 6.05435 17.4997 5.83333V4.16667H19.1663C19.3874 4.16667 19.5993 4.07887 19.7556 3.92259C19.9119 3.76631 19.9997 3.55435 19.9997 3.33333C19.9997 3.11232 19.9119 2.90036 19.7556 2.74408C19.5993 2.5878 19.3874 2.5 19.1663 2.5Z"
                            fill="#4E342E"
                          />
                          <path
                            d="M18.1425 8.105C18.0348 8.08484 17.9241 8.08626 17.8169 8.10919C17.7097 8.13212 17.6081 8.1761 17.518 8.23857C17.428 8.30105 17.3512 8.38078 17.2922 8.47315C17.2331 8.56552 17.193 8.66868 17.1742 8.77667C17.0702 9.35346 16.767 9.87541 16.3173 10.2513C15.8677 10.6272 15.3003 10.8332 14.7142 10.8333H4.515L3.73167 4.16667H10.8333C11.0543 4.16667 11.2663 4.07887 11.4226 3.92259C11.5789 3.76631 11.6667 3.55435 11.6667 3.33333C11.6667 3.11232 11.5789 2.90036 11.4226 2.74408C11.2663 2.5878 11.0543 2.5 10.8333 2.5H3.535L3.5 2.20667C3.42818 1.59883 3.13588 1.03846 2.67849 0.631753C2.2211 0.225045 1.6304 0.000260697 1.01833 0L0.833333 0C0.61232 0 0.400358 0.0877974 0.244078 0.244078C0.0877974 0.400358 0 0.61232 0 0.833333C0 1.05435 0.0877974 1.26631 0.244078 1.42259C0.400358 1.57887 0.61232 1.66667 0.833333 1.66667H1.01833C1.22244 1.66669 1.41945 1.74163 1.57198 1.87726C1.72451 2.0129 1.82195 2.19979 1.84583 2.4025L2.9925 12.1525C3.11154 13.1665 3.59873 14.1015 4.36159 14.78C5.12445 15.4585 6.10988 15.8334 7.13083 15.8333H15.8333C16.0543 15.8333 16.2663 15.7455 16.4226 15.5893C16.5789 15.433 16.6667 15.221 16.6667 15C16.6667 14.779 16.5789 14.567 16.4226 14.4107C16.2663 14.2545 16.0543 14.1667 15.8333 14.1667H7.13083C6.61377 14.1668 6.10939 14.0065 5.68718 13.708C5.26496 13.4096 4.94569 12.9875 4.77333 12.5H14.7142C15.691 12.5001 16.6367 12.157 17.3863 11.5307C18.1358 10.9044 18.6415 10.0346 18.815 9.07333C18.8345 8.96559 18.8325 8.85507 18.8092 8.74808C18.786 8.6411 18.7419 8.53974 18.6794 8.44981C18.6169 8.35989 18.5374 8.28315 18.4453 8.22398C18.3531 8.16482 18.2503 8.12439 18.1425 8.105Z"
                            fill="#4E342E"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_132_1609">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </div>
                </div>
              ))
            /* ) : (
              <div>No products available</div>
            ) */
            }
          
          </div>
          <div className="products_load">
            <Link className="products-btn" to="/allproducts">
              Hammasini ko’rish
            </Link>
          </div>
        </div>

        <div className="single_content">
          <img className="sc_img" src={sc_img} alt="" />
          <div className="sc_detail">
            <div className="sc_title">
              Shirinliksevarlarning bayram dasturxoni shirinliklarsiz qolib
              ketmasin.
            </div>
            <div className="sc_desc">
              Darhol buyurtma qilish tugmasini bosing va o'zingiz sevgan ta'mga
              buyurtma bering.
            </div>
            <Link to="/contact" className="sc_btn">
              Buyurtma berish
            </Link>
          </div>
          <div className="sc_img_box">
            <img className="sc_img_m" src={sc_img_m} alt="" />
          </div>
        </div>

        <div className="about" id="about">
          <div className="about-heading">Biz Haqimizda</div>
          <div className="about-main">
            <div className="about_des">
              <p className="desc3">
                Hozirgi kunda har qadamda shirinlik markazlariga ko'zingiz
                tushadi. Lekin bularning orasida Munef shirinliklari o'zgacha
                ta'm va chiroyi bilan ajralib turadi. Munef mijozlariga sifatli,
                mazali va eng asosiysi halol mahsulotlarni taklif qiladi.
              </p>
              <div className="owner">
                <p className="desc2">“Sifat va halollik foydadan ustun.”</p>
                {/* <div className="about-name">Jenny Wilson</div> */}
              </div>
              <div className="cnt">
                <div className="adress">
                  <div className="about-name">Manzil:</div>Muqimiy ko’chasi,
                  Toshkent
                </div>
                <div className="phone">
                  <div className="about-name">Telefon raqami:</div>+998 (99)
                  999-22-22
                </div>
              </div>
            </div>
            <div className="about_img">
              <img src={about_img} alt="About Img" />
            </div>
          </div>
        </div>

        <div className="fikrlar" id="fikrlar">
          <div className="about-heading">
            Xursand mijozlarimiz fikrini tinglang
          </div>
          <div className="full-boxer">
            <div className="comment-box">
              <div className="comment">
                <p>
                  Shunchaki supper mazasiga gap bo'lishi mumkin emas. Har safar
                  shu yerdan o'tsam bormi😋😋😋 Shirinliklarni shirinligini
                  aytmaysizmi. Shakari meyorda medaga tegmaydi.
                </p>
              </div>
              <div className="box-top">
                <div className="Profile">
                  <div className="profile-image">
                    <img src={ava1} />
                  </div>
                  <div className="Name">
                    <div className="strong"> Nasiba Husanova</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="comment-box">
              <div className="comment">
                <p>
                  Bayramga baunty bilan mevali makarons oluvdik. Hech qachon
                  bunaqa shirinlik yemaganimizga amin bo'ldik. Mazali
                  desertlarni talashib-talashib yeb qoydik.
                </p>
              </div>
              <div className="box-top">
                <div className="Profile">
                  <div className="profile-image">
                    <img src={ava2} />
                  </div>
                  <div className="Name">
                    <div className="strong"> Muhiddin Ismanov</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="comment-box">
              <div className="comment">
                <p>
                  Munefda oʻzgachа muhit bor. Har gal shirinlik uchun
                  kirganimda, o'zimni ertakdagidek his qilaman, shu yerda qolib
                  ketgim keladi.Munef shirinliklarini rosayam yaxshi ko'ramiz
                </p>
              </div>
              <div className="box-top">
                <div className="Profile">
                  <div className="profile-image">
                    <img src={ava3} />
                  </div>
                  <div className="Name">
                    <div className="strong">Saboxat Komilova</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="comment-box">
              <div className="comment">
                <p>
                  Men Munefni ashaddiy xaridorlaridanman, ishchilarini ko'rib
                  yana ham ishonchim oshdi, ishchilariga omad aslo
                  charchashmasin.
                </p>
              </div>
              <div className="box-top">
                <div className="Profile">
                  <div className="profile-image">
                    <img src={ava4} />
                  </div>
                  <div className="Name">
                    <div className="strong">Ziyoda Hakimova</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
