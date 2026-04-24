export interface CourseContent {
  slug: string;

  hero: {
    title: string;
    description: string;
    image: string;
    category: string;
  };

  write: {
    courseName: string;
    aboutTitle: string;
    aboutPara1: string;
    aboutPara2: string;
    aboutPara3: string;
    learningObjectives: string[];
    requirements: string[];
    modules: string[];
  };

  move: {
    titleLine1: string;
    titleLine2: string;
    description: string;
  };

 training: {
  heading: string;
  subHeading: string;
  trainingModes: {
    title: string;
    icon: string; // ✅ ADD THIS
    description: string;
  }[];
  targetAudience: string[];
};

  book: {
    title: string;
    paragraphs: string[];
    highlights: {
      title: string;
      desc: string;
    }[];
  };

  faq: {
    title: string;
    faqs: {
      question: string;
      answer: string;
    }[];
  };

  testimonials: {
    title: string;
    items: {
      name: string;
      review: string;
    }[];
  };
}