import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import PageContainer from "./PageContainer";

const MainContainer = (props: any) => {
    return (
        <Router>
                    <Header ></Header>
                    <PageContainer></PageContainer>
                    <Footer></Footer>
        </Router>
    )
}
export default MainContainer;