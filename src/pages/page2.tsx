export const Page2=(props:any)=>{
    console.log(props)
    return <div>
        shopname: {props?.shopDetails?.name}
    </div>
}