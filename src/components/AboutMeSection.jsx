import '../About.css'


function AboutMeSection(){


    return(
        <div id="aboutheading">
            <h2>ABOUT</h2>
            <div className="content">
                <p>
                    Hi! I'm Ben, a computer science student at UBC with 
                    a particular interest in machine learning and web development. 
                    <br></br>
                    <br></br>
                    I enjoy building things, solving problems, and exploring different layers of abstraction.
                    <br></br>
                    <br></br>
                    In my free time, I enjoy calisthenics, photography, and meeting new people.
                </p>
                <figure>
                    <img width="400px" src="/photos/tadaoando.jpeg"></img>
                    <figcaption>Osaka Prefectural Sayamaike Museum</figcaption>
                </figure>
            </div>
        </div>
    )
}

export default AboutMeSection