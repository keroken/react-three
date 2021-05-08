/** @jsx jsx **/
import { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { css, jsx } from '@emotion/core';

const theme = css`
  width: 100vw;
  height: 100vh;
  background-color: #000;
`;

const Thing = () => {
  const ref = useRef();
  useFrame(() => {
    // ref.current.rotation.y += 0.01;
    // ref.current.rotation.z += 0.01;
  });
  return (
    <mesh
      ref={ref}
      position={[0, 0, 500]}
      rotation={[0, 0.5, 0]}
      onClick={e => console.log('click')}
      onPointerOver={e => console.log('hover')}
      onPointerOut={e => console.log('unhover')}
    >
      {/* <boxGeometry attach='geometry' args={[400, 400, 400]} /> */}

      {/* <div>THis is a DIV</div> */}
      <planeGeometry attach='geometry' args={[500, 300, 32]} />
      <meshBasicMaterial
        attach='material' color='red' side='DoubleSide'
      />
    </mesh>
  );
};

export const Work = () => (
  <div css={theme}>
    <Canvas camera={{ position: [0, 0, 1000], fov: 75, near: 0.1, far: 10000 }}>
      <Thing />
    </Canvas>
  </div>
);

