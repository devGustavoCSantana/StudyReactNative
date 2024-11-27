/* 
    Importação dos módulos necessários do React e React Native
    React é necessário para criar componentes React 
    View e Text são componentes do React Native para exibir o conteúdo na tela  
*/
import React, { Component } from "react";
import { View, Text } from "react-native";

// Importação do arquivo de estilos 
import styles from "../assets/styles/styles_aula03";

/* 
    Definição da Class 'DetailsScreen', que é um componente de classe que herda de component 
    Permitindo que ele tenha recursos do React  
*/
class DetailsScreen extends Component {
    render() {
        return(

            /* 
                View é um contêiner que envolve outros elementos na tela  
                Estilo é aplicado à View a partir do arquivo de estilos   
            */
            <View style={ styles.container }>
                
                {/* Componente Text exibe o título na tela com estilo aplicado */}
                <Text style={ styles.title }>DETALHES!</Text>

                {/* texto da página de detalhes */}
                <Text style={ styles.text }>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Text> 
           </View>
        );
    }
}

/* 
    Exporta o componente DetailsScreen como exportação padrão deste arquivo 
    Isso permite que o componente seja importado sem a necessidade de chaves em outros arquivos   
*/
export default DetailsScreen;