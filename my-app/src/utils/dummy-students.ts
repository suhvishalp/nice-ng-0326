import { Student } from "./student.model";



export const STUDENTS: Student[] = [
    {
      id: 1,
      name: 'Alice Smith',
      address: '123 Main Street',
      city: 'New York',
      imageUrl: 'https://randomuser.me/api/portraits/women/71.jpg',
      courses: [
        { studentId: 1, courseName: 'Mathematics', startDate: '2023-01-10', endDate: '2023-05-20', topicsLearned: 'Algebra, Calculus' },
        { studentId: 1, courseName: 'Physics', startDate: '2023-02-15', endDate: '2023-06-15', topicsLearned: 'Mechanics, Thermodynamics' }
      ]
    },
    {
      id: 2,
      name: 'Bob Johnson',
      address: '456 Elm Street',
      city: 'Los Angeles',
      imageUrl: 'https://randomuser.me/api/portraits/women/31.jpg',
      courses: [
        { studentId: 2, courseName: 'History', startDate: '2023-03-01', endDate: '2023-07-01', topicsLearned: 'Ancient and Modern History' }
      ]
    },
    {
      id: 3,
      name: 'Charlie Brown',
      address: '789 Oak Avenue',
      city: 'Chicago',
      imageUrl: 'https://randomuser.me/api/portraits/women/48.jpg',
      courses: []
    },
    {
      id: 4,
      name: 'Diana Prince',
      address: '321 Maple Road',
      city: 'San Francisco',
      imageUrl: 'https://randomuser.me/api/portraits/women/83.jpg',
      courses: [
        { studentId: 4, courseName: 'Art History', startDate: '2023-04-05', endDate: '2023-08-05', topicsLearned: 'Renaissance Art' }
      ]
    },
    {
      id: 5,
      name: 'Ethan Hunt',
      address: '654 Pine Lane',
      city: 'Boston',
      imageUrl: 'https://randomuser.me/api/portraits/women/10.jpg',
      courses: []
    },
    {
      id: 6,
      name: 'Fiona Gallagher',
      address: '987 Cedar Blvd',
      city: 'Seattle',
      imageUrl: 'https://randomuser.me/api/portraits/women/34.jpg',
      courses: []
    }
  ];