import { Sparkles, OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "react-three-fiber";

export default function Experience() {
  const baseplate1 = useGLTF("./base-plate-1.gltf");
  const baseplate2 = useGLTF("./base-plate-2.gltf");
  const bbsplicebolted = useGLTF("./bb-splice-bolted.gltf");
  const bcep = useGLTF("./bc-ep.gltf");
  const finplate = useGLTF("./Fin-plate.gltf");
  const tensionmember = useGLTF("./tension-member.gltf");
  const baseplate1Ref = useRef();
  const baseplate2Ref = useRef();
  const bbspliceboltedRef = useRef();
  const bcepRef = useRef();
  const finplateRef = useRef();
  const tensionmemberRef = useRef();

  useFrame((state, delta) => {
    baseplate1Ref.current.rotation.y += delta * 0.5; 
    baseplate2Ref.current.rotation.y += delta * 0.3; 
    bbspliceboltedRef.current.rotation.x += delta * 0.8;
    bcepRef.current.rotation.y += delta * -0.2; 
    finplateRef.current.rotation.z += delta * 2; 
    tensionmemberRef.current.rotation.x += delta * 1; 
  });
  
const colors = {
    baseplate1: "#ff0000",
    baseplate2: "#00ff00",
    bbsplicebolted: "#0000ff",
    bcep: "#ffff00",
    finplate: "#00ffff",
    tensionmember: "#ff00ff",
  };

  
  Object.entries(colors).forEach(([modelName, color]) => {
    // eslint-disable-next-line no-eval
    const model = eval(modelName); 
    model.scene.traverse((child) => {
      if (child.isMesh) {
        child.material.color.set(color);
      }
    });
  });
  
  return (
    <>
      <OrbitControls />
      
      <primitive object={baseplate1.scene} position={[2, 0, 0]} ref={baseplate1Ref} />
      <primitive object={baseplate2.scene} position={[-2, 0, 0]} ref={baseplate2Ref} />
      <primitive object={bbsplicebolted.scene} position={[0, 2, 0]} ref={bbspliceboltedRef} />
      <primitive object={bcep.scene} position={[0, 0, 2]} ref={bcepRef} />
      <primitive object={finplate.scene} position={[4, 0, 0]} ref={finplateRef} />
      <primitive object={tensionmember.scene} position={[0, -2, 0]} ref={tensionmemberRef} />

      <Sparkles
        size={0.5}
        scale={[-1, 1, 1]}
        position-x={-0}
        position-y={-0.5}
        position-z={1}
        speed={1}
        count={30}
      />
      <Environment preset="city" />
    </>
  );
}
