import logo from '../assets/logo-text.png';

const Footer = () => {
    return (
        <footer className="bg-white border-t mt-16 py-8 text-xs text-slate-500">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">


                <div>
                    <div className="flex items-center">
                        <img
                            src={logo}
                            alt=""
                            className="h-8"
                        />
                    </div>

                    <p className="mt-2 text-slate-400">
                        Curated tools, technologies, and resources for developers
                        building modern software.
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-3 mt-3 text-slate-500 font-medium">
                        <a href="#github" className="hover:text-slate-800 transition">
                            GitHub
                        </a>

                        <a href="#twitter" className="hover:text-slate-800 transition">
                            Twitter
                        </a>

                        <a href="#linkedin" className="hover:text-slate-800 transition">
                            LinkedIn
                        </a>
                    </div>
                </div>

                <div>
                    <p className="font-bold text-slate-800 mb-2">
                        PRODUCT
                    </p>

                    <p className="py-0.5 cursor-pointer hover:text-slate-800">
                        Home
                    </p>

                    <p className="py-0.5 cursor-pointer hover:text-slate-800">
                        Technologies
                    </p>

                    <p className="py-0.5 cursor-pointer hover:text-slate-800">
                        Projects
                    </p>
                </div>

                {/* Company Group */}
                <div>
                    <p className="font-bold text-slate-800 mb-2">
                        COMPANY
                    </p>

                    <p className="py-0.5 cursor-pointer hover:text-slate-800">
                        About
                    </p>

                    <p className="py-0.5 cursor-pointer hover:text-slate-800">
                        Contact
                    </p>

                    <p className="py-0.5 cursor-pointer hover:text-slate-800">
                        Careers
                    </p>
                </div>

                <div>
                    <p className="font-bold text-slate-800 mb-2">
                        LEGAL
                    </p>

                    <p className="py-0.5 cursor-pointer hover:text-slate-800">
                        Privacy Policy
                    </p>

                    <p className="py-0.5 cursor-pointer hover:text-slate-800">
                        Terms of Service
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto px-4 mt-8 pt-4 border-t flex flex-col sm:flex-row justify-between text-slate-400">
                <p>
                    © 2026 DevStack. All rights reserved.
                </p>

                <div className="flex gap-4 mt-2 sm:mt-0">
                    <span className="cursor-pointer hover:text-slate-600">
                        Privacy
                    </span>

                    <span className="cursor-pointer hover:text-slate-600">
                        Terms
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;