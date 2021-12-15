import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#030436',
    marginVertical: 5,
  },
  rooms: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  description: {
    fontSize: 18,
    color: '#030436',
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
    color: '#030436',
  },
  oldPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  price: {
    fontWeight: 'bold',
  },
});

export default styles;
