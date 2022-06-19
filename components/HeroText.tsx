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
        // border: "1px solid hotpink",
        position: "relative",
        paddingBlock: 30,
        paddingInline: 0,

        "@media (max-width: 755px)": {
            paddingBlock: 40,
        },
    },

    title: {
        textAlign: "center",
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
                <Text component='span' variant="gradient" gradient={{ from: 'cyan', to: 'indigo' }} inherit>
                    Observer
                </Text>{" "}
                is now available for any stack
            </Title>

            <Container p={0} size={600}>
                <Text size='lg' color='dimmed' className={classes.description}>
                    Monitor free of hassle your web content for all your Users.
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
