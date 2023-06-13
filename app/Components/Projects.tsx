import { supabase } from '../../lib/supabaseClient';
import ProfileButton from '../Components/ProfileButton';

export default async function Projects() {
  const { data: projects } = await supabase.from('projects').select('*')

  if (!projects) {
    return <p>No projects found.</p>
  }

  return (
    <main>
        <ul>
        {projects.map((project)=> (
          <li key={project.id}>
            <h1 className="text-2xl text-yellow-700">{project.title}</h1>
                <ul>
                    <li>{project.description}</li>
                    <li><ProfileButton src={project.live_view_link} title="Live View" /></li>
                    <li><ProfileButton src={project.github_link} title="Git Hub" /></li>
                </ul>
            </li>
        ))}
        </ul>
    </main>
  )
}
