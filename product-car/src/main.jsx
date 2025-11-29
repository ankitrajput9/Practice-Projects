import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import { Storeprovider } from './context/Context.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Storeprovider>
    <App />
  </Storeprovider>
  </BrowserRouter>,
)
