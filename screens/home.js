import React, { useRef, useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StatusBar,
  ImageBackground,
  TextInput,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Carousel from "react-native-anchor-carousel";
import { FontAwesome5, Feather, MaterialIcons } from "@expo/vector-icons";
import { galleryMock, backgroundMock, listMock } from "../mock";
import { styles, homeStyles, movieStyles } from "./styles";

const Home = () => {
  const [background, setBackground] = useState(backgroundMock);
  const [gallery, setGallery] = useState(galleryMock);
  const [list, setList] = useState(listMock);

  const carouselRef = useRef(null);

  const { width, height } = Dimensions.get("window");

  const renderItems = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            carouselRef.current.scrollToIndex(index);
            setBackground({
              uri: item.image,
              name: item.title,
              stat: item.released,
              desc: item.desc,
            });
          }}
        >
          <Image
            source={{ uri: item.image }}
            style={homeStyles.carouselImage}
          />
          <Text style={homeStyles.carouselText}>{item.title}</Text>
          <MaterialIcons
            name="library-add"
            size={30}
            color="white"
            style={homeStyles.carouselIcon}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={homeStyles.carouselContentContainer}>
        <View style={{ ...StyleSheet.absoluteFill, backgroundColor: "#000" }}>
          <ImageBackground
            source={{ uri: background.uri }}
            style={homeStyles.imageBg}
            blurRadius={10}
          >
            <View style={homeStyles.searchBoxContainer}>
              <TextInput
                placeholder="Search Movies"
                placeholderTextColor="#666"
                style={homeStyles.searchBox}
              />
              <Feather
                name="search"
                size={22}
                color="#666"
                style={homeStyles.searchBoxIcon}
              />
            </View>
            <Text
              style={{
                color: "white",
                fontSize: 24,
                fontWeight: "bold",
                marginLeft: 10,
                marginVertical: 10,
              }}
            >
              Top Picks this week
            </Text>
            <View style={homeStyles.carouselContainerView}>
              <Carousel
                style={homeStyles.carousel}
                data={gallery}
                renderItem={renderItems}
                itemWidth={200}
                containerWidth={width - 20}
                ref={carouselRef}
                inActiveOpacity={0.4}
              />
            </View>
            <View style={movieStyles.movieInfoContainer}>
              <View style={{ justifyContent: "center" }}>
                <Text style={movieStyles.movieName}>{background.name}</Text>
                <Text style={movieStyles.movieStat}>{background.stat}</Text>
              </View>
              <TouchableOpacity style={movieStyles.playIconContainer}>
                <FontAwesome5
                  name="play"
                  size={22}
                  color="#02ad94"
                  style={{ marginLeft: 4 }}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
