function MainCard(props) {
    return(
        props.data.map(el=>{
            return(
                <div className='food-card'>
                    <img className='food-img' src={el.img} alt='' />
                    <div>
                        <div>{el.title}</div>
                        <div>{el.price}</div>
                    </div>
                </div>
            )
        })
    )
}
export default MainCard