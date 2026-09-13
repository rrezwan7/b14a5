import type { Technology } from '../types/technology';

interface TechnologyCardProps {
    technology: Technology;
}

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
    return (
        <div className="border rounded-lg p-4 bg-white">

            <div className="flex items-center gap-3">
                <img
                    src={technology.icon}
                    alt={technology.name}
                    className="w-10 h-10"
                />

                <div>
                    <h3 className="font-semibold">
                        {technology.name}
                    </h3>

                    <p className="text-sm text-slate-500">
                        {technology.category}
                    </p>
                </div>
            </div>

            <p className="text-sm text-slate-600 mt-3">
                {technology.description}
            </p>

            <div className="flex justify-between mt-4 text-sm">
                <span>⭐ {technology.rating}</span>

                <span>{technology.difficulty}</span>
            </div>

            <div className="mt-3">
                <span className="bg-pink-100 text-pink-600 text-xs px-2 py-1 rounded">
                    {technology.badge}
                </span>
            </div>

        </div>
    );
};

export default TechnologyCard;