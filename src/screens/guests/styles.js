import { StyleSheet } from 'react-native';
import search from '../../../assets/data/search';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    object: {
        fontWeight: 'bold', 
        color: '#030436',
        fontSize: 16,
    },
    button: {
        width: 36,
        height: 36,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#030436',
    },
    btnIcon: {
        fontSize: 22, 
        color: '#e1e8e9',
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: '#e1e8e9',
    },
    search: {
        marginBottom: 20,
        backgroundColor: '#030436',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        marginHorizontal: 20,
        borderRadius: 10,
    }
});

export default styles;
