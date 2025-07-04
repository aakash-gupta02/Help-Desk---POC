## 🛠️ HelpDesk - Role-Based Ticketing System

A fully functional **MERN stack ticketing system** with role-based dashboards for User, Technical, Operations, and Admin teams. Built for issue tracking, ticket management, and team collaboration.

---

### 🔗 Live Link

*https://help-desk-poc-75sz.onrender.com*

---

### 🚀 Tech Stack

* **Frontend:** React + Tailwind CSS + Lucide Icons
* **Backend:** Node.js + Express.js
* **Database:** MongoDB (Mongoose)
* **Auth:** JWT + Context API
* **State:** React Hooks + Axios
---

### 📂 Features Overview

#### ✅ Authentication

* Login / Register
* Protected routes per role (User, Tech, Ops, Admin)
* Token-based auth (JWT)

---

### 🧑‍💻 User Dashboard

* 📄 Submit new support ticket
* 📋 View list of submitted tickets (pagination + search)
* 🟡 Status indicator: Open / In Progress / Closed
* 🔍 Filter/search by subject or category
* ✍️ User profile view in topbar

---

### 🛠️ Technical Team Dashboard

* 📩 View assigned tickets
* 🧭 Ticket progress management (status update)
* ✅ Close or reassign tickets
* 👤 User/ticket details view (planned)

---

### ⚙️ Operations Dashboard

* 📥 Ticket approval system
* 🗂 My Approved Tickets
* 📊 Performance page (placeholder)
* 🎛 Filter by category, priority, or role (coming soon)

---

### 👨‍💼 Admin Dashboard

* 📊 Dashboard overview
* 📁 Database view: users table
* 📜 Log history: recent actions per user
* ⚙️ Settings: toggle maintenance mode, email alerts
* 🔐 Admin topbar with dropdown options

---

### 🌈 UI System

* Fully responsive layout
* Clean role-based sidebar for each role
* Theme-based color tokens:

```css
--color-primary: #3066BE;
--color-secondary: #963464;
--color-accent: #2AF5FF;
--color-bgLight: #FFFFFF;
--color-bgDark: #F1F5F9;
--color-textPrimary: #0F172A;
--color-border: #E2E8F0;
```

---

### 📁 Folder Structure

```
├── client/
│   ├── pages/
│   │   └── dashboards (UserDashboard, AdminDashboard, etc.)
│   ├── components/
│   └── context/
│
├── server/
│   ├── controllers/
│   ├── models/
│   └── routes/
```

---

### 📌 To-Do / Coming Soon

* [ ] Ticket details modal
* [ ] Comments on tickets
* [ ] Role management panel (admin)
* [ ] Email notification system
* [ ] Analytics visual charts

---

### 🧪 Local Setup

```bash
# Clone the repo
git clone https://github.com/aakash-gupta02/Help-Desk---POC.git
cd helpdesk

# Install frontend
cd frontend-client
npm install
npm run dev

# Install backend
cd backend-server
npm install
npm start
```

---

### 🙌 Author

**Aakash Gupta**
GitHub: [@aakash-gupta02](https://github.com/aakash-gupta02)
Portfolio: [aakash-portfolio.onrender.com](https://aakash-portfolio.onrender.com)

---
