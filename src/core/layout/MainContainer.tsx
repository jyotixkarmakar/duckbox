import Header from "./Header";

const MainContainer = (props:any) => { 
    const {parentAppName}= props;
    return (
        <div>Hello {props.parentUserName}, welcome to {parentAppName}
        <Header></Header>
        </div>
    )
}
export default MainContainer;