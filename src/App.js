
import './App.scss';
import About from '../src/components/About/About';
import { CV } from "./CV"
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Hero from './components/Hero/Hero';
import More from './components/More/More';
import { useDispatch, useSelector } from 'react-redux';
import { clickEducation, clickExperience, clickSoftware } from './redux/cv/cv.actions';
import Tecnologies from './components/Tecnologies/Tecnologies';




const { hero, education, experience, languages, tecnologies, volunteer } = CV;


function App() {
  const dispatch = useDispatch();
  const educationProp = useSelector(state => {
    console.log(state, 'juan');
     return state.educationBlock.educationProp}

  )
  console.log(educationProp, 'pepe');
  return (
    <div className="App">
      
      <Hero hero={hero}/>
      <About hero={hero.aboutMe} />
      <div className='block-navbar'>
        <button onClick={() => dispatch(clickEducation())}>Formación</button>
        <button onClick={() => dispatch(clickSoftware())}>Software</button>
        <button onClick={() => dispatch(clickExperience())}>Experiencia</button>
      </div>  
        {educationProp === 1 ? 
          <Education education={education}/>
          : educationProp === 2 ? 
            <Experience experience={experience}/>
            : educationProp === 3 ? 
              <Tecnologies tecnologies={tecnologies}/>
            :""}    
      {/* <More
      languages={languages}
      
      habilities={habilities}
      volunteer={volunteer}
      />  */}
{/*       <Tecnologies tecnologies={tecnologies}/>
 */}

    </div>
  );
}

export default App;
