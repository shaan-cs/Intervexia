export const mlEngineerContent = [
  {
    id: "ml-1",
    title: "Machine Learning Engineering Mastery",
    content: "Machine Learning Engineer ka kaam hota hai data se models train karna aur unhe real-world applications me deploy karna.",

    chapters: [

      // 🔰 INTRO
      {
        name: "Introduction to Machine Learning",
        theory: `
Machine Learning ek AI technique hai jisme machines data se learn karti hain.

Simple flow:
Data → Train Model → Predict

Use cases:
- Recommendation system
- Fraud detection
- Chatbots
        `,
        practical: `
Example:
Spam email detection
        `,
        code: `// ML basic idea
model.fit(X, y)`,
        explanation: `
ML me system automatically patterns learn karta hai.
`
      },

      // 📊 TYPES OF ML
      {
        name: "Types of Machine Learning",
        theory: `
ML ke types:

1. Supervised Learning
→ labeled data

2. Unsupervised Learning
→ no labels

3. Reinforcement Learning
→ reward-based learning
        `,
        practical: `
Example:
Classification → Supervised
        `,
        code: `from sklearn.linear_model import LogisticRegression`,
        explanation: `
Har type ka use case alag hota hai.
`
      },

      // 🧹 DATA PREPROCESSING
      {
        name: "Data Preprocessing",
        theory: `
Raw data directly use nahi hota.

Steps:
- Cleaning
- Encoding
- Scaling
        `,
        practical: `
Example:
        `,
        code: `from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()`,
        explanation: `
Clean data = better model accuracy
`
      },

      // 📈 DATA ANALYSIS
      {
        name: "Exploratory Data Analysis (EDA)",
        theory: `
EDA me data ko explore karte hain.

Use:
- Patterns find karna
- Outliers detect karna
        `,
        practical: `
Example:
        `,
        code: `df.describe()`,
        explanation: `
EDA bina model banana risky hai.
`
      },

      // 🐍 PYTHON LIBRARIES
      {
        name: "Python Libraries for ML",
        theory: `
Important libraries:

- NumPy
- Pandas
- Scikit-learn
- TensorFlow
- PyTorch
        `,
        practical: `
Example:
        `,
        code: `import numpy as np`,
        explanation: `
Python ML ka main language hai.
`
      },

      // 📊 MODEL BUILDING
      {
        name: "Model Building",
        theory: `
Model data se learn karta hai.

Steps:
- Train
- Test
        `,
        practical: `
Example:
        `,
        code: `model.fit(X_train, y_train)`,
        explanation: `
Training model ka learning phase hota hai.
`
      },

      // 📉 MODEL EVALUATION
      {
        name: "Model Evaluation",
        theory: `
Model accuracy check karte hain.

Metrics:
- Accuracy
- Precision
- Recall
        `,
        practical: `
Example:
        `,
        code: `from sklearn.metrics import accuracy_score`,
        explanation: `
Evaluation se pata chalta hai model kitna sahi hai.
`
      },

      // 🤖 ALGORITHMS
      {
        name: "ML Algorithms",
        theory: `
Popular algorithms:

- Linear Regression
- Decision Tree
- Random Forest
- SVM
        `,
        practical: `
Example:
        `,
        code: `from sklearn.tree import DecisionTreeClassifier`,
        explanation: `
Algorithm problem ke according choose hota hai.
`
      },

      // 🧠 DEEP LEARNING
      {
        name: "Deep Learning Basics",
        theory: `
Deep Learning neural networks use karta hai.

Use:
- Image recognition
- NLP
        `,
        practical: `
Example:
        `,
        code: `from tensorflow.keras.models import Sequential`,
        explanation: `
DL complex problems solve karta hai.
`
      },

      // 🔤 NLP
      {
        name: "Natural Language Processing",
        theory: `
NLP text data handle karta hai.

Use:
- ChatGPT
- Sentiment analysis
        `,
        practical: `
Example:
        `,
        code: `from sklearn.feature_extraction.text import CountVectorizer`,
        explanation: `
Text ko numbers me convert karna hota hai.
`
      },

      // 🖼️ COMPUTER VISION
      {
        name: "Computer Vision",
        theory: `
Images ko analyze karna.

Use:
- Face detection
- Object detection
        `,
        practical: `
Example:
        `,
        code: `import cv2`,
        explanation: `
CV images ko process karta hai.
`
      },

      // ☁️ MODEL DEPLOYMENT
      {
        name: "Model Deployment",
        theory: `
Model ko production me use karna.

Tools:
- Flask
- FastAPI
        `,
        practical: `
Example:
        `,
        code: `app.post("/predict")`,
        explanation: `
Deployment se model real-world me use hota hai.
`
      },

      // 🔄 MLOPS
      {
        name: "MLOps",
        theory: `
ML + DevOps = MLOps

Use:
- Automation
- Monitoring
        `,
        practical: `
Example:
        `,
        code: `mlflow run .`,
        explanation: `
MLOps ML lifecycle manage karta hai.
`
      },

      // 📊 FEATURE ENGINEERING
      {
        name: "Feature Engineering",
        theory: `
Features improve karte hain model ko.

Techniques:
- Scaling
- Encoding
        `,
        practical: `
Example:
        `,
        code: `pd.get_dummies(df)`,
        explanation: `
Better features = better model
`
      },

      // ⚡ PERFORMANCE
      {
        name: "Model Optimization",
        theory: `
Model improve karna:

- Hyperparameter tuning
- Cross-validation
        `,
        practical: `
Example:
        `,
        code: `GridSearchCV()`,
        explanation: `
Optimization accuracy improve karta hai.
`
      },

      // 💼 PROJECTS
      {
        name: "ML Projects",
        theory: `
Projects:

1. Spam detection
2. Recommendation system
3. Stock prediction
4. Chatbot
        `,
        practical: `
Mini project:
Movie recommender
        `,
        code: `// Train → Predict`,
        explanation: `
Projects placement ke liye important hain.
`
      },

      // 💰 CAREER
      {
        name: "Career & Salary",
        theory: `
Roles:
- ML Engineer
- Data Scientist
- AI Engineer

Salary:
High demand 💰
        `,
        practical: `
Start with:
Python + ML basics
        `,
        code: `// Skills = Job`,
        explanation: `
ML future ka field hai 🔥
`
      }

    ]
  }
];