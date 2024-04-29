export const UserProfile = () => {
    return (
        <div className=" flex items-center justify-center h-screen">
            <div className="bg-gray-800 rounded-lg p-6 w-80 text-white shadow-lg">
                <div className="flex flex-col items-center">
                    <img className="w-24 h-24 rounded-full mb-4" src="https://placehold.co/100x100" alt="Profile image placeholder" />
                    <h2 className="text-xl font-semibold">John Doe</h2>
                    <p className="text-gray-400">Graphic Designer</p>
                    <div className="flex mt-4 space-x-3">
                        <a href="mailto:john.doe@example.com" className="text-gray-400 hover:text-white">
                            <i className="fas fa-envelope"></i>
                        </a>
                        <a href="tel:+1234567890" className="text-gray-400 hover:text-white">
                            <i className="fas fa-phone-alt"></i>
                        </a>
                        <a href="https://linkedin.com/in/johndoe" className="text-gray-400 hover:text-white">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                    <button className="mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-4 py-2 rounded shadow hover:from-blue-600 hover:to-purple-700">
                        Contact Meee
                    </button>
                </div>
            </div>
        </div>
    );
};
