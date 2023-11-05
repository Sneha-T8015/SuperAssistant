import './App.css';
import PageRender from './PageRender';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and Route

function App() {
  return (
    // <Router>
    //   <div className="bg-blue-300">
    //   <Routes>
    //   <Route exact path="/" component={<PageRender/>} />
      <PageRender/>
       
    //   {/* </Routes>
    //   </div>
    // </Router> */}
  );
}

export default App;
