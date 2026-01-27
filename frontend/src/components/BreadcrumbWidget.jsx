import { Fragment, memo } from "react";

//react bootstrap
import { Breadcrumb, Container, Row, Col } from "react-bootstrap";

//function
import { generateImgPath } from "../StaticData/data";

//img
const imagePath = generateImgPath("/assets/images/pages/01.webp");
// the hook
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const BreadCrumbWidget = memo((props) => {
  const { t } = useTranslation();
  return (
    <Fragment>
     <div className="iq-breadcrumb">
    <Container>
        <Row className="align-items-center">
            <Col sm={12} >
                <nav aria-label="breadcrumb" className="text-center">
                    <ol className="breadcrumb justify-content-center text-white mt-0">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active">{props.title}</li>
                    </ol>
                </nav>
            </Col>
        </Row>
    </Container>
</div>
    </Fragment>
  );
});

BreadCrumbWidget.displayName = "BreadCrumbWidget";
export default BreadCrumbWidget;
