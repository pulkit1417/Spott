# 🎟️ SPOTT — Discover & Manage Events Seamlessly

**SPOTT** is a modern event discovery and event management platform where users can explore events, create their own events, manage tickets, and track their activity — all in one place.

Built using **Next.js App Router**, SPOTT focuses on performance, clean UI, and a smooth user experience.

🌐 **Live Website:** https://haveaspott.vercel.app/

---

## 🖼️ Landing Page Preview

![SPOTT Landing Page](https://github.com/user-attachments/assets/deecae25-cf96-4356-892a-5aad2fd4c31c)
<!-- <img width="1919" height="937" alt="Screenshot 2025-12-13 201330" src="https://github.com/user-attachments/assets/deecae25-cf96-4356-892a-5aad2fd4c31c" /> -->

---

## 🚀 Features

### 🔍 Explore Events
- Discover public events
- Clean and intuitive browsing experience
- Fully responsive layout

### 📝 Create Events
- Create and publish your own events
- Manage event details easily

### 🎫 My Tickets
- View tickets for registered events
- Centralized ticket tracking

### 📅 My Events
- Access events created by you
- Manage and update listings

### 🔐 Authentication
- Secure Sign In & Sign Up flow
- Route-based authentication using App Router groups

### 🎨 Modern UI & UX
- Reusable UI components
- Consistent design system
- Smooth modals and interactions

---

## 🧱 Tech Stack

- ⚛️ **Next.js (App Router)**
- 🎨 **Tailwind CSS**
- 🧩 **shadcn/ui**
- 🧠 **Convex** (Backend & real-time data)
- 🚀 **Vercel** (Deployment)

---

## 📁 Project Structure

```text
app/
├── (auth)/
│   ├── sign-in/
│   ├── sign-up/
│   └── layout.tsx
│
├── (main)/
│   ├── create-event/
│   ├── my-events/
│   └── my-tickets/
│
├── (public)/
│   ├── events/
│   └── explore/
│
├── layout.tsx
├── page.tsx
├── globals.css
├── ConvexClientProvider.tsx
└── favicon.ico

components/
├── ui/
├── event-card.jsx
├── Header.tsx
├── Footer.tsx
├── onboarding-modal.tsx
├── upgrade-modal.tsx
├── search-location.tsx
├── theme-provider.tsx
└── unsplash-image-picker.tsx

convex/
hooks/
lib/
```

---

## ⚙️ Getting Started

Follow the steps below to run **SPOTT** locally on your machine.

---

### 📦 Prerequisites

Make sure you have the following installed:
- Node.js (v18 or later)
- npm
- Git

---

### 📥 Clone the Repository

```bash
git clone https://github.com/your-username/spott.git
cd spott
```

---

### 📚 Install Dependencies

Using npm:
```bash
npm install
```
---

### 🔐 Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
CONVEX_DEPLOY_KEY=
CLERK_JWT_ISSUER_DOMAIN=
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=
```

Make sure your Convex backend is properly set up before running the app.

---

### ▶️ Run the Development Server

```bash
npm run dev
```

or

```bash
yarn dev
```

Open your browser and visit:
```
http://localhost:3000
```

---

### 🛠️ Build for Production

```bash
npm run build
npm start
```

---

## 🎉 You're All Set!

Start exploring, creating, and managing events with **SPOTT**! 🚀

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/pulkit1417/Spott/issues).

---

## 💬 Contact

For questions or feedback, reach out at: **gupta.pulkit2408@gmail.com**

---

**Made with ❤️ for event organizers and attendees**
