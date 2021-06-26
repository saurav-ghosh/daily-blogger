import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import BlogDetail from "./Components/BlogDetail/BlogDetail";
import Footer from "./Components/Home/Footer";
import Header from "./Components/Home/Header";
import Home from "./Components/Home/Home";
import NewBlog from "./Components/NewBlog/NewBlog";

function App() {
    return (
        <Router>
            <Header />
            <div className="container">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/blogDetail/:id">
                        <BlogDetail />
                    </Route>
                    <Route path="/newBlog">
                        <NewBlog />
                    </Route>
                </Switch>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
