import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Movements({ data }: { data: any }) {
  const [showValue, setShowValue] = useState(false);

  return (
    <TouchableOpacity style={style.container} onPress={ () => setShowValue(!showValue)}>
      <Text style={style.date}>{data.date}</Text>
      <View style={style.content}>
        <Text style={style.title}>{data.title}</Text>
        {showValue ? (
          <Text style={data.type === 1 ? style.value : style.expenses}>
            {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
          </Text>
        ) : (
          <View style={style.hidden}></View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    marginBottom: 5,
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#dadada",
    backgroundColor: "#fff",
    paddingEnd: 5,
    paddingStart: 5,
    borderRadius: 5,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  date: {
    fontWeight: "bold",
    color: "#838080",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    color: "#2ecc71",
  },
  expenses: {
    fontSize: 16,
    color: "#e74c3c",
  },
  hidden: {
    marginTop: 6,
    width: 80,
    height: 15,
    backgroundColor: "#dadada",
    borderRadius: 3,
  },
});
