import React, { Component } from "react";
import { SafeAreaView, View, StatusBar, ScrollView, Text, Image } from "react-native";
import styles from "./assets/styles/styles_aula05";
 
class App extends Component {
    render() {
        return(
            <SafeAreaView>
                <StatusBar barStyle="light-content" backgroundColor="#6200ea" />
                <ScrollView style={ styles.ScrollView }>
                    <View style={ styles.header }>
                        <Image
                            source={ require("./assets/images/logo-topo.png") }
                            style={ styles.logoTopo }
                        />
                    </View>
                    <View style={ styles.body }>
                        <Image
                            source={ require("./assets/images/banner.jpg") }
                            style={ styles.banner }
                        />
                        <Text style={ styles.title }>Titulo de primeiro nível</Text>

                        {/* replica a view Lorem 8X */}
                        <View style={ styles.bodyContent }>
                            <Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur incidunt libero amet ipsum. Similique blanditiis asperiores, ea dolorem eligendi ab vel nulla! Facilis, iste ea delectus rem iusto et!
                            </Text>
                        </View>
                        <View style={ styles.bodyContent }>
                            <Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur incidunt libero amet ipsum. Similique blanditiis asperiores, ea dolorem eligendi ab vel nulla! Facilis, iste ea delectus rem iusto et!
                            </Text>
                        </View>
                        <View style={ styles.bodyContent }>
                            <Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur incidunt libero amet ipsum. Similique blanditiis asperiores, ea dolorem eligendi ab vel nulla! Facilis, iste ea delectus rem iusto et!
                            </Text>
                        </View>
                        <View style={ styles.bodyContent }>
                            <Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur incidunt libero amet ipsum. Similique blanditiis asperiores, ea dolorem eligendi ab vel nulla! Facilis, iste ea delectus rem iusto et!
                            </Text>
                        </View>
                        <View style={ styles.bodyContent }>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur incidunt libero amet ipsum. Similique blanditiis asperiores,
                                ea dolorem eligendi ab vel nulla! Facilis, iste ea delectus rem iusto et!</Text>
                        </View>
                        <View style={ styles.bodyContent }>
                            <Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur incidunt libero amet ipsum. Similique blanditiis asperiores, ea dolorem eligendi ab vel nulla! Facilis, iste ea delectus rem iusto et!
                            </Text>
                        </View>
                        <View style={ styles.bodyContent }>
                            <Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur incidunt libero amet ipsum. Similique blanditiis asperiores, ea dolorem eligendi ab vel nulla! Facilis, iste ea delectus rem iusto et!
                            </Text>
                        </View>
                        <View style={ styles.bodyContent }>
                            <Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur incidunt libero amet ipsum. Similique blanditiis asperiores, ea dolorem eligendi ab vel nulla! Facilis, iste ea delectus rem iusto et!
                            </Text>
                        </View>
 
                    </View>
                    <View style={ styles.footer }>
                        <Image
                            source={ require("./assets/images/logo-base.png") }
                            style={ styles.logoBase }
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
 
export default App;