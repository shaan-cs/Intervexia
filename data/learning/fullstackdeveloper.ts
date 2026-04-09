export const fullstackContent = [
  {
    id: "fs-1",
    title: "Full Stack Development Mastery",
    content: "Full Stack Development ka matlab hota hai frontend + backend + database sab handle karna (end-to-end app development).",

    chapters: [

      // 🔰 Introduction
      {
        name: "Introduction to Full Stack Development",
        theory: `
Full Stack Developer wo hota hai jo complete web application bana sakta hai.

Includes:
- Frontend (UI)
- Backend (Logic)
- Database (Data storage)

Simple flow:
User → Frontend → Backend → Database → Response
        `,
        practical: `
Ek simple app socho:
Login page → API → Database → Response
        `,
        code: `// Full stack flow
Frontend → API → Server → DB`,
        explanation: `
Full stack developer har layer ko samajhta hai.
`
      },

      // 🎨 Frontend
      {
        name: "Frontend Development (Client Side)",
        theory: `
Frontend wo part hai jo user dekhta hai.

Technologies:
- HTML (structure)
- CSS (design)
- JavaScript (logic)

Frameworks:
- React
- Angular
- Vue
        `,
        practical: `
React app create karo:
        `,
        code: `npx create-react-app myApp`,
        explanation: `
Frontend user experience ka main part hai.
`
      },

      // ⚙️ Backend
      {
        name: "Backend Development (Server Side)",
        theory: `
Backend server-side logic handle karta hai.

Kaam:
- API banana
- Data process karna
- Authentication

Technologies:
- Node.js
- Django
- Spring Boot
        `,
        practical: `
Express server:
        `,
        code: `app.get("/api", (req, res) => {
  res.send("Hello Backend");
});`,
        explanation: `
Backend frontend ko data provide karta hai.
`
      },

      // 💾 Database
      {
        name: "Database Management",
        theory: `
Database me data store hota hai.

Types:

SQL:
- MySQL
- PostgreSQL

NoSQL:
- MongoDB
        `,
        practical: `
MongoDB connect:
        `,
        code: `mongoose.connect("mongodb://localhost:27017/app");`,
        explanation: `
Database bina app useless hai.
`
      },

      // 🔗 API Integration
      {
        name: "API & Client-Server Communication",
        theory: `
Frontend aur backend API ke through communicate karte hain.

Types:
- REST API
- GraphQL

Data format:
- JSON
        `,
        practical: `
Fetch API:
        `,
        code: `fetch("/api/data")
  .then(res => res.json())
  .then(data => console.log(data));`,
        explanation: `
API full stack apps ka backbone hai.
`
      },

      // 🔄 Full Flow
      {
        name: "Complete Full Stack Flow",
        theory: `
Full stack flow:

1. User request karta hai
2. Frontend request bhejta hai
3. Backend process karta hai
4. Database se data fetch hota hai
5. Response frontend ko milta hai
        `,
        practical: `
Login system example
        `,
        code: `POST /login → validate → DB → response`,
        explanation: `
Ye real-world application flow hai.
`
      },

      // 📦 Tools
      {
        name: "Development Tools",
        theory: `
Full stack dev ko tools ka knowledge hona zaruri hai.

Tools:
- VS Code
- Git & GitHub
- Postman
- Chrome DevTools
        `,
        practical: `
Git commands:
        `,
        code: `git init
git add .
git commit -m "init"`,
        explanation: `
Tools development fast aur efficient banate hain.
`
      },

      // 📚 Package Managers
      {
        name: "Package Managers & Build Tools",
        theory: `
Dependencies manage karne ke liye:

- npm
- yarn

Use:
Libraries install karna
        `,
        practical: `
Install package:
        `,
        code: `npm install express`,
        explanation: `
Package managers bina project manage nahi hota.
`
      },

      // 🔐 Security
      {
        name: "Full Stack Security",
        theory: `
Security har layer me important hai.

Frontend:
- XSS protection

Backend:
- Authentication (JWT)

Database:
- Encryption
        `,
        practical: `
JWT example:
        `,
        code: `jwt.sign({ id: 1 }, "secret");`,
        explanation: `
Security ignore kiya toh app hack ho jayega ❌
`
      },

      // 🚀 Deployment
      {
        name: "Deployment & Hosting",
        theory: `
App ko live karna = deployment

Platforms:
- Vercel (frontend)
- Render / Railway (backend)
- AWS
        `,
        practical: `
Build project:
        `,
        code: `npm run build`,
        explanation: `
Deployment ke baad app public ho jata hai.
`
      },

      // ☁️ Stacks
      {
        name: "Popular Full Stack Stacks",
        theory: `
Popular stacks:

MERN:
- MongoDB
- Express
- React
- Node

MEAN:
- MongoDB
- Angular
- Node

LAMP:
- Linux
- Apache
- MySQL
- PHP
        `,
        practical: `
MERN best for beginners
        `,
        code: `// MERN stack flow`,
        explanation: `
Stack choose karna career ke liye important hai.
`
      },

      // ⚡ Performance
      {
        name: "Performance Optimization",
        theory: `
Fast app banana important hai.

Techniques:
- Caching
- Lazy loading
- DB optimization
        `,
        practical: `
Use caching:
        `,
        code: `cache.set("data", result);`,
        explanation: `
Performance = better user experience
`
      },

      // 💼 Projects
      {
        name: "Full Stack Projects",
        theory: `
Strong portfolio ke liye projects:

1. E-commerce website
2. Chat app (real-time)
3. Job portal
4. Social media app
5. LMS platform
        `,
        practical: `
Start with:
Auth + Dashboard app
        `,
        code: `// Build → Deploy → Showcase`,
        explanation: `
Projects = placement key 🔥
`
      }

    ]
  }
];