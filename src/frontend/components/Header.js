import { Link } from "react-router-dom";
import Dropdown from './Dropdown';
const Header = () => {

    const dropdownItems = [
        'Option 1',
        'Option 2',
        'Option 3',
        'Option 4',
        'Option 5',
        'Option 6',
    ];



    return (
        <div className="flex justify-center bg-blue-400 border-b-2  border-b-orange-600 " >
            <nav className="w-5/6 h-25 ">
                <h1 className="p-4 font-extrabold text-4xl text-orange-600">Rate Your Tackle</h1>
                <div className="pl-4 text-xl text-white">
                    <Link to="/" className="pr-10 hover:text-orange-600">Home</Link>
                    <Link to="/" className="pr-10 hover:text-orange-600">Your Profile</Link>
                    <Link to="/create" className="pr-10 hover:text-orange-600">Rods</Link>
                    <Link to="/" className="pr-10 hover:text-orange-600">Reels</Link>
                    <Link to="/" className="pr-10 hover:text-orange-600">Lines</Link>
                    <Link to="/" className="pr-10 hover:text-orange-600">Lures</Link>
                    <Link to="/" className="pr-10 hover:text-orange-600">Search</Link>
                </div>
            </nav>
        </div>
    );
}

export default Header;