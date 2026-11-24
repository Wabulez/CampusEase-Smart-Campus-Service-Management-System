# 🏛️ CampusEase — Smart Campus Service Management System

**CampusEase** is a modern, responsive **Smart Campus Service Management System** web prototype built with semantic HTML5, CSS3, and Vanilla JavaScript. Designed with Human-Computer Interaction (HCI) best practices in mind, it unifies university administrative services, virtual queuing, appointment scheduling, and academic tracking into a single, intuitive student portal.

## ✨ Key Features

### 🎫 Real-Time Virtual Queue System (`queue.html`)

* **Live Ticket Monitor:** Track your active queue number, real-time position in line, currently served ticket, and estimated wait time.

* **Remote Queue Actions:** Snooze/delay your spot (`+10 mins`), trigger SMS alerts when approaching the counter, or leave a queue remotely.

* **Campus Traffic Monitor:** View live queue density and wait times across departments (Registrar, Financial Aid, ICT Helpdesk, Housing, Security) before walking across campus.

### 📅 Appointments & Consultations Hub (`appointments.html`)

* **Multi-Department Booking:** Schedule 1-on-1 in-person visits or virtual video consultations (Google Meet) with specific department heads and faculty mentors.

* **Session Management:** View confirmed slots, reschedule or cancel bookings within policy windows, and review past consultation history.

### 🏢 University Services Directory (`services.html`)

* **Centralized Department Cards:** Browse administrative offices with real-time status badges (`OPEN NOW`, `QUEUE ACTIVE`, `24/7 ONLINE`), lead officer details, and quick-action buttons.

* **Emergency Dispatch Banner:** One-click access to 24/7 Campus Security Patrol and Medical Helpline contacts.

* **Operating Hours & Peak Times:** Reference table helping students avoid peak congestion hours.

### 📚 Semester Schedule & Academic Hub (`schedule.html`, `index.html`, `assignments.html`)

* **Interactive Weekly Timetable:** Color-coded class schedule displaying course units, venues, time slots, and lecturers.

* **Academic Performance KPIs:** Track overall GPA, coursework averages, exam eligibility, and unit-by-unit attendance progress bars.

* **Examinations & Office Hours:** Stay on top of upcoming CATs, final exams, semester milestones, and lecturer consultation hours.

### 💬 Service Evaluation & Feedback Hub (`feedback.html`)

* **Multi-Metric Star Ratings:** Rate university services across speed, staff professionalism, and overall satisfaction, with optional file attachments and anonymous submission toggles.

* **"You Said, We Did" Impact Wall:** Transparently showcases campus upgrades driven by student feedback alongside a live status tracker for submitted reviews.

### ⚙️ Personalization, Accessibility & Security (`settings.html`, `events.html`, `login.html`)

* **Persistent Dark / Light Mode:** Seamless theme switching powered by CSS custom properties and `localStorage`.

* **Account & Privacy Controls:** Manage profile details, emergency contacts, Two-Factor Authentication (2FA), active login sessions, and connected campus integrations (Microsoft 365 & Google Workspace).

## 📁 Project Structure

```text
CampusEase/
├── index.html                  # Main Student Dashboard & Quick Overview
├── schedule.html               # Weekly Timetable, GPA, Exams & Office Hours
├── assignments.html            # Pending Assignments & Coursework Tracker
├── services.html               # Administrative Services Directory & Emergency Contacts
├── appointments.html           # Consultation Booking & Scheduled Slots Manager
├── queue.html                  # Live Virtual Queue Monitor & Campus Traffic
├── events.html                 # Upcoming Campus Workshops & Events
├── feedback.html               # Department Evaluation Form & Resolution Tracker
├── settings.html               # Profile, Security, Accessibility & Theme Settings
├── login.html                  # Simulated Student Login Portal
├── forgot-password.html        # Simulated Password Recovery Flow
├── css/
│   ├── styles.css              # Global Stylesheet, CSS Variables & Responsive Layouts
│   ├── login.css               # Dedicated Styles for the Student Login Portal
│   └── forgot-password.css     # Dedicated Styles for the Password Recovery View
├── js/
│   └── script.js               # Theme Toggle, Sidebar Drawer & Interactive UI Logic
├── .gitignore                  # Excludes OS metadata & local IDE configuration files
└── README.md                   # Project Documentation & Setup Instructions
```

## 🛠️ Tech Stack

* **Frontend Structure:** Semantic HTML5

* **Styling & Layout:** CSS3 (Custom Properties / CSS Variables, CSS Grid, Flexbox, Responsive Media Queries)

* **Interactivity:** Vanilla JavaScript (DOM Manipulation, Event Handling, `localStorage` state persistence)

* **Icons & Typography:** [Font Awesome 6](https://fontawesome.com/) & [Google Fonts (`Inter`)](https://fonts.google.com/specimen/Inter)

## 🚀 Getting Started

Because **CampusEase** is built with lightweight, zero-dependency web standards, no build tools or package installations are required.

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Wabulez/CampusEase-Smart-Campus-Service-Management-System.git
   ```

2. **Navigate to the project folder:**

   ```bash
   cd CampusEase-Smart-Campus-Service-Management-System
   ```

3. **Launch the application:**

   * Open `index.html` (or `login.html`) directly in any modern web browser, **or**

   * Use the **Live Server** extension in VS Code for local development.

## 🎨 HCI & UX Design Highlights

* **Responsive Mobile-First Navigation:** Collapsible sidebar drawer with backdrop overlay for seamless usability across desktops, tablets, and mobile devices.

* **Visual Hierarchy & Status Cues:** Consistent pill badges, animated pulse indicators for live queues, and color-coded progress bars provide immediate visual feedback.

* **Reduced Cognitive Load:** Clean card-based grid layouts group related tasks and KPIs logically without cluttering the viewport.

## 🔒 Security & Prototyping Notes

* **Client-Side Mock Authentication:** Both `login.html` (which redirects directly to `index.html`) and `forgot-password.html` (which simulates password recovery via browser `alert()` prompts) rely purely on client-side navigation without backend credential validation. This prototype is not intended to guard real user data without a proper authentication server.

* **Non-Sensitive Local Storage:** Browser `localStorage` is used strictly for non-sensitive UI preferences (such as persisting Dark/Light mode across pages).

* **Fictional Placeholder Data:** All student profiles, academic records, and administrative officer names are fictional placeholders created for UI demonstration purposes.
