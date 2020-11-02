import { useState } from "react";

import { Col, Spinner } from "react-bootstrap";


const Cv = () => {

    const [loaded, load] = useState(false);


    return (
        <>
            {!loaded && (
                <Col md="12" className="text-center">
                    <Spinner animation="border" className="text-center" />
                </Col>
            )}
            <iframe
                src="https://maemresen.github.io/resume/cv_mehmet_arif_emre_sen.pdf"
                title="title"
                frameborder={(loaded) ? "1" : "0"}
                onLoad={() => load(true)}
                style={{
                    width: "100%",
                    height: "90vh",
                }}>
                Presss me: <a href="https://maemresen.github.io/resume/cv_mehmet_arif_emre_sen.pdf">Download PDF</a>
            </iframe>
        </>
    )
};

export default Cv;