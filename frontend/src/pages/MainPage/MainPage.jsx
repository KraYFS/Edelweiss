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
  }, []);

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
            <Title align="center" text="О компании" />
            <div className={styles.about_company_inner}>
              <h4 className={styles.about_company_text}>
                «Эдельвейс буд» — современная, динамично развивающаяся компания,
                которая уже более 5 лет строит уютные, качественные дома из
                надежных материалов. Мы построили более 600 домов по всей
                Украине. Наши клиенты выбирают «Эдельвейс-Буд» по ряду причин.
                Мы не просто строим здания, мы создаём пространство, которое
                будет служить вам долгие годы
                <br />
                <br />
                Вот несколько ключевых причин, почему стоит работать именно с
                нами:
              </h4>
            </div>
            <div className={styles.advantages_inner}>
              <div className={styles.advantages_item}>
                <h4 className={styles.advantages_item_title}>
                  Комплексный подход
                </h4>
                <div className={styles.advantages_item_subtitle}>
                  Мы предлагаем полный спектр строительных услуг: от
                  проектирования до сдачи объекта «под ключ». С нами вам не
                  нужно искать разных подрядчиков для разных этапов работы — всё
                  сделаем мы! Это экономит время и силы, а также позволяет лучше
                  контролировать качество и сроки выполнения работ.
                </div>
              </div>
              <div className={styles.advantages_item}>
                <h4 className={styles.advantages_item_title}>
                  Честность и прозрачность в работе
                </h4>
                <div className={styles.advantages_item_subtitle}>
                  Все наши договорённости чётко прописаны в контракте. Мы не
                  скрываем стоимости, и всегда предоставляем прозрачную смету с
                  возможностью корректировки в процессе работы. Для нас важно,
                  чтобы вы чувствовали себя уверенно на каждом этапе реализации
                  вашего проекта.
                </div>
              </div>
              <div className={styles.advantages_item}>
                <h4 className={styles.advantages_item_title}>
                  Соблюдение сроков
                </h4>
                <div className={styles.advantages_item_subtitle}>
                  Мы понимаем, что время — это деньги, и всегда работаем с
                  точными сроками. Наша компания известна своим подходом к
                  соблюдению всех графиков строительства. Мы предоставляем
                  подробный план работ, который не только учитывает все этапы,
                  но и фиксирует сроки их выполнения.
                </div>
              </div>
              <div className={styles.advantages_item}>
                <h4 className={styles.advantages_item_title}>
                  Индивидуальные решения для каждого клиента
                </h4>
                <div className={styles.advantages_item_subtitle}>
                  Независимо от того, строите ли вы дом для семьи или
                  коммерческое помещение, мы подходим к каждому проекту с
                  индивидуальным подходом. Мы учитываем все ваши пожелания,
                  требования и особенности, чтобы создать пространство, которое
                  соответствует вашим ожиданиям. Для нас нет одинаковых проектов
                  — каждый заказ уникален.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MainPage;
