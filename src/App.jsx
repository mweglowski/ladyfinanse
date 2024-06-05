import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/home/Home";
import Loans from "./components/pages/loans/Loans";
import Insurance from "./components/pages/insurance/Insurance";
import Footer from "./components/Footer";
import Contact from "./components/pages/contact/Contact";
import BlogPage from "./components/pages/blog/BlogPage";
import ScrollToTop from "./components/ScrollToTop";
import Login from "./components/pages/auth/Login";
import Logout from "./components/pages/auth/Logout";
import Signup from "./components/pages/auth/Signup";
import { AuthProvider } from "./context/auth-context";
import PostPage from "./components/pages/blog/PostPage";
import NewPostPage from "./components/pages/blog/NewPostPage";
import RealEstatesPage from "./components/pages/realestates/RealEstatesPage";

function App() {
  return (
    <AuthProvider>
      <div className="min-h-[100vh] flex flex-col justify-between relative">
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/realestates" element={<RealEstatesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/post/:id" element={<PostPage />} />
          <Route path="/blog/post/new" element={<NewPostPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdLZNN0iXmXa1f7jYmj1f_s6nK2VQl_NkKrtxMM57RbSV8kCA/viewform"
          className="fixed bottom-0 bg-blue-200 left-0 rounded-tr-lg py-2 px-3 button z-50 shadow-none hover:bg-white"
          target="_blank"
        >
          Formularz kontaktowy
        </a>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
