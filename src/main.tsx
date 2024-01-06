import React from 'react'
import ReactDOM from 'react-dom/client'
import { Stack } from './stackflow';
import "@stackflow/plugin-basic-ui/index.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Stack />
  </React.StrictMode>,
)
