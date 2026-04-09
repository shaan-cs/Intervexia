export const backendContent = [
  {
    id: "be-1",
    title: "Backend Development Fundamentals",
    content: "Backend development server-side logic, database aur APIs handle karta hai jo frontend ko power deta hai.",
    
    chapters: [

      // 1️⃣ Web Server
      {
        name: "Web Server (Basic Understanding)",
        theory: `
Web server ek software hota hai jo client (browser) ki request ko handle karta hai aur response bhejta hai.

Simple flow:
User → Request (HTTP) → Server → Response (HTML/JSON)

Popular Web Servers:
- Apache
- NGINX

Backend dev ka kaam hota hai ensure karna ki server fast aur secure response de.
        `,
        practical: `
Try karo:
Browser me koi bhi website open karo → Network tab me jao → request/response dekho
        `,
        code: `GET /index.html HTTP/1.1
Host: example.com`,
        explanation: `
Yeh ek basic HTTP request hai jo browser server ko bhejta hai.
`
      },

      // 2️⃣ Programming Languages
      {
        name: "Backend Programming Languages",
        theory: `
Backend me tum multiple languages use kar sakte ho.

Most popular combinations:

1. JavaScript + Node.js
→ Fast, async, modern apps

2. Python + Django
→ Simple aur secure apps

3. PHP + Laravel
→ Traditional web apps

4. Java + Spring Boot
→ Enterprise level apps
        `,
        practical: `
Start with:
Node.js + Express (Best for beginners)
        `,
        code: `// Node.js basic example
console.log("Backend running...");`,
        explanation: `
Node.js tumhe JavaScript ko backend me run karne deta hai.
`
      },

      // 3️⃣ Git Version Control
      {
        name: "Version Control (Git & GitHub)",
        theory: `
Git ek tool hai jo code changes ko track karta hai.

Kyu important hai?
- Code history maintain hoti hai
- Team collaboration easy hota hai
- Backup milta hai

GitHub → cloud platform jaha code store hota hai
        `,
        practical: `
Basic commands:

git init
git add .
git commit -m "first commit"
        `,
        code: `git push origin main`,
        explanation: `
Yeh command code ko GitHub par upload karti hai.
`
      },

      // 4️⃣ Web Security
      {
        name: "Web Security Basics",
        theory: `
Backend me security bahut important hai.

Common attacks:
- SQL Injection
- XSS
- Data theft

Security techniques:

1. HTTPS
→ Data encrypted hota hai

2. Authentication
→ User verify hota hai

3. Data Validation
→ Galat input block hota hai
        `,
        practical: `
Example:
User input ko validate karo before DB insert
        `,
        code: `if (!email.includes("@")) {
  return res.send("Invalid email");
}`,
        explanation: `
Yeh simple validation hai jo wrong data ko rokta hai.
`
      },

      // 5️⃣ APIs
      {
        name: "APIs (Application Programming Interface)",
        theory: `
API ek bridge hota hai frontend aur backend ke beech.

Frontend → request bhejta hai
Backend → data return karta hai

Types:
- REST (most used)
- GraphQL
- SOAP
        `,
        practical: `
Simple API example:
        `,
        code: `app.get("/api/users",
         (req, res) => {
  res.json([{ name: "Shaan" }]);
});`,
        explanation: `
Frontend is API ko call karega aur data receive karega.
`
      },

      // 6️⃣ Database
      {
        name: "Database (Data Storage)",
        theory: `
Database me data store hota hai.

Types:

1. SQL (Structured)
- MySQL
- PostgreSQL

2. NoSQL (Flexible)
- MongoDB
- Redis
        `,
        practical: `
MongoDB connect example:
        `,
        code: `mongoose.connect
("mongodb://localhost:27017/testDB")`,
        explanation: `
Yeh database connection establish karta hai.
`
      },

      // 7️⃣ Containerization
      {
        name: "Docker & Containerization",
        theory: `
Containerization ka matlab hai app ko ek isolated environment me run karna.

Tools:
- Docker
- Kubernetes

Benefit:
→ App har system me same chalega
        `,
        practical: `
Docker install karo aur simple container run karo
        `,
        code: `docker run hello-world`,
        explanation: `
Yeh check karta hai Docker properly install hai ya nahi.
`
      },

      // 8️⃣ Deployment
      {
        name: "Deployment Process",
        theory: `
Deployment ka matlab hai app ko live karna.

Steps:
1. Planning
2. Development
3. Testing
4. Deploy
5. Monitoring

Live hone ke baad bhi monitoring important hai.
        `,
        practical: `
Deploy on:
- Vercel
- Render
- AWS
        `,
        code: `npm run build`,
        explanation: `
Yeh production build create karta hai.
`
      },

      // 9️⃣ Cloud
      {
        name: "Cloud Computing",
        theory: `
Cloud ka matlab hai internet ke through servers use karna.

Types:
- SaaS
- PaaS
- IaaS

Popular platforms:
- AWS
- Azure
- Google Cloud
        `,
        practical: `
Free tier AWS try karo
        `,
        code: `aws configure`,
        explanation: `
Yeh AWS setup ke liye use hota hai.
`
      },

      // 🔟 Backend Frameworks
      {
        name: "Backend Frameworks",
        theory: `
Frameworks development fast aur structured bana dete hain.

Popular frameworks:

- Express (Node.js)
- Django (Python)
- Laravel (PHP)
- Spring Boot (Java)
        `,
        practical: `
Express use karke server banao
        `,
        code: `const express = require("express");
const app = express();`,
        explanation: `
Express sabse easy aur popular backend framework hai beginners ke liye.
`
      },

      // 💡 Benefits
      {
        name: "Benefits of Backend Development",
        theory: `
Backend development ke major benefits:

- Data management
- Business logic handling
- API creation
- Scalability
- Performance optimization
        `,
        practical: `Real-world apps:
- Instagram
- Amazon
- WhatsApp`,
        code: `// Backend = Brain of application`,
        explanation: `
Frontend UI hota hai, backend brain hota hai.
`
      },

      // 🚀 Projects
      {
        name: "Backend Projects (Must Build)",
        theory: `
Practice ke liye projects bahut important hain.

Start with:
1. Contact Form API
2. User Authentication System
3. Chat App (Socket.io)
4. File Upload System
5. Job Portal API
        `,
        practical: `
Mini project:
User login system banao with JWT
        `,
        code: `// JWT example
jwt.sign({ userId: 1 }, "secretKey");`,
        explanation: `
JWT authentication real-world apps me use hota hai.
`
      }

    ]
  }
];