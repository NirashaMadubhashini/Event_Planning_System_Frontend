import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
    menuTitle: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        textDecoration: "none",
        color: "inherit",
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    cardContent: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100px",
        backgroundColor: theme.palette.primary.main,
        color: "#ffffff",
        transition: "background-color 0.2s ease, box-shadow 0.10s ease",
        "&:hover": {
            backgroundColor: "#ffffff",
            color: "#0000ff",
        },
    },
    container: {
        padding: "1px",
    },
    cardMedia: {
        height: 0,
        paddingTop: "56.25%",
    },
    appBar: {
        borderRadius: 0,
        padding: "0px 20px",
        marginBottom: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            padding: "0px 0px",
        },
    },
    menuItem: {
        "&:hover": {
            textDecoration: "underline",
        },
    },
    appBarContainer: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
    },
    appBarLeft: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    appBarRight: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    appBarButton: {
        marginRight: theme.spacing(3),
        color: "#fff",
        textDecoration: "none",
        cursor: "pointer",
        "&:hover": {
            color: "#F50057",
        },
    },
    appBarSearch: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        color: "white",
        marginLeft: theme.spacing(2),
    },
    appBarTitle: {
        marginRight: theme.spacing(2),
    },
    titleSection: {
        flex: "1 0 10%",
    },
    headerName: {
        fontWeight: "bold",
    },
    button: {
        position: "relative",
        top: "-15px",
        marginLeft: "10px",
    },
    logoutButton: {
        marginLeft: "10px",
        marginRight: "10px",
    },
    menuList: {
        paddingTop: 0,
        paddingBottom: 0,
    },
    profileIcon: {
        marginRight: theme.spacing(1),
        color: deepPurple[500],
    },
    legend: {
        position: "absolute",
        top: "50px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
    },
}));
