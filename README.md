# 🚀 Full-Stack Job Tracker Dashboard

### Modern, Secure Application for Tracking Job Applications (CRUD + Auth)

This project demonstrates expertise in building, securing, and deploying a modern, full-stack application using the industry's most in-demand technologies. It moves beyond static sites to showcase data persistence, user authentication, and complex state management.

---

## 🔗 Live Application & Code

| Deployment Type | Link | Notes |
| :--- | :--- | :--- |
| **Live Demo URL (Vercel)** | [https://job-tracker-nextjs-three.vercel.app] | The fully functional, production-ready application. |
| **Code Repository (GitHub)** | [https://github.com/gitabebe/job-tracker-nextjs] | View the source code for all components and logic. |

---

## ✨ Key Features & Technical Skills Demonstrated

This application is designed to showcase the full range of skills required for high-value freelance projects (Intermediate to Expert level).

### 1. Full-Stack Data Management (CRUD)

* **Persistent Storage:** Data is stored and retrieved securely using **Firebase Firestore** (Database-as-a-Service).
* **Full CRUD Operations:** Implements Create, Read, Update, and Delete actions:
    * **CREATE:** Logging a new job application via the dedicated form.
    * **READ:** Displaying and filtering all jobs by status.
    * **UPDATE:** Changing the job status (e.g., Applied to Interviewing) directly via a dropdown in the table.
    * **DELETE:** Removing job entries from the table and the Firestore database.

### 2. User Authentication & Security

* **Firebase Authentication:** Implements user registration and login using **Email/Password** for secure access.
* **Security Rules:** Database access is strictly enforced using **Firestore Security Rules**, ensuring users can only read, update, or delete the jobs they created (`userId` matches the authenticated user's ID).
* **Conditional UI:** The application correctly renders the **Marketing Page** or the **Dashboard** based on the user's login status.

### 3. Modern Development & Architecture

* **Framework:** **Next.js (App Router):** Utilized for optimized routing, fast performance, and a clear application structure.
* **Styling:** **Tailwind CSS:** Used exclusively for rapid, utility-first styling, ensuring the application is clean, accessible, and **fully responsive** across all device breakpoints.
* **State Management:** Complex application state (job list, filter, user authentication) managed efficiently using React Hooks (`useState`, `useEffect`).
* **Professional Deployment:** Secure deployment via **Vercel**, with sensitive Firebase keys managed securely via **Environment Variables** (not committed to the repository).

---

## 🛠️ Tech Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | **React** | Component-based UI and state management. |
| **Meta-Framework** | **Next.js** | Routing, Serverless API functions, and application structure. |
| **Styling** | **Tailwind CSS** | Utility-first, responsive design. |
| **Database/Backend** | **Firebase Firestore** | Secure, NoSQL data persistence. |
| **Authentication** | **Firebase Auth** | User registration and login service. |
| **Deployment** | **Vercel** | Global Edge Network hosting for speed. |

---

## ⚙️ How to Run Locally

1.  **Clone the repository:** `git clone [https://github.com/gitabebe/job-tracker-nextjs]`
2.  **Install dependencies:** `npm install`
3.  **Setup Environment Variables:** Create a **`.env.local`** file in the root directory and paste your `NEXT_PUBLIC_FIREBASE_...` keys inside it (without quotes).
4.  **Run development server:** `npm run dev`
5.  Open your browser to `http://localhost:3000`.