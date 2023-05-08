import React, { useState, useEffect } from "react";
import {
    AppBar,
    Button,
    Toolbar,
    Typography,
    Card,
    CardContent,
    IconButton,
    Menu,
    MenuItem,
    Grid,
    Container,
    InputAdornment,
    TextField,
} from "@material-ui/core";
import useStyles from "./style";
import { Search, ArrowDropDown } from "@mui/icons-material";

function getRandomWebSafeColor() {
    const webSafeColors = [
        "00", "33", "66", "99", "CC", "FF"
    ];

    const getRandomColorCode = () =>
        webSafeColors[Math.floor(Math.random() * webSafeColors.length)];

    return `#${getRandomColorCode()}${getRandomColorCode()}${getRandomColorCode()}`;
}

//this is the home menu
const Home = () => {
const [packages,setPackages] = useState([
    {
        id: 1,
        name: "Wedding Celebrations",
        hours: 8,
        guests: 200,
        services: [
            "Venue rental",
            "Catering",
            "Flowers",
            "Photography",
            "DJ",
            "Transportation",
        ],
        image:
            "https://www.happywedding.app/blog/wp-content/uploads/2019/11/Creative-trending-ideas-for-outdoor-wedding-venues-1024x583.jpg",
        price: 5000,
    },
    {
        id: 2,
        name: "Engagement",
        hours: 4,
        guests: 100,
        services: ["Venue rental", "Catering", "Flowers", "Photography"],
        image:
            "https://bridebox.com/wp-content/uploads/2015/01/bride-and-groom-wedding-rings.jpg",
        price: 2500,
    },
    {
        id: 3,
        name: "Birthday Parties",
        hours: 3,
        guests: 50,
        services: ["Venue rental", "Catering", "Decorations", "Entertainment"],
        image:
            "https://www.lumina.com.ph/assets/news-and-blogs-photos/Celebrate-Birthday-at-Home-with-Family-5-Simple-Ideas-and-Themes/OG-Celebrate-Birthday-at-Home-with-Family-5-Simple-Ideas-and-Themes.webp",
        price: 1000,
    },
    {
        id: 4,
        name: "Anniversary Celebrations",
        hours: 6,
        guests: 150,
        services: [
            "Venue rental",
            "Catering",
            "Audio/Visual Equipment",
            "Speakers",
            "Networking Activities",
        ],
        image:
            "https://i.ytimg.com/vi/V5Rrf3DpjxE/maxresdefault.jpg",
        price: 3500,
    },
    {
        id: 5,
        name: "Baby Shower",
        hours: 2,
        guests: 30,
        services: ["Venue rental", "Catering", "Decorations", "Games and Activities"],
        image:
            "https://media.theeverymom.com/wp-content/uploads/2021/06/03141932/baby-shower-themes-the-everymom-gallery.jpg",
        price: 800,
    },
    {
        id: 6,
        name: "Graduation Party",
        hours: 5,
        guests: 200,
        services: [
            "Venue rental",
            "Catering",
            "Silent Auction",
            "Raffle",
            "Entertainment",
        ],
        image:
            "https://s.abcnews.com/images/US/graduation-01-as-gty-200513_hpMain_1x1_992.jpg",
        price: 4500,
    },
    {
        id: 7,
        name: "Batch party",
        hours: 3,
        guests: 50,
        services: ["Venue rental", "Catering", "Decorations", "Entertainment"],
        image:
            "https://ts-production.imgix.net/images/mobile-cover-uploaded/2892ac0c-74ba-4f4e-8b6a-d7e7422f9230.jpg?auto=compress,format&w=800&h=450",
        price: 1200,
    },
    {
        id: 8,
        name: "Party",
        hours: 3,
        guests: 50,
        services: ["Venue rental", "Catering", "Decorations", "Entertainment"],
        image:
            "https://img.traveltriangle.com/blog/wp-content/uploads/2019/09/New-Year-Parties-In-Bali.jpg",
        price: 1200,
    },
    {
        id: 9,
        name: "Music Festival",
        hours: 12,
        guests: 5000,
        services: ["Stage and Lighting setup",
            "Sound system",
            "Artists",
            "Security",
            "Food and Beverage vendors"],
        image:
            "https://b1850159.smushcdn.com/1850159/wp-content/uploads/2021/08/best-festivals-usa-ultra-music-festival-1030x713.jpg?lossy=1&strip=1&webp=1",
        price: 5000,
    },
    {
        id: 10,
        name: "Dance performances",
        hours: 2,
        guests: 200,
        services: ["Venue rental",
            "Choreography",
            "Costumes",
            "Music"],
        image:
            "https://images.squarespace-cdn.com/content/v1/59566d23d482e91cad320fd9/1594769057808-WHO8O3NJGLZHPM7TDX5R/ballet-chicago-nutcracker_3814+web.jpg?format=1000w",
        price: 1200,
    },
    {
        id: 11,
        name: "Conference",
        hours: 8,
        guests: 500,
        services: ["Venue rental",
            "Catering",
            "Audio/Visual Equipment",
            "Speakers",
            "Networking Activities"],
        image:
            "https://images-eur.cvent.com/pr53/6a03f092600d4fd7b17308d9c0fb8bf9/beedfc5e5aa6bb934a4c6bccef6608ea/7fd7380177ad4c92a0916df31d1e07e0/9e7730605ddb469c14a53fa7a925f670!_!5efa45f3e4ce3801b26349988b74b909.jpeg?f=webp",
        price: 1000,
    },
    {
        id: 12,
        name: "Art exhibition",
        hours: 4,
        guests: 100,
        services: ["Venue rental",
            "Artists",
            "Artwork setup and display"],
        image:
            "https://www.eou.edu/wp-content/uploads/2023/02/Resized952022022595170211-2-1024x576.jpg",
        price: 1200,
    },
    {
        id: 13,
        name: "Book exhibition",
        hours: 6,
        guests: 200,
        services: ["Venue rental",
            "Publishers",
            "Author book signings"],
        image:
            "https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2022/07/26/ad02fce6-4a77-4290-87e6-799570deb71c_b00a9c4f.jpg",
        price: 1200,
    },
    {
        id: 14,
        name: "Career fair",
        hours: 4,
        guests: 500,
        services: [ "Venue rental",
            "Employers",
            "Resume reviews",
            "Networking Activities"],
        image:
            "https://cdn.uconnectlabs.com/wp-content/uploads/sites/7/2017/09/SpringCareerFair_08-840x560.jpg?v=23427",
        price: 2500,
    },
    {
        id: 15,
        name: "Stage drama",
        hours: 3,
        guests: 100,
        services: ["Venue rental",
            "Script writing",
            "Actors",
            "Costumes",
            "Set design and props",
            "Lighting and Sound setup"],
        image:
            "https://upload.wikimedia.org/wikipedia/commons/8/8b/Chinese_artistes_perform_at_the_auditorium_2.JPG",
        price: 2000,
    },
    {
        id: 16,
        name: "Workshops",
        hours: 2,
        guests: 20,
        services: ["Venue rental",
            "Audio/Visual Equipment",
            "Speaker",
            "Training Materials"],
        image:
            "https://cdn.wizeline.com/uploads/2019/04/Wizeline-Workshops-Jan-19-newsletter.jpg",
        price: 1000,
    }
])


    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [appBarPosition, setAppBarPosition] = useState("relative");
    const [clickedButtons, setClickedButtons] = useState({});
    const [clickedCategory, setClickedCategory] = useState("");


    const handleButtonClick = (id) => {
        setClickedButtons((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    const handleCategoryClick = (category) => {
        setClickedCategory((prevCategory) => (prevCategory === category ? "" : category));
    };

    const services = packages[0].services;


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setAppBarPosition("fixed");
            } else {
                setAppBarPosition("relative");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);



    return (

        <Container maxWidth="xl" className={classes.container}>
            <AppBar className={classes.appBar} position={appBarPosition} color="primary">
                <Toolbar >
                    <div className={classes.appBarContainer}>
                        <div className={classes.appBarLeft}>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                aria-controls="simple-menu"
                                aria-haspopup="true"
                                onClick={handleClick}
                            >
                                <Typography variant="h6" className={classes.menuTitle}>
                                    Event's
                                </Typography>
                                <ArrowDropDown />
                            </IconButton>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose} className={classes.menuItem} >Wedding Celebrations</MenuItem>
                                <MenuItem onClick={handleClose}>Engagement</MenuItem>
                                <MenuItem onClick={handleClose}>Birthday Parties</MenuItem>
                                <MenuItem onClick={handleClose}>Anniversary Celebrations</MenuItem>
                                <MenuItem onClick={handleClose}>Baby Shower</MenuItem>
                            </Menu>
                            <TextField
                                variant="outlined"
                                color="inherit"
                                size="small"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Search />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                        <div className={classes.appBarRight}>
                            <Button
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("Home")}
                                style={{
                                    color: clickedCategory === "Home" ? "#F50057" : "",
                                }}
                            >
                                Home
                            </Button>
                            <Button
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("About")}
                                style={{
                                    color: clickedCategory === "About" ? "#F50057" : "",
                                }}
                            >
                                About
                            </Button>
                            <Button
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("Packages")}
                                style={{
                                    color: clickedCategory === "Packages" ? "#F50057" : "",
                                }}
                            >
                                Packages
                            </Button>
                            <Button
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("Bookings")}
                                style={{
                                    color: clickedCategory === "Bookings" ? "#F50057" : "",
                                }}
                            >
                                Bookings
                            </Button>
                            <Button
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("Gallery")}
                                style={{
                                    color: clickedCategory === "Gallery" ? "#F50057" : "",
                                }}
                            >
                                Gallery
                            </Button>
                            <Button
                                className={classes.appBarButton}
                                onClick={() => handleCategoryClick("Contact")}
                                style={{
                                    color: clickedCategory === "Contact" ? "#F50057" : "",
                                }}
                            >
                                Contact
                            </Button>
                        </div>

                    </div>
                </Toolbar>
            </AppBar>
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={2}>
                    {packages.map((packages, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={packages.id}>
                            <Card className={classes.card}>
                                <div className={classes.cardHeader} style={{backgroundImage: `url(${packages.image})`}}>
                                    {/*<Typography variant="h5" gutterBottom>*/}
                                    {/*    {book.title}*/}
                                    {/*</Typography>*/}
                                </div>
                                <CardContent className={classes.cardContent}>
                                    <Typography variant="h5" style={{ marginBottom: '0.5rem' }}>{packages.name}</Typography>
                                    <Typography variant="body1">{packages.hours} Hours</Typography>
                                    <Typography variant="body1">Up to {packages.guests} Persons</Typography>
                                    <Typography variant="body1">From $ {packages.price}</Typography>
                                    {packages.services && (
                                        <div>
                                            <Typography variant="h6"></Typography>
                                            <ul>
                                                {packages.services.map((service, index) => (
                                                    <li key={index}>{service}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    <Button
                                        variant="contained"
                                        color={clickedButtons[packages.id] ? "default" : "secondary"}
                                        style={{
                                            backgroundColor: clickedButtons[packages.id] ? "#00FF00" : "",
                                        }}
                                        onClick={() => handleButtonClick(packages.id)}
                                        className={classes.button}
                                    >
                                        Add to Cart
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

        </Container>
    );
}

export default Home
