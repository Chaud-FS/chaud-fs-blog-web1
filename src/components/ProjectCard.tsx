import { Link } from 'react-router-dom'
import { Card } from './Card'
import type { Project } from '../data/projects'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="project-card">
      <div className="project-card__top">
        <span className="tag">{project.category}</span>
        {project.github && (
          <a
            className="project-card__gh mono"
            href={project.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
          >
            GitHub ↗
          </a>
        )}
      </div>

      <h3 className="project-card__name">{project.name}</h3>
      <p className="project-card__tagline muted">{project.tagline}</p>
      <p className="project-card__desc dim">{project.description}</p>

      <ul className="project-card__highlights">
        {project.highlights.map((h) => (
          <li key={h}>
            <span className="dot" /> {h}
          </li>
        ))}
      </ul>

      <div className="project-card__tags">
        {project.tags.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </Card>
  )
}

export function ProjectCardLink({ project }: { project: Project }) {
  return (
    <Link to={`/projects#${project.id}`} className="project-card__link">
      <ProjectCard project={project} />
    </Link>
  )
}
