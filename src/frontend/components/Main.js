import { useState, useEffect } from 'react'
import MainContainer1 from './MainContainer1'
import MainContainer2 from './MainContainer2'
import MainContainer3 from './MainContainer3'

const Main = ({ category }) => {

    const [tackle, setTackle] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/articles')
            .then(res => res.json())
            .then(data => setTackle(data))
            .catch(error => console.error('error fetching data', error))
    }, [])

    const filteredTackle = category
        ? tackle.filter(item => item.category === category)
        : tackle;

    return (
        <div className="flex flex-grow justify-center">
            <div className="w-5/6 flex flex-col" >

                <MainContainer1 tackle={filteredTackle} />{/*  contains top tackle */}
                <div className="flex flex-row  mt-5 mb-7">
                    <MainContainer2 tackle={filteredTackle} /> {/* contains new ratings */}
                    <MainContainer3 tackle={filteredTackle} />   {/* contains new tackle */}
                </div>
            </div>
        </div>);
}

export default Main;