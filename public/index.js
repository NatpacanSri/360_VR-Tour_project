var viewer = new PhotoSphereViewer.Viewer({
  container: document.querySelector("#viewer"),
  panorama: "./img/img1.jpg",
  panoData:{
    fullWidth: 10858,
    fullHeight: 5429,
    croppedX: 700,
    croppedY: 762,
    croppedWidth: 10858,
    croppedHeight: 3906,
  },
   
  plugins: [
    [
      PhotoSphereViewer.MarkersPlugin,
      {
        markers: [
          {
            id: "goto2",
            position: { yaw: "50deg", pitch: "0deg" },
            imageLayer: "./icon/go.png",
            size: { width: 100, height: 100 },
            tooltip: "go to 2",
          },
          {
            id: "m1",
            position: { yaw: "80deg", pitch: "0deg" },
            imageLayer: "./icon/marker.png",
            size: { width: 100, height: 100 },
            tooltip: "mK",
            content: document.getElementById("a1").innerHTML,
          },
        ],
      },
    ],
  ],
});

const markersPlugin = viewer.getPlugin(PhotoSphereViewer.MarkersPlugin);
let visibleRangePlugin = viewer.getPlugin(PhotoSphereViewer.VisibleRangePlugin);

markersPlugin.addEventListener("select-marker", ({ marker }) => {
  console.log(marker.id + " click");
  if (marker.id == "goto1") {
    viewer.setPanorama("./img/img1.jpg");
    markersPlugin.clearMarkers();
    markersPlugin.addMarker({
      id: "goto2",
      position: { yaw: "50deg", pitch: "0deg" },
      imageLayer: "./icon/go.png",
      size: { width: 100, height: 100 },
      tooltip: "go to 2",
    });
  }
  if (marker.id == "goto2") {
    viewer.setPanorama("./img/img2.jpg");
    markersPlugin.clearMarkers();
    
    markersPlugin.addMarker({
      id: "goto1",
      position: { yaw: "50deg", pitch: "0deg" },
      imageLayer: "./icon/go.png",
      size: { width: 100, height: 100 },
      tooltip: "go to 1",
    });
  }

});
