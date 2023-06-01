import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        padding: "1px",
    },
    appBar: {
        padding: "0px 20px",
        marginBottom: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            padding: "0px 0px",
        },
        backgroundColor: theme.palette.primary.main,
        boxShadow: "none",
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
    menuTitle: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        textDecoration: "none",
        color: "inherit",
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
    menuList: {
        minWidth: "150px",
    },
    pageContent: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
    paper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(3),
        textAlign: "center",
        color: "#3F51B5",
        cursor: "pointer",
        "&:hover": {
            color: "#F50057",
        },
    },
    paper1: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(3),
        textAlign: "center",
        color: "#3F51B5",
        cursor: "pointer",
        "&:hover": {
            color: "#F50057",
        },
    },
    paper2: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(3),
        textAlign: "center",
        color: "#3F51B5",
        cursor: "pointer",
        "&:hover": {
            color: "#F50057",
        },
    },
    paper3: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(3),
        textAlign: "center",
        color: "#3F51B5",
        cursor: "pointer",
        "&:hover": {
            color: "#F50057",
        },
    },
    paper4: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(3),
        textAlign: "center",
        color: "#3F51B5",
        cursor: "pointer",
        "&:hover": {
            color: "#F50057",
        },
    },
    icon: {
        fontSize: "50px",
        marginBottom: theme.spacing(1),
    },

// Add additional styles for smaller screens
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

export default useStyles;
