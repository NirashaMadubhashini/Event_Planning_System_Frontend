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
        alignItems: "center",
    },
    appBarRight: {
        display: "flex",
        alignItems: "center",
    },
    menuTitle: {
        marginLeft: theme.spacing(1),
        color: "#FFF",
        textDecoration: "none",
    },
    appBarButton: {
        marginLeft: theme.spacing(2),
        color: "#FFF",
        textDecoration: "none",
        "&:hover": {
            color: theme.palette.secondary.main,
        },
    },
    icon: {
        fontSize: "30px",
        color: theme.palette.augmentColor.main,
        marginBottom: theme.spacing(1),
    },
    pageContent: {
        margin: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
    paper1: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    },
    paper2: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    },
    paper3: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        background: "linear-gradient(45deg, #FF9800 30%, #FFEB3B 90%)",
    },
    paper4: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        background: "linear-gradient(45deg, #4CAF50 30%, #8BC34A 90%)",
    },
    responsiveTable: {
        "@media (max-width: 576px)": {
            overflowX: "auto",
        },
    },
    table: {
        minWidth: 650,
    },
    menuList: {
        backgroundColor: theme.palette.primary.main,
        color: "#FFF",
        borderRadius: 0,
        marginTop: theme.spacing(2),
    },
}));

export default useStyles;
