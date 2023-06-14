import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import ResumeForm from './ResumeForm';
import ResumeView from './ResumeView';

const ResumeBuilder = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/edit">Edit Resume</Link>
            </li>
            <li>
              <Link to="/view">View Resume</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/edit">
            <ResumeForm />
          </Route>
          <Route path="/view">
            <ResumeView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default ResumeBuilder;
