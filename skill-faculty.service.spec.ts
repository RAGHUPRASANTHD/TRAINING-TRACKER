import { TestBed } from '@angular/core/testing';

import { SkillFacultyService } from './skill-faculty.service';

describe('SkillFacultyService', () => {
  let service: SkillFacultyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillFacultyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
