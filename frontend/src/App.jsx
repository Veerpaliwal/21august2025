import './App.css'
import { Routes, Route } from 'react-router-dom'
import BusinessCategory from './Pages/BusinessCategory'
import BusinessListing from './Pages/BusinessListing'
import BusinessDetail from './Pages/BusinessDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<BusinessCategory />} />
      <Route path="/business_listing/:b_listing_id" element={<BusinessListing />} />
      <Route path="/business_detail/:b_detail_id" element={<BusinessDetail />} />
    </Routes>
  )
}

export default App;
