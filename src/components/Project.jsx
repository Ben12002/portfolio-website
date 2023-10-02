function Project({id, title, technologies, description, repoLink, thumbnail, primaryColor, width}){

     const projectStyle = {
        backgroundColor: primaryColor,
        border: `solid 1px ${primaryColor}`,
        padding: '2rem',
        borderRadius: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
     };

    return(
        <a href={repoLink} target="_blank" rel="noreferrer">
            <div className="project" style={projectStyle}>
                {/* <h4>{title}</h4> */}
                <img src={thumbnail} width={width}></img>
                <p>{description}</p>
            </div>
        </a>
        
    )
}

export default Project