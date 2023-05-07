import pic from "./inte.jpg"
import './homestyle.css'

export default function Hom() {
  return (
  <body>
  <div>
  <img src={pic} height='500px' width='370px' style={{float:'left'}}></img>
  <p >Hello World! I am Dharshini Priya S. <br/><br />
  <i>A little intro about me:</i> I am from Madurai, Tamil Nadu.
  I am currently in my 3rd year B.Tech Bioinformatics.
  My hobbies are to read and sketch.
  <br /><br />Do check out the next tabs</p>
  </div>
  <div class="cp" style={{position: 'absolute', bottom: '5px'}}>
  <hr />
  Copyright reserved by Dharshini
  </div>
  </body>
    )
}
