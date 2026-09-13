import type { Technology } from '../types/technology';

interface TechnologyCardProps {
    technology: Technology;
    isSelected: boolean;
    onAdd: () => void;
}

const TechnologyCard = ({
    technology,
    isSelected,
    onAdd,
}: TechnologyCardProps) => {
    return (
        <div className="bg-white p-4 rounded-xl shadow-sm border flex flex-col justify-between">

            {/* Technology Information */}
            <div>


                <div className="flex items-center justify-between mb-3">
                    <img
                        src={technology.icon}
                        alt={technology.name}
                        className="w-8 h-8 object-contain"
                    />

                    <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-medium">
                        {technology.badge}
                    </span>
                </div>


                <h3 className="font-bold text-lg">
                    {technology.name}
                </h3>


                <p className="text-slate-500 text-xs mt-1 line-clamp-2">
                    {technology.description}
                </p>

                <div className="flex items-center gap-2 mt-3 text-xs text-slate-500">

                    <span className="bg-slate-100 px-2 py-0.5 rounded">
                        {technology.category}
                    </span>

                    <span>
                        {technology.difficulty}
                    </span>

                    <span className="text-amber-500 font-semibold">
                        ★ {technology.rating}
                    </span>

                </div>
            </div>

            {/* Add to Stack Button */}
            <button
                onClick={onAdd}
                disabled={isSelected}
                className={`mt-4 w-full py-2 rounded-md font-medium text-xs transition ${isSelected
                    ? 'bg-green-100 text-emerald-700 cursor-not-allowed'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
            >
                {isSelected
                    ? 'Added to Stack'
                    : 'Add to Stack'}
            </button>

        </div>
    );
};

export default TechnologyCard;