import { makeStyles } from "@material-ui/core/styles";

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
        alignItems: "center",
        justifyContent: "center",
    },
    cardContent: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        minHeight: "100px",
        color: "black",
        transition: "background-color 0.2s ease, box-shadow 0.10s ease",
        "&:hover": {
            backgroundColor: "#ffffff",
        },
    },
    container: {
        padding: "1px",
    },
    cardMedia: {
        height: 0,
        paddingTop: "56.25%", // 16:9 aspect ratio
    },
    appBar: {
        borderRadius: 0,
        padding: "0px 20px",
        marginBottom: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            padding: "0px 0px",
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
    menuItem: {
        "&:hover": {
            textDecoration: "underline",
        },
    },
    titleSection: {
        flex: "1 0 10%",
    },
    headerName: {
        fontWeight: "bold",
    },
    button: {
        position: "relative",
    },
    adminDashboardSection: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(3),
        textAlign: "center",
    },
    updatebtn: {
        marginLeft:"60px",

    },
    [theme.breakpoints.down("xs")]: {
        appBar: {
            padding: "0px",
        },
        appBarLeft: {
            flex: "1",
        },
        appBarRight: {
            display: "none",
        },
        appBarTitle: {
            display: "none",
        },
        menuTitle: {
            fontSize: "1.5rem",
        },
    },
}));
