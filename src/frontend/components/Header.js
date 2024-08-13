import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className="flex justify-center bg-blue-400 border-b-2  border-b-orange-600 " >
            <nav className="w-5/6 h-25 ">
                <h1 className="p-4 font-extrabold text-4xl text-orange-600">Rate Your Tackle</h1>
                <div className="pl-4 text-xl text-white">
                    <Link to="/" className="pr-10 hover:text-orange-600">Home</Link>
                    <Link to="/profile" className="pr-10 hover:text-orange-600">Your Profile</Link>
                    <Link to="/rods" className="pr-10 hover:text-orange-600">Rods</Link>
                    <Link to="/reels" className="pr-10 hover:text-orange-600">Reels</Link>
                    <Link to="/lines" className="pr-10 hover:text-orange-600">Lines</Link>
                    <Link to="/lures" className="pr-10 hover:text-orange-600">Lures</Link>
                    <Link to="/" className="pr-10 hover:text-orange-600">Search</Link>
                </div>
            </nav>
        </div>
    );
}

export default Header;