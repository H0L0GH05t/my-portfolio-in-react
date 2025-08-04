import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import CodingProjectDetail from './components/projects/CodingProjectDetail';
import DesignProjectDetail from './components/projects/DesignProjectDetail';
import projectsData from './data/projectsData';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />

            {projectsData.map(project => (
              <Route
                key={project.id}
                path={`/projects/${project.id}`}
                element={
                  project.type === 'coding' ? (
                    <CodingProjectDetail project={project} />
                  ) : (
                    <DesignProjectDetail project={project} />
                  )
                }
              />
            ))}
            <Route path="*" element={<h2>404: Page Not Found</h2>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;