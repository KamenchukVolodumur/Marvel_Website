import decoration from '../../resources/img/vision.png';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ComicsPage, MainPage, SingleComicPage, Page404 } from "../pages"
import AppHeader from "../appHeader/AppHeader"
const App = () => {
    return (

        <Router >
            <div className="app" >
                <AppHeader />
                <main>
                    <Routes>
                        <Route path="/" element={<MainPage/>}></Route>
                        <Route path='/comics' element={<ComicsPage/>}></Route> 
                        <Route path='/comics/:comicId' element={<SingleComicPage/>}></Route> 
                        <Route path='*' element={<Page404/>}></Route>                   
                    </Routes>
                </main>

            </div>
        </Router>

    )
}

export default App;