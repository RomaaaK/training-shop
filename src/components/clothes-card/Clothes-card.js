import './Clothes-cart.style.scss'
import Icon from '../../components/Icon/Icon';

function ClothesCart(props) {

    let price = props.sale ? props.price - ((props.price / 100) * props.sale) : props.price
    let sale = props.price


    if (!`${price}`.includes('.')) {
        price = `${price}.00`
    }

    if (!`${sale}`.includes('.')) {
        sale = `${sale}.00`
    }

    const rating = []

    for (let i = 1; i <=5; i++) {
        rating.push( <Icon key={i + '-' + props.id} icon='star' size='small' fill={i <= props.rating ? '#F0CC84' : '#E5E5E5'} />)
    }

    return (
        <a className='cart cart__link' href='/'>
            {props.sale ? <span className='cart__sale-show'>-{props.sale}%</span> : null}
            <img className='cart__img' src={props.imgUrl} alt={props.name} />
            <h3 className='cart__title'>{props.name}</h3>
            <footer className='cart__footer'>
                <div className='cart__cost'>
                    <p className='cart__price'>$ {price}</p>
                    {props.sale ? <p className='cart__sale'>$ {sale}</p> : null}
                </div>
                <div className='cart__rating'>
                    {rating}
                </div>
            </footer>
        </a>
    )
}


export default ClothesCart