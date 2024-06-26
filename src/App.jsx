import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/auth-context";

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
import PostPage from "./components/pages/blog/PostPage/PostPage";
import ManagePostPage from "./components/pages/blog/ManagePostPage";
import EstatesPage from "./components/pages/estates/EstatesPage";
import Modal from "./components/UI/Modal";
import ManageEstatePage from "./components/pages/estates/ManageEstatePage";

function App() {
  return (
    <AuthProvider>
      <div className="min-h-[100vh] flex flex-col justify-between relative bg-[#1a1a1a]">
        <Modal />

        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/estates" element={<EstatesPage />} />
          <Route path="/estates/new" element={<ManageEstatePage />} />
          <Route path="/estates/edit/:id" element={<ManageEstatePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/post/:id" element={<PostPage />} />
          <Route path="/blog/post/new" element={<ManagePostPage />} />
          <Route path="/blog/post/edit/:id" element={<ManagePostPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        <div className="fixed bottom-0 left-0 z-50 flex gap-[10px]">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdLZNN0iXmXa1f7jYmj1f_s6nK2VQl_NkKrtxMM57RbSV8kCA/viewform"
            className="rounded-tr-lg py-2 px-4 button shadow-none hover:bg-white"
            target="_blank"
          >
            Formularz kontaktowy
          </a>
          <a
            className="font-bold mx-auto bg-black text-white rounded-t-lg px-[16px] text-[27px] flex items-center duration-300 hover:bg-white hover:text-black shadow-sm shadow-black border-2 border-black  cursor-poiner"
            href="https://www.facebook.com/profile.php?id=61560185744127"
            target="_blank"
          >
            f
          </a>
        </div>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
