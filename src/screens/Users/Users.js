import React, { useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, Pressable, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, setUserId } from '../../redux/actions';

const Users = ({ navigation }) => {
  const users = useSelector(state => state.userReducer)
  const isLoading = useSelector(state => state.loadingReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  const renderUsers = ({ item }) => (
    <Pressable style={({pressed})=>[{backgroundColor: pressed? '#ddd' : '#fff'}]} onPress={()=> {
      dispatch(setUserId(item.id))
      navigation.navigate('Posts', {name : item.name})} }
    >
      <View style={styles.user}>
        <Text style={styles.nametxt}>{item.name}</Text>
        <Text style={styles.emailtxt}>{item.email}</Text>
      </View>
    </Pressable>
  )

  const userSeparator = () => (
    <View style={styles.separator} />
  )

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size={'large'} color="#4169e1" />}
      {!isLoading && <FlatList
        data={users}
        renderItem={item => renderUsers(item)}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={userSeparator}
      />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  user: {
    margin: 10,
    padding: 5
  },
  nametxt: {
    fontSize: 20,
    color: 'darkslategrey'
  },
  emailtxt: {
    fontSize: 16,
    color: 'darkslategrey'
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "slategray",
  }
})

export default Users;
