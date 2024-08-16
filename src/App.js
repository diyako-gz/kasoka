
import Header from './Header/header';
import Title from './bigtitle/title';
import Texter from './texters/texts';
import Brands from './brands/brands';
import Services from './our services/services';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const components = [
    { component: <Header />, id: 'header' },
    { component: <Title />, id: 'title' },
    { component: <Texter />, id: 'texter' },
    { component: <Brands />, id: 'brands' },
    { component: <Services />, id: 'services' },
  ];

  return (
    <div id="app">
      {components.map((component, index) => (
        <div key={component.id} id={component.id}>
          {component.component}
          <p className=''>hello world</p>
        </div>
      ))}
    </div>
  );
}

export default App;

document.addEventListener('DOMContentLoaded', () => {
  const components = document.querySelectorAll('[id]');

  components.forEach((component, index) => {
    gsap.from(component, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: component,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
    });
  });
});