import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
//About Style.js

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
        transition: 'background-color 0.2s ease, box-shadow 0.10s ease',
        '&:hover': {
            backgroundColor: "#3F51B5",
            boxShadow: `5px 4px 20px -4px #3F51B5, -5px -4px 20px -4px #3F51B5`,
        },
    },
    cardContent: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100px',
        backgroundColor: '#ffffff',
        color: 'black',
        transition: 'background-color 0.2s ease, color 0.2s ease',
    },

    container: {
        padding: "1px",
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
    button: {
        position: 'relative',
    },
    serviceSection: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(5),
        textAlign: "center",
    },
    image: {
        width: "550px",
        height: "350px",
        marginRight: theme.spacing(2),
        // borderRadius: "50%",
        objectFit: "cover",
    },
    flip: {
        transform: 'rotateY(180deg)',
    },

    imageContainer: {
        perspective: '1000px',
        display: 'flex',
        flexDirection: 'column', // Add this line
    },

    imageWrapper: {
        width: '150px',
        height: '150px',
        marginRight: theme.spacing(2),
        objectFit: 'cover',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.5s ease',
        marginTop: theme.spacing(2), // Add this line
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
