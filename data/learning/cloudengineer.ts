export const cloudEngineerContent = [
  {
    id: "cloud-1",
    title: "Cloud Engineering Mastery",
    content: "Cloud Engineering me applications aur infrastructure ko internet (cloud) par design, deploy aur manage kiya jata hai.",

    chapters: [

      // 🔰 INTRO
      {
        name: "Introduction to Cloud Computing",
        theory: `
Cloud computing ka matlab hai internet ke through servers, storage aur services use karna.

Traditional:
Local server

Cloud:
Remote server (AWS, Azure, GCP)

Benefits:
- Cost effective
- Scalable
- Flexible
        `,
        practical: `
Example:
Google Drive → cloud storage
        `,
        code: `// Cloud = Remote resources`,
        explanation: `
Cloud physical hardware ki dependency kam karta hai.
`
      },

      // ☁️ CLOUD TYPES
      {
        name: "Types of Cloud",
        theory: `
Cloud types:

1. Public Cloud
→ AWS, Azure

2. Private Cloud
→ Company internal

3. Hybrid Cloud
→ Mix of both
        `,
        practical: `
Example:
Company ka private + AWS public
        `,
        code: `// Hybrid cloud architecture`,
        explanation: `
Different use cases ke liye different cloud types.
`
      },

      // 🧱 SERVICE MODELS
      {
        name: "Cloud Service Models",
        theory: `
Cloud service types:

1. IaaS → Infrastructure
2. PaaS → Platform
3. SaaS → Software

Example:
AWS EC2 → IaaS
Google Docs → SaaS
        `,
        practical: `
Identify service type
        `,
        code: `// SaaS → Gmail`,
        explanation: `
Service model samajhna important hai.
`
      },

      // ☁️ AWS BASICS
      {
        name: "AWS Basics",
        theory: `
AWS sabse popular cloud platform hai.

Services:
- EC2 → server
- S3 → storage
- RDS → database
        `,
        practical: `
AWS CLI:
        `,
        code: `aws ec2 describe-instances`,
        explanation: `
AWS cloud ka backbone hai.
`
      },

      // 🖥️ EC2
      {
        name: "EC2 (Virtual Servers)",
        theory: `
EC2 virtual machines provide karta hai.

Use:
- App hosting
- Backend server
        `,
        practical: `
Instance create karo
        `,
        code: `ssh ec2-user@ip-address`,
        explanation: `
EC2 server jaisa behave karta hai.
`
      },

      // 📦 S3
      {
        name: "S3 (Storage)",
        theory: `
S3 object storage hai.

Use:
- File storage
- Backup
        `,
        practical: `
Upload file
        `,
        code: `aws s3 cp file.txt s3://bucket`,
        explanation: `
S3 scalable storage provide karta hai.
`
      },

      // 🗄️ DATABASE
      {
        name: "Cloud Databases",
        theory: `
Cloud DB services:

- RDS (SQL)
- DynamoDB (NoSQL)
        `,
        practical: `
Connect DB
        `,
        code: `SELECT * FROM users;`,
        explanation: `
Database cloud me manage hota hai.
`
      },

      // 🌐 NETWORKING
      {
        name: "Cloud Networking",
        theory: `
Networking components:

- VPC
- Subnet
- Security Group
        `,
        practical: `
Create VPC
        `,
        code: `aws ec2 create-vpc`,
        explanation: `
VPC cloud ka private network hota hai.
`
      },

      // 🔐 SECURITY
      {
        name: "Cloud Security",
        theory: `
Security important hai:

- IAM (Identity Access)
- Encryption
- Firewalls
        `,
        practical: `
Create IAM user
        `,
        code: `aws iam create-user`,
        explanation: `
Access control secure karta hai system.
`
      },

      // ⚖️ LOAD BALANCER
      {
        name: "Load Balancing",
        theory: `
Traffic multiple servers me distribute hota hai.

Benefit:
- High availability
        `,
        practical: `
Setup load balancer
        `,
        code: `aws elb create-load-balancer`,
        explanation: `
Server overload avoid hota hai.
`
      },

      // 📈 AUTO SCALING
      {
        name: "Auto Scaling",
        theory: `
Traffic ke hisaab se servers increase/decrease hote hain.
        `,
        practical: `
Enable auto scaling
        `,
        code: `aws autoscaling create-group`,
        explanation: `
Cost optimize hota hai.
`
      },

      // 🐳 DOCKER
      {
        name: "Docker in Cloud",
        theory: `
Docker containers cloud me run hote hain.

Use:
- App packaging
        `,
        practical: `
Run container
        `,
        code: `docker run nginx`,
        explanation: `
Portable apps create hote hain.
`
      },

      // ☸️ KUBERNETES
      {
        name: "Kubernetes in Cloud",
        theory: `
Kubernetes containers manage karta hai.

Services:
- EKS (AWS)
        `,
        practical: `
Get pods
        `,
        code: `kubectl get pods`,
        explanation: `
Scaling aur orchestration hota hai.
`
      },

      // 🔄 CI/CD
      {
        name: "CI/CD in Cloud",
        theory: `
Automation pipeline:

Code → Build → Deploy
        `,
        practical: `
Pipeline:
        `,
        code: `// CI/CD pipeline`,
        explanation: `
Deployment fast ho jata hai.
`
      },

      // 🏗️ IaC
      {
        name: "Infrastructure as Code",
        theory: `
Infra code se manage hota hai.

Tools:
- Terraform
        `,
        practical: `
Example:
        `,
        code: `resource "aws_instance" "web" {}`,
        explanation: `
Automation improve hota hai.
`
      },

      // 📊 MONITORING
      {
        name: "Monitoring & Logging",
        theory: `
Cloud monitoring:

- CloudWatch
- Logs
        `,
        practical: `
Check logs
        `,
        code: `aws logs describe-log-groups`,
        explanation: `
Issues detect hote hain.
`
      },

      // 🚀 DEPLOYMENT
      {
        name: "Deployment Strategies",
        theory: `
Deployment types:

- Blue-Green
- Rolling
        `,
        practical: `
Deploy app
        `,
        code: `npm run build`,
        explanation: `
Zero downtime possible hai.
`
      },

      // 💼 PROJECTS
      {
        name: "Cloud Projects",
        theory: `
Projects:

1. Deploy website on AWS
2. S3 file hosting
3. Kubernetes cluster
4. CI/CD pipeline
        `,
        practical: `
Mini project:
React app deploy on S3
        `,
        code: `aws s3 sync build/ s3://bucket`,
        explanation: `
Hands-on sabse important hai.
`
      },

      // 💰 CAREER
      {
        name: "Career & Salary",
        theory: `
Roles:
- Cloud Engineer
- Cloud Architect
- DevOps Engineer

Salary:
High demand 💰
        `,
        practical: `
Start with:
AWS + Docker
        `,
        code: `// Skills = Job`,
        explanation: `
Cloud future hai 🔥
`
      }

    ]
  }
];