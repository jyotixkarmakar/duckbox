import Header from "./Header";
import PageContainer from "./PageContainer";

const MainContainer = (props:any) => { 
    const {parentAppName}= props;
    let headOffice="New York"
    return (
        <div>Hello {props.parentUserName}, welcome to {parentAppName}
        <Header companyAddress={headOffice}></Header>
        <PageContainer></PageContainer>
        </div>
    )
}
export default MainContainer;