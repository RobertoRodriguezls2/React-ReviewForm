import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutPage from "./pages/AboutPage"
import { FeebackProvider } from "./context/FeedbackContext"
import AboutIconLink from "./components/AboutIconLink"

function App() {





    return (
        <>
            <FeebackProvider>
                <Router>
                    <Header />
                    <div className="container">
                        <Routes>
                            <Route exact path='/' element={
                                <>
                                    <FeedbackForm />
                                    <FeedbackStats />
                                    <FeedbackList />
                                </>
                            }>
                            </Route>

                            <Route path="/about" element={<AboutPage />} />
                        </Routes>
                        <AboutIconLink />
                    </div>
                </Router>
            </FeebackProvider>


        </>
    )
}

export default App