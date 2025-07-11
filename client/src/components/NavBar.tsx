import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <div className="w-screen h-20 bg-white/10 backdrop-blur-md flex justify-between items-center z-50">
                <p className="text-2xl flex p-3">
                    <Link to="/">GameClipz</Link>
                </p>
                <div className="flex bg-blue-400 w-20 h-10 rounded-md hover:bg-blue-500">
                    <Link className="w-full h-full flex items-center justify-center" to="/sign-in">Sign In</Link>
                </div>
                <div className="flex bg-blue-400 w-15 h-15 rounded-full justify-center items-center hover:bg-blue-500 m-2">
                    <Link className="w-full h-full flex items-center justify-center" to="/profile">Profile</Link>
                </div>
            </div>
        </>
    );
}

export default NavBar;