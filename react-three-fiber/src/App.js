import ReactDOM from 'react-dom'
import { Canvas } from '@react-three/fiber'

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight color={0x404040} intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App
