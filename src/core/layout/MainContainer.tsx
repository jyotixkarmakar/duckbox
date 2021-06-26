import Header from "./Header";

const MainContainer = (props:any) => { 
    const {parentAppName}= props;
    let headOffice="New York"
    return (
        <div>Hello {props.parentUserName}, welcome to {parentAppName}
        <Header companyAddress={headOffice}></Header>
        </div>
    )
}
export default MainContainer;