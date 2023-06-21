import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    menuTitle: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        textDecoration: "none",
        color: "inherit",
    },
    container: {
        padding: "1px",
    },
    cardMedia: {
        height: 0,
        paddingTop: '56.25%', // 16:9 aspect ratio
    },

    appBar: {
        borderRadius:0,
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
        position: 'relative',
    },
    title: {
        flexGrow: 1,
    },
    link: {
        textDecoration: "none",
        color: "inherit",
    },
    categoryCard: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
    },
    categoryButton: {
        marginBottom: theme.spacing(2),
        width: "100%",
    },
    serviceCard: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
    },
    serviceButton: {
        marginBottom: theme.spacing(2),
        width: "100%",
    },
    vendorCard: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
    },
    vendorInfoCard: {
        marginBottom: theme.spacing(2),
    },
    packageCard: {
        marginBottom: theme.spacing(2),
    },
    addButton: {
        marginTop: theme.spacing(1),
    },
    bookingCard: {
        marginBottom: theme.spacing(2),
    },
    selectedPackageCard: {
        marginBottom: theme.spacing(1),
    },
    removeButton: {
        marginTop: theme.spacing(1),
    },
    serviceName: {
        marginTop: theme.spacing(2),
    },
    totalPrice: {
        marginTop: theme.spacing(2),
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

export default useStyles;
