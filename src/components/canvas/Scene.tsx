import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Stars, Environment, TorusKnot, Grid, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Aesthetic VR Object
const VRObject = () => {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <group ref={meshRef} position={[6, 2, -5]} scale={1.5}>
        <TorusKnot args={[1, 0.3, 128, 32]} rotation={[Math.PI / 4, 0, 0]}>
          <meshPhysicalMaterial 
            color="#4f46e5" 
            metalness={0.9} 
            roughness={0.1} 
            clearcoat={1} 
            wireframe={true}
            emissive="#1e1b4b"
            emissiveIntensity={2}
          />
        </TorusKnot>
        <Sphere args={[0.6, 32, 32]}>
          <meshStandardMaterial color="#000000" metalness={1} roughness={0} />
        </Sphere>
      </group>
    </Float>
  );
};

// Holographic Secondary Object
const HolographicNode = ({ position, scale, color }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2} position={position}>
      <mesh ref={meshRef} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial 
          color={color}
          transparent
          opacity={0.3}
          wireframe={true}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
};

// Stylized Mascot (Alannn/Cyberpunk Vibe)
const StylizedMascot = () => {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const bodyRef = useRef<THREE.Mesh>(null);
  const leftHandRef = useRef<THREE.Group>(null);
  const rightHandRef = useRef<THREE.Group>(null);
  const gemRef = useRef<THREE.Mesh>(null);
  
  const targetPos = new THREE.Vector3();
  const lookTarget = new THREE.Vector3();

  useFrame((state, delta) => {
    if (!groupRef.current || !headRef.current || !bodyRef.current || !leftHandRef.current || !rightHandRef.current || !gemRef.current) return;

    // Mouse mapping to 3D Space (scaled down for subtle movement)
    const mx = (state.mouse.x * state.viewport.width) / 10;
    const my = (state.mouse.y * state.viewport.height) / 10;

    // 1. Entire Group Base Movement (Base position: Center Foreground for testing)
    // Anchor at X: 0, Y: 0, Z: 5 (very close to Camera Z:12) Let's make sure we see it.
    targetPos.set(mx, my + Math.sin(state.clock.elapsedTime * 1.5) * 0.2, 5);
    groupRef.current.position.lerp(targetPos, 2 * delta);

    // 2. Head Kinematics (Explicit LookAt Cursor)
    lookTarget.set(state.mouse.x * 15, state.mouse.y * 15, 10);
    headRef.current.lookAt(lookTarget);

    // 3. Body minimal turn (follows head but slower)
    bodyRef.current.rotation.y = THREE.MathUtils.lerp(bodyRef.current.rotation.y, state.mouse.x * 0.5, 3 * delta);
    bodyRef.current.rotation.x = THREE.MathUtils.lerp(bodyRef.current.rotation.x, -state.mouse.y * 0.2, 3 * delta);

    // 4. Floating Hands with slight bob offset
    leftHandRef.current.position.y = -1.5 + Math.sin(state.clock.elapsedTime * 2.5) * 0.1;
    rightHandRef.current.position.y = -1.5 + Math.cos(state.clock.elapsedTime * 2.5) * 0.1;
    
    // Hands point slightly inward towards the gem
    leftHandRef.current.rotation.y = Math.PI / 4;
    rightHandRef.current.rotation.y = -Math.PI / 4;

    // 5. Huge Gem rotation
    gemRef.current.rotation.y += delta;
    gemRef.current.rotation.x += delta * 0.5;
    gemRef.current.position.y = -1.2 + Math.sin(state.clock.elapsedTime * 3) * 0.1;
  });

  return (
    <group ref={groupRef} scale={1.5}>
      {/* --- HEAD GROUP --- */}
      <group ref={headRef} position={[0, 0.8, 0]}>
        {/* Base Black Head Sphere */}
        <mesh>
          <sphereGeometry args={[0.7, 64, 64]} />
          <meshPhysicalMaterial color="#ffffff" roughness={0.1} metalness={0.9} clearcoat={1.0} emissive="#4f46e5" emissiveIntensity={1} />
        </mesh>
        
        {/* White Beanie / Halo */}
        <mesh position={[0, 0.45, 0]}>
          <cylinderGeometry args={[0.65, 0.68, 0.5, 32]} />
          <meshStandardMaterial color="#ffffff" roughness={0.8} metalness={0.1} />
        </mesh>
        
        {/* Dark Sunglasses */}
        <mesh position={[0, 0.1, 0.65]}>
          <capsuleGeometry args={[0.15, 0.8, 4, 16]} />
          <meshPhysicalMaterial color="#020202" roughness={0.1} metalness={0.9} clearcoat={1.0} />
        </mesh>

        {/* Glowing White Smile */}
        <mesh position={[0, -0.3, 0.62]} rotation={[-0.2, 0, 0]}>
          <torusGeometry args={[0.3, 0.08, 16, 64, Math.PI]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1} />
        </mesh>
      </group>

      {/* --- BODY --- */}
      <mesh ref={bodyRef} position={[0, -1, 0]}>
        <capsuleGeometry args={[0.6, 1.2, 32, 32]} />
        <meshPhysicalMaterial color="#ffffff" roughness={0.2} metalness={0.8} clearcoat={0.8} emissive="#4f46e5" emissiveIntensity={1} />
      </mesh>

      {/* --- HANDS --- */}
      {/* Left Hand Glove */}
      <group ref={leftHandRef} position={[-1.2, -1.5, 0.5]}>
        <mesh>
          <boxGeometry args={[0.4, 0.5, 0.6]} />
          <meshStandardMaterial color="#ffffff" roughness={0.6} />
        </mesh>
        {/* Black finger indent detail */}
        <mesh position={[0.1, 0, 0.31]}>
          <boxGeometry args={[0.2, 0.4, 0.05]} />
          <meshStandardMaterial color="#050505" />
        </mesh>
      </group>

      {/* Right Hand Glove */}
      <group ref={rightHandRef} position={[1.2, -1.5, 0.5]}>
        <mesh>
          <boxGeometry args={[0.4, 0.5, 0.6]} />
          <meshStandardMaterial color="#ffffff" roughness={0.6} />
        </mesh>
        <mesh position={[-0.1, 0, 0.31]}>
          <boxGeometry args={[0.2, 0.4, 0.05]} />
          <meshStandardMaterial color="#050505" />
        </mesh>
      </group>

      {/* --- GLOWING GEM --- */}
      <mesh ref={gemRef} position={[0, -1.2, 1]}>
        <octahedronGeometry args={[0.6, 0]} />
        <meshPhysicalMaterial 
          color="#f43f5e" /* Bright Rose/Red */
          emissive="#e11d48"
          emissiveIntensity={2}
          transparent
          opacity={0.9}
          roughness={0.1}
          metalness={0.8}
          clearcoat={1.0}
        />
        {/* Inner intense core light */}
        <pointLight color="#fb7185" intensity={5} distance={5} />
      </mesh>
    </group>
  );
};

// Camera responds to mouse for massive parallax
const CameraRig = () => {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();

  useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 4, mouse.y * 4 + 2, camera.position.z), 0.05);
    camera.lookAt(0, 0, 0);
  });

  return null;
};

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 2, 12], fov: 50 }} dpr={[1, 2]}>
      <color attach="background" args={['#020202']} /> /* Deep void */
      <fog attach="fog" args={['#020202', 15, 40]} />
      
      <ambientLight intensity={2} />
      <directionalLight position={[10, 10, 5]} intensity={5} color="#ffffff" />
      <pointLight position={[-10, 5, -10]} intensity={5} color="#4f46e5" distance={50} />
      <pointLight position={[10, -5, 10]} intensity={5} color="#818cf8" distance={30} />
      <spotLight position={[0, 5, 2]} intensity={20} color="#ffffff" angle={0.5} penumbra={1} />
      
      <Environment preset="night" />
      
      {/* Retro Cyberpunk Grid */}
      <Grid 
        position={[0, -4, 0]} 
        args={[50, 50]} 
        cellSize={1} 
        cellThickness={1} 
        cellColor="#1e1b4b" 
        sectionSize={5} 
        sectionThickness={1.5} 
        sectionColor="#3730a3" 
        fadeDistance={30} 
        fadeStrength={1} 
      />
      
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={1} fade speed={1.5} />
      
      {/* Gamified Interactables */}
      <StylizedMascot />
      <VRObject />
      
      <HolographicNode position={[-8, -1, -8]} scale={1.5} color="#818cf8" />
      <HolographicNode position={[4, -2, -12]} scale={2.5} color="#4338ca" />
      <HolographicNode position={[-5, 5, -5]} scale={1} color="#ffffff" />

      <CameraRig />
    </Canvas>
  );
}
