import React from 'react'
import { Text } from 'react-native'

/*Aqui é uma forma de criar uma funcao
export default props => {
    return (
        <Text>

        </Text>
    )
}*/

//Aqui outra forma de criar funcao dentro de um componente
/*export default props => (
    <Text style={{
        fontSize: 50
    }}>
        Ola mundo
    </Text>
)*/

//Outra forma de criar componente, nesta forma vc modifica diretamente no componente principal
export default props => (
    <Text style={{
        fontSize: 50,
    ...(props.style || {})
    }}>
        {props.children}
    </Text>
)