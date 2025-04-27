import MainPageCard from "../../components/MainPage_card/MainPage_card.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./MainPage.module.css";
import LatestWorkItem from "../../components/LatestWorkItem/LatestWorkItem.jsx";
import categoryItem1 from "../../assets/categoryHouse/categoryItem1.png";
import categoryItem2 from "../../assets/categoryHouse/categoryItem2.png";
import categoryItem3 from "../../assets/categoryHouse/categoryItem3.png";
import categoryItem4 from "../../assets/categoryHouse/categoryItem4.png";
import categoryItem5 from "../../assets/categoryHouse/categoryItem5.png";
import categoryItem6 from "../../assets/categoryHouse/categoryItem6.png";
import Title from "../../components/UI/Title/Title";
import Button from "../../components/UI/Button/Button";
import { useEffect, useRef, useState } from "react";
import { BASE_URL } from "../../urls.ts";
import Header from "../../components/Header/Header.jsx";
import { Link } from "react-router-dom";

const MainPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/api/houseInfo`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [data]);

  if (!data) return <div>wait</div>;
  return (
    <>
      <Header />
      <div className={styles.mainPage}>
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
        >
          {data.map((item) => {
            return (
              <SwiperSlide>
                <MainPageCard
                  picture={item.pictures[0]}
                  title={item.name}
                  squareMeter={item.squareMeter}
                  square={item.square}
                  foundationType={item.foundationType}
                  floors={item.floors}
                  bathrooms={item.bathrooms}
                  bedrooms={item.bedrooms}
                  id={item._id}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="container">
          <section className={styles.category_house}>
            <a href="#" className={styles.category_house_item}>
              <img
                className={styles.category_house_item_img}
                src={categoryItem1}
                alt=""
              />
              <h2 className={styles.category_house_item_title}>
                Готовые одноэтажные дома
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 8L14.2759 8"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="bevel"
                  />
                  <path
                    d="M8.48267 1.48279L14.9999 8.00003L8.48267 14.5173"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </h2>
            </a>
            <a href="#" className={styles.category_house_item}>
              <img
                className={styles.category_house_item_img}
                src={categoryItem2}
                alt=""
              />
              <h2 className={styles.category_house_item_title}>
                Готовые двухэтажные дома
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 8L14.2759 8"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="bevel"
                  />
                  <path
                    d="M8.48267 1.48279L14.9999 8.00003L8.48267 14.5173"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </h2>
            </a>
            <a href="#" className={styles.category_house_item}>
              <img
                className={styles.category_house_item_img}
                src={categoryItem3}
                alt=""
              />
              <h2 className={styles.category_house_item_title}>
                Готовые дома с терассой
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 8L14.2759 8"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="bevel"
                  />
                  <path
                    d="M8.48267 1.48279L14.9999 8.00003L8.48267 14.5173"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </h2>
            </a>
            <a href="#" className={styles.category_house_item}>
              <img
                className={styles.category_house_item_img}
                src={categoryItem4}
                alt=""
              />
              <h2 className={styles.category_house_item_title}>
                Готовые дома с гаражем
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 8L14.2759 8"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="bevel"
                  />
                  <path
                    d="M8.48267 1.48279L14.9999 8.00003L8.48267 14.5173"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </h2>
            </a>
            <a href="#" className={styles.category_house_item}>
              <img
                className={styles.category_house_item_img}
                src={categoryItem5}
                alt=""
              />
              <h2 className={styles.category_house_item_title}>
                Готовые бани
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 8L14.2759 8"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="bevel"
                  />
                  <path
                    d="M8.48267 1.48279L14.9999 8.00003L8.48267 14.5173"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </h2>
            </a>
            <a href="#" className={styles.category_house_item}>
              <img
                className={styles.category_house_item_img}
                src={categoryItem6}
                alt=""
              />
              <h2 className={styles.category_house_item_title}>
                Готовые одноэтажные дома
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 8L14.2759 8"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="bevel"
                  />
                  <path
                    d="M8.48267 1.48279L14.9999 8.00003L8.48267 14.5173"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </h2>
            </a>
          </section>
        </div>
        <section className={styles.latest_works}>
          <div className="container">
            <Title align="center" text="Готовые дома" />
            <div className={styles.latest_works_inner}>
              {data.slice(0, 6).map((item) => {
                return (
                  <LatestWorkItem
                    key={item._id}
                    id={item._id}
                    link={`house page/${item._id}`}
                    squareMeter={item.squareMeter}
                    square={item.square}
                    foundationType={item.foundationType}
                    bedrooms={item.bedrooms}
                    bathrooms={item.bathrooms}
                    stairs={item.floors}
                    views={item.views}
                    picture={item.pictures[1]}
                  />
                );
              })}
            </div>
          </div>
          <Link to="/catalog">
            <Button padding="23px 56px" text="Показать все проекты →" />
          </Link>
        </section>
        <section className={styles.advantages}>
          <div className="container">
            <Title
              align="center"
              text="Почему нужно заказывать дома у профессионалов"
            />
            <div className={styles.advantages_inner}>
              <div className={styles.advantages_item}>
                <h4 className={styles.advantages_item_title}>
                  Ради надежности
                </h4>
                <div className={styles.advantages_item_subtitle}>
                  Мы проектируем дома, которые сопротивляются воздействиям
                  окружающей среды (снегу, ветру, ливням, морозам)
                </div>
              </div>
              <div className={styles.advantages_item}>
                <h4 className={styles.advantages_item_title}>Ради удобства</h4>
                <div className={styles.advantages_item_subtitle}>
                  Домом должно быть удобно пользоваться. Продуманный дом, это
                  когда лишние потоки не пересекаются, грязь с улицы не
                  разносится по дому, форма комнат детально рассчитана для
                  размещения мебели, а транзитные зоны минимальны.{" "}
                </div>
              </div>
              <div className={styles.advantages_item}>
                <h4 className={styles.advantages_item_title}>
                  Ради надежности
                </h4>
                <div className={styles.advantages_item_subtitle}>
                  Мы проектируем дома, которые сопротивляются воздействиям
                  окружающей среды (снегу, ветру, ливням, морозам)
                </div>
              </div>
              <div className={styles.advantages_item}>
                <h4 className={styles.advantages_item_title}>
                  Ради надежности
                </h4>
                <div className={styles.advantages_item_subtitle}>
                  Мы проектируем дома, которые сопротивляются воздействиям
                  окружающей среды (снегу, ветру, ливням, морозам)
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className={styles.about_company}>
                <div className="container">
                    <Title text="О компании" />
                    <h4 className={styles.about_company_text}>
                        «Эдельвейс буд» — современная, динамично развивающаяся компания, которая уже более 5 лет строит уютные, качественные дома из надежных материалов. Мы построили более 600 домов по всей Украине.
                        <br />
                        <br />
                        Компания известна тем что построила сотни домов и тд
                    </h4>
                </div>
            </section> */}
      </div>
    </>
  );
};

export default MainPage;
