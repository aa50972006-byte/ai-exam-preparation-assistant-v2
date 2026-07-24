import { BrowserRouter, Routes, Route } from "react-router-dom";
import AskAI from "./pages/AskAI";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import QuizGenerator from "./pages/QuizGenerator";
import PdfSummarizer from "./pages/PdfSummarizer";
import StudyPlanner from "./pages/StudyPlanner";
import Flashcards from "./pages/Flashcards";
import Progress from "./pages/Progress";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import ProtectedRoute from "./components/ProtectedRoute";
import AIChat from "./pages/AIChat";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
        <Route
  path="/ai-chat"
  element={
    <ProtectedRoute>
      <AIChat />
    </ProtectedRoute>
  }
/>

       <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
        <Route path="/ask-ai" element={<AskAI />} />
        <Route path="/quiz-generator" element={<QuizGenerator />} />
        <Route path="/pdf-summarizer" element={<PdfSummarizer />} />
        <Route path="/study-planner" element={<StudyPlanner />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;