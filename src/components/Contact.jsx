import React, { useState } from 'react';
import slash from './img/slash.png';
import './style.css';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api.munef.uz/api/order/store-without-product`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullname: fullname,
          phone: phone,
          status: 'progress',
        }),
      });

      if (response.ok) {
        console.log('Order placed successfully!');
        alert('Buyurtmangiz muvaffaqiyatli yetkazildi!');
      } else {
        console.error('Error placing order:', response.statusText);
      }
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };
  return (
    <div>
      <Header/>
      <div class="body">
        <div class="breadcrumbs">
            <Link to='/' class="bc_item1">Home</Link>
            <img class="bc_item2" src={slash} alt=""/>
            <div class="bc_item3">Contact</div>
        </div>
        <div class="contact">
            <div class="boglanish">
                <h2 class="contact-name">Bog'lanish ma'lumotlari</h2>
                <div class="desc3">Shaxsiy raqam va ismingizni bizga yozib qoldiring va biz o'zimiz sizga aloqaga
                    chiqamiz</div>
                <div class="call">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                        <path
                            d="M17.8472 12.8556L13.4306 10.8766L13.4184 10.8709C13.1892 10.7729 12.939 10.7335 12.6907 10.7564C12.4424 10.7793 12.2037 10.8638 11.9963 11.0022C11.9718 11.0183 11.9484 11.0358 11.9259 11.0547L9.64407 13C8.19845 12.2978 6.70595 10.8166 6.00376 9.38968L7.95188 7.07312C7.97063 7.04968 7.98845 7.02624 8.00532 7.00093C8.14072 6.79403 8.22287 6.55686 8.24446 6.31053C8.26605 6.0642 8.22641 5.81636 8.12907 5.58906V5.57781L6.14438 1.15374C6.0157 0.856804 5.79444 0.609445 5.51362 0.448592C5.2328 0.287739 4.9075 0.222019 4.58626 0.261243C3.31592 0.428406 2.14986 1.05228 1.30588 2.01633C0.461903 2.98039 -0.00228837 4.2187 8.4831e-06 5.49999C8.4831e-06 12.9437 6.05626 19 13.5 19C14.7813 19.0023 16.0196 18.5381 16.9837 17.6941C17.9477 16.8501 18.5716 15.6841 18.7388 14.4137C18.7781 14.0926 18.7125 13.7674 18.5518 13.4866C18.3911 13.2058 18.144 12.9845 17.8472 12.8556ZM13.5 17.5C10.3185 17.4965 7.26825 16.2311 5.01856 13.9814C2.76888 11.7318 1.50348 8.68152 1.50001 5.49999C1.49648 4.58451 1.82631 3.69905 2.42789 3.00897C3.02947 2.31888 3.86167 1.87137 4.76907 1.74999C4.7687 1.75373 4.7687 1.7575 4.76907 1.76124L6.73782 6.16749L4.80001 8.48687C4.78034 8.5095 4.76247 8.53364 4.74657 8.55906C4.60549 8.77554 4.52273 9.0248 4.5063 9.28268C4.48988 9.54055 4.54035 9.7983 4.65282 10.0309C5.5022 11.7681 7.25251 13.5053 9.00845 14.3537C9.24279 14.4652 9.50203 14.5139 9.76083 14.4952C10.0196 14.4764 10.2692 14.3909 10.485 14.2469C10.5091 14.2307 10.5322 14.2131 10.5544 14.1944L12.8334 12.25L17.2397 14.2234C17.2397 14.2234 17.2472 14.2234 17.25 14.2234C17.1301 15.1321 16.6833 15.966 15.9931 16.5691C15.3028 17.1721 14.4166 17.5031 13.5 17.5Z"
                            fill="#333333" />
                    </svg>
                    <p class="contact-item">+998(99) 999-22-22</p>
                </div>
                <div class="loc">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M12 6C11.2583 6 10.5333 6.21993 9.91661 6.63199C9.29993 7.04404 8.81928 7.62971 8.53545 8.31494C8.25162 9.00016 8.17736 9.75416 8.32205 10.4816C8.46675 11.209 8.8239 11.8772 9.34835 12.4017C9.8728 12.9261 10.541 13.2833 11.2684 13.4279C11.9958 13.5726 12.7498 13.4984 13.4351 13.2145C14.1203 12.9307 14.706 12.4501 15.118 11.8334C15.5301 11.2167 15.75 10.4917 15.75 9.75C15.75 8.75544 15.3549 7.80161 14.6517 7.09835C13.9484 6.39509 12.9946 6 12 6ZM12 12C11.555 12 11.12 11.868 10.75 11.6208C10.38 11.3736 10.0916 11.0222 9.92127 10.611C9.75097 10.1999 9.70642 9.7475 9.79323 9.31105C9.88005 8.87459 10.0943 8.47368 10.409 8.15901C10.7237 7.84434 11.1246 7.63005 11.561 7.54323C11.9975 7.45642 12.4499 7.50097 12.861 7.67127C13.2722 7.84157 13.6236 8.12996 13.8708 8.49997C14.118 8.86998 14.25 9.30499 14.25 9.75C14.25 10.3467 14.0129 10.919 13.591 11.341C13.169 11.7629 12.5967 12 12 12ZM12 1.5C9.81273 1.50248 7.71575 2.37247 6.16911 3.91911C4.62247 5.46575 3.75248 7.56273 3.75 9.75C3.75 12.6938 5.11031 15.8138 7.6875 18.7734C8.84552 20.1108 10.1489 21.3151 11.5734 22.3641C11.6995 22.4524 11.8498 22.4998 12.0037 22.4998C12.1577 22.4998 12.308 22.4524 12.4341 22.3641C13.856 21.3147 15.1568 20.1104 16.3125 18.7734C18.8859 15.8138 20.25 12.6938 20.25 9.75C20.2475 7.56273 19.3775 5.46575 17.8309 3.91911C16.2843 2.37247 14.1873 1.50248 12 1.5ZM12 20.8125C10.4503 19.5938 5.25 15.1172 5.25 9.75C5.25 7.95979 5.96116 6.2429 7.22703 4.97703C8.4929 3.71116 10.2098 3 12 3C13.7902 3 15.5071 3.71116 16.773 4.97703C18.0388 6.2429 18.75 7.95979 18.75 9.75C18.75 15.1153 13.5497 19.5938 12 20.8125Z"
                            fill="#333333" />
                    </svg>
                    <p class="contact-item">Muqimiy ko'chasi, Toshkent shahri </p>
                </div>

            </div>
            <div className="aloqa">
            <input
              type="text"
              placeholder="Ismingizni kiriting"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
            <input
              className="raqam"
              type="text"
              placeholder="Telefon raqamingizni kiriting"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button onClick={handleSubmit}>Buyurtma berish</button>
          </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}
