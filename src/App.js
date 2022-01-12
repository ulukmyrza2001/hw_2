import './App.css';
import Wrapper from './components/wrapper_components/Wrapper';

const data = [
	{
		id: 1,
		title: 'Hamburger',
		price: 80,
		img: 'https://www.idonthavetimeforthat.com/wp-content/uploads/2019/09/Air-Fryer-Burgers-Sample-3-5.jpg',
	},
	{
		id: 2,
		title: 'Fries',
		price: 50,
		img: 'https://www.al.com/resizer/B_bPDwzB7cbMwK0_wQFLJnQds-c=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/Z4DRLATESVEZRCRY43Q6BMJZ6U.JPG',
	},
	{
		id: 3,
		title: 'Coffee',
		price: 120,
		img: 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg',
	},
	{
		id: 4,
		title: 'Cola',
		price: 40,
		img: 'https://neman.kg/images/detailed/34/napitok-sierra-coca-cola-1-l-gazirovannyj-121-1.jpg',
	},
	
]
function App() {
  return (
    <div className="App">
      <Wrapper data = {data}/>
    </div>
  );
}

export default App;
