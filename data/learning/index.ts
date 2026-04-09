import { frontendContent } from './frontend';
import { backendContent } from './backend';
import { cyberContent } from './cybersecurity';
import { fullstackContent } from './fullstackdeveloper';
import { networkEngineerContent } from './networkengineer';
import { devopsEngineerContent } from './devopsengineer';
import { dataAnalystContent } from './dataanalyst';
import { mlEngineerContent } from './mlengineer';
import { cloudEngineerContent } from './cloudengineer';


export const learningRegistry: Record<string, any> = {
  "Frontend Developer": frontendContent,
  "Backend Developer": backendContent,
  "Cybersecurity Specialist": cyberContent,
  "Full Stack Developer": fullstackContent,
  "Network Engineer": networkEngineerContent,
  "DevOps Engineer": devopsEngineerContent,
  "Data Analyst": dataAnalystContent,
  "Machine Learning Engineer": mlEngineerContent,
  "Cloud Engineer": cloudEngineerContent
  
};