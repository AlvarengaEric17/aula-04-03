import { StyleSheet, Text, View, Image } from 'react-native';
import Foto from '../assets/imagens/civic.jpg'
import Gif from '../assets/imagens/civic_gif.gif'

export default function Laranja(props) {
    return (
        <View style={estilo.container}>
            <Image source={Foto} alt='Foto de um Honda Civic' style={estilo.imagem} />
            <Image source={Gif} alt='Gif de um Civic' style={estilo.imagem} />
            <Text style={estilo.texto}>{props.materia}</Text>
            <Text style={estilo.texto}>{props.atividade}</Text>

        </View>
    );
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
    },
})


