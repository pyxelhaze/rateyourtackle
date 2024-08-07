import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div class="flex justify-center bg-blue-400 border-b-4  border-b-orange-600 " >
            <nav className="w-3/4 h-25 ">
                <h1 class="p-4 font-extrabold text-4xl text-orange-600">Rate Your Tackle</h1>
                <div className="links" class="pl-4 text-xl text-white">
                    <Link to="/" class="pr-12 hover:text-orange-600">Home</Link>
                    <Link to="/create" class="pr-12 hover:text-orange-600">Rods</Link>
                    <Link to="/" class="pr-12 hover:text-orange-600">Reels</Link>
                    <Link to="/" class="pr-12 hover:text-orange-600">Lines</Link>
                    <Link to="/" class="pr-12 hover:text-orange-600">Lures</Link>
                    <Link to="/" class="pr-12 hover:text-orange-600">Your Profile</Link>
                    <Link to="/" class="pr-12 hover:text-orange-600">New Blog</Link>
                </div>
            </nav>
        </div>
    );
}

export default Header;