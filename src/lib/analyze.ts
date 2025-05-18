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
    "result": "# Resume Match Score: 80\n\n---\n\n## Key Adjustments for the Job Description\n\n### 1. Professional Summary\n**Before:**\nSenior Software Engineer with 6.5+ years of experience delivering scalable, maintainable full-stack web applications. Specialize in React, TypeScript, and component-driven architecture with full-stack exposure across Node.js, PostgreSQL, Docker, Redis, and CI/CD.\n\n**After:**\nResults-driven Senior Frontend Engineer with 6.5+ years of experience in building scalable, consumer-focused UIs and full-stack products using modern frontend technologies such as React, TypeScript, and HTML/CSS. Proven track record of owning features end-to-end, with a strong emphasis on user experience and collaborative teamwork.\n\n**Why:**\nThe original summary was more focused on technical skills, but the job description emphasizes the importance of building consumer-focused UIs and full-stack products that impact thousands of employees and millions of users. The revised summary highlights the candidate's experience and skills in a more impact-oriented tone.\n\n### 2. Work Experience\n**Before:**\n(No significant changes needed, but some bullet points can be rephrased to match the job description)\n\n**After:**\n(Rephrased bullet points)\n- Revamped legacy frontend into a scalable, modular React architecture, enhancing performance and maintainability for a large-scale energy analytics platform.\n- Designed and implemented a high-performance data layer using React Query, cutting API calls by 60% and improving checkout flow speed by 25% for multiple modules.\n- Collaborated with Product designers to build a reusable component library, reducing UI inconsistencies and accelerating feature delivery by 30%.\n- Secured authentication workflows by applying rate limiting on Login and MFA endpoints, reducing exposure to brute-force and spam attacks.\n\n**Why:**\nThe changes were made to ensure that the work experience section aligns with the job description, highlighting the candidate's ability to build scalable, consumer-focused UIs and full-stack products, and to own features end-to-end.\n\n### 3. Technical Skills\n**Before:**\nFrontend: React, Next.js, TypeScript, Material UI, Figma (prototyping), Jest, Cypress, D3.js, StoryBook, HTML, CSS\nBackend: Node.js, Express, REST APIs, SQL (PostgreSQL), Prisma, Redis\nCloud/DevOps: Docker, CI/CD (Jenkins, Github Actions), SonarQube, Sentry, FullStory\nTools: JIRA, Git, Slack, Notion\n\n**After:**\nFrontend: React, TypeScript, HTML/CSS\nBackend: Node.js, REST APIs, PostgreSQL\nCloud/DevOps: Docker, CI/CD, SonarQube\nTools: JIRA, Git, Slack\n\n**Why:**\nThe original technical skills section was broad and included some unnecessary skills. The revised section focuses on the most relevant skills required for the job, including modern frontend technologies and full-stack skills.\n\n### 4. Education\n**Before:**\nBachelor of Engineering, Electronics and Communication\nAnna University | Relevant coursework: Computer Networks\nDiploma, Programming in Mobile and Web Technologies\nMontreal College of Information and Technology\n\n**After:**\n(No significant changes needed)\n\n**Why:**\nThe education section is not directly related to the job description, but it is still an important section to include.\n\n### 5. Projects\nSince there is no Projects section in the resume, we recommend the following mini-projects based on the domain and tech stack from the job description:\n\n### 1. Stripe Clone\n**Title:**\nBuild a scalable, consumer-focused UI for a payment processing platform using React, TypeScript, and HTML/CSS.\n\n**Tech Stack:**\n`React` `TypeScript` `HTML/CSS` `Node.js` `PostgreSQL`\n\n**Why:**\nThe recommended project is a Stripe clone, which aligns with the job description's requirements for building full-stack products and consumer-focused UIs.\n\n## Final Tips\n- Ensure that the resume is free of typos and formatting errors.\n- Consider adding a summary section that highlights the candidate's most significant achievements and impact.\n- Use action verbs and a consistent tone throughout the resume."
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
  