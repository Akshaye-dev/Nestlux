module.exports = {
  dependencies: {
    "react-native-maps": {
      platforms: {
        android: {
          sourceDir: "./node_modules/react-native-maps/android",
          packageImportPath: "import com.rnmaps.maps.MapsPackage;",
          packageInstance: "new MapsPackage()",
        },
      },
    },
  },
};