
import MainContainer1 from './MainContainer1'
import MainContainer2 from './MainContainer2'
import MainContainer3 from './MainContainer3'
const Main = () => {
    return (<div className="w-5/6 flex flex-col" >

        <MainContainer1 />
        <div className="flex flex-row flex-grow mt-5">
            <MainContainer2 />
            <MainContainer3 />
        </div>

    </div>);
}

export default Main;