import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F9FF',
    padding: 25,
    justifyContent: 'center',
  },

  emoji: {
    fontSize: 80,
    textAlign: 'center',
    marginBottom: 15,
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0369A1',
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 15,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 35,
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 10,
    marginTop: 15,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#BAE6FD',
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    color: '#1E293B',
  },

  status: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 25,
    color: '#334155',
  },
});

export default styles;
