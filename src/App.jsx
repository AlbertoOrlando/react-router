import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"

import Home from "./pages/HomePage"
import About from "./pages/AboutPage"
import Contact from "./pages/ContactPage"
import Posts from "./pages/PostsPage"
import PostsCreatePage from "./pages/PostsCreatePage"
import PostsDetailPage from "./pages/PostsDetailPage"
import NotFoundPage from "./pages/NotFoundPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Home />} />
            {/* dirottamento se utente sbaglia path */}
            <Route path="/iposts" element={<Navigate to="/posts" />} />
            <Route path="/posts">
              <Route index element={<Posts />} />
              <Route path="create" element={<PostsCreatePage />} />
              <Route path=":id" element={<PostsDetailPage />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* errore per rotte non previste */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
