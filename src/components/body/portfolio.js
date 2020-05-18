import React, {useState, useRef, useEffect, useCallback} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from 'axios';
import {
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'

import mastheadBacground from '../../asset/mastheadBackground.jpg';
import './portfolio.css';

function PortfolioItem(props) {
  const [modal, setModal] = useState(false);
  const [iframeWidth, setIframeWidth] = useState(0);

  ////Ref Callback
  /* Return the value of the container inside modal */
  let containerNode;
  const containerRef = useCallback(node => {
    if (node !== null) {
      containerNode = node;

      setIframeWidth(containerNode.clientWidth);
    }
  }, [containerNode]);

  const toggle = () => setModal(!modal);

  //Resize iframe width on window resize
  window.addEventListener('resize', () => {
    if (containerNode)
      setIframeWidth(containerNode.clientWidth);
    }
  );

  return (<div className="portfolio-item ">
    <a className="portfolio-link" onClick={toggle}>
      <div className="portfolio-hover">
        <div className="portfolio-hover-content">
          <FontAwesomeIcon className="fa-3x" icon="plus"/>
        </div>
      </div>
      <img className="img-fluid" src={props.src}/>
    </a>
    <div className="portfolio-caption">
      <div className="portfolio-caption-heading">{props.heading}</div>
      <div className="portfolio-caption-subheading text-muted">{props.type}</div>
    </div>
    <Modal isOpen={modal} toggle={toggle} className="portfolio-modal">
      <Container>
        <FontAwesomeIcon className="fa-lg float-right mt-4 modal-close" onClick={toggle} icon="times"/>
      </Container>
      <div className="container clearfix" ref={containerRef}>
        <ModalHeader className="text-uppercase mb-4" tag="h2">{props.heading}</ModalHeader>
        <iframe className="modal-iframe mb-4" src="/" width={"" + (
          iframeWidth - 30)}/>
      </div>
    </Modal>
  </div>);
}

function Portfolio(props) {
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    axios.get('/portfolios')
      .then(res => setPortfolioItems(res.data))
      .catch(err => console.error(err));
  }, [])

  return (<section id="portfolio" className="page-section bg-light">
    <Container>
      <div className="text-center">
        <h2 className="section-heading text-uppercase">Portfolio</h2>
        <h3 className="section-subheading text-muted">Our past actions</h3>
      </div>
      <Row>
        {
          portfolioItems.map(elem => <Col key={elem.id} className="mb-4">
            <PortfolioItem heading={elem.name} type={elem.type} src={elem.image.url}/>
          </Col>)
        }
      </Row>
    </Container>
  </section>);
}

export default Portfolio;
