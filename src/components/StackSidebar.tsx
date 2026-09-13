const StackSidebar = () => {
    return (
        <aside className="border rounded-lg p-5 bg-white">
            <h2 className="text-xl font-bold">
                Your Stack
            </h2>

            <p className="text-sm text-slate-500 mt-2">
                Your selected technologies will appear here.
            </p>

            <div className="mt-6 space-y-3">
                <div className="border rounded p-3">
                    <p className="font-medium">Frontend</p>
                    <p className="text-sm text-slate-500">
                        No technology selected
                    </p>
                </div>

                <div className="border rounded p-3">
                    <p className="font-medium">Backend</p>
                    <p className="text-sm text-slate-500">
                        No technology selected
                    </p>
                </div>

                <div className="border rounded p-3">
                    <p className="font-medium">Database</p>
                    <p className="text-sm text-slate-500">
                        No technology selected
                    </p>
                </div>
            </div>
        </aside>
    );
};

export default StackSidebar;