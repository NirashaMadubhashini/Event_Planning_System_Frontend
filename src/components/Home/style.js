import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
//Home Style.js
function getRandomWebSafeColor() {
    const webSafeColors = [
        "00", "33", "66", "99", "CC", "FF"
    ];

    const getRandomColorCode = () =>
        webSafeColors[Math.floor(Math.random() * webSafeColors.length)];

    return `#${getRandomColorCode()}${getRandomColorCode()}${getRandomColorCode()}`;
}

export default makeStyles((theme) => ({
    menuTitle: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    cardContent: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100px',
        backgroundColor: theme.palette.primary.main, // Set background color to primary color
        color: '#ffffff', // Set text color to white
        transition: 'background-color 0.2s ease, color 0.2s ease', // Add transition for smooth color change
        '&:hover': {
            backgroundColor: '#ffffff', // Change background color to white on hover
            color: '#0000ff', // Change text color to blue on hover
        },
    },

    container: {
        padding: 0,
    },

    cardMedia: {
        height: 0,
        paddingTop: '56.25%', // 16:9 aspect ratio
    },

    appBar: {
        borderRadius: 3,
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
    titleSection: {
        flex: "1 0 10%",
    },

    button: {
        position: 'relative',
    },
    blankCardTop: {
        backgroundColor: '#FFFFFF',
        height: '150px', // Adjust the height according to your desired size
        marginBottom: theme.spacing(2),
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
