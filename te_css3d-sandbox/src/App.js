import './App.css';
import { Canvas } from '@react-three/fiber'
import { OrthographicCamera } from '@react-three/drei'


function App() {
  return (
    <div>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry args={[200, 200, 200]} />
          <meshStandardMaterial />
        </mesh>
        <OrthographicCamera makeDefault={true} far={2000} near={-2000} position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
}

export default App;
