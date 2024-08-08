import { Link } from "react-router-dom";

const Footer = () => {
    return (<div
        className="h-25 p-2 text-white flex justify-center align-middle bg-blue-400 border-t-2  border-t-orange-600">
        <Link to="/" className=" hover:text-orange-600"> back to pyxelhaze</Link>
    </div>);
}

export default Footer;