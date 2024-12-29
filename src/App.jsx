import Header from "./components/Header/Header"
import MainPage from "./pages/MainPage/MainPage"
import { BASE_URL } from './urls.ts'

function App() {

  console.log(BASE_URL);

  return (
    <>
      <Header />
      <MainPage />
    </>
  )
}

export default App
