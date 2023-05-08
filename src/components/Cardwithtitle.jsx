import React from 'react';
import Thirdcard from './Thirdcard';
import { Fade, Zoom } from 'react-awesome-reveal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

function Cardwithtitle({ title, cardcontent }) {
    return (
        <section className="notreequipe mt-14 mb-12">
            <div className="containeur">
                <Zoom triggerOnce>
                    <h2 className="title text-primarycolor text-center">
                        {title}
                    </h2>
                </Zoom>

                <Swiper
                    className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 pb-8"
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        // when window width is >= 640px
                        500: {
                            slidesPerView: 2,
                        },
                        // when window width is >= 768px
                        976: {
                            slidesPerView: 3,
                        },
                    }}
                    modules={[Autoplay, Pagination]}
                >
                    <div className="notreequipe__content mt-12 ">
                        {/* <Fade cascade damping={0.3} direction={'up'} triggerOnce> */}

                        {cardcontent.map((carditem) => (
                            <SwiperSlide key={carditem.id}>
                                <Thirdcard {...carditem} />
                            </SwiperSlide>
                        ))}
                        {/* </Fade> */}
                    </div>
                </Swiper>
            </div>
        </section>
    );
}

export default Cardwithtitle;
