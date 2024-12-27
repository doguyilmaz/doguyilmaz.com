import { Flex } from '@/once-ui/components';
import { ProjectCard } from '@/components';
import { workConfig } from '@/config';

interface ProjectsProps {
  range?: [number, number?];
  locale: string;
  showFeatured?: boolean;
}

export function Projects({ range, locale, showFeatured = false }: ProjectsProps) {
  const projects = showFeatured ? workConfig.featured : workConfig.projects;

  const displayedProjects = range
    ? projects.slice(range[0] - 1, range[1] ?? projects.length)
    : projects;

  return (
    <Flex fillWidth gap='xl' marginBottom='40' paddingX='l' direction='column'>
      {displayedProjects.map((project) => (
        <ProjectCard
          key={project.title}
          href={project.link}
          images={[project.image]}
          title={project.title}
          description={project.description}
          content={project.description}
          avatars={[]}
          tags={project.tags}
        />
      ))}
    </Flex>
  );
}
