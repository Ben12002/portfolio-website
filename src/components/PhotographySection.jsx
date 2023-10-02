import '../PhotographySection.css'

function PhotographySection(){

    const photoWidth = '200px';

    return(
        <div id="photographyheading">
            <h2>PHOTOGRAPHY</h2>
            <div className="content">
                <div className="photo"><img width={photoWidth} src='public/photos/_MG_1587.jpg'></img></div>
                <div className="photo"><img width={photoWidth} src='public/photos/bwmountain1.jpg'></img></div>
                <div className="photo"><img width={photoWidth} src='public/photos/castlemountain.jpg'></img></div>
                <div className="photo"><img width={photoWidth} src='public/photos/fuji1.jpeg'></img></div>
                <div className="photo"><img width={photoWidth} src='public/photos/IMG_20220926_072737.jpg'></img></div>
                <div className="photo"><img width={photoWidth} src='public/photos/nepalmountain1.jpg'></img></div>
                <div className="photo"><img width={photoWidth} src='public/photos/pokharaoverview.jpg'></img></div>
                <div className="photo"><img width={photoWidth} src='public/photos/tokyo1.jpg'></img></div>
                <div className="photo"><img width={photoWidth} src='public/photos/tokyolight1.jpeg'></img></div>
            </div>
        </div>
    )
}

export default PhotographySection