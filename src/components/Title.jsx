import {  Zoom } from 'react-awesome-reveal';
function Title({nametitle,className}) {
    return (
      <Zoom triggerOnce>
      <h2 className={`${className} title`}>{nametitle}</h2>
      </Zoom>
    );
}

export default Title;
