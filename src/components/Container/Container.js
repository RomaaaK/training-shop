import './Container.style.scss'

function Container(props) {

    const styleList = ['container']

    if (props.className) {
        styleList.push(props.className)
    }

    return (
        <div className={styleList.join(' ')}>
            {props.children}
        </div>
    )
}

export default Container