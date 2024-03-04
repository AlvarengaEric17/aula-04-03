import { StyleSheet, Text, View, Image } from 'react-native'
import Santos from '../assets/imagens/santos.png'

export default function MeuTime(props) {
    return (
        <View>
            {/* <Image source={Santos} alt='Logo do Santos' style={estilo.imagem} /> */}
            <Image source={Santos} alt='Foto de um Honda Civic' style={estilo.imagem} />


            <Text style={estilo.texto}>{props.nome}</Text>
            <Text style={estilo.texto}>{props.posicao}</Text>
        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    texto: {
        margin: 20,
        fontSize: 23,
        textAlign: 'center'

    },
    imagem: {
        marginTop: 20,
        width: 300,
        height: 300,
        borderRadius: 20
    }
})