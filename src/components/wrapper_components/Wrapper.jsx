import './Wrapper.css'
import Header from "./header_components/Header"
import Main from './main_components/Main'
import Footer from './footer_components/Footer'

function Wrapper(props) {
    return (
        <div className="wrapper">
            <Header/>
            <Main data = {props.data}/>
            <Footer/>
        </div>
    )
}
export default Wrapper