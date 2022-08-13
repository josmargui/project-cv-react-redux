
import './App.scss';
import About from '../src/components/About/About';
import { CV } from "./CV"
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Hero from './components/Hero/Hero';
import More from './components/More/More';
import { useDispatch, useSelector } from 'react-redux';
import { clickEducation } from './redux/cv/cv.actions';




const { hero, education, experience, languages, habilities, volunteer } = CV;


function App() {
  const dispatch = useDispatch();
  const educationProp = useSelector(state => {
    console.log(state, 'tipiwiny');
     return state.educationBlock.educationProp}

  )
  console.log(educationProp, 'pepe');
  return (
    <div className="App">
      
      <Hero hero={hero}/>
      <About hero={hero.aboutMe} />
      <button onClick={() => dispatch(clickEducation())}>Education</button>
      <button>Experiencia</button>
      {educationProp ? <Education education={education}/> : <Experience experience={experience}/>}
      {/* <Education education={education}/> 
      <Experience experience={experience}/> */}
      <More
      languages={languages}
      /*
      habilities={habilities}
      volunteer={volunteer}*/
      /> 
    </div>
  );
}

export default App;
