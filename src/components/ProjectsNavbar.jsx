import { Link } from 'react-router-dom';
import { projects } from '../data';

const ProjectsNavbar = () => {
  return (
    <div>
      {projects.map((project) => (
        <h2 key={project.id} className='uppercase text-base/7	hover-transition'>
          <Link to={project.link}>{project.title}</Link>
        </h2>
      ))}
    </div>
  );
};

export default ProjectsNavbar;
