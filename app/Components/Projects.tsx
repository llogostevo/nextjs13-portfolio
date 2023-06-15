import { supabase } from '../../lib/supabaseClient';
import ProfileButton from '../Components/ProfileButton';

export default async function Projects() {
  const { data: projects } = await supabase.from('projects').select('*')

  if (!projects) {
    return <p>No projects found.</p>
  }

  return (
    <main>
        <ul className="flex flex-row flex-wrap items-center">
        {projects.map((project)=> (
          <div className ="max-w-sm rounded overflow-hidden shadow-lg p-5 m-5  flex flex-col ">
              <li className="items-center " key={project.id}>
                <h1 className="text-2xl items-center ">{project.title}</h1>
                  <ul>
                      <li>{project.description}</li>
                      <li><ProfileButton src={project.live_view_link} title="Live View" /></li>
                      <li><ProfileButton src={project.github_link} title="Git Hub" /></li>
                  </ul>
              </li>
            </div>
        ))}
        </ul>
    </main>
  )
}
