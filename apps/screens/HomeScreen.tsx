// Importando as dependencias do ReactJS e ReactNative
import React, { Component } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { NavigationProp } from "@react-navigation/native";

// Importação do arquivo de estilos 
import styles from "../assets/styles/styles_aula03";

/*
    Definição da interface Props, que descreve as propriedades que a classe HomeScreen irá receber 
    A propriedade navigation é do tipo "NavigationProp" e é usada para navegar entre as telas da aplicação
*/
interface Props {

    // A navegação é tipada com qualquer tipo de parâmetro (pode ser ajustado conforme a necessidade)
    navigation: NavigationProp<any>;
}

// Classe "HomeScreen" é uma tela de aplicativos, estende Component e recebe Props como tipo para as propriedades
class HomeScreen extends Component<Props> {
    render() {
        return(
            <View style={ styles.container }>

                {/* Componente Text exibe o título na tela */}
                <Text style={ styles.title }>
                    Bem-vindo ao APP - Senac Tito
                </Text>

                {/* Botão tradicional do React Native, quando for pressionado navega para a tela "Details" */}
                <Button

                    // Título do Botão
                    title="Ir para os Detalhes!"

                    // Navegação para a tela de Detalhes "Details"
                    onPress={ () => this.props.navigation.navigate("Details") }
                />

                {/*
                    Componente TouchableOpacity é mais flexível, usado para definir área clicável
                    Aqui, ele também navega para a tela "Details", e tem um comportamento de Botão
                */}
                <TouchableOpacity

                    // Aplica um estilo para o botão
                    style={ styles.button }

                    // Navegação para a tela de Detalhes "Details"
                    onPress={ () => this.props.navigation.navigate("Details") }
                >
                    
                    {/* Texto dentro do TouchableOpacity, com estilo de formatação do texto do botão */}
                    <Text style={ styles.buttonText }>
                        Ir para os Detalhes!
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

/* 
    Exporta o componente HomeScreen como exportação padrão deste arquivo 
    Isso permite que o componente seja importado sem a necessidade de chaves em outros arquivos   
*/
export default HomeScreen;