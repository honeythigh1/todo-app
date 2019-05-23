import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput} from "react-native";

//포넌트는 터치하면 투명도가 증가한다. 그래서 버튼 대신 많이 사용된다. (투명도 있는 버튼? 이라고 생각하면 될듯)
const {width, height} = Dimensions.get("window");//디바이스의 길이 높이 (dimensions api가 제공해줌)

export default class ToDo extends Component{
    state = {
        isEditing: false,
        isCompleted:false,
        toDoValue:""
    }
    render(){
        const {isCompleted, isEditing, toDoValue} = this.state;
        const {text} = this.props;

        return(
            <View style={styles.container}>
                <View style={styles.column}>
                    <TouchableOpacity onPress={this._toggleComplete}>
                        <View style={[styles.circle, isCompleted? styles.completedCircle : styles.uncompletedCircle]} />
                    </TouchableOpacity>
                    {isEditing ? (<TextInput style={[styles.input, styles.text,isCompleted ?
                        styles.completedText : styles.text]} value={toDoValue} multiline={true} />) :  (
                        <Text style={[styles.text, isCompleted ?
                        styles.completedText : styles.text]}>
                            {text}
                    </Text>)}
                </View>
                    {isEditing ? (
                        <View style={styles.actions}>
                            <TouchableOpacity onPressOut={this._finishEditing}>
                                <View style={styles.actionContainer}>
                                    <Text style={styles.actionText}>✅</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={styles.actions}>
                            <TouchableOpacity onPressOut={this._startEditing}>
                                <View style={styles.actionContainer}>
                                    <Text style={styles.actionText}>✏️</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.actionContainer}>
                                    <Text style={styles.actionText}>❌</Text>
                                </View>
                            </TouchableOpacity>
                    </View>
                    )}
            </View>
        );
    }
    _toggleComplete = () => {
        this.setState(prevState =>{
            return({
                isCompleted: !prevState.isCompleted
            });
        });
    }
    _startEditing = () => {
        const { text } = this.props;   
        this.setState({
            isEditing : 1,
            toDoValue: text
        });
    }
    _finishEditing = () => {
        this.setState({
            isEditing : 0
        })
    }

    
    
}

const styles=StyleSheet.create({ // styleSheet.create()는 값이 순자인 객체를 반환
    container:{
        width: width - 50,
        borderBottomColor: "#bbb",
        borderBottomWidth:StyleSheet.hairlineWidth,
        flexDirection:"row", //flexDirection 을 row로 가질 경우 자식 뷰 컴포넌트의 확장이 가로 방향으로 확장
        alignItems:"center",
        justifyContent: "space-between"
    },
    completedCircle:{
        borderColor:"#bbb"
    },
    uncompletedCircle:{
        borderColor:"#f23657"
    },
    circle:{
        width:30,
        height:30,
        borderRadius:15, //borderRadius 는 항상 width 와 heigth 절반이어야 한다 
        borderColor:"red",
        borderWidth:3,
        marginRight:20
    },
    text:{
      marginVertical:30,
      fontWeight:"700",
      fontSize:25,
    },
    completedText : {
        textDecorationLine:"line-through",
        color: "#bbb"
    },
    column:{
        flexDirection:"row",
        alignItems:"center",
        width:width / 2,
        justifyContent: "space-between"
    },
    actions:{
        flexDirection:"row",
    },
    actionContainer : {
        marginVertical:10,
        marginHorizontal:10
    },
    input:{
        marginVertical:15
    }

});