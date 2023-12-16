import { Routes, Route } from 'react-router-dom'
import HomePage from './AnimateLanding/HomePage'
import "./App.css";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
        </Route>
      </Routes>
    </>
  )

}

export default App;
