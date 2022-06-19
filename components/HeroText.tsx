import {
    createStyles,
    Title,
    Text,
    Button,
    Container,
    useMantineTheme,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
    wrapper: {
        position: "relative",
        padding: 60,

        "@media (max-width: 755px)": {
            padding: 50,
        },
    },

    title: {
        textAlign: "center",
        lineHeight: 1,
        fontSize: 40,

        "@media (max-width: 520px)": {
            fontSize: 28,
            textAlign: "left",
        },
    },

    description: {
        textAlign: "center",
        paddingTop: 10,

        "@media (max-width: 520px)": {
            textAlign: "left",
        },
    },

    controls: {
        marginTop: 20,
        display: "flex",
        justifyContent: "center",
        gap: "1rem",

        "@media (max-width: 520px)": {
            flexDirection: "column",
            gap: "0.5rem",
        },
    },

    control: {
        fontWeight: 400,
        "@media (max-width: 520px)": {
            height: 42,
        },
    },
}));

const HeroText = () => {
    const { classes } = useStyles();
    const theme = useMantineTheme();

    return (
        <Container className={classes.wrapper} size={1400}>
            <Title className={classes.title}>
                The{" "}
                <Text
                    component='span'
                    variant='gradient'
                    gradient={{ from: "cyan", to: "indigo" }}
                    inherit
                >
                    Observer
                </Text>{" "}
                is now available for any stack
            </Title>

            <Container p={0} size={600}>
                <Text size='lg' color='dimmed' className={classes.description}>
                    Monitor your web content for all your Users free of hassle.
                </Text>
            </Container>

            <div className={classes.controls}>
                <Button
                    className={classes.control}
                    size='lg'
                    variant='default'
                    color='gray'
                >
                    Learn more
                </Button>
                <Button
                    className={classes.control}
                    variant='gradient'
                    gradient={{ from: "indigo", to: "cyan" }}
                    size='lg'
                >
                    Contact Us
                </Button>
            </div>
        </Container>
    );
};

export default HeroText;
