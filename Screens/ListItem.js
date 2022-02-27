import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
} from "react-native";

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
}) {
  return (
    <View style={styles.container}>
      {IconComponent}
      {image && <Image style={styles.image} source={image} />}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: 'red',
  },
  title: {
    fontWeight: "500",
    color: 'white',
  },
});

export default ListItem;