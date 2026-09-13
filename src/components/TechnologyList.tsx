import type { Technology } from '../types/technology';
import TechnologyCard from './TechnologyCard';

interface TechnologyListProps {
    technologies: Technology[];
    selectedStack: Technology[];
    onAddToStack: (technology: Technology) => void;
}

const TechnologyList = ({
    technologies,
    selectedStack,
    onAddToStack,
}: TechnologyListProps) => {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

            {technologies.map((technology) => {

                const isSelected = selectedStack.some(
                    (item) => item.id === technology.id
                );

                return (
                    <TechnologyCard
                        key={technology.id}
                        technology={technology}
                        isSelected={isSelected}
                        onAdd={() => onAddToStack(technology)}
                    />
                );
            })}

        </div>
    );
};

export default TechnologyList;