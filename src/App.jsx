import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Apply from './pages/Apply'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </HashRouter>
  )
}
