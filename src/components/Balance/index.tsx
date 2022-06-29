import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Balance({ saldo, gasto }: { saldo: any; gasto: any }) {
  const [showValue, setShowValue] = useState(false);
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={() => setShowValue(!showValue)}
    >
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        {showValue ? (
          <View style={styles.content}>
            <Text style={styles.currencySymbol}>R$</Text>
            <Text style={styles.balance}>{saldo}</Text>
          </View>
        ) : (
          <View style={styles.hidden}></View>
        )}
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        {showValue ? (
          <View style={styles.content}>
            <Text style={styles.currencySymbol}>R$</Text>
            <Text style={styles.expenses}>{gasto}</Text>
          </View>
        ) : (
          <View style={styles.hidden}></View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingStart: 15,
    paddingEnd: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -30,
    marginStart: 15,
    marginEnd: 15,
    borderRadius: 5,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99,
  },
  item: {},
  itemTitle: {
    fontSize: 20,
    color: "#7A7776",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  currencySymbol: {
    color: "#dadada",
    marginRight: 5,
  },
  balance: {
    fontSize: 22,
    color: "#2ecc71",
  },
  expenses: {
    fontSize: 22,
    color: "#e74c3c",
  },
  hidden: {
    marginTop: 6,
    width: 110,
    height: 20,
    backgroundColor: "#dadada",
    borderRadius: 3,
  },
});
