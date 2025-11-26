import { Sparkles, HelpCircle } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const Reviews = () => {
    const Reviews = [
        {
            image: 'assets/image/00.jpg',
            avatar: 'assets/avatar/image1.jpg',
            name: 'Emmanuel',
            review: "Got two tillers for 82% off, thats $800 profit 💯",
        },
        {
            image: 'assets/image/01.jpg',
            avatar: 'assets/avatar/image1.jpg',
            name: 'Emmanuel',
            review: "Got two tillers for 82% off, thats $800 profit 💯",
        },
        {
            image: 'assets/image/02.jpg',
            avatar: 'assets/avatar/image1.jpg',
            name: 'Emmanuel',
            review: "Got two tillers for 82% off, thats $800 profit 💯",
        },
        {
            image: 'assets/image/03.jpg',
            avatar: 'assets/avatar/image1.jpg',
            name: 'Emmanuel',
            review: "Got two tillers for 82% off, thats $800 profit 💯",
        },
        {
            image: 'assets/image/04.jpg',
            avatar: 'assets/avatar/image1.jpg',
            name: 'Emmanuel',
            review: "Got two tillers for 82% off, thats $800 profit 💯",
        },
        {
            image: 'assets/image/05.jpg',
            avatar: 'assets/avatar/image1.jpg',
            name: 'Emmanuel',
            review: "Got two tillers for 82% off, thats $800 profit 💯",
        },
        {
            image: 'assets/image/00.jpg',
            avatar: 'assets/avatar/image1.jpg',
            name: 'Emmanuel',
            review: "Got two tillers for 82% off, thats $800 profit 💯",
        },
        {
            image: 'assets/image/06.jpg',
            avatar: 'assets/avatar/image1.jpg',
            name: 'Emmanuel',
            review: "Got two tillers for 82% off, thats $800 profit 💯",
        },
        {
            image: 'assets/image/07.jpg',
            avatar: 'assets/avatar/image1.jpg',
            name: 'Emmanuel',
            review: "Got two tillers for 82% off, thats $800 profit 💯",
        },
        {
            image: 'assets/image/08.jpg',
            avatar: 'assets/avatar/image1.jpg',
            name: 'Emmanuel',
            review: "Got two tillers for 82% off, thats $800 profit 💯",
        },
        {
            image: 'assets/image/09.jpg',
            avatar: 'assets/avatar/image1.jpg',
            name: 'Emmanuel',
            review: "Got two tillers for 82% off, thats $800 profit 💯",
        },
        {
            image: 'assets/image/10.jpg',
            avatar: 'assets/avatar/image1.jpg',
            name: 'Emmanuel',
            review: "Got two tillers for 82% off, thats $800 profit 💯",
        },
        {
            image: 'assets/image/11.jpg',
            avatar: 'assets/avatar/image1.jpg',
            name: 'Emmanuel',
            review: "Got two tillers for 82% off, thats $800 profit 💯",
        },
        {
            image: 'assets/image/12.jpg',
            avatar: 'assets/avatar/image1.jpg',
            name: 'Emmanuel',
            review: "Got two tillers for 82% off, thats $800 profit 💯",
        },
        {
            image: 'assets/image/13.jpg',
            avatar: 'assets/avatar/image1.jpg',
            name: 'Emmanuel',
            review: "Got two tillers for 82% off, thats $800 profit 💯",
        },
        {
            image: 'assets/image/14.jpg',
            avatar: 'assets/avatar/image1.jpg',
            name: 'Emmanuel',
            review: "Got two tillers for 82% off, thats $800 profit 💯",
        },
        {
            image: 'assets/image/15.jpg',
            avatar: 'assets/avatar/image1.jpg',
            name: 'Emmanuel',
            review: "Got two tillers for 82% off, thats $800 profit 💯",
        },
        {
            image: 'assets/image/16.jpg',
            avatar: 'assets/avatar/image1.jpg',
            name: 'Emmanuel',
            review: "Got two tillers for 82% off, thats $800 profit 💯",
        },
        {
            image: 'assets/image/17.jpg',
            avatar: 'assets/avatar/image1.jpg',
            name: 'Emmanuel',
            review: "Got two tillers for 82% off, thats $800 profit 💯",
        },
        {
            image: 'assets/image/18.jpg',
            avatar: 'assets/avatar/image1.jpg',
            name: 'Emmanuel',
            review: "Got two tillers for 82% off, thats $800 profit 💯",
        },
    ];

    return (
        <section className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">CUSTOMER REVIEW</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                        REAL PEOPLE. REAL PROFITS.
                        <br />
                    </h2>
                </div>

                <Swiper 
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    style={{ "height": "350px", "position": "relative" }}
                >
                    {Reviews.map((card, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-card border border-border rounded-2xl p-6 transition-all duration-300 flex flex-col h-full">
                                <img className="text-6xl mb-4 w-[100%] h-[220px] rounded-[10px] transition-transform duration-200 hover:scale-[1.05]" src={card.image} />
                                <div className="mt-3 flex items-center gap-2">
                                    <img src={card.avatar} className="h-8 w-8 rounded-full object-cover" />
                                    <div className="text-xs">
                                        <h3 className="font-semibold text-card-foreground">{card.name}</h3>
                                        <p className="flex">
                                            <img src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" className="w-[10px]" alt="" />
                                            <img src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" className="w-[10px]" alt="" />
                                            <img src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" className="w-[10px]" alt="" />
                                            <img src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" className="w-[10px]" alt="" />
                                            <img src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" className="w-[10px]" alt="" />
                                        </p>
                                        <h4 className="text-muted-foreground text-[11px]">Verified eMoney member</h4>
                                    </div>
                                </div>
                                <p className="mt-2 text-xs text-card-foreground/80 italic">"{card.review}"</p>
                            </div>
                        </SwiperSlide>
                    ))
                    }
                </Swiper>
            </div>
        </section>
    );
};

