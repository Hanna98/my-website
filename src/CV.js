
import cv from './CV.module.css';
import Homepage from './Homepage';


const CV = () => {

    return (
        <div>
            <Homepage />
            <div className={cv.generalGrid}>
                <div>Secret text</div>
                <div className={cv.rightSquareContainer}>
                <div>This is where the resume goes</div>
                </div>
            </div>
        </div>
    );
}

export default CV;