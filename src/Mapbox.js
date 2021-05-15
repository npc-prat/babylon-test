import React from "react"
import mapboxgl from "mapbox-gl"
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder"
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css"

mapboxgl.accessToken = "pk.eyJ1IjoicHJhdHZhciIsImEiOiJja2kxbmQ1b2oyanY2MnlwNWhzNGNjYjhvIn0.kYH7yt71R1HHESepho0Rhg"

const Mapbox = ({ map, setMap }) => {

  const mapContainer = React.useRef(null)

  React.useEffect(() => {
    setMap(new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v10",
      center: [0, 30],
      zoom: 0.5,
      preserveDrawingBuffer: true
    }))
  }, [])

  React.useEffect(() => {
    if (map) {
      map.addControl(new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        flyTo: {
          speed: 10,
        },
        marker: false,
        mapboxgl: mapboxgl
      }))
    }
  }, [map])



  return (
    <div ref={mapContainer} style={{ position: "absolute", height: "100%", width: "100%" }} />
  )
}

export default Mapbox