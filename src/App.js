import React, {Component} from 'react';
import PageWrapper from './components/PageWrapper';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
// import Services from './components/Common/Services';
// import Portfolio from './components/Common/Portfolio';
// import Team from './components/Common/Team';

// Pages
import About from './components/Pages/About';
import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import Login from './components/Pages/Login';

// Admin pages
import Dashboard from './components/Pages/Admin/Dashboard';
import Users from './components/Pages/Admin/Users';
import Posts from './components/Pages/Admin/Posts';
import AddPost from './components/Pages/Admin/AddPost';

// Wrappers
import AdminWrapper from './components/AdminWrapper';
import LoginWrapper from './components/LoginWrapper';



class App extends Component{
  render(){
    return (
      <div className="App">
        <Router>

            <Route
            path="/admin/users"
            render = {props=>{
              return(
                <div>
                  {this.props.auth.token ?
                    <AdminWrapper>
                      <Users />
                    </AdminWrapper>
                  : null
                  }
                </div>
              )
             }}
            />

          <Route
          exact={true}
            path="/admin/posts/add"
           render = {props=>{
            return(
              <div>
                {this.props.auth.token ?
                  <AdminWrapper>
                    <AddPost />
                  </AdminWrapper>
                : null
                }
              </div>
            )
           }}
            />
            
            <Route
            exact={true}
            path="/admin/posts"
           render = {props=>{
            return(
              <div>
                {this.props.auth.token ?
                  <AdminWrapper>
                    <Posts />
                  </AdminWrapper>
                : null
                }
              </div>
            )
           }}
            />
  
            <Route 
            exact={true}
            path="/admin"
            render = {props => {
              return(
                <div>
                  {this.props.auth.token ? 
                    <AdminWrapper>
                      <Dashboard />
                    </AdminWrapper>
                :
                    <LoginWrapper>
                        <Login />
                    </LoginWrapper>
                }
                </div>
              )
            }}
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

const mapStateToProps = state => {
  return{
    auth: state.auth
  }
}
const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
