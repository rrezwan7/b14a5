import bannerImage from "../assets/banner-stack.png";
const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 gap-8 items-center">

            {/* Left Content */}
            <div>
                <h1 className="text-5xl font-bold leading-tight">
                    Build Your Ideal <br />
                    <span className="text-pink-500">Development Stack</span>
                </h1>

                <p className="mt-4 text-slate-600">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that
                    fits your next project.
                </p>

                <div className="mt-6 flex gap-3">
                    <button className="bg-pink-500 text-white px-5 py-2.5 rounded">
                        Explore Technologies
                    </button>

                    <button className="border border-slate-300 px-5 py-2.5 rounded">
                        Learn More
                    </button>
                </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
                <img src={bannerImage} alt="" className="max-w-sm" />

            </div>

        </section>
    );
};

export default Hero;