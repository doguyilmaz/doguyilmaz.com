interface Education {
  institution: string;
  degree: string;
  field: string;
  period: {
    start: string | null;
    end: string | null;
  };
}

export const educationConfig: Education[] = [
  {
    institution: 'Istanbul University',
    degree: "Bachelor's Degree",
    field: 'Computer Engineering',
    period: {
      start: null,
      end: null,
    },
  },
];
