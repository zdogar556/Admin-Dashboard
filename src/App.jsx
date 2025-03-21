import { Space } from 'antd'
import AppFooter from './Componet/AppFooter/AppFooter'
import AppHeader from './Componet/AppHeader/AppHeader'
import './App.css'
import AppSlideBar from './Componet/AppSlideBar/AppSlideBar'
import PageContent from './Componet/PageContent/PageContent'

function App() {
  

  return (
    <div className='App'>
      <AppHeader />
      <div className="SlidebarContent"> 
      <AppSlideBar></AppSlideBar>
      <PageContent></PageContent>
      </div>
      <AppFooter/>
    </div>
  )
}

export default App
