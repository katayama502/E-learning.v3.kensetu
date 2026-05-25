import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CourseStore {
  completedLessonIds: string[];
  lastViewedLessonId: string | null;
  completeLesson: (lessonId: string) => void;
  setLastViewed: (lessonId: string) => void;
  isCompleted: (lessonId: string) => boolean;
}

export const useCourseStore = create<CourseStore>()(
  persist(
    (set, get) => ({
      completedLessonIds: [],
      lastViewedLessonId: null,
      completeLesson: (lessonId) =>
        set((state) => ({
          completedLessonIds: state.completedLessonIds.includes(lessonId)
            ? state.completedLessonIds
            : [...state.completedLessonIds, lessonId],
        })),
      setLastViewed: (lessonId) => set({ lastViewedLessonId: lessonId }),
      isCompleted: (lessonId) => get().completedLessonIds.includes(lessonId),
    }),
    { name: 'kensetu-elearning-progress' }
  )
);
