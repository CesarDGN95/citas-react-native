import React from 'react'
import {
    Text,
    Modal,
    StyleSheet,
    View
  } from 'react-native';

const Formulario = ({modal, setModal}) => {
  return (
    <View style={styles.contenido}>
        <Modal
            animationType="slide"
            visible={modal}
        >
            <Text style={styles.title}>
                Nueva {" "}
                <Text style={styles.titleBold}>
                    Cita
                </Text>
            </Text>
        </Modal>
    </View>
  )
}

const styles = StyleSheet.create ({
    contenido: {

    },
    title: {
        fontSize: 30,
        fintWeight: "600",
        textAlign: "center",
        marginTop: 30
    },
    titleBold: {
        fontWeight: "bold"
    }
})

export default Formulario