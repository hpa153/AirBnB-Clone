import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },

  bedrooms: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  description: {
    fontSize: 22,
    lineHeight: 26,
    color: '#030436',
    fontWeight: 'bold',
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
  totalPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
    color: '#030436',
  },
  detailedDescription: {
    marginVertical: 20,
    fontSize: 16,
    lineHeight: 24,
    color: '#030436',
  }
});

export default styles;
