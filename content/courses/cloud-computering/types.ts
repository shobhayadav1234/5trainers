export interface CourseContent {
  slug: string;


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
      icon: string;
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

  batches: {
    heading: string;
    subHeading: string;
    items: {
      id: number;
      date: string;
      month: string;
      courseName: string;
      description: string;
      type: string;
      schedule: string;
      timing: string;
      duration: string;
      instructor: {
        name: string;
        role: string;
        initials: string;
      };
      seatsLeft: number;
      colorTheme?: string; // Optional for UI colors
    }[];
  };
  placementSection: {
    badge: string;

    title: {
      line1: string;
      highlight: string;
    };

    description: string;

    extraDescription: string;

    rating: {
      academyName: string;
      value: string;
      reviewText: string;
    };

    actionButtons: {
      title: string;
      icon: string;
      url?: string;
    }[];

    marketStats: {
      title: string;
      value: string;
    }[];

    form: {
      heading: string;
      description: string;
      buttonText: string;
    };
  };

  // TOP PLACEMENTS SECTION
  // =========================
  topPlacements: {
    badge: string;

    title: {
      normal: string;
      highlight: string;
    };

    description: string;

    items: {
      id: number;
      name: string;
      role: string;
      company: string;
      package: string;
      experience: string;
      year: string;
      image: string;
    }[];
  };

  relatedCourses?: {
    title: string;
    image: string;
    duration: string;
    rating: string;
    reviews: string;
    description: string;
    tag: string;
  }[];

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