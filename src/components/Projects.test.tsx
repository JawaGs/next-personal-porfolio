import { render, screen, within } from '@testing-library/react';
import { projects } from '@/data/projects';
import Projects from './Projects';

vi.mock('next/image', () => ({
  default: ({ alt, src }: { alt: string; src: string }) => <img alt={alt} src={src} />,
}));

describe('Projects', () => {
  it('renders an article with a title and two links for each project', () => {
    render(<Projects />);

    const articles = screen.getAllByRole('article');

    expect(articles).toHaveLength(projects.length);

    projects.forEach((project, index) => {
      const article = within(articles[index]);

      expect(article.getByRole('heading', { level: 3, name: project.title })).toBeInTheDocument();
      expect(article.getAllByRole('link')).toHaveLength(2);
    });
  });

  it('links to the live demo and the code with accessible names and new-tab attributes', () => {
    render(<Projects />);

    projects.forEach((project) => {
      const demo = screen.getByRole('link', {
        name: `Live demo: ${project.title} (opens in a new tab)`,
      });
      const code = screen.getByRole('link', {
        name: `Code: ${project.title} (opens in a new tab)`,
      });

      expect(demo).toHaveAttribute('href', project.url);
      expect(code).toHaveAttribute('href', project.repoUrl);

      [demo, code].forEach((link) => {
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      });
    });
  });

  it('renders each preview image as decorative', () => {
    const { container } = render(<Projects />);

    const images = container.querySelectorAll('img');

    expect(images).toHaveLength(projects.length);
    images.forEach((image) => {
      expect(image).toHaveAttribute('alt', '');
    });
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});
