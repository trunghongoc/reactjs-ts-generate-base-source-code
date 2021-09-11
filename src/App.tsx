import { BrowserRouter as Router } from 'react-router-dom'
import { Layout } from 'layouts'
import { BackgroundTasks } from 'components/BackgroundTasks'

function App(): JSX.Element {
  return (
    <Router>
      <BackgroundTasks />
      <Layout />
    </Router>
  )
}

export default App
