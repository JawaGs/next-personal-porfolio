import { experience } from './experience';

describe('experience data', () => {
  it('is sorted newest first', () => {
    const starts = experience.map((entry) => entry.start.dateTime);
    expect(starts).toEqual([...starts].sort().reverse());
  });

  it('only has an open-ended date range on the newest entry', () => {
    experience.slice(1).forEach((entry) => {
      expect(entry.end).not.toBeNull();
    });
  });

  it('contains required fields for each entry', () => {
    experience.forEach((entry) => {
      expect(entry.title.length).toBeGreaterThan(0);
      expect(entry.company.length).toBeGreaterThan(0);
      expect(entry.start.dateTime).toMatch(/^\d{4}-\d{2}$/);
      expect(entry.start.label.length).toBeGreaterThan(0);
      if (entry.end) {
        expect(entry.end.dateTime).toMatch(/^\d{4}-\d{2}$/);
        expect(entry.end.label.length).toBeGreaterThan(0);
      }
      expect(entry.highlights.length).toBeGreaterThan(0);
    });
  });
});
