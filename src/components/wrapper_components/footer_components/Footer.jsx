import './Footer.css'
import FooterLogo from './FooterLogo'
import FooterLink from './FooterLink'
function Footer(props) {
	return (
	    <footer className="footer">
                <FooterLogo />
                <FooterLink />
        </footer>
	)
}
export default Footer