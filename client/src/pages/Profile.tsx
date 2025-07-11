import NavBar from "../components/NavBar";

function Profile(){
    return (
        
        <div className="min-h-screen bg-gray-700 text-white">
            <NavBar/>
            <div className="flex flex-col items-center p-10">
                {/* Profile Picture */}
                <div className="w-32 h-32 rounded-full overflow-hidden">
                    <img
                        src="https://placehold.co/128x128"

                    />
                </div>
            </div>
        </div>
     );
}
 
export default Profile;


