import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    menuTitle: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        textDecoration: "none",
        color: "inherit",
    },
    card: {
        cursor: "pointer",
        height: "80%",
        backgroundColor: "#ffffff",
        borderColor: "black",
        transition: "background-color 0.2s ease, box-shadow 0.10s ease, transform 0.2s",
        "&:hover": {
            backgroundColor: "#3F51B5",
            boxShadow: `5px 4px 20px -4px #212B36, -5px -4px 20px -4px #212B36`,
            transform: "scale(1.03)",
        },
        textAlign: "left",
        marginBottom: theme.spacing(2), // Add margin bottom for spacing
    },
    cardContent: {
        minHeight: "50px",
        backgroundColor: "rgb(63,81,181)",
        color: "white",
        transition: "background-color 0.2s ease, color 0.2s ease",
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
    button: {
        position: "relative",
    },
    serviceSection: {
        paddingBottom: theme.spacing(2),
        textAlign: "center",
    },
    serviceSection2: {

        paddingBottom: theme.spacing(3),
        textAlign: "center",
    },
    packageContainer: {
        marginBottom: theme.spacing(4),
    },
    packageCard: {
        height: "100%",
        backgroundColor: "#F5F5F5",
        color: "#333333",
        cursor: "pointer",
        transition: "background-color 0.2s ease",
        // "&:hover": {
        //     backgroundColor: "#3F51B5",
        // },
    },
    selectedCard: {
        // backgroundColor: "#3F51B5",
        boxShadow: `5px 4px 20px -4px #3F51B5, -5px -4px 20px -4px #3F51B5`,
    },
    vendorCard: {
        marginBottom: theme.spacing(3),
        marginLeft: theme.spacing(2),
        backgroundColor: "#CCCCCC",
        color: "#333333",
        cursor: "pointer",
    },
    vendorContainer: {
        // marginTop: theme.spacing(2),
        marginLeft: theme.spacing(2),
    },
    vendorTitle: {
        marginBottom: theme.spacing(2),
    },
    packageButton: {
        marginTop: theme.spacing(2),
    },

    // responsive
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
