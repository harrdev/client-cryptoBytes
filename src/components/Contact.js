import hector from '../hector.jpeg'
import emily from '../emily.jpeg'
import steven from '../steven.jpeg'
import jason from '../jason.jpeg'

const Contact = (props) => {
// CHANGE INLINE STYLING WHEN STYLING PAGE!!!
	return (
		<div className="contact">
            <h1>Crypto/Bytes Team</h1>
            <h2>Connect with Us.  We'd love to Chat.</h2>
            <div className="person">
                <img src={emily} height="200px" width="200px"alt="Emily"></img><br></br>
                <a href="https://www.linkedin.com/in/emilybarwinczak/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/emilybarwinczak/</a><br></br>
                <a href="https://github.com/emilybarwinczak" target="_blank" rel="noreferrer">https://github.com/emilybarwinczak</a>
            </div>
            <div className="person">
                <img src={steven} height="200px" width="200px" alt="Steven"></img><br></br>
                <a href="https://www.linkedin.com/in/steven-lopez1/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/steven-lopez1/</a><br></br>
                <a href="https://github.com/steven43533" target="_blank" rel="noreferrer">https://github.com/steven43533</a>
            </div>
            <div className="person">
                <img src={jason} height="200px" width="200px" alt="Jason"></img><br></br>
                <a href="https://www.linkedin.com/in/jasonharr/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/jasonharr/</a><br></br>
                <a href="https://github.com/harrdev" target="_blank" rel="noreferrer">https://github.com/harrdev</a>
            </div>
            <div className="person">
                <img src={hector} height="200px" width="200px" alt="Hector"></img><br></br>
                <a href="https://www.linkedin.com/in/hectorzaragoza1/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/hectorzaragoza1/</a><br></br>
                <a href="https://github.com/hectorzaragoza" target="_blank" rel="noreferrer">https://github.com/hectorzaragoza</a>
            </div>
		</div>
	)
}

export default Contact