import type { Technology } from '../types/technology';

interface StackSidebarProps {
    selectedStack: Technology[];
    onRemove: (id: string, name: string) => void;
    onClearAll: () => void;
}

const StackSidebar = ({
    selectedStack,
    onRemove,
    onClearAll,
}: StackSidebarProps) => {

    return (
        <div className="lg:col-span-1 bg-white p-4 rounded-xl shadow-sm border h-fit sticky top-20">


            <h3 className="font-bold text-lg">
                Your Stack
            </h3>
            <p className="text-xs text-slate-500 mb-4">
                {selectedStack.length} Technology Selected
            </p>

            {selectedStack.length === 0 ? (

                <div className="text-center py-8 text-slate-400 text-sm">
                    No technologies selected yet.
                </div>

            ) : (

                <div className="space-y-2">


                    {selectedStack.map((technology) => (

                        <div
                            key={technology.id}
                            className="flex items-center justify-between p-2 bg-slate-50 rounded-lg border"
                        >
                            <div className="flex items-center gap-2">

                                <img
                                    src={technology.icon}
                                    alt={technology.name}
                                    className="w-5 h-5 object-contain"
                                />

                                <div>
                                    <p className="text-xs font-semibold">
                                        {technology.name}
                                    </p>

                                    <p className="text-[10px] text-slate-500">
                                        {technology.category}
                                    </p>
                                </div>

                            </div>

                            {/* Remove Button */}
                            <button
                                onClick={() =>
                                    onRemove(technology.id, technology.name)
                                }
                                className="text-slate-400 hover:text-red-500 text-sm font-bold px-1"
                            >
                                ✕
                            </button>

                        </div>

                    ))}

                    {/* Remove All */}
                    <button
                        onClick={onClearAll}
                        className="w-full mt-4 text-xs text-red-500 hover:text-red-700 border border-red-200 hover:bg-red-50 py-1.5 rounded font-medium transition"
                    >
                        Remove All
                    </button>

                </div>

            )}

        </div>
    );
};

export default StackSidebar;