type Project = {
  title: string
  description: string
  href: string
}

const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A short description of this project and the stack used.',
    href: '#',
  },
  {
    title: 'Project Two',
    description: 'A short description of this project and the stack used.',
    href: '#',
  },
]

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-slate-900">Projects</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            className="rounded-lg border border-slate-200 p-6 transition hover:border-slate-300 hover:shadow-sm"
          >
            <h3 className="font-medium text-slate-900">{project.title}</h3>
            <p className="mt-2 text-sm text-slate-600">
              {project.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects
