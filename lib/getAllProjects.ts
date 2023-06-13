import { supabase } from './supabaseClient';

export default async function ProjectsStuff() {
    const { data: projects } = await supabase.from('projects').select()
    return {projects}
  }
