import { projects } from './projects';

describe('projects data', () => {
  it('has a non-empty list of projects', () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it('uses 16:9 preview image paths for every project', () => {
    projects.forEach((project) => {
      expect(project.imageSrc).toMatch(/^\/images\/projects\/.+-16x9\.svg$/);
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
});
