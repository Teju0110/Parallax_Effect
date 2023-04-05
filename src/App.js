import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './App.css';
import TextBlock from './TextBlock';

function App() {
  return (
    <div className="App">
      <Parallax pages={2} style={{top:'0',left:'0'}} className="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <div className='animationLayer' id="artBack"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className='animationLayer' id="mountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div className='animationLayer' id="logoland"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className='animationLayer' id="jungle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className='animationLayer' id="jungle2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div className='animationLayer' id="jungle3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.45}>
          <div className='animationLayer' id="jungle4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.40}>
          <div className='animationLayer' id="manonmountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className='animationLayer' id="jungle5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25}>
          <TextBlock/>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
