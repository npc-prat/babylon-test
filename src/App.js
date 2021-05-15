import { useState } from "react"
import "./App.css"
import Mapbox from "./Mapbox"
import { ArcRotateCamera, Vector3, HemisphericLight, MeshBuilder, StandardMaterial, Texture, Color3 } from "@babylonjs/core"
import SceneComponent from "./SceneComponent"

let cuboid

const onSceneReady = (scene) => {

  let camera = new ArcRotateCamera("Camera", Math.PI / 4, Math.PI / 4, 4, Vector3.Zero(), scene)
  camera.setTarget(Vector3.Zero())
  const canvas = scene.getEngine().getRenderingCanvas()
  camera.attachControl(canvas, true)

  let light = new HemisphericLight("light", new Vector3(0, 1, 0), scene)
  light.groundColor = new Color3(1, 1, 1)
  light.specular = Color3.Black()

  cuboid = MeshBuilder.CreateBox("box", { width: 2, height: 1.5, depth: 1.5 })

}

const App = () => {
  const [activeView, setActiveView] = useState("map")
  const [loading, setLoading] = useState(false)
  const [map, setMap] = useState(null)

  const handleClick = () => {
    if (activeView === "map") {
      setLoading(true)
      let img = map.getCanvas().toDataURL()
      let myMaterial = new StandardMaterial("myMaterial")
      myMaterial.diffuseTexture = new Texture(img)
      cuboid.material = myMaterial
      setTimeout(() => {
        setLoading(false)
        setActiveView("viewer")
      }, 400)
    }
    else setActiveView("map")
  }

  return (
    <div className="app">
      <div className="header">
        <h1>{activeView === "map" ? "Select region" : "Here's your cuboid!"}</h1>
        <button onClick={handleClick} disabled={loading}>
          {activeView === "map"
            ? <><i className="fa fa-camera" />Capture</>
            : <><i className="fa fa-plus" />New</>
          }
        </button>
      </div>
      <div className="container">
        <div className={`wrapper mapWrapper ${activeView === "map" ? "active" : ""}`}>
          <Mapbox map={map} setMap={setMap} />
          <div className={`loading-overlay ${loading && 'active'}`}>
            {
              loading
                ? <i className="fas fa-cog fa-spin" />
                : <i className="fa fa-check" />
            }
          </div>
        </div>
        <div className={`wrapper viewerWrapper ${activeView === "viewer" ? "active" : ""}`}>
          <SceneComponent
            antialias
            onSceneReady={onSceneReady}
            id="my-canvas"
          />
        </div>
      </div>
    </div>
  )
}

export default App
