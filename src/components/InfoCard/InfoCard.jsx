
import { text } from "@fortawesome/fontawesome-svg-core"
import { Card } from "react-bootstrap"
import './InfoCard.css'

const InfoCard = (props) => {
    const headerFlag = props.header && true
    const titleFlag = props.title && true
    const textFlag = props.children && true
    const footerFlag = props.footer && true
    return (
        <Card className="info-card my-4 border-dark shadow">
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