import logo from '../assets/logo-text.png';

const Navbar = () => {
    return (
        <nav className="border-b bg-white">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                {/* Logo */}

                <img src={logo} alt="" className="h-8" />

                {/* Menu */}
                <ul className="flex gap-6 text-sm font-medium">
                    <li>
                        <a href="#home">Home</a>
                    </li>

                    <li>
                        <a href="#tech">Technologies</a>
                    </li>

                    <li>
                        <a href="#projects">Projects</a>
                    </li>

                    <li>
                        <a href="#about">About</a>
                    </li>

                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>

                {/* Buttons */}
                <div className="flex gap-3">
                    <button>Sign In</button>

                    <button className="bg-pink-500 text-white px-4 py-1.5 rounded">
                        Sign Up
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;