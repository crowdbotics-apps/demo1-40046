import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1Copy = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
    backgroundColor: "#bb8383"
  }
});
export default Untitled1Copy;