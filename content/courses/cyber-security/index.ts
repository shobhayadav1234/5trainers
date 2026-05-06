import { CourseContent } from "./types";
import cyberSecurityGenAI from "./cyber-security-training";
import diplomaInCyberSecurity from "./diploma-in-cybersecurity";
import computerNetworkingCyberSecurity from "./computer-networking-cyber-security-course";
import diplomaEthicalHackingCyberSecurity from "./diploma-in-ethical-hacking-cyber-security";

const cyberSecurityCourses: Record<string, CourseContent> = {
  "cyber-security-training": cyberSecurityGenAI,
  "diploma-in-cybersecurity": diplomaInCyberSecurity,
  "computer-networking-cyber-security-course": computerNetworkingCyberSecurity,
  "diploma-in-ethical-hacking-cyber-security": diplomaEthicalHackingCyberSecurity,
};

export default cyberSecurityCourses;