import './App.css';
import {Button} from './components/button/Button';

function App() {
  return (
    <div className="login-wrap">
      <h2>Login</h2>
      <div className="form">
        <div className="form-field">
          <input type="text" placeholder="Username" />
          <p className="error-text">Please check</p>
        </div>
        <div className="form-field error">
          <input type="password" placeholder="Password" />
          <p className="error-text">Please check</p>
        </div>
        <Button text={'Submit'} />
        <a href="#">
          <p> Cancel </p>
        </a>
      </div>
    </div>
  );
}

export default App;
