import React from 'react';

// Example of a functional component for the task
function Task() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid" style={{ padding: '20px 40px' }}>
        <div className="row">
          <LeftColumn />
          <RightColumn />
        </div>
      </div>
      <FooterScripts />
    </div>
  );
}

// Example of separate components for different sections

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">💻 Git tasks!</a>
    </div>
  </nav>
);

const LeftColumn = () => (
  <div className="col">
    <h1>Given</h1>
    <img src="graph.png" alt="Graph illustration" />
    {/* Other content */}
  </div>
);

const RightColumn = () => (
  <div className="col">
    <h1>Tasks</h1>
    <ol>
      <li>Task 1</li>
      <li>Task 2</li>
      {/* Dynamic list items */}
    </ol>
    {/* Other content */}
  </div>
);

const FooterScripts = () => (
  <div>
    {/* jQuery and Bootstrap JS */}
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossOrigin="anonymous"
    ></script>
  </div>
);

export default Task;
