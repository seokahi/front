import './App.css'
import Homepage from './pages/homepage/homepage'
import Login from './pages/login/Login'

function App() {
  const user = {
    login: true,
    id:"서가희",
    nickname:"cutehi"
  }
  return (
    <div>
      {user.login? <Homepage id={user.id} nickname={user.nickname}/>: <Login/>}
      
    </div>
  );
}

export default App;