// lib/validate.ts

export const RESUME_LIMITS = { min: 100, max: 5000 };
export const JD_LIMITS = { min: 100, max: 3000 };

export function validateResume(text: string) {
  if (!text || text.trim().length < RESUME_LIMITS.min)
    return `Resume must be at least ${RESUME_LIMITS.min} characters.`;
  if (text.length > RESUME_LIMITS.max)
    return `Resume must be less than ${RESUME_LIMITS.max} characters.`;
  return null;
}

export function validateJD(text: string) {
  if (!text || text.trim().length < JD_LIMITS.min)
    return `Job description must be at least ${JD_LIMITS.min} characters.`;
  if (text.length > JD_LIMITS.max)
    return `Job description must be less than ${JD_LIMITS.max} characters.`;
  return null;
}
