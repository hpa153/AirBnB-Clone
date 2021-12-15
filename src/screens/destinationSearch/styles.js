import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '100%',
    backgroundColor: '#fff'
  },
  input: {
    fontSize: 18,
    marginBottom: 20,
    color: '#030436',
    borderColor: '#e1e8e9',
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 15,
  },
  result: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#e1e8e9',
  },
  iconContainer: {
    backgroundColor: '#e1e8e9',
    padding: 7,
    borderRadius: 10,
    marginRight: 15,
  },
  locationText: {
    color: '#030436',
    fontSize: 16,
  }
});

export default styles;
