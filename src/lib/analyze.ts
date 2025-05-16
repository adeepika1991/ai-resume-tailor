// lib/api/analyze.ts
export type AnalyzeRequest = {
    resume: string;
    jobDescription: string;
    tones?: string[];
  };
  
  export type AnalyzeResponse = {
    result: string;
  };
  
  // Simulated response (replace with your full cached result)
  const mockResult: AnalyzeResponse = {
    result: "## Resume Match Score: 60\n\n---\n\n## Key Adjustments for the Job Description\n\n### 1. Professional Summary\n**Before:**\nFrontend specialist with 6.5 years of experience delivering scalable, secure, and high-performance web applications. While deeply focused on UI architecture and user experience, I also bring full-stack exposure across Node.js, Express, Docker, and CI/CD pipelines. Proven ability to modernize legacy systems, improve application security, and enhance developer experience through component reuse, testing, and streamlined tooling.\n\n**After:**\nHighly motivated frontend specialist with 6.5 years of experience in building scalable, secure, and high-performance web applications using JavaScript and modern frameworks. Proficient in full-stack development with expertise in Ember.js, React.js, and Node.js. A strong believer in delivering quality software that solves problems, with a passion for collaborating closely with users, designers, and testers.\n\n**Why:**\nThe original summary is too focused on the candidate's technical skills and doesn't directly address the job requirements. The revised summary highlights the candidate's experience in building web applications, full-stack development, and collaboration skills, which are more relevant to the job description.\n\n### 2. Work Experience\n**Before:**\n(No significant changes needed, but some experience sections can be reorganized to better match the job description)\n\n**After:**\nReorganized experience sections to focus on relevant job requirements, such as:\n- Senior Software Engineer, Enlighted Inc: \"Improved application security by integrating Cypress for automated E2E testing and SonarQube for static code analysis, enabling faster and safer releases\"\n- Senior Software Engineer, Zuci Systems: \"Reduced page load time from 4.2s to 2.1s by transitioning from cookie-based routing to router-based navigation and applying code splitting, lazy loading, and memoization\"\n\n**Why:**\nThe original experience sections are not clearly aligned with the job requirements. The revised sections focus on the candidate's relevant experience and accomplishments, such as improving application security, reducing page load time, and enhancing developer experience.\n\n### 3. Technical Skills\n**Before:**\nLong list of technical skills, including some that are not relevant to the job description\n\n**After:**\nRelevant technical skills section, including:\n- JavaScript (ES6+)\n- Ember.js\n- React.js\n- Node.js\n- HTML5\n- CSS3\n- Git\n- Agile Methodology\n- Docker\n- testing frameworks (e.g. Cypress, Jest)\n\n**Why:**\nThe original technical skills section is too lengthy and includes some skills that are not relevant to the job description. The revised section focuses on the most relevant skills, including JavaScript, modern frameworks, and testing frameworks.\n\n### 4. Education\n**Before:**\nNo significant changes needed\n\n**After:**\nNo changes needed, but consider adding relevant coursework or certifications\n\n**Why:**\nThe original education section is sufficient, but consider adding relevant coursework or certifications to further demonstrate the candidate's qualifications.\n\n### 5. Projects (optional)\n**Before:**\nNo projects section\n\n**After:**\nConsider adding a projects section to demonstrate relevant experience and accomplishments, such as:\n- Open-source contributions\n- Personal projects that showcase web application building skills\n\n**Why:**\nA projects section can help demonstrate the candidate's relevant experience and accomplishments, such as open-source contributions or personal projects that showcase web application building skills.\n\n---\n\n## Final Tips\n- Ensure typos and formatting are correct throughout the resume.\n- Consider ordering the experience sections to focus on the most relevant job requirements.\n- Use keywords from the job description throughout the resume to demonstrate relevance and enthusiasm for the position."
  };
  
  export const analyzeResume = async (
    data: AnalyzeRequest,
    useMock: boolean = false
  ): Promise<AnalyzeResponse> => {
    if (useMock) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(mockResult);
        }, 10000);
      });
    }
  
    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  
    if (!res.ok) {
      throw new Error("Failed to analyze resume");
    }
  
    return res.json();
  };
  