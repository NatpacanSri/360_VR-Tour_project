let s = 120


var viewer = new PhotoSphereViewer.Viewer({
  container: document.querySelector("#viewer"),
  panorama: "./img/img1.jpg",
  // panoData:{
  //   fullWidth: 10858,
  //   fullHeight: 5429,
  //   croppedX: 700,
  //   croppedY: 762,
  //   croppedWidth: 10858,
  //   croppedHeight: 3906,
  // },

  plugins: [
    [
      PhotoSphereViewer.MarkersPlugin,
      {
        markers: [
          {
            id: "goto2",
            position: { yaw: "88deg", pitch: "0deg" },
            imageLayer: "./icon/go.png",
            size: { width: s, height: s },
            tooltip: "go to 2",
          },
          {
            id: "m1-1",
            position: { yaw: "-15deg", pitch: "20deg" },
            imageLayer: "./icon/marker.png",
            size: { width: s, height: s },
            tooltip: "cp",
            content: document.getElementById("a1").innerHTML,
          },
          {
            id: "m1-2",
            position: { yaw: "-120deg", pitch: "10deg" },
            imageLayer: "./icon/marker.png",
            size: { width: s, height: s },
            tooltip: "ที่จอดรถมอไซต์",
            content: document.getElementById("a1").innerHTML,
          },
          {
            id: "m1-3",
            position: { yaw: "120deg", pitch: "20deg" },
            imageLayer: "./icon/marker.png",
            size: { width: s, height: s },
            tooltip: "ตึกอะไรสักอย่าง",
            content: document.getElementById("a1").innerHTML,
          },
          {
            id: "m1-4",
            position: { yaw: "80deg", pitch: "10deg" },
            imageLayer: "./icon/marker.png",
            size: { width: s, height: s },
            tooltip: "ตึกอะไรสักอย่าง2",
            content: document.getElementById("a1").innerHTML,
          },
          {
            id: "m1-5",
            position: { yaw: "20deg", pitch: "5deg" },
            imageLayer: "./icon/marker.png",
            size: { width: s, height: s },
            tooltip: "ทางไปโรงอาหารมนุษ",
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
      position: { yaw: "88deg", pitch: "0deg" },
      imageLayer: "./icon/go.png",
      size: { width: s, height: s },
      tooltip: "go to 2",
    });

    markersPlugin.addMarker({
      id: "m1-1",
      position: { yaw: "-15deg", pitch: "20deg" },
      imageLayer: "./icon/marker.png",
      size: { width: s, height: s },
      tooltip: "cp",
      content: document.getElementById("a1").innerHTML,
    });

    markersPlugin.addMarker({
      id: "m1-2",
      position: { yaw: "-120deg", pitch: "10deg" },
      imageLayer: "./icon/marker.png",
      size: { width: s, height: s },
      tooltip: "ที่จอดรถมอไซต์",
      content: document.getElementById("a1").innerHTML,
    });

    markersPlugin.addMarker({
      id: "m1-3",
      position: { yaw: "120deg", pitch: "20deg" },
      imageLayer: "./icon/marker.png",
      size: { width: s, height: s },
      tooltip: "ตึกอะไรสักอย่าง",
      content: document.getElementById("a1").innerHTML,
    });

    markersPlugin.addMarker({
      id: "m1-4",
      position: { yaw: "80deg", pitch: "10deg" },
      imageLayer: "./icon/marker.png",
      size: { width: s, height: s },
      tooltip: "ตึกอะไรสักอย่าง2",
      content: document.getElementById("a1").innerHTML,
    });

    markersPlugin.addMarker({
      id: "m1-5",
      position: { yaw: "20deg", pitch: "5deg" },
      imageLayer: "./icon/marker.png",
      size: { width: s, height: s },
      tooltip: "ทางไปโรงอาหารมนุษ",
      content: document.getElementById("a1").innerHTML,
    });

  }


  if (marker.id == "goto2") {
    viewer.setPanorama("./img/img2.jpg");
    markersPlugin.clearMarkers();

    markersPlugin.addMarker({
      id: "goto1",
      position: { yaw: "-135deg", pitch: "10deg" },
      imageLayer: "./icon/go.png",
      size: { width: s, height: s },
      tooltip: "go to 1",
    });
    markersPlugin.addMarker({
      id: "goto3",
      position: { yaw: "155deg", pitch: "10deg" },
      imageLayer: "./icon/go.png",
      size: { width: s, height: s },
      tooltip: "go to 3",
    });
    markersPlugin.addMarker({
      id: "m2-1",
      position: { yaw: "-70deg", pitch: "30deg" },
      imageLayer: "./icon/marker.png",
      size: { width: s, height: s },
      tooltip: "ศาลาพระหรืออะไรสักอย่าง",
      content: document.getElementById("a1").innerHTML,
    });
    markersPlugin.addMarker({
      id: "m2-2",
      position: { yaw: "-100deg", pitch: "20deg" },
      imageLayer: "./icon/marker.png",
      size: { width: s, height: s },
      tooltip: "ตึกอะไรสักอย่าง",
      content: document.getElementById("a1").innerHTML,
    });
    markersPlugin.addMarker({
      id: "m2-3",
      position: { yaw: "-40deg", pitch: "20deg" },
      imageLayer: "./icon/marker.png",
      size: { width: s, height: s },
      tooltip: "โรงอาหารมนุด",
      content: document.getElementById("a1").innerHTML,
    });
    markersPlugin.addMarker({
      id: "m2-4",
      position: { yaw: "40deg", pitch: "30deg" },
      imageLayer: "./icon/marker.png",
      size: { width: s, height: s },
      tooltip: "ศาลาก้านของ",
      content: document.getElementById("a1").innerHTML,
    });
    markersPlugin.addMarker({
      id: "m2-5",
      position: { yaw: "120deg", pitch: "5deg" },
      imageLayer: "./icon/marker.png",
      size: { width: s, height: s },
      tooltip: "สนามหญ่ามนุด",
      content: document.getElementById("a1").innerHTML,
    });
  }

  if (marker.id == "goto3") {
    viewer.setPanorama("./img/img2.jpg");
    markersPlugin.clearMarkers();

    markersPlugin.addMarker({
      id: "goto2",
      position: { yaw: "-155deg", pitch: "0deg" },
      imageLayer: "./icon/go.png",
      size: { width: s, height: s },
      tooltip: "go to 2",
    });
    markersPlugin.addMarker({
      id: "goto1",
      position: { yaw: "135deg", pitch: "10deg" },
      imageLayer: "./icon/go.png",
      size: { width: s, height: s },
      tooltip: "go to 1",
    });
    markersPlugin.addMarker({
      id: "m3-1",
      position: { yaw: "-50deg", pitch: "5deg" },
      imageLayer: "./icon/marker.png",
      size: { width: s, height: s },
      tooltip: "ตึก MBA อะไรสักอย่าง",
      content: document.getElementById("a1").innerHTML,
    });
    markersPlugin.addMarker({
      id: "m3-2",
      position: { yaw: "-125deg", pitch: "-5deg" },
      imageLayer: "./icon/marker.png",
      size: { width: s, height: s },
      tooltip: "HUSO",
      content: document.getElementById("a1").innerHTML,
    });
    markersPlugin.addMarker({
      id: "m3-3",
      position: { yaw: "0deg", pitch: "20deg" },
      imageLayer: "./icon/marker.png",
      size: { width: s, height: s },
      tooltip: "ตึกอะไรก็ไม่รู้ kkbs",
      content: document.getElementById("a1").innerHTML,
    });
    markersPlugin.addMarker({
      id: "m3-4",
      position: { yaw: "60deg", pitch: "0deg" },
      imageLayer: "./icon/marker.png",
      size: { width: s, height: s },
      tooltip: "ลานจอดมอไซต์ kkbs",
      content: document.getElementById("a1").innerHTML,
    });
    markersPlugin.addMarker({
      id: "m3-5",
      position: { yaw: "120deg", pitch: "10deg" },
      imageLayer: "./icon/marker.png",
      size: { width: s, height: s },
      tooltip: "cp",
      content: document.getElementById("a1").innerHTML,
    });

  }

});
