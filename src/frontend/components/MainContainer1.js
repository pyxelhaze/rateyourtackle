import StarRatings from 'react-star-ratings';


const MainContainer1 = () => {
    return (<div
        className="h-40 w-full border-2 rounded border-blue-400">

        <h3 className="p-2 text-orange-600 font-bold text-xl">Top-Tackle</h3>
        <div className="flex flex-row h-full">
            <div className="h-2/3 w-1/5 p-1 mx-3 border rounded border-blue-400 hover:border-2 cursor-pointer">
                <p className="text">Shimano</p>
                <StarRatings

                    rating={3}
                    starRatedColor="orange"
                    changeRating={(newRating) => console.log(newRating)}
                    numberOfStars={5}
                    name='rating'
                    starDimension='15px'
                    starSpacing="0"
                />
            </div>
            <div className="h-2/3 w-1/5 mx-3 border-2 rounded border-blue-400"></div>
            <div className="h-2/3 w-1/5 mx-3 border-2 rounded border-blue-400"></div>
            <div className="h-2/3 w-1/5 mx-3 border-2 rounded border-blue-400"></div>
            <div className="h-2/3 w-1/5 mx-3 border-2 rounded border-blue-400"></div>

        </div>

    </div>);
}

export default MainContainer1;