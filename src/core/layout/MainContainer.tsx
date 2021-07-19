import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import PageContainer from "./PageContainer";

const MainContainer = (props: any) => {
    return (
        <Router>
                    <Header></Header>
                    <PageContainer></PageContainer>
        </Router>
    )
}
export default MainContainer;