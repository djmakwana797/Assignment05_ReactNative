import { View, Text, StyleSheet } from 'react-native';
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addComment, setCommentDetail } from '../../redux/actions';
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { NavigationContainer } from '@react-navigation/native';

const AddComment = ({navigation}) => {

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [body, setbody] = useState('');

    const dispatch = useDispatch()

    const saveComment = () => {
        if(name == '') alert('Please enter your name')
        else if(email == '') alert('Plese enter your email')
        else if(body == '') alert('Please enter comment')
        else{
            dispatch(setCommentDetail({name,email,body}))
            dispatch(addComment())
            navigation.goBack()
        }
    }

    return (
        <View style={styles.container}>
            <CustomInput label="Name" placeholder="Enter your name" value={name} setValue={setname}/>
            <CustomInput label="Email" placeholder="Enter your email" value={email} setValue={setemail}/>
            <CustomInput label="Comment" placeholder="Enter comment" multiline={true} number={3} value={body} setValue={setbody}/>
            <CustomButton text="ADD" onPress={saveComment}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#efefef',
        padding : 10,
    }
})

export default AddComment;
