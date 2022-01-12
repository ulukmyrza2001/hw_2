import './Main.css'
import MainCard from './MainCard'
function Main(props) {
	return (
		<main className='main'>
			<MainCard data = {props.data}/>
		</main>
	)
}
export default Main
