import React, { useRef, useState } from "react";
import { View, StyleSheet, Image, FlatList, Text, TouchableOpacity, Alert } from 'react-native'
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from "react-native-maps";

const Data = [{
  title: 'loc1',
  locat: {
    latitude: 28.6060756,
    longitude: 77.361914,
  }

},
{
  title: "loc2",

  locat: {
    latitude: 28.6038528,
    longitude: 77.3645477,
  }
},
{
  title: "loc3",
  locat: {
    latitude: 26.1821733,
    longitude: 84.1563368,
  }
},
{
  title: "loc4",
  locat: {
    latitude: 28.699581,
    longitude: 77.254943,
  }
},
{
  title: "loc5",
  locat: {
    latitude: 28.498288,
    longitude: 77.3759101,
  }
},
]

const route=[
  {
    latitude: 28.6060756,
    longitude: 77.361914,
  },
  {
    latitude: 28.6038528,
    longitude: 77.3645477,
  },
  {
    latitude: 26.1821733,
    longitude: 84.1563368,
  },
  {
    latitude: 28.699581,
    longitude: 77.254943,
  },
  {
    latitude: 28.498288,
    longitude: 77.3759101,
  }


]



const App = () => {
  const [mark, setMarker] = useState({
    latitude: 28.6038528, longitude: 77.3645477
  }
  )

  // const onRegionChange = (region) => {
  //   Alert.alert('got it')
  // }

  const _renderitem = ({ item }) => {
    return (
      <View style={styles.parent}>
        <TouchableOpacity onPressIn={() => {
          _maps.current.animateToRegion(
            {

              latitude: item.locat.latitude,
              longitude: item.locat.longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }, 1000
          )
          setMarker(item.locat)
        }}>
          <Text style={styles.titletext} >{item.title}</Text>

        </TouchableOpacity>

      </View>
    )
  }
  const _maps = useRef(null)
  return (
    <View style={styles.Container}>
      <MapView
        ref={_maps}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        maxZoomLevel={20}
        minZoomLevel={1}
        // mapType='satellite'
        //  onRegionChangeComplete={onRegionChange} //for central  coordinate

        // followsUserLocation={false}
        // zoomEnabled={false}
        zoomTapEnabled={true}
        // userInterfaceStyle={'dark'}
        showsUserLocation={true}
        showsMyLocationButton={true}
        // camera={{
        //   center: mark,
        //   pitch: 3,
        //   heading: 3,
        //   altitude: 14,
        //   zoom: 14
        // }}
      initialRegion={
        {
          latitude: 28.6060756,
          longitude: 77.361914,
          latitudeDelta: 0.35,
          longitudeDelta: 0.321,

        }
      }
      >
        <Marker coordinate={mark}

          pinColor={'green'}
          title="Appinventiv">
        </Marker>
        <Polyline
        coordinates={route}
        strokeWidth={1}
        strokeColor={'red'}
        />

        {/* <Marker coordinate = {{latitude:28.6038528,longitude:77.3645477}}
      title="hey got it"
      pinColor={'violet'}/> */}
      </MapView>


      <FlatList
        style={{ position: 'absolute', bottom: 30 }}
        data={Data}
        renderItem={_renderitem}
        horizontal
      />


    </View>
  )
}
export default App

const styles = StyleSheet.create(
  {
    Container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    parent: {
      marginHorizontal: 10,
      width: 40,
      borderRadius: 5,

    },
    titletext: {
      backgroundColor: 'aqua',
      borderRadius: 10,
      fontSize: 20
    },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,

    }
  }
)
