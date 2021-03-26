import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const homeStyles = StyleSheet.create({
  carouselContentContainer: {
    flex: 1,
    backgroundColor: "#000",
    height: 720,
    paddingHorizontal: 14,
  },
  imageBg: {
    flex: 1,
    height: null,
    width: null,
    opacity: 1,
    justifyContent: "flex-start",
  },
  searchBoxContainer: {
    backgroundColor: "#fff",
    elevation: 10,
    borderRadius: 4,
    marginVertical: 40,
    width: "95%",
    flexDirection: "row",
    alignSelf: "center",
  },
  searchBox: {
    padding: 12,
    paddingLeft: 20,
    fontSize: 16,
  },
  searchBoxIcon: {
    position: "absolute",
    right: 20,
    top: 14,
  },
  carouselContainerView: {
    width: "100%",
    height: 350,
    justifyContent: "center",
    alignItems: "center",
  },
  carousel: {
    flex: 1,
    overflow: "visible",
  },
  carouselImage: {
    width: 200,
    height: 320,
    borderRadius: 10,
    alignSelf: "center",
    backgroundColor: "rgba(0,0,0,0.9)",
  },
  carouselText: {
    padding: 14,
    color: "white",
    position: "absolute",
    bottom: 10,
    left: 2,
    fontWeight: "bold",
  },
  carouselIcon: {
    position: "absolute",
    top: 15,
    right: 15,
  },
});

export const movieStyles = StyleSheet.create({
  movieInfoContainer: {
    flexDirection: "row",
    marginTop: 16,
    justifyContent: "space-between",
    width: Dimensions.get("window").width - 14,
  },
  movieName: {
    paddingLeft: 14,
    color: "white",
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 6
  },
  movieStat: {
    paddingLeft: 14,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    opacity: 0.8
  },
  playIconContainer: {
    backgroundColor: '#212121',
    padding: 18,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    borderWidth: 4,
    borderColor: 'rgba(2, 173, 148, 0.2)',
    marginBottom: 14
  }
});
