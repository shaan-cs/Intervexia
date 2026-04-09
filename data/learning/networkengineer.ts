export const networkEngineerContent = [
  {
    id: "net-1",
    title: "Network Engineering Mastery",
    content: "Network Engineering ka kaam hota hai computer networks ko design, manage aur secure karna taaki data smoothly transfer ho sake.",

    chapters: [

      // 🔰 Intro
      {
        name: "Introduction to Network Engineering",
        theory: `
Network Engineer ek IT professional hota hai jo networks ko design, manage aur maintain karta hai.

Network types:
- LAN (Local Area Network)
- WAN (Wide Area Network)
- Internet

Kaam:
- Data transfer
- Connectivity maintain
- Performance optimize
        `,
        practical: `
Apne ghar ka WiFi router observe karo:
→ Ye bhi ek small network hai
        `,
        code: `ping google.com`,
        explanation: `
Ping command check karta hai network connection active hai ya nahi.
`
      },

      // 🧠 Skills
      {
        name: "Skills Required",
        theory: `
Network Engineer ke liye skills:

Technical:
- Networking basics (IP, DNS)
- Routing & Switching
- Firewall & Security

Soft skills:
- Communication
- Problem solving
- Teamwork
        `,
        practical: `
Basic commands seekho:
        `,
        code: `ipconfig
ifconfig`,
        explanation: `
Ye commands system ka IP address show karti hain.
`
      },

      // 🌐 Networking Basics
      {
        name: "Networking Basics (IP, DNS, HTTP)",
        theory: `
Important concepts:

IP Address:
→ Device ki identity

DNS:
→ Domain ko IP me convert karta hai

HTTP/HTTPS:
→ Web communication protocol
        `,
        practical: `
Example:
google.com → DNS → IP → Server
        `,
        code: `nslookup google.com`,
        explanation: `
DNS ka actual IP fetch karta hai.
`
      },

      // 🔌 Devices
      {
        name: "Networking Devices",
        theory: `
Important devices:

- Router → network connect karta hai
- Switch → devices connect karta hai
- Firewall → security provide karta hai
        `,
        practical: `
Router settings open karo:
192.168.1.1
        `,
        code: `tracert google.com`,
        explanation: `
Route path show karta hai packets ka.
`
      },

      // 🛠️ Responsibilities
      {
        name: "Responsibilities of Network Engineer",
        theory: `
Main responsibilities:

- Network design karna
- Troubleshooting
- Performance monitoring
- Backup & recovery
        `,
        practical: `
Network issue solve karo:
Check → IP → DNS → Firewall
        `,
        code: `netstat -an`,
        explanation: `
Active connections show karta hai.
`
      },

      // 🔐 Security
      {
        name: "Network Security",
        theory: `
Security bahut important hai.

Tools:
- Firewall
- VPN
- IDS/IPS

Threats:
- DDoS
- MITM
- Malware
        `,
        practical: `
Use VPN on public WiFi
        `,
        code: `sudo ufw enable`,
        explanation: `
Firewall enable karta hai system par.
`
      },

      // 🧪 Troubleshooting
      {
        name: "Network Troubleshooting",
        theory: `
Common issues:

- No internet
- Slow speed
- DNS error

Steps:
1. Check cable/WiFi
2. Check IP
3. Restart router
        `,
        practical: `
Commands:
        `,
        code: `ping 8.8.8.8`,
        explanation: `
Google DNS se connectivity test hoti hai.
`
      },

      // ☁️ Cloud Networking
      {
        name: "Cloud Networking",
        theory: `
Cloud me networking:

- AWS VPC
- Azure Network
- GCP

Benefit:
→ Scalable & flexible
        `,
        practical: `
AWS VPC create karo
        `,
        code: `aws ec2 describe-vpcs`,
        explanation: `
Cloud network resources show karta hai.
`
      },

      // 📡 Specializations
      {
        name: "Specializations in Networking",
        theory: `
Networking me multiple fields:

- Network Security
- Cloud Networking
- VoIP
- Wireless Networking
- Data Center Networking
        `,
        practical: `
Choose ek domain:
Security ya Cloud
        `,
        code: `// Choose your specialization`,
        explanation: `
Specialization career growth ke liye important hai.
`
      },

      // 🎓 Certifications
      {
        name: "Certifications",
        theory: `
Top certifications:

- CCNA (Beginner)
- CCNP (Intermediate)
- CCIE (Expert)
- CompTIA Network+
        `,
        practical: `
Start with:
CCNA
        `,
        code: `// Certification = Career boost`,
        explanation: `
Certifications job ke liye important hoti hain.
`
      },

      // 💼 Career Roles
      {
        name: "Career Roles",
        theory: `
Different roles:

- Network Engineer
- Network Admin
- Network Analyst
- Network Architect
        `,
        practical: `
Entry role:
Network Technician
        `,
        code: `// Grow step by step`,
        explanation: `
Career progression clear hota hai.
`
      },

      // ⚖️ Engineer vs Admin
      {
        name: "Network Engineer vs Administrator",
        theory: `
Difference:

Engineer:
→ Design & build network

Admin:
→ Maintain & monitor network
        `,
        practical: `
Engineer → setup
Admin → manage
        `,
        code: `// Role difference`,
        explanation: `
Dono roles important hain.
`
      },

      // 🚀 Projects
      {
        name: "Networking Projects",
        theory: `
Practice ke liye:

1. Home lab setup
2. Router configuration
3. Packet tracer labs
4. Firewall setup
        `,
        practical: `
Cisco Packet Tracer use karo
        `,
        code: `// Simulate network`,
        explanation: `
Hands-on practice most important hai.
`
      },

      // 💰 Salary & Growth
      {
        name: "Career Growth & Salary",
        theory: `
Demand high hai networking me.

Salary:
- Beginner → Good
- Experienced → High

Growth:
→ Engineer → Architect → Manager
        `,
        practical: `
Skills + certification = growth
        `,
        code: `// Skill = Money 💰`,
        explanation: `
Networking ek stable career hai.
`
      }

    ]
  }
];