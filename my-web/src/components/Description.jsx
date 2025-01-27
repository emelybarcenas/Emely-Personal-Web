function Description ({x,y,size,isHovered, onMouseEnter, onMouseLeave}){
     return(
<p className ="description"
onMouseEnter={onMouseEnter}
onMouseLeave = {onMouseLeave}
  style={{
     maskPosition: `${x - size / 2}px ${y - size / 2}px`,
     WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
     WebkitMaskSize: `${size}px`,
   }}
>
     <span>Driven by a passion for tech and design,</span>
  <span>I’m a Computer Science student who</span>
  <span>thrives on coding innovative solutions  </span>
  <span>and creating captivating designs.</span></p>
     )
}
export default Description;