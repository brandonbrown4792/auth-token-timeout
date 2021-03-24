import { setAuthToken } from './auth/authTokenTimeout';

// setAuthToken should be called anytime you receive your auth token from the backend (login/signup/etc).
function App() {
  return (
    <div className="App">
      <button onClick={() => setAuthToken('auth-token')}>Set Auth Token</button>
    </div>
  )
}

export default App;
