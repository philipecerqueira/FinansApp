import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default function Movements({data}:{data:any}) {
    return (
        <TouchableOpacity style={style.container}>
            <Text style={style.date}>{data.date}</Text>
            <View style={style.content}>
                <Text style={style.title}>{data.title}</Text>
                <Text style={data.type === 1 ? style.value : style.expenses}>{data.value}</Text>
            </View>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    container:{
        marginBottom: 5,
        paddingTop: 15,
        paddingBottom: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: '#dadada',
        backgroundColor: '#fff',
        paddingEnd: 5,
        paddingStart: 5,
        borderRadius: 5,
    },
    content:{
        flexDirection: "row",
        justifyContent:"space-between",
    },
    date:{
        fontWeight: "bold",
        color:'#838080',
    },
    title:{
        fontWeight: "bold",
        fontSize: 16,
    },
    value:{
        fontSize: 16,
        color: '#2ecc71'
    },
    expenses:{
        fontSize: 16,
        color: '#e74c3c',
    }
})