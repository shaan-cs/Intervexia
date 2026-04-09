export const frontendContent = [
  {
    id: "fe-1",
    title: "Frontend Development Mastery",
    content: "Frontend development user interface (UI) aur user experience (UX) ko handle karta hai jo user directly interact karta hai.",

    chapters: [

      // 🧱 HTML
      {
        name: "HTML (Structure of Web)",
        theory: `
HTML ek markup language hai jo website ka structure banata hai.

Simple words:
HTML = Skeleton of website

Use:
- Headings
- Paragraphs
- Forms
- Tables
        `,
        practical: `
Basic page banao:
        `,
        code: `<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Hello Shaan</h1>
</body>
</html>`,
        explanation: `
HTML bina CSS aur JS ke sirf structure provide karta hai.
`
      },

      // 🧠 Semantic HTML
      {
        name: "Semantic HTML & SEO",
        theory: `
Semantic tags SEO aur accessibility improve karte hain.

Examples:
- <header>
- <main>
- <section>
- <article>

SEO benefit:
Google easily samajh jata hai page structure
        `,
        practical: `
Use proper heading order (H1 → H6)
        `,
        code: `<main>
  <article>
    <h1>Web Dev</h1>
  </article>
</main>`,
        explanation: `
Better SEO + screen readers ke liye helpful.
`
      },

      // 🎨 CSS
      {
        name: "CSS (Styling & Layout)",
        theory: `
CSS website ko beautiful banata hai.

Use:
- Colors
- Fonts
- Layout

CSS = Design of website
        `,
        practical: `
Basic styling:
        `,
        code: `h1 {
  color: blue;
  text-align: center;
}`,
        explanation: `
CSS bina website boring lagegi 😄
`
      },

      // 📐 Layout Systems
      {
        name: "Flexbox & Grid",
        theory: `
Modern layout ke liye 2 main tools:

1. Flexbox → 1D layout
2. Grid → 2D layout

Use:
Responsive design ke liye
        `,
        practical: `
Flex example:
        `,
        code: `.container {
  display: flex;
  justify-content: center;
}`,
        explanation: `
Flexbox items ko easily align karta hai.
`
      },

      // 📱 Responsive Design
      {
        name: "Responsive Web Design",
        theory: `
Website har device me sahi dikhe → responsive design

Techniques:
- Media Queries
- Flexible images
- Grid system
        `,
        practical: `
Example:
        `,
        code: `@media (max-width: 768px) {
  body {
    background: red;
  }
}`,
        explanation: `
Mobile screens ke liye layout change hota hai.
`
      },

      // ⚡ JavaScript
      {
        name: "JavaScript (Logic & Interactivity)",
        theory: `
JavaScript website ko dynamic banata hai.

Use:
- Button click
- Form validation
- API calls
        `,
        practical: `
Click event:
        `,
        code: `button.addEventListener("click", () => {
  alert("Clicked!");
});`,
        explanation: `
JS bina website interactive nahi hoti.
`
      },

      // 🔁 DOM
      {
        name: "DOM Manipulation",
        theory: `
DOM = Document Object Model

JS se HTML ko change kar sakte ho
        `,
        practical: `
Example:
        `,
        code: `document.getElementById("title").innerText = "Updated";`,
        explanation: `
Live content change hota hai browser me.
`
      },

      // 🌐 API
      {
        name: "API Fetching",
        theory: `
Frontend backend se data API ke through leta hai.

Flow:
Frontend → API → Backend → Data
        `,
        practical: `
Fetch example:
        `,
        code: `fetch("https://api.com/data")
  .then(res => res.json())
  .then(data => console.log(data));`,
        explanation: `
Real apps API ke bina nahi chalti.
`
      },

      // ⚛️ React
      {
        name: "React.js (Modern Frontend)",
        theory: `
React ek popular JS library hai.

Features:
- Components
- Reusability
- Fast (Virtual DOM)
        `,
        practical: `
Component example:
        `,
        code: `function App() {
  return <h1>Hello React</h1>;
}`,
        explanation: `
React me UI components me divide hota hai.
`
      },

      // 🧠 State
      {
        name: "State Management",
        theory: `
State = data jo UI control karta hai

React me:
useState hook use hota hai
        `,
        practical: `
Example:
        `,
        code: `const [count, setCount] = useState(0);`,
        explanation: `
State change → UI update
`
      },

      // 🎨 Tailwind
      {
        name: "Tailwind CSS",
        theory: `
Tailwind utility-first CSS framework hai.

Benefit:
- Fast styling
- No custom CSS needed
        `,
        practical: `
Example:
        `,
        code: `<button class="bg-blue-500 text-white p-2">Click</button>`,
        explanation: `
Direct HTML me styling likh sakte ho.
`
      },

      // 🔥 Frameworks
      {
        name: "Frontend Frameworks Overview",
        theory: `
Popular frameworks:

- React (Most popular)
- Angular (Enterprise)
- Vue (Easy)

Also:
- Bootstrap
- jQuery (old but useful)
        `,
        practical: `
React choose karo for modern dev
        `,
        code: `npx create-react-app myApp`,
        explanation: `
Frameworks development fast karte hain.
`
      },

      // 🔐 Security
      {
        name: "Frontend Security",
        theory: `
Frontend bhi attack ho sakta hai.

Attacks:
- XSS
- CSRF
- DoS

Protection:
- Input sanitize karo
- HTTPS use karo
        `,
        practical: `
Never trust user input
        `,
        code: `element.textContent = userInput;`,
        explanation: `
innerHTML avoid karo → XSS risk hota hai
`
      },

      // 🚀 Performance
      {
        name: "Performance Optimization",
        theory: `
Fast website = better UX

Techniques:
- Lazy loading
- Code splitting
- Image optimization
        `,
        practical: `
Lazy load:
        `,
        code: `const Image = React.lazy(() => import('./Image'));`,
        explanation: `
Performance improve hoti hai.
`
      },

      // 💼 Projects
      {
        name: "Frontend Projects",
        theory: `
Strong portfolio ke liye projects banao:

1. Portfolio website
2. E-commerce UI
3. Dashboard UI
4. Chat UI
5. Blog website
        `,
        practical: `
Start with:
Portfolio + Dashboard
        `,
        code: `// Build → Learn → Repeat`,
        explanation: `
Projects = job ke liye most important
`
      }

    ]
  }
];