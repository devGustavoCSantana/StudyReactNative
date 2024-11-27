import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    ScrollView: {
        paddingBottom: 20
    },
    
    header: {
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#000000"
    },

    logoTopo: {
        width: "40%",
        height: 150,
        resizeMode: "contain"
    },

    body: {
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#fffff"
    },

    banner: {
        width: "100%",
        marginBottom: 20,
        resizeMode: "cover"
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20
    },

    bodyContent: {
        paddingBottom: 20
    },

    footer: {
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#000000"
    },

    logoBase: {
        width: "20%",
        height: 150,
        resizeMode: "contain"
    }
});

export default styles;