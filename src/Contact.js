
import contact from './Contact.module.css';

gi
import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


library.add(fab, fas)



const Contact = () => {


    return (
        <div>
            <Homepage />
            <div className={contact.generalGrid}>
                <h1>Secret Message</h1>
                <div className={contact.rightSquareContainer}>
                    <div className={contact.rightSquare}>
                        <h1>Contact Me</h1>
                        <p>a papapapapapapa</p>
                        <div className={contact.contactGrid}>
                            <p>Email:</p>
                            <p> <FontAwesomeIcon icon={['fas', 'envelope']} /> </p>

                            <p>hannaabdulalim@gmail.com</p>
                            <p>LinkedIn:</p>
                            <p> <FontAwesomeIcon icon={['fab', 'linkedin']} /> </p>

                            <p>linkedin.com/in/hanna-abdulalim1998</p>
                            <p>Github:</p>
                            <p> <FontAwesomeIcon icon={['fab', 'github']} /> </p>
                            <p>github.com/Hanna98</p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;