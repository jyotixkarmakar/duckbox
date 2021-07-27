import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    root:{
        padding:" 64px 0px",
        background: "linear-gradient(90.05deg, rgb(9, 17, 37) -2.5%, rgb(33, 61, 133) 100.83%)",
        
        },
    firstcontainer:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
       
        fontWeight: 500,
        color:"#FFFFFF",
        fontSize: "18px",
    },
    secondcontainer:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
       fontWeight: 500,
        color:"#fff",
        fontSize: "18px",
        paddingBottom:" 64px",
        marginBottom:"64px",
        borderBottom:"1px solid #fff"
},
thirdcontainer:{
        color:"#fff",
        fontSize: "18px",
},
linksstyle:{
    color:"#fff",
}
        
    
})