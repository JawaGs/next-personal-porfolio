import { projects } from './projects';

describe('projects data', () => {
  it('has a non-empty list of projects', () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it('uses 16:9 preview image paths for every project', () => {
    projects.forEach((project) => {
      expect(project.imageSrc).toMatch(/^\/images\/projects\/.+-16x9\.png$/);
    });
  });

  it('contains required fields for each project card', () => {
    projects.forEach((project) => {
      expect(project.title.length).toBeGreaterThan(0);
      expect(project.description.length).toBeGreaterThan(0);
      expect(project.url).toMatch(/^https?:\/\//);
      expect(project.tech.length).toBeGreaterThan(0);
    });
  });

  it('links each project to its GitHub repository', () => {
    projects.forEach((project) => {
      expect(project.repoUrl).toMatch(/^https:\/\/github\.com\/JawaGs\/[\w.-]+$/);
    });
  });

  it('does not link to the retired now.sh domain', () => {
    projects.forEach((project) => {
      expect(project.url).not.toMatch(/\.now\.sh/);
    });
  });

  it('has unique titles and urls', () => {
    const titles = projects.map((p) => p.title);
    const urls = projects.map((p) => p.url);
    expect(new Set(titles).size).toBe(titles.length);
    expect(new Set(urls).size).toBe(urls.length);
  });
});
