import React, { useState } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import Texto from './Texto'

export default props =>{

    const [num, setNum] = useState(props.numeroInicial)

    function inc() {
        setNum(num + 1)
    }
     return (
        <View>
            <Texto style={styles.num}>
                {num}
            </Texto>
            <Button
            title="Incrementar"
            onPress={inc} //Chamando a funcao inc 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    num: {
        textAlign: "center"
    }
})