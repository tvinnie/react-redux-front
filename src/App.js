import React, {Component} from 'react';
import PageWrapper from './components/PageWrapper';
import Home from './components/Pages/Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './components/Pages/About';
import Services from './components/Common/Services';
import Portfolio from './components/Common/Portfolio';
import Team from './components/Common/Team';
import Contact from './components/Pages/Contact';
import AdminWrapper from './components/AdminWrapper';
import Login from './components/Pages/Login';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Router>

  
            <Route 
            path="/admin"
            render = {props => (
              <AdminWrapper>
                <Login />
              </AdminWrapper>

              )}
            />

          
              <Route 
              exact={true}
              path="/"
              render={props => (
                <PageWrapper>
                  <Home {...props}/>
                </PageWrapper>
              )}
              />
              <Route 
              exact={true}
              path="/about"
              render={props => (
                <PageWrapper>
                  <About {...props}/>
                </PageWrapper>
              )}
              />

              {/* <Route
              path="/services"
              component={Services}
              />

              <Route 
              path="/portfolio"
              component={Portfolio}
              />

              <Route 
              path="/team"
              component={Team}
              /> */}

              <Route 
              exact={true}
              path="/contact"
              render={props => (
                <PageWrapper>
                  <Contact {...props}/>
                </PageWrapper>
              )}
              />
        </Router>
      </div>
    );
  }

}

export default App;
