import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 25,
    flex: .12
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2E1A47',
    padding: 20,
    margin: 5,
    borderRadius: 50,
  },
  operationButton: {
    backgroundColor: '#8031A7',
  },
  operationColumn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 10, // Ajuste conforme necessário
  },
  buttonText: {
    color: '#fff',
    fontSize: 45,
  }
});
