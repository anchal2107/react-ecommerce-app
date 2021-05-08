
import './custom-button.styles.scss';
const CustomButton = ({children, isBlueButton,...otherProps})=>(
    <button className={`${isBlueButton? 'blue-button':''} custom-button`} {...otherProps}>
        {children}
    </button>
)
export default CustomButton;