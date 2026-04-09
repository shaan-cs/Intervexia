export const dataAnalystContent = [
  {
    id: "da-1",
    title: "Data Analyst Mastery",
    content: "Data Analyst ka kaam hota hai raw data ko analyze karke meaningful insights nikalna jisse business decisions better ho sake.",

    chapters: [

      // 🔰 INTRO
      {
        name: "Introduction to Data Analysis",
        theory: `
Data Analysis ka matlab hai raw data ko process karke useful information nikalna.

Simple flow:
Data → Clean → Analyze → Visualize → Decision

Use cases:
- Business growth
- Marketing analysis
- User behavior tracking
        `,
        practical: `
Example:
Sales data analyze karo aur pata karo kaunsa product zyada sell ho raha hai
        `,
        code: `// Data → Insight`,
        explanation: `
Data analyst business ka decision maker hota hai indirectly.
`
      },

      // 📊 TYPES OF DATA
      {
        name: "Types of Data",
        theory: `
Data types:

1. Structured → Tables (SQL)
2. Unstructured → Text, images
3. Semi-structured → JSON

Formats:
- CSV
- Excel
- JSON
        `,
        practical: `
CSV file open karo Excel me
        `,
        code: `name,age
Shaan,22`,
        explanation: `
Structured data easy hota hai analyze karna.
`
      },

      // 🧹 DATA CLEANING
      {
        name: "Data Cleaning",
        theory: `
Dirty data = wrong insights

Problems:
- Missing values
- Duplicate data
- Wrong format
        `,
        practical: `
Remove null values
        `,
        code: `df.dropna()`,
        explanation: `
Clean data hi useful hota hai.
`
      },

      // 📈 EXCEL
      {
        name: "Excel for Data Analysis",
        theory: `
Excel basic tool hai data analysis ke liye.

Functions:
- SUM
- AVERAGE
- VLOOKUP
        `,
        practical: `
Example:
        `,
        code: `=SUM(A1:A10)`,
        explanation: `
Excel beginners ke liye best hai.
`
      },

      // 🧮 SQL
      {
        name: "SQL (Database Querying)",
        theory: `
SQL se data fetch karte hain database se.

Commands:
- SELECT
- WHERE
- JOIN
        `,
        practical: `
Example:
        `,
        code: `SELECT * FROM users WHERE age > 20;`,
        explanation: `
SQL Data Analyst ka core skill hai.
`
      },

      // 🔗 JOINS
      {
        name: "SQL Joins",
        theory: `
Joins multiple tables combine karte hain.

Types:
- INNER JOIN
- LEFT JOIN
- RIGHT JOIN
        `,
        practical: `
Example:
        `,
        code: `SELECT * FROM orders
JOIN users ON orders.user_id = users.id;`,
        explanation: `
Real-world data multiple tables me hota hai.
`
      },

      // 🐍 PYTHON
      {
        name: "Python for Data Analysis",
        theory: `
Python powerful language hai data ke liye.

Libraries:
- Pandas
- NumPy
- Matplotlib
        `,
        practical: `
Example:
        `,
        code: `import pandas as pd
df = pd.read_csv("data.csv")`,
        explanation: `
Python automation aur analysis dono karta hai.
`
      },

      // 📊 PANDAS
      {
        name: "Pandas Library",
        theory: `
Pandas data manipulation ke liye use hota hai.

Features:
- Filtering
- Grouping
- Sorting
        `,
        practical: `
Example:
        `,
        code: `df.head()`,
        explanation: `
Top rows show karta hai dataset ke.
`
      },

      // 📉 VISUALIZATION
      {
        name: "Data Visualization",
        theory: `
Graphs data ko samajhne me easy banate hain.

Tools:
- Matplotlib
- Seaborn
- Power BI
        `,
        practical: `
Example:
        `,
        code: `import matplotlib.pyplot as plt
plt.plot([1,2,3],[4,5,6])
plt.show()`,
        explanation: `
Visualization insights ko clear karta hai.
`
      },

      // 📊 DASHBOARD
      {
        name: "Dashboard Tools",
        theory: `
Dashboards real-time data show karte hain.

Tools:
- Power BI
- Tableau
        `,
        practical: `
Create sales dashboard
        `,
        code: `// Dashboard concept`,
        explanation: `
Companies dashboards use karti hain decisions ke liye.
`
      },

      // 📦 DATA PIPELINE
      {
        name: "Data Pipeline Basics",
        theory: `
Pipeline:

Data → Process → Store → Analyze

Tools:
- ETL
        `,
        practical: `
Extract → Transform → Load
        `,
        code: `// ETL flow`,
        explanation: `
Pipeline automation ke liye important hai.
`
      },

      // 🔐 DATA SECURITY
      {
        name: "Data Security",
        theory: `
Sensitive data protect karna important hai.

Methods:
- Encryption
- Access control
        `,
        practical: `
Restrict access
        `,
        code: `if(user.role === "admin"){ allow(); }`,
        explanation: `
Data leak dangerous hota hai.
`
      },

      // 📊 STATISTICS
      {
        name: "Basic Statistics",
        theory: `
Statistics analysis ka base hai.

Concepts:
- Mean
- Median
- Mode
        `,
        practical: `
Example:
        `,
        code: `import numpy as np
np.mean([1,2,3])`,
        explanation: `
Stats data understanding ke liye important hai.
`
      },

      // 🤖 MACHINE LEARNING INTRO
      {
        name: "Intro to Machine Learning",
        theory: `
ML data se patterns learn karta hai.

Types:
- Supervised
- Unsupervised
        `,
        practical: `
Basic model:
        `,
        code: `from sklearn.linear_model import LinearRegression`,
        explanation: `
Data analyst ML ka basic knowledge rakhta hai.
`
      },

      // 💼 PROJECTS
      {
        name: "Data Analyst Projects",
        theory: `
Projects:

1. Sales analysis
2. Customer segmentation
3. Dashboard
4. Stock analysis
        `,
        practical: `
Mini project:
Sales dashboard
        `,
        code: `// Analyze → Visualize`,
        explanation: `
Projects portfolio ke liye important hain.
`
      },

      // 💰 CAREER
      {
        name: "Career & Salary",
        theory: `
Roles:
- Data Analyst
- Business Analyst
- Data Scientist

Salary:
High demand field 💰
        `,
        practical: `
Start with:
Excel + SQL + Python
        `,
        code: `// Skill = Job`,
        explanation: `
Data is new oil 🔥
`
      }

    ]
  }
];