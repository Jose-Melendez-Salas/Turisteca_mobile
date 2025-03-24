// styles.js
import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 20,  
    backgroundColor: '#f0f0f0', 
  },
  titleContainer: {
    backgroundColor: '#f7ebf0', 
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#409223',
  },
  card: {
    backgroundColor: '#9DC68E',
    borderRadius: 12,
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 8,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    marginBottom: 6,
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likesText: {
    marginLeft: 6,
    fontSize: 14,
  },
});

export default styles;
