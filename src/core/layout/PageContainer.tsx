import HomePage from "../../pages/homepage/HomePage";
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import { Page1 } from "../../pages/page1";
import { Page2 } from "../../pages/page2";
import CategoryDetails from "../../pages/CatagoryDetails/CategoryDetails";
const PageContainer = (props: any) => {
    return (
            <div>
                page Container
                <Switch>
                    <Route path="/p1">
                        <Page1 />
                    </Route>
                    <Route path="/p2">
                        <Page2 />
                    </Route>
                    <Route path="/catagory/:catagoryName">
                        <CategoryDetails />
                    </Route>
                    <Route path="/">
                        <HomePage></HomePage>
                    </Route>
                </Switch>

            </div>
    )
}
export default PageContainer;