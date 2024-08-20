import StarRatings from 'react-star-ratings';
import Slider from 'react-slick';


const MainContainer2 = ({ tackle }) => {
    return (
        <div className="h-60 w-3/5">
            <h3 className="p-2 text-orange-600 font-bold text-xl">New Ratings</h3>
            <div className="relative flex flex-col items-center h-full w-full px-2   ">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
                <div className="h-full w-full pt-2 pb-3 overflow-y-auto scrollbar-none ">
                    {tackle.map(item => (
                        item.reviews && item.reviews.map((review, index) => (
                            <div key={index} className="w-full mb-2 border rounded border-blue-400 p-2 hover:border-2 cursor-pointer">
                                <div className="flex justify-between items-center mb-2">
                                    <p className="text-start font-semibold">{review.username}</p>
                                    <p className="text-start font-semibold">{item.name}</p>
                                    <StarRatings
                                        rating={review.overall}
                                        starRatedColor="orange"
                                        numberOfStars={5}
                                        starDimension='15px'
                                        starSpacing="0"
                                    />
                                </div>
                                <p className="text-start text-sm">{review.review}</p>
                            </div>
                        ))
                    ))}
                </div>
                <div className="absolute bottom-0 left-0  w-full h-6 bg-gradient-to-t from-white to-transparent pointer-events-none "></div>
            </div>

        </div>
    );
};

export default MainContainer2;











