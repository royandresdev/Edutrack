import './App.css'
import MyRoutes from './routes/routes.jsx';
import { Provider } from 'react-redux'
import { store } from './app/store.js';

function App() {
  return (
    <>
      <Provider store={store}>
        <MyRoutes />
      </Provider>
    </>
  )
}

export default App
