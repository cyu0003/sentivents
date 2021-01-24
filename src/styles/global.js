import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#6545D8',
        padding: 10,
        borderRadius: 10,
        width: '60%',
        left: '20%',
    },
    main: {
        flex: 1,
        backgroundColor: '#23232D',
        color: '#f0f0f0',
    },
    textBox: {
        textAlign: 'left',
        justifyContent: 'flex-start',
        borderColor:'#000',
        borderWidth: 1,
        height: '60%',
        width: '80%',
        left: '10%',
        marginBottom: '20%',
        top: '5%',
        color: '#f0f0f0',
    },
    drawerStyle: {
        backgroundColor: '#000',
    },
    drawerTabStyle: {
        backgroundColor: '#0f0f0f'
    },
    text: {
        color: '#f0f0f0',
    }
  });