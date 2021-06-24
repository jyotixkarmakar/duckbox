const MainContainer = (props:any) => { 
    const {parentAppName}= props;
    return (
        <div>Hello {props.parentUserName}, welcome to {parentAppName}</div>
    )
}
export default MainContainer;