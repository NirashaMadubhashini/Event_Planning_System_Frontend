import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    menuTitle: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        textDecoration: "none",
        color: "inherit",
    },
    container: {
        position: "relative",
        padding: "1px",
        height: "100vh",
    },
    appBar: {
        borderRadius: 6,
        padding: "0px 20px",
        marginBottom: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            padding: "0px 0px",
        },
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
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
        color: "white",
        marginLeft: theme.spacing(2),
        textDecoration: "none",
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
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(5),
        textAlign: "center",
    },
    textGlowAnimation: {
        animation: "$glow 2s ease-in-out infinite",
        textShadow: "0 0 10px rgba(255, 255, 255, 0.7)",
    },
    "@keyframes glow": {
        "0%": {
            textShadow: "0 0 10px rgba(255, 255, 255, 0.7)",
        },
        "50%": {
            textShadow: "0 0 20px rgba(255, 255, 255, 0.9)",
        },
        "100%": {
            textShadow: "0 0 10px rgba(255, 255, 255, 0.7)",
        },
    },
    cardContainer: {
        display: "flex",
        justifyContent: "space-around",
        marginTop: "80px",
    },
    card: {
        padding: "60px",
        color: "white",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    },
    cardColor1: {
        background: "#CC66FF",
    },
    cardColor2: {
        background: "#FF6699",
    },
    cardColor3: {
        background: "#CC6666",
    },
    cardColor4: {
        background: "#FF6666",
    },
}));
