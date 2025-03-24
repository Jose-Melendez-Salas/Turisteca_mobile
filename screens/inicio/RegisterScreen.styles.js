import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
    },
    title: {
      fontSize: 50,
      fontWeight: '700',
      color: '#1D2A32',
      marginBottom: 6,
    },
    subtitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000',
    },
    header: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 36,
    },
    form: {
      flexGrow: 1,
    },
    formAction: {
      marginTop: 4,
      marginBottom: 16,
    },
    formFooter: {
      paddingVertical: 24,
      fontSize: 15,
      fontWeight: '600',
      color: '#222',
      textAlign: 'center',
    },
    input: {
      marginBottom: 16,
    },
    inputLabel: {
      fontSize: 17,
      fontWeight: '600',
      color: '#222',
      marginBottom: 8,
    },
    inputControl: {
      height: 50,
      backgroundColor: '#fff',
      paddingHorizontal: 16,
      borderRadius: 12,
      fontSize: 15,
      fontWeight: '500',
      color: '#222',
      borderWidth: 1,
      borderColor: '#C9D3DB',
    },
    btn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderWidth: 1,
      backgroundColor: '#075eec',
      borderColor: '#075eec',
    },
    btnText: {
      fontSize: 18,
      lineHeight: 26,
      fontWeight: '600',
      color: '#fff',
    },
  });

  export default styles;
  