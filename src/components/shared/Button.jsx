import PropTypes from "prop-types";
const Button = ({children, version, type, isDisabled}) => {

    return(
        <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
            {children}
        </button>
    )
}

export default Button

Button.defaultProps = {
    version: 'primary',
    type: 'submit',
    isDisabled: false
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired
}