import { Routes, Route, } from "react-router-dom";

import {Menu, Body} from './components'
import {ListItems, ImportFile, Home} from './pages'

function App() {

  return (
  <>
  <Menu />
  <Body>
    <Routes>
      <Route path="list-items" element={<ListItems />} />
      <Route path="import-file" element={<ImportFile />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Body>
</>)
}

export default App
