import ReactDOM from 'react-dom/client'

import App from './components/app'

const container = document.querySelector('.todoapp') as HTMLDivElement

const root = ReactDOM.createRoot(container)

root.render(<App />)
