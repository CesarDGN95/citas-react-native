import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  SafeAreaView,
  Pressable,
} from 'react-native';

//MIS COMPONENTES
import Formulario from './src/components/Formulario';


// COMPONENTE PRINCIPAL
const App = () => {

  const [modal, setModal] = useState(false)

  
  // ABRIR MODAL
  const nuevaCitaHandler = () => {
    setModal(true)
  }

  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.title}>Administrador de Citas {" "}
        <Text style={styles.tituloBold}>Veterinaria</Text> 
      </Text>

      <Pressable onPress={nuevaCitaHandler} style={styles.btnNuevaCita}> 
        <Text style={styles.btnTextNuevaCita}>Nueva Cita</Text>
      </Pressable>

      {/* MODAL FORMULARIO */}
      <Formulario modal={modal} setModal={setModal}/>
    </SafeAreaView>
    
    
    
  );
};

//ESTILOS
const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "#F3F4F6",
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "#374151",
    fontWeight: "600",
    marginTop: 10
  },
  tituloBold: {
    fontWeight: "900",
    color: "#6D28D9"
  },
  btnNuevaCita: {
    backgroundColor: "#6D28D9",
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10
  },
  btnTextNuevaCita: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 18,
    fontWeight: "900",
    textTransform: "uppercase"
  }
})


export default App;
