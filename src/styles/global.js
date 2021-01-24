import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#6545D8',
        padding: 10,
        borderRadius: 10,
        width: '60%',
        left: '20%',
        marginTop: '3%',
        marginBottom: '3%',
    },
    main: {
        flex: 1,
        backgroundColor: '#23232D',
        color: '#f0f0f0',
    },
    textBox: {
        textAlign: 'left',
        justifyContent: 'flex-start',
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
    },
    secondary: {
        backgroundColor:"#505066",
        borderRadius:8,
        marginRight:16,
        marginLeft:16,
        marginTop:12,
        padding:8
    },
    tertiary: {
        backgroundColor:"#505066",
        borderRadius:8,
        marginRight:16,
        marginLeft:16,
        marginTop:16,
        padding:0
    },
    picker:{
        backgroundColor:"#505066",
        width:150,
        height:50,
        color:'#f0f0f0',
        fontSize:16,
    },
    textLabel:{
        color: '#f0f0f0',
        fontSize:16,
        fontWeight:"bold",
    },
    tabNavigation:{
        backgroundColor: '#6545D8',
    }
  });