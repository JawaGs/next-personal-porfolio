import { render, screen } from '@testing-library/react';
import { projects } from '@/data/projects';
import Projects from './Projects';

vi.mock('next/image', () => ({
  default: ({ alt, src }: { alt: string; src: string }) => <img alt={alt} src={src} />,
}));

describe('Projects', () => {
  it('renders a card and preview image for each project', () => {
    render(<Projects />);

    const links = screen.getAllByRole('link');
    const images = screen.getAllByRole('img');

    expect(links).toHaveLength(projects.length);
    expect(images).toHaveLength(projects.length);
  });

  it('renders each project title and external url', () => {
    render(<Projects />);

    projects.forEach((project) => {
      const link = screen.getByRole('link', { name: new RegExp(project.title, 'i') });

      expect(link).toHaveAttribute('href', project.url);
      expect(screen.getByRole('img', { name: `${project.title} preview` })).toBeInTheDocument();
    });
  });
});
