import PropTypes from "prop-types";
function Card({ children }) {

    return <div className="card">{children}</div>
}

export default Card

Card.defaultProps = {
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
}