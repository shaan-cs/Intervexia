export const devopsEngineerContent = [
  {
    id: "devops-1",
    title: "DevOps Engineering Mastery",
    content: "DevOps development aur operations ko combine karta hai jisse software fast, reliable aur automated tarike se deliver hota hai.",

    chapters: [

      // 🔰 INTRO
      {
        name: "Introduction to DevOps",
        theory: `
DevOps ka matlab hai Development + Operations.

Goal:
- Faster delivery
- Automation
- Collaboration

Traditional:
Dev → Test → Deploy (slow)

DevOps:
Continuous integration + continuous delivery
        `,
        practical: `
Real example:
Code push → Auto test → Auto deploy
        `,
        code: `// DevOps pipeline idea
code → build → test → deploy`,
        explanation: `
DevOps software delivery ko fast aur reliable banata hai.
`
      },

      // 🔁 DEVOPS LIFECYCLE
      {
        name: "DevOps Lifecycle",
        theory: `
DevOps lifecycle:

1. Plan
2. Develop
3. Build
4. Test
5. Release
6. Deploy
7. Operate
8. Monitor
        `,
        practical: `
Use tools like:
Jira → planning
Git → code
Jenkins → CI/CD
        `,
        code: `// Lifecycle loop`,
        explanation: `
Ye cycle continuously repeat hoti hai.
`
      },

      // 🧰 VERSION CONTROL
      {
        name: "Version Control (Git)",
        theory: `
Git code track karta hai aur team collaboration easy banata hai.

Concepts:
- Repo
- Commit
- Branch
        `,
        practical: `
Commands:
        `,
        code: `git clone repo
git branch feature
git merge main`,
        explanation: `
Git DevOps ka base tool hai.
`
      },

      // ⚙️ CI/CD
      {
        name: "CI/CD (Continuous Integration & Delivery)",
        theory: `
CI:
Code integrate + test

CD:
Auto deploy

Benefit:
- Fast updates
- Less errors
        `,
        practical: `
Jenkins pipeline example:
        `,
        code: `pipeline {
  stages {
    stage('Build') {
      steps { echo 'Building...' }
    }
  }
}`,
        explanation: `
CI/CD automation ka heart hai.
`
      },

      // 🐳 DOCKER
      {
        name: "Docker (Containerization)",
        theory: `
Docker app ko container me run karta hai.

Benefit:
- Same environment everywhere
- Lightweight
        `,
        practical: `
Run container:
        `,
        code: `docker run -d -p 3000:3000 node-app`,
        explanation: `
Docker app ko portable banata hai.
`
      },

      // 📦 DOCKERFILE
      {
        name: "Dockerfile",
        theory: `
Dockerfile instructions deta hai container build ke liye.
        `,
        practical: `
Example:
        `,
        code: `FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm","start"]`,
        explanation: `
Image build karke container run hota hai.
`
      },

      // ☸️ KUBERNETES
      {
        name: "Kubernetes (Container Orchestration)",
        theory: `
Kubernetes multiple containers manage karta hai.

Use:
- Scaling
- Load balancing
        `,
        practical: `
Basic command:
        `,
        code: `kubectl get pods`,
        explanation: `
Pods running containers ko represent karte hain.
`
      },

      // ☁️ CLOUD
      {
        name: "Cloud Computing (AWS, Azure, GCP)",
        theory: `
Cloud me servers host karte hain.

Services:
- EC2
- S3
- Lambda
        `,
        practical: `
AWS CLI:
        `,
        code: `aws ec2 describe-instances`,
        explanation: `
Cloud DevOps ka backbone hai.
`
      },

      // 🏗️ INFRASTRUCTURE AS CODE
      {
        name: "Infrastructure as Code (IaC)",
        theory: `
IaC me infra code se manage hota hai.

Tools:
- Terraform
- Ansible
        `,
        practical: `
Terraform example:
        `,
        code: `resource "aws_instance" "app" {
  ami = "ami-123"
}`,
        explanation: `
Manual setup ki jagah automation hota hai.
`
      },

      // 🔐 SECURITY
      {
        name: "DevSecOps (Security in DevOps)",
        theory: `
Security ko DevOps me integrate karte hain.

Concept:
Shift Left Security
        `,
        practical: `
Scan code:
        `,
        code: `npm audit`,
        explanation: `
Security har stage me check hoti hai.
`
      },

      // 📊 MONITORING
      {
        name: "Monitoring & Logging",
        theory: `
App performance track karna important hai.

Tools:
- Prometheus
- Grafana
- ELK Stack
        `,
        practical: `
Check logs:
        `,
        code: `docker logs container_id`,
        explanation: `
Monitoring issues detect karta hai.
`
      },

      // 🚀 DEPLOYMENT
      {
        name: "Deployment Strategies",
        theory: `
Deployment types:

- Blue-Green
- Rolling
- Canary
        `,
        practical: `
Rolling update:
        `,
        code: `kubectl rollout restart deployment app`,
        explanation: `
Zero downtime deployment possible hota hai.
`
      },

      // 🔄 AUTOMATION
      {
        name: "Automation in DevOps",
        theory: `
Automation repetitive tasks ko remove karta hai.

Examples:
- Testing automation
- Deployment automation
        `,
        practical: `
Script:
        `,
        code: `#!/bin/bash
npm install
npm start`,
        explanation: `
Automation time save karta hai.
`
      },

      // 📦 ARTIFACTS
      {
        name: "Artifact Management",
        theory: `
Build files ko store karna.

Tools:
- Nexus
- Artifactory
        `,
        practical: `
Upload artifact
        `,
        code: `// artifact storage`,
        explanation: `
Version control for builds.
`
      },

      // 🌐 NETWORKING
      {
        name: "DevOps Networking Basics",
        theory: `
DevOps me networking bhi important hai:

- Load balancer
- Reverse proxy
        `,
        practical: `
Nginx config:
        `,
        code: `server {
  listen 80;
}`,
        explanation: `
Traffic manage hota hai.
`
      },

      // 💼 PROJECTS
      {
        name: "DevOps Projects",
        theory: `
Practice ke liye:

1. CI/CD pipeline
2. Dockerize app
3. Deploy on AWS
4. Kubernetes cluster
        `,
        practical: `
Mini project:
Node app → Docker → Deploy
        `,
        code: `docker build -t app .`,
        explanation: `
Hands-on = DevOps mastery
`
      },

      // 💰 CAREER
      {
        name: "DevOps Career & Salary",
        theory: `
DevOps demand high hai.

Roles:
- DevOps Engineer
- SRE
- Cloud Engineer

Salary:
High growth field 💰
        `,
        practical: `
Start with:
Git + Docker + CI/CD
        `,
        code: `// Skills = Job`,
        explanation: `
DevOps fastest growing career hai.
`
      }

    ]
  }
];