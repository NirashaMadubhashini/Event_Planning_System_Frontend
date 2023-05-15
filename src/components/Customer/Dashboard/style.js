import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
//Dashboard Style.js

export default makeStyles((theme) => ({
    menuTitle: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    container: {
        position: 'relative',
        padding: "1px",
        height: '100vh',
    },

    appBar: {
        borderRadius: 3,
        padding: "0px 20px",
        marginBottom: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            padding: "0px 0px",
        },
        position: 'absolute',
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
    serviceSection: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(5),
        textAlign: "center",
    },
    cover: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
    },

    textGlowAnimation: {
        animation: '$glow 2s ease-in-out infinite',
        textShadow: '0 0 10px rgba(255, 255, 255, 0.7)',
    },

    '@keyframes glow': {
        '0%': {
            textShadow: '0 0 10px rgba(255, 255, 255, 0.7)',
        },
        '50%': {
            textShadow: '0 0 20px rgba(255, 255, 255, 0.9)',
        },
        '100%': {
            textShadow: '0 0 10px rgba(255, 255, 255, 0.7)',
        },
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
