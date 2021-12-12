import 'antd/dist/antd.css';
import './App.css';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import  HeroPage  from './components/HeroPage';
import { Fragment , useEffect } from 'react';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import {Provider} from 'react-redux';
import store from './store';
import Alert from './components/Alert';
import setAuthToken from './utils/setAuthToken';
import {loadUser} from './actions/auth'
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import CreateProfile from './components/CreateProfile';
import AddExperience from './components/AddExperience';
import AddEducation from './components/AddEducation';
import Profiles from './components/dashboard/Profiles';
import Profile from './components/Profile/Profile';
import jobs from './jobs/Jobs';
import JobForm from './jobs/JobForm';
import Job from './jobs/Job';
import AdminPage from './components/admin/AdminPage';
import AdminRoute from './components/routing/AdminRoute';
import AdminLogin from './components/auth/AdminLogin';
import AdminRegister from './components/auth/AdminRegister';
import GDPR from './components/dashboard/GDPR';
import RegisterHR from './components/auth/RegisterHR';
import Resources from './components/resources/Resources';
import ResourcePage from './components/resources/ResourcePage';
import CookieConsent from "react-cookie-consent";
import { Link } from '@chakra-ui/layout';

if(localStorage.token){
    setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() =>{
    store.dispatch(loadUser())
  }, []);
  return (
    <Provider store={store}>
    <Router>
    <div className="app-container ">
        <Navbar/>
        <Route exact path='/' component={HeroPage} />
        <Alert/>
        <Switch>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/> 
          <Route exact path="/hrregister" component={RegisterHR}/>
          <PrivateRoute exact path='/dashboard' component={Dashboard}/> 
          <PrivateRoute exact path='/profile' component={CreateProfile}/>
          <Route exact path="/profiles" component={Profiles}/> 
          <Route exact path="/profile/:id" component={Profile}/> 
          <PrivateRoute exact path="/addexperience" component={AddExperience}/>
          <PrivateRoute exact path="/addeducation" component={AddEducation}/>
          <PrivateRoute exact path="/jobs" component={jobs}/>
          <PrivateRoute exact path="/createjob" component={JobForm}/>
          <PrivateRoute exact path="/jobs/:id" component={Job}/>
          <AdminRoute exact path="/admin" component={AdminPage}/>
          <Route exact path="/adminlogin" component={AdminLogin}/>
          <Route exact path="/admin_register" component={AdminRegister}/>
          <Route exact path="/gdpr" component={GDPR}/>
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/resources/:id" component={ResourcePage} />
        </Switch>
        <CookieConsent
          location="bottom"
          buttonText="Understood"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={360000}
        > 
          This website uses only essential cookies for Authentication and Authorization, no other cookies are used. To know more about our privacy please refer to our {<Link to="/gdpr" className="heropage-link">privacy policy</Link>}
        </CookieConsent>
    </div> 
    </Router>
    </Provider>
  );
}

export default App;
