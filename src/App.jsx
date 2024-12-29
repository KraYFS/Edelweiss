import Header from "./components/Header/Header"
import MainPage from "./pages/MainPage/MainPage"
import { BASE_URL } from './urls.ts'

function App() {

  console.log(BASE_URL);

  fetch(`${BASE_URL}/api/posts`).then(data => data.json()).then(data => console.log(data))

  return (
    <>
      <Header />
      <MainPage />
    </>
  )
}

export default App
