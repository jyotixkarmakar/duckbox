import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles({
    topBar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "linear-gradient(90.05deg, rgb(9, 17, 37) -2.5%, rgb(33, 61, 133) 100.83%)",
        height: "44px",
        fontWeight: 500,
        color: "#fff",
        fontSize: "18px"
    },
    catagoryContainer:{
        background: "rgb(247, 253, 250)"
    },
    essential:{
        padding:"50px 0"
    },
    catagoryCard:{
        height:"200px"
    }
});