import StarRatings from 'react-star-ratings';
import Slider from 'react-slick';
import { truncateText } from '../utelities/utelityfunctions';

const MainContainer1 = ({ tackle }) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="h-50 w-full">
            <h3 className="p-2 text-orange-600 font-bold text-xl">Top-Tackle</h3>
            <Slider {...settings}>
                {tackle.map(item => (
                    <div key={item.id} className="p-2">
                        <div className="h-40 w-full p-1 border rounded border-blue-400 hover:border-2 cursor-pointer">
                            <p className="text-start font-semibold p-1 whitespace-nowrap overflow-hidden truncate">{truncateText(item.name, 20)}</p>
                            <p className="text-start text-sm pb-3 px-1">{item.category}</p>
                            <div className="flex flex-row justify-between px-1">
                                <p className="text-start pb-1 pr-4">Overall</p>
                                <StarRatings
                                    rating={item.overallRating}
                                    starRatedColor="orange"
                                    numberOfStars={5}
                                    starDimension='15px'
                                    starSpacing="0"
                                    className="pr-4"
                                />
                            </div>
                            <div className="flex flex-row justify-between px-1">
                                <p className="text-start pb-1 pr-4">Price</p>
                                <StarRatings
                                    rating={item.priceRating}
                                    starRatedColor="orange"
                                    numberOfStars={5}
                                    starDimension='15px'
                                    starSpacing="0"

                                />
                            </div>
                            <div className="flex flex-row justify-between px-1">
                                <p className="text-start pb-1 pr-4">Quality</p>
                                <StarRatings
                                    rating={item.qualityRating}
                                    starRatedColor="orange"
                                    numberOfStars={5}
                                    starDimension='15px'
                                    starSpacing="0"

                                />
                            </div>



                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default MainContainer1;