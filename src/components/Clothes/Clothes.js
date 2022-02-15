import getProducts from '../../api/product'
import ClothesCart from '../clothes-card/Clothes-card'
import './Clothes.style.scss'

function Clothes(props) {

    const products = getProducts(props.category)

    return (
        <section className='container clothes'>
            <header className='clothes__header'>
                <h2 className='clothes__title'>{props.category + "'s"}</h2>
                <ul className='clothes__filter'>
                    <li>
                        <a className='clothes__link active' href='#'>NEW ARRIVALS</a>
                    </li>
                    <li>
                        <a className='clothes__link' href='#'>SPECIALS</a>
                    </li>
                    <li>
                        <a className='clothes__link' href='#'>BESTSELLERS</a>
                    </li>
                    <li>
                        <a className='clothes__link' href='#'>MOST VIEWED</a>
                    </li>
                    <li>
                        <a className='clothes__link' href='#'>FEATURED PRODUCTS</a>
                    </li>
                </ul>
            </header>
            <div className='clothes__list'>
                {products.map(i => 
                    <ClothesCart 
                        key={i.id}
                        id={i.id}
                        name={i.name}
                        imgUrl={i.imgUrl}
                        price={i.price}
                        sale={i.sale}
                        rating={i.rating}
                    />
                )}
            </div>

            <a className='clothes__link clothes__link--full-screen' href='/'><span>SEE all</span></a>
        </section>
    )
}

export default Clothes