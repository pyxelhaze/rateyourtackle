import StarRatings from 'react-star-ratings';


const MainContainer1 = ({ tackle }) => {
    const topTackle = tackle.slice(0, 5);
    return (<div
        className="h-40 w-full ">

        <h3 className="p-2 text-orange-600 font-bold text-xl">Top-Tackle</h3>
        <div className="flex flex-row h-full">
            {topTackle.map(item => (
                <div key={item.id} className="h-2/3 w-1/5 p-1 mx-3 border rounded border-blue-400 hover:border-2 cursor-pointer">
                    <p className="text">{item.name}</p>
                    <StarRatings
                        rating={item.rating}
                        starRatedColor="orange"
                        numberOfStars={5}
                        starDimension='15px'
                        starSpacing="0"
                    />
                </div>
            ))}
        </div>

    </div>);
}

export default MainContainer1;