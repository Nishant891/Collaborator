import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './global.css'
import {
  RecoilRoot,
} from 'recoil';
import { Toaster } from "@/components/ui/toaster"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <App/>
      <Toaster />
    </RecoilRoot>
  </React.StrictMode>,
)
