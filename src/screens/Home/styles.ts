import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121214',
        paddingTop: 64,
        paddingHorizontal: 12
      },
      title: {
            color: '#fff',
            fontSize: 32,
            fontWeight: 'bold'
      },
      input: {
        flex: 1,
        height: 56,
        backgroundColor: '#1f1e25',
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        marginRight: 12
      },
      buttonText: {
        color: '#fff',
        fontSize: 24
      },
      button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31cf67',
        alignItems:'center',
        justifyContent:'center'
      },
      form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 16,
        marginBottom: 32
      },
      listEmptyText: {
        color: '#fff',
        fontSize:14,
        textAlign: 'center'
      }

})