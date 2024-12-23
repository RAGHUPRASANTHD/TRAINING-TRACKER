// skill-faculty.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';



export interface Student {
  name: string;
  rollNumber: string;
}

export interface Skill {
  id: string;
  name: string;
  domain: string; // E.g., Web Development, Data Science
  status: string; // E.g., Pending, Approved
  completedBy: Student;
}

export interface Faculty {
  id: string;
  name: string;
  domain: string; // E.g., Web Development, Data Science
}

@Injectable({
  providedIn: 'root'
})


export class SkillFacultyService {
  private skills: Skill[] = [
    {
      id: 'SKL001',
      name: 'Web Development',
      domain: 'Web Development',
      status: 'Pending',
      completedBy: { name: 'John Doe', rollNumber: '12345' }
    },
    {
      id: 'SKL002',
      name: 'Data Science',
      domain: 'Data Science',
      status: 'Pending',
      completedBy: { name: 'Jane Smith', rollNumber: '67890' }
    },
    {
      id: 'SKL001',
      name: 'Web Development',
      domain: 'Web Development',
      status: 'Pending',
      completedBy: { name: 'John Doe', rollNumber: '12345' }
    },
    {
      id: 'SKL002',
      name: 'Data Science',
      domain: 'Data Science',
      status: 'Pending',
      completedBy: { name: 'Jane Smith', rollNumber: '67890' }
    },
    {
      id: 'SKL001',
      name: 'Web Development',
      domain: 'Web Development',
      status: 'Pending',
      completedBy: { name: 'John Doe', rollNumber: '12345' }
    },
    {
      id: 'SKL002',
      name: 'Data Science',
      domain: 'Data Science',
      status: 'Pending',
      completedBy: { name: 'Jane Smith', rollNumber: '67890' }
    },
    {
      id: 'SKL001',
      name: 'Web Development',
      domain: 'Web Development',
      status: 'Pending',
      completedBy: { name: 'John Doe', rollNumber: '12345' }
    },
    {
      id: 'SKL002',
      name: 'Data Science',
      domain: 'Data Science',
      status: 'Pending',
      completedBy: { name: 'Jane Smith', rollNumber: '67890' }
    },
    {
      id: 'SKL001',
      name: 'Web Development',
      domain: 'Web Development',
      status: 'Pending',
      completedBy: { name: 'John Doe', rollNumber: '12345' }
    },
    {
      id: 'SKL002',
      name: 'Data Science',
      domain: 'Data Science',
      status: 'Pending',
      completedBy: { name: 'Jane Smith', rollNumber: '67890' }
    },
    // Add more skills as needed
  ];

  private faculty: Faculty[] = [
    { id: 'FAC001', name: 'Dr. Alice', domain: 'Web Development' },
    { id: 'FAC002', name: 'Prof. Bob', domain: 'Data Science' },
    // Add more faculty members as needed
  ];

  constructor() {}

  // Fetch all skills
  getSkills(): Observable<Skill[]> {
    return of(this.skills);
  }

  // Fetch all faculty members
  getFaculty(): Observable<Faculty[]> {
    return of(this.faculty);
  }
}
