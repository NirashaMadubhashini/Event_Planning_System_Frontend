import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    menuTitle: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
        transition: "background-color 0.2s ease, box-shadow 0.10s ease",
        "&:hover": {
            backgroundColor: "#3F51B5",
            boxShadow: `5px 4px 20px -4px #3F51B5, -5px -4px 20px -4px #3F51B5`,
        },
    },
    cardContent: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100px",
        backgroundColor: "#ffffff",
        color: "black",
        transition: "background-color 0.2s ease, color 0.2s ease",
    },
    container: {
        padding: "1px",
    },
    appBar: {
        borderRadius: 3,
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
    },
    appBarButton: {
        color: "white",
        marginLeft: theme.spacing(1),
        [theme.breakpoints.down("xs")]: {
            marginLeft: theme.spacing(0.5),
        },
    },
    serviceSection: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(3),
        textAlign: "center",
    },
    cardMedia: {
        height: 0,
        paddingTop: "56.25%", // 16:9 aspect ratio
    },
    image: {
        marginLeft: "10px",
        marginTop: "5px",
        maxWidth: "100%",
        maxHeight: "100%",
    },
}));
