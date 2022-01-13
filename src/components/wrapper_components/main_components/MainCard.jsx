import Card from "../ui/Card.jsx"

function MainCard(props) {
    return(
        props.data.map(el=>{
            return(
                <Card key = {el.id}>
                    <img className='food-img' src={el.img} alt='' />
                    <div>
                        <div>{el.title}</div>
                        <div>{el.price}</div>
                    </div>
                </Card>
            )
        })
    )
}
export default MainCard