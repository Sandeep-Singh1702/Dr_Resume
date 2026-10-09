# 🩺 Dr_Resume — AI-Powered Resume & Career Optimization Platform

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![React](https://img.shields.io/badge/Frontend-React.js-61DAFB.svg?logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-339933.svg?logo=node.js)
![Express.js](https://img.shields.io/badge/Framework-Express.js-000000.svg?logo=express)
![MongoDB](https://img.shields.io/badge/Database-MongoDB%20Atlas-47A248.svg?logo=mongodb)
![Sass](https://img.shields.io/badge/Styling-SCSS-CC6699.svg?logo=sass)

> **Dr_Resume** is a full-stack MERN application that simulates real-world recruitment engines. It enables users to upload resumes, compare them against job descriptions, perform automated skill gap analysis, generate tailored AI interview questions, and craft ATS-optimized resumes.

---

## 🌟 Key Features

- **📄 Resume Parsing & Extraction:** Upload PDF/DOCX resumes to automatically parse text, skills, education, and experience.
- **🎯 Semantic JD Matcher:** Compares user resumes against job descriptions to compute compatibility scores.
- **🔍 Skill Gap Analysis:** Highlights missing technical skills, soft skills, and crucial keywords needed to pass Applicant Tracking Systems (ATS).
- **💬 AI Interview Question Generator:** Generates personalized technical, behavioral, and situational questions targeted at identified skill gaps.
- **⚡ ATS Resume Rewriter:** Automatically suggests tailored bullet points and keyword additions to maximize ATS match potential.
- **📊 Interactive React Dashboard:** Custom SCSS-styled dashboard displaying score breakdowns, progress tracking, and actionable insights.

---

## 🏗️ System Architecture & Workflow

```text
┌──────────────────────────┐       ┌──────────────────────────┐
│   React Frontend         │  ───► │   Express / Node Backend │
│   (User Uploads & UI)    │       │   (API Routes & Controller)│
└────────────┬─────────────┘       └────────────┬─────────────┘
             │                                  │
             ▼                                  ▼
┌──────────────────────────┐       ┌──────────────────────────┐
│   MongoDB Atlas          │       │   LLM Engine / AI API    │
│   (User Data & Resumes)  │       │   (Gemini / OpenAI API)  │
└──────────────────────────┘       └──────────────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React.js (Vite / CRA)
- **Styling:** SCSS / Sass Modules
- **Icons & UI Components:** Lucide React / React Icons
- **HTTP Client:** Axios

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB & Mongoose ORM (MongoDB Atlas)
- **File Parsing & Upload:** `multer`, `pdf-parse`
- **AI Integration:** Google Gemini API / OpenAI API SDK

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn**
- **MongoDB Atlas** account or a local MongoDB instance
- API key for **Google Gemini** or **OpenAI**

---

### Installation & Local Setup

#### 1. Clone the Repository
```bash
git clone [https://github.com/Sandeep-Singh1702/Dr_Resume.git](https://github.com/Sandeep-Singh1702/Dr_Resume.git)
cd Dr_Resume
```

#### 2. Backend Setup
```bash
cd server
npm install
```

Create a `.env` file inside the `server/` folder:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GEMINI_API_KEY=your_gemini_api_key_here
# OR
OPENAI_API_KEY=your_openai_api_key_here
```

Start the backend server:
```bash
npm run dev
```

#### 3. Frontend Setup
Open a new terminal window:
```bash
cd client
npm install
```

Create a `.env` file inside the `client/` folder:
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

Start the React development server:
```bash
npm run dev
```

The application will be running at `http://localhost:5173` (or `http://localhost:3000`).

---

## 📁 Repository Structure

```text
Dr_Resume/
│── client/                   # React Frontend
│   ├── public/               # Static assets & icons
│   └── src/
│       ├── assets/           # Logos & static images
│       ├── components/       # Reusable UI components
│       ├── pages/            # Page components (Home, Dashboard, Analysis, Results)
│       ├── services/         # Axios API service calls
│       ├── styles/           # Global SCSS stylesheets, variables, and mixins
│       │   ├── _variables.scss
│       │   ├── _mixins.scss
│       │   └── main.scss
│       ├── App.jsx           # Application routing & layout
│       └── main.jsx          # React DOM entry point
│
│── server/                   # Node.js & Express Backend
│   ├── config/               # Database connection (db.js)
│   ├── controllers/          # Business logic (resumeController.js, aiController.js)
│   ├── middleware/           # Auth & file upload middlewares (multer.js)
│   ├── models/               # MongoDB Mongoose schemas (User.js, Resume.js)
│   ├── routes/               # API endpoints (authRoutes.js, resumeRoutes.js)
│   ├── utils/                # Helper utilities & PDF parsing scripts
│   └── server.js             # Express server entry point
│
│── .gitignore
└── README.md                 # Documentation
```

---

## 💡 How It Works

1. **Upload Resume:** Upload your PDF or DOCX resume directly through the React interface.
2. **Add Job Description:** Paste the job requirements for your target role.
3. **Run AI Engine:** The Node/Express backend parses your document and queries the AI engine to evaluate fit.
4. **View Breakdown:** Inspect your ATS fit score, missing keywords, and recommended improvements on your React dashboard.
5. **Practice & Export:** Review dynamically generated interview questions tailored to your gaps and generate an optimized resume.

---

## 📈 Roadmap

- [ ] Direct job post scraping via URL integration
- [ ] AI Cover Letter Generator module
- [ ] Export resumes to ATS-ready formatted PDF templates
- [ ] Voice-based AI Mock Interview practice mode

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AwesomeFeature`)
3. Commit your Changes (`git commit -m 'Add some AwesomeFeature'`)
4. Push to the Branch (`git push origin feature/AwesomeFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for details.

---

## 📬 Contact & Support

Designed & Developed by **[Sandeep Singh](https://github.com/Sandeep-Singh1702)**.  
If you find this project useful, give it a ⭐ on GitHub!
