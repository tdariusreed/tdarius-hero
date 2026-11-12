export interface Project {
  name: string;
  /** One line, in the site's serif voice. */
  kind: string;
  /** Two sentences at most. Every figure here comes from the project's own code or output. */
  body: string;
  stack: string[];
  when: string;
}


export const BUILDS: Project[] = [
  {
    name: "educommAI",
    kind: "A career-planning assistant for students and the adults helping them.",
    body:
      "Questions go to specialist agents that search the web in parallel and come back with careers, scholarships, a checklist, and a month-by-month plan. Every link comes from a real search result, deadlines appear only when a source states them, and it runs offline without a language model.",
    stack: ["Python", "Streamlit", "SQLite", "Ollama", "pytest"],
    when: "November 2026",
  },
  {
    name: "Login & Register",
    kind: "An account system, built from the ground up.",
    body:
      "A sign-up and sign-in flow in PHP and MySQL. Passwords are stored as hashes, sessions keep you signed in, and admin and user accounts land on different pages.",
    stack: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    when: "October 2026",
  },
];

/** Assignments from Machine Learning Analytics. */
export const CLASSWORK: Project[] = [
  {
    name: "Souvenir sales",
    kind: "Three ways to forecast a year of sales.",
    body:
      "A seasonal average, a trend-plus-seasonality regression, and Holt-Winters, each tested on 12 held-out months. Holt-Winters landed closest, with an error of 2,385 against 17,452 and 24,100.",
    stack: ["Python", "statsmodels", "Pandas"],
    when: "Fall 2026",
  },
  {
    name: "System admins",
    kind: "Who finishes the task?",
    body:
      "A logistic regression on 75 records. Experience was a significant predictor and training was not. Moving the cutoff between 0.3, 0.5, and 0.7 traded false negatives for false positives.",
    stack: ["Python", "statsmodels", "scikit-learn"],
    when: "Fall 2026",
  },
  {
    name: "eBay auctions",
    kind: "Which auctions draw competition?",
    body:
      "A decision tree on a 60/40 split. A second model leaves out the closing price, which isn’t known until the auction ends, so the answer can’t leak into the question.",
    stack: ["Python", "scikit-learn", "Pandas"],
    when: "Fall 2026",
  },
  {
    name: "Airfares",
    kind: "Predicting fares on new routes.",
    body:
      "A full regression and a backward-eliminated one on a 60/40 split, compared by RMSE and adjusted R².",
    stack: ["Python", "statsmodels", "Pandas"],
    when: "Fall 2026",
  },
];
