
import { useState } from "react"
import { Card } from "react-bootstrap"
import './InfoCard.css'

// other constnats
// const hoveredBgColor = "218, 219, 210"
const defaultBgColor = "228, 229, 220"
const hoveredBgColor = defaultBgColor

// Component
const InfoCard = (props) => {

    // states
    const [cardHovered, toggleHoverState] = useState(false);

    // flags
    const headerFlag = props.header && true
    const titleFlag = props.title && true
    const textFlag = props.children && true
    const footerFlag = props.footer && true

    // render
    return (
        <Card
            className="info-card my-4 border-dark shadow"
            style={{
                backgroundColor: `rgba(${cardHovered ?  hoveredBgColor: defaultBgColor}, 0.8)`
            }}
            onMouseEnter={() => toggleHoverState(true)}
            onMouseLeave={() => toggleHoverState(false)}
        >
            {headerFlag && (
                <Card.Header className="bg-dark" as="h5">
                    {props.header}
                </Card.Header>
            )}
            {(titleFlag || textFlag) && (
                <Card.Body className="bg-transparent">
                    {titleFlag && <Card.Title>{props.title}</Card.Title>}
                    {textFlag && <Card.Text>{props.children}</Card.Text>}
                </Card.Body>
            )}
            {footerFlag && (
                <Card.Footer className="bg-dark">
                    {props.footer}
                </Card.Footer>
            )}
        </Card>
    )
}

export default InfoCard;