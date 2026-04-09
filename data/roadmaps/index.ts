// src/data/roadmaps/index.ts

import { frontendRoadmap } from './frontend';
import { cybersecurityRoadmap } from './cybersecurity';
import { backendRoadmap } from './backend';
import { fullStackDeveloperRoadmap } from './fullstackdeveloper';
import { networkEngineerRoadmap } from './networkengineer';
import { devopsEngineerRoadmap } from './devopsengineer';
import { dataAnalystRoadmap } from './dataanalyst';
import { mlEngineerRoadmap } from './mlengineer';
import { cloudEngineerRoadmap } from './cloudengineer';

export const roadmapRegistry: Record<string, any> = {
  "Frontend Developer": frontendRoadmap,
  "Cyber Security Analyst": cybersecurityRoadmap,
  "Backend Developer": backendRoadmap,
  "Full Stack Developer": fullStackDeveloperRoadmap,
  "Network Engineer": networkEngineerRoadmap,
  "DevOps Engineer": devopsEngineerRoadmap,
  "Data Analyst": dataAnalystRoadmap,
  "Machine Learning Engineer": mlEngineerRoadmap,
  "Cloud Engineer": cloudEngineerRoadmap
};