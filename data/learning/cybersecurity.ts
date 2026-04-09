export const cyberContent = [
  {
    id: "cyber-1",
    title: "Cyber Security & Ethical Hacking Fundamentals",
    content: "Cybersecurity systems, networks aur data ko hackers se protect karta hai aur ethical hacking vulnerabilities find karta hai.",

    chapters: [

      // 🔰 Intro
      {
        name: "Introduction to Cyber Security",
        theory: `
Cybersecurity ka matlab hai systems, networks aur data ko cyber attacks se protect karna.

Simple words me:
→ Hackers se bachav

Importance:
- Personal data protection
- Financial security
- Company data safety
        `,
        practical: `
Apne system me:
- Strong password use karo
- Unknown links par click mat karo
        `,
        code: `// Rule: Never trust unknown input`,
        explanation: `
Cybersecurity ka basic rule hai: Trust nothing, verify everything.
`
      },

      // 🔐 CIA Triad
      {
        name: "Core Pillars (CIA Triad)",
        theory: `
Cybersecurity 3 main pillars par based hai:

1. Confidentiality
→ Data sirf authorized user hi dekhe

2. Integrity
→ Data change na ho unauthorized

3. Availability
→ Data hamesha available ho
        `,
        practical: `
Example:
Password protected file → Confidentiality
Checksum → Integrity
Server uptime → Availability
        `,
        code: `// Example concept
if(user.isAuthorized){
  allowAccess();
}`,
        explanation: `
Ye 3 pillars har secure system ki foundation hote hain.
`
      },

      // 🌐 Network Security
      {
        name: "Network Security",
        theory: `
Network ko secure karna important hai.

Tools:
- Firewall
- IDS/IPS
- VPN

Risk:
Public WiFi → easily hack ho sakta hai
        `,
        practical: `
Always use VPN on public WiFi
        `,
        code: `nmap -sn 192.168.1.0/24`,
        explanation: `
Yeh network me active devices scan karta hai.
`
      },

      // 🧪 Nmap
      {
        name: "Nmap Scanning",
        theory: `
Nmap ek powerful tool hai jo network scanning ke liye use hota hai.

Use:
- Open ports find karna
- Services identify karna
- OS detection
        `,
        practical: `
Stealth scan use karo:
        `,
        code: `nmap -sS -T4 -A 192.168.1.1`,
        explanation: `
- sS → stealth scan
- T4 → fast scanning
- A → advanced detection
`
      },

      // 🛡️ Application Security
      {
        name: "Application Security",
        theory: `
Apps me vulnerabilities ho sakti hain.

Common issues:
- Weak authentication
- Data leaks
- Fake apps

Rule:
Sirf trusted source se app install karo
        `,
        practical: `
Check permissions before installing app
        `,
        code: `if(app.isTrusted){
  install();
}`,
        explanation: `
Malicious apps data chura sakti hain.
`
      },

      // 💾 Data Security
      {
        name: "Data / Information Security",
        theory: `
Sensitive data ko protect karna hota hai.

Methods:
- Encryption
- Access control
- Backup

Encryption:
Plain text → Cipher text
        `,
        practical: `
Use HTTPS websites only
        `,
        code: `const encrypted = encrypt("password");`,
        explanation: `
Encryption data ko unreadable bana deta hai.
`
      },

      // ☁️ Cloud Security
      {
        name: "Cloud Security",
        theory: `
Cloud me data store karna safe hai agar properly configured ho.

Platforms:
- AWS
- Azure
- Google Cloud

Risk:
Misconfiguration = Data leak
        `,
        practical: `
Enable 2FA in cloud accounts
        `,
        code: `aws s3 ls`,
        explanation: `
Cloud storage access command example.
`
      },

      // 💻 Endpoint Security
      {
        name: "Endpoint Security",
        theory: `
Devices (laptop, mobile) ko secure karna bhi important hai.

Tools:
- Antivirus
- Firewall
- Updates

Threats:
- Virus
- Trojan
- Ransomware
        `,
        practical: `
Always update OS
        `,
        code: `sudo apt update`,
        explanation: `
Updates security patches fix karte hain.
`
      },

      // ⚙️ Operational Security
      {
        name: "Operational Security",
        theory: `
Organization ke rules aur policies ko secure banana.

Includes:
- Access control
- Risk management
- Monitoring
        `,
        practical: `
Use role-based access control (RBAC)
        `,
        code: `if(user.role === "admin"){ allow(); }`,
        explanation: `
Har user ko limited access milna chahiye.
`
      },

      // 📡 IoT Security
      {
        name: "IoT Security",
        theory: `
Smart devices (IoT) bhi hack ho sakte hain.

Examples:
- Smart TV
- Smart watch
- CCTV

Risk:
Default passwords
        `,
        practical: `
Change default passwords immediately
        `,
        code: `device.setPassword("Strong@123");`,
        explanation: `
Weak passwords sabse bada risk hain.
`
      },

      // 🚨 Attacks
      {
        name: "Major Cyber Attacks",
        theory: `
Common attacks:

1. Malware
2. Phishing
3. Ransomware
4. DDoS
5. SQL Injection
6. MITM
        `,
        practical: `
Phishing email identify karna seekho
        `,
        code: `' OR 1=1 --`,
        explanation: `
Yeh SQL Injection ka basic payload hai.
`
      },

      // ⚡ Trends
      {
        name: "Cybersecurity Trends 2025",
        theory: `
Latest trends:

- AI-based attacks
- Ransomware growth
- Cloud security demand
- Zero Trust model
        `,
        practical: `
Learn:
- SIEM tools
- Bug bounty
        `,
        code: `// Zero Trust → Always verify`,
        explanation: `
Security ab smart aur AI-driven ho rahi hai.
`
      },

      // 🚀 Projects
      {
        name: "Cybersecurity Projects",
        theory: `
Practice ke liye projects:

1. Port Scanner
2. Password Strength Checker
3. Keylogger (ethical learning)
4. Vulnerability Scanner
5. Phishing Detector
        `,
        practical: `
Mini project:
Nmap automation tool banao
        `,
        code: `const { exec } = require("child_process");`,
        explanation: `
Automation tools real pentesting me use hote hain.
`
      }

    ]
  }
];