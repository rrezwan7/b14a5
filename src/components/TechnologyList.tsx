import type { Technology } from '../types/technology';
import TechnologyCard from './TechnologyCard';

interface TechnologyListProps {
    technologies: Technology[];
}

const TechnologyList = ({ technologies }: TechnologyListProps) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {technologies.map((technology) => (
                <TechnologyCard
                    key={technology.id}
                    technology={technology}
                />
            ))}
        </div>
    );
};

export default TechnologyList;