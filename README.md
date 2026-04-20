# StreamTube 🎬

**StreamTube** is a premium, high-performance YouTube clone built for a modern video streaming experience. Developed with a focus on speed, aesthetics, and user engagement, it features a custom "Elegant Dark" design theme and a robust React architecture.

![StreamTube Preview](https://picsum.photos/seed/streamtube/1200/600)

## ✨ Features

- **🎥 Cinematic Video Player**: A high-quality playback experience powered by `react-player` with full controls and a responsive "Up Next" sidebar.
- **🌒 Elegant Dark Theme**: A custom-designed deep dark interface tailored for long-form content consumption and focus.
- **🔍 Smart Discovery**: Real-time video search and category filtering system to find content across Gaming, Tech, Music, and more.
- **👤 User Ecosystem**: Complete channel system and authentication-ready UI, including detailed profile pages and subscriber metrics.
- **💬 Community Engagement**: Interactive comments section with nested reply logic and "Like/Dislike" feedback systems.
- **📡 Responsive Design**: Fluid layout that transitions seamlessly from widescreen monitors to mobile devices.

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) with custom design tokens
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Backend/Auth**: [Firebase](https://firebase.google.com/) (configured for Google Auth)
- **Animations**: [Motion](https://motion.dev/)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/streamtube.git
   cd streamtube
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Create a `.env` file in the root directory and add your credentials (refer to `.env.example`):
   ```env
   GEMINI_API_KEY=your_api_key_here
   VITE_APP_URL=http://localhost:3000
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open the browser**:
   Navigate to `http://localhost:3000` to see your app in action!

## 🔐 Configuration (GitHub Secrets)

When deploying this project via GitHub Actions or to a hosting provider, ensure the following secrets are configured:

- `GEMINI_API_KEY`: Required for AI-powered discovery features.
- `VITE_FIREBASE_CONFIG`: Your Firebase configuration object strings if using real-time features.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---
*Built with ❤️ using AI Studio Build.*
