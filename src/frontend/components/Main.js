
import MainContainer1 from './MainContainer1'
import MainContainer2 from './MainContainer2'
import MainContainer3 from './MainContainer3'
const Main = () => {
    return (
        <div className="flex flex-grow justify-center">
            <div className="w-5/6 flex flex-col" >

                <MainContainer1 />
                <div className="flex flex-row  mt-5">
                    <MainContainer2 />
                    <MainContainer3 />
                </div>


            </div>
        </div>);
}

export default Main;