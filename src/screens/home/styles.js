import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    background: {
    width: '100%',
    height: 500,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  title: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#030436',
    marginLeft: 25,
  },
  button: {
    backgroundColor: '#030436',
    width: '60%',
    height: 50,
    borderRadius: 10,
    marginTop: 25,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e1e8e9',
  },
  searchBtn: {
    backgroundColor: '#e1e8e9',
    height: 60,
    width: Dimensions.get('screen').width - 20,
    borderRadius: 30,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    zIndex: 100,
    elevation: 100,
  },
  SearchBtnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#030436',
    marginLeft: 8,
  },
});

export default styles;
