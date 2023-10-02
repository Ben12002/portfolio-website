import '../ResumeSection.css'

function ResumeSection(){

    return(
        <div id="resumeheading" className="resumesection">
            <h2>RESUME</h2>
            <div className="content">
                <a href="/Benedict_Tan_Coop_Resume.png" download="Benedict_Tan_Resume.pdf" className="download-button">
                    <p className='interactable'>Download my resume:</p>
                    <svg className='icon' xmlns="http://www.w3.org/2000/svg" height="64" viewBox="0 -960 960 960" width="64"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
                </a>
                <img src="/Benedict_Tan_Coop_Resume.png" width='400px' alt="Benedict Tan Resume" className="resume-preview"></img>
            </div>
        </div>
    )
}

export default ResumeSection