import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Form from './components/Form';
import TaskList from './components/TaskList';

function App() {
  return (
    <Router>
      <div className="container" style={{margin: 50, width: 550}}>
        <Form></Form>
        <Routes>
          <Route path="/services" element={<TaskList/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
