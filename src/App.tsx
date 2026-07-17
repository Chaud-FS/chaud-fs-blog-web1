import { Suspense, lazy, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Background } from './components/Background'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

const Home = lazy(() => import('./pages/Home'))
const Projects = lazy(() => import('./pages/Projects'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const Resources = lazy(() => import('./pages/Resources'))
const ResourcePost = lazy(() => import('./pages/ResourcePost'))
const Feed = lazy(() => import('./pages/Feed'))
const About = lazy(() => import('./pages/About'))
const NotFound = lazy(() => import('./pages/NotFound'))

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])
  return null
}

function RouteFallback() {
  return <div className="route-fallback" aria-hidden="true" />
}

export default function App() {
  return (
    <>
      <Background />
      <ScrollManager />
      <Navbar />
      <main>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/:slug" element={<ResourcePost />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
