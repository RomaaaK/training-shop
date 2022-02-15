import './Icon.style.scss'
import sprite from '../../assets/icons/sprite.svg'

function Icon(props) {
    const icon = `${sprite}#${props.icon}`
    const styleList = ['icon']

    if (props.size) {
        styleList.push('icon--' + props.size)
    }


    return (
        <svg className={styleList.join(' ')} style={{fill: props.fill}}>
            <use xlinkHref={icon}></use>
        </svg>
    )
}

export default Icon