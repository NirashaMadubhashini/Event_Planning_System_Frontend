import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: "none",
        borderBottom: `1px solid ${theme.palette.divider}`,
        [theme.breakpoints.up("sm")]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    },
    title: {
        flexGrow: 1,
    },
    categoryButton: {
        marginRight: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    serviceCard: {
        marginBottom: theme.spacing(2),
    },
    selectedCard: {
        marginBottom: theme.spacing(2),
        backgroundColor: theme.palette.background.default,
    },
    vendorCard: {
        marginBottom: theme.spacing(2),
    },
}));

export default useStyles;
