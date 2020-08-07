//Criando o componente principal
// fazendo o import do react-native
import React from 'react' //Aqui importando o react
import {SafeAreaView,Text, StyleSheet} from 'react-native' //Aqui importando os jsx que iremos usar
//SafeAreaView é um jsx que coloca todo o conteudo dentro de uma area segura
//import Texto from './components/Texto' //Importando o componente Texto
import Contador from './components/Contador' //Importando o componente Contador


export default function () {
   return ( 
   <SafeAreaView style={styles.app}>
       <Contador numeroInicial={7} />
       <Contador numeroInicial={0} />
       {/*<Texto>Estou no App</Texto>*/}
    </SafeAreaView>
    )
}

//Uma boa pratica é nao colocar o styleSheet inLine e sim separadamente
const styles = StyleSheet.create({
    app:{
        flexGrow: 1, //O flexGrow ocupa toda a area da tela
        justifyContent: "center", //Alinhamento do texto no eixo Y
        alignItems: "center", //Alinhamento do texto no eixo X
    }
})