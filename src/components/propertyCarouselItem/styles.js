import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 120,
        padding: 5,
    },
    innerContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden'
    },
    image: {
        height: '100%',
        aspectRatio: 1,
        resizeMode: 'cover',
    },
    info: {
        flex: 1,
        marginHorizontal: 10
    },
    bedrooms: {
        marginVertical: 10,
        color: '#030436',
    },
    title: {
        fontSize: 15,
        color: '#030436',
        fontWeight: 'bold',
    },
    prices: {
        fontSize: 15,
        marginVertical: 10,
        textAlign: 'right',
    },
    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through',
    },
    price: {
        fontWeight: 'bold',
        color: '#030436',
    },
});

export default styles;
