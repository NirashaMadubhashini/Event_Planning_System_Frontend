import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    appBar: {
        backgroundColor: theme.palette.primary.main,
        boxShadow: "none",
    },
    appBarContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    appBarLeft: {
        display: "flex",
        alignItems: "center",
    },
    appBarRight: {
        display: "flex",
        alignItems: "center",
    },
    menuTitle: {
        marginLeft: theme.spacing(2),
        color: "#fff",
        textDecoration: "none",
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
    icon: {
        marginBottom: theme.spacing(1),
        fontSize: "48px",
    },
}));

export default useStyles;
