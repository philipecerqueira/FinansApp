import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

//Components
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";

const list = [
  {
    id: 1,
    title: "Boleto conta luz",
    value: "300,90",
    date: "17/09/2022",
    type: 0, //despesa
  },
  {
    id: 2,
    title: "Pix Cliente xxxx",
    value: "2.500,00",
    date: "20/09/2022",
    type: 1, //entradas
  },
  {
    id: 3,
    title: "Salário",
    value: "7.200,00",
    date: "25/09/2022",
    type: 1, // entradas
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Philipe" />
      <Balance saldo="14.000,00" gasto="1.230,00" />
      <Text style={styles.title}>Últimas Movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F1F1",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    marginBottom: 15,
    color: "#686161",
  },
  list: {
    marginLeft: 15,
    marginRight: 15,
  },
});
