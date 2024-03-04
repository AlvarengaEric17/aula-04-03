import Laranja from "./components/Laranja";

import { Text } from 'react-native'
import { SafeAreaView } from "react-native"
import MeuTime from "./components/MeuTime";

export default function App() {
  return (
    <SafeAreaView>
      {/* <Laranja materia="Carros" atividade="Civic G-10" /> */}
      <MeuTime nome="Santos" posicao="17°" />
    </SafeAreaView>
  )
}