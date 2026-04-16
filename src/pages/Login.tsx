

const Login = () => {
    return (
        <>
            {/* Header */}
            <header className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

                    <div className="text-xl font-bold">MyWebsite</div>

                    <nav className="hidden md:flex space-x-6">
                        <a href="#" className="hover:text-cyan-400">Home</a>
                        <a href="#" className="hover:text-cyan-400">About</a>
                        <a href="#" className="hover:text-cyan-400">Services</a>
                        <a href="#" className="hover:text-cyan-400">Contact</a>
                    </nav>

                    <button className="bg-cyan-500 px-4 py-2 rounded hover:bg-cyan-600">
                        Login
                    </button>
                </div>
            </header>
            {/* Login Form */}
            <div className="mt-24 flex justify-center items-center min-h-screen bg-gradient-to-r from-teal-400 to-cyan-600">

                <div className="bg-white p-8 rounded-xl shadow-lg w-96">
                    <h2 className="text-2xl font-bold text-center mb-6">Login Form</h2>

                    <form className="space-y-4">

                        {/* Email */}
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        />

                        {/* Password */}
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        />

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full bg-cyan-500 text-white py-2 rounded-lg hover:bg-cyan-600"
                        >
                            Login
                        </button>

                    </form>

                    {/* Extra Links */}
                    <p className="text-sm text-center mt-4">
                        Don't have an account?{" "}
                        <span className="text-cyan-600 cursor-pointer">Register</span>
                    </p>
                </div>

            </div>
        </>
    );
};

export default Login;