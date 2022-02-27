import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, SectionList, TouchableHighlight } from 'react-native';
import ListItem from './ListItem';

function Home({ navigation }) {

  const [datas, setDatas] = useState([]);


  const getMoviesFromApiAsync = async () => {
    try {
      const response = await fetch(
        'http://my-json-server.typicode.com/shakeebM/StoriesApi/stories'
      );
      const json = await response.json();
      setDatas(json);
    } catch (error) {
      console.error(error);
    }
  };


      const getStatus = (userdata) => {
        const imagess = [];
        for (let i = 0; i < datas.length; i++) {
          if (userdata['id'] === datas[i]["profile"]["id"]) {
            if (datas[i]["image"] === null) {
              imagess.push("");
            } else {
              imagess.push(datas[i]["image"]);
            }
          }
        }
        navigation.navigate("Status", { image: imagess, name: userdata['name'], profile: userdata['image'] });
      }



      const getNewData = () => {
        const data = [];
        const tempdata = [];
        for (let i = 0; i < datas.length; i++) {
          if (datas[i]['read_status'] == false) {
            tempdata.push(datas[i]['profile']);
          }
        }

        const newData = Array.from(new Set(tempdata.map(JSON.stringify))).map(JSON.parse);

        for (let i = 0; i < newData.length; i++) {
          data.push(
            <TouchableHighlight
              onPress={() => getStatus(newData[i])}
              underlayColor="transparent">
              <ListItem
                image={{ uri: newData[i]['image'] }}
                title={newData[i]['name']}
              />
            </TouchableHighlight>
          );
        }

    return data;
  };

      const getViewedData = () => {
        const data = [];
        const tempdata = [];
        for (let i = 0; i < datas.length; i++) {
          if (datas[i]['read_status'] == true) {
            tempdata.push(datas[i]['profile']);
          }
        }

        const newData = Array.from(new Set(tempdata.map(JSON.stringify))).map(JSON.parse);

        for (let i = 0; i < newData.length; i++) {
          data.push(
            <TouchableHighlight
              onPress={() => getStatus(newData[i])}
              underlayColor="transparent">
              <ListItem
                image={{ uri: newData[i]['image'] }}
                title={newData[i]['name']}
              />
            </TouchableHighlight>
          );
        }

    return data;
  };

  useEffect(() => {
    getMoviesFromApiAsync();
  });

  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.header}  >
        <View style={styles.whatsStyle}>
          <Text style={styles.headerText}>whatsapp</Text>
        </View>
          <Text style={styles.tabText}>Status</Text>
      </View>
      <SectionList sections=
      {[
        { title: 'Recent updates', data: getNewData() },
        { title: 'Viewed updates', data: getViewedData() },
      ]}
       renderItem={({ item }) => <Text style={styles.item}>
        {item}
      </Text>}
        renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}
      </Text>
        }
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: '13%',
    paddingTop: 27,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#075E54'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    letterSpacing: 1,
  },
  tabText: {
    fontWeight: 'bold',
    fontSize: 20,
    color:'white',
    paddingBottom: 5,
    justifyContent: 'center',
  },
  whatsStyle: {
    paddingLeft: 10,
    paddingTop: 18,
    width: '100%'
  },
  title: {
    fontSize: 32,
  },
  viwedStatus: {
    paddingLeft: 10,
    backgroundColor: '#D3D3D3',
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#D3D3D3',
  },
  item: {
    backgroundColor: 'gray',
    padding: 10,

  }
});

export default Home;