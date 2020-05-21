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

function PortfolioModal(props) {
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

  //Resize iframe width on window resize
  window.addEventListener('resize', () => {
    if (containerNode)
      setIframeWidth(containerNode.clientWidth);
    }
  );
  return (<Modal isOpen={props.isOpen} toggle={props.toggle} className="portfolio-modal">
    <Container>
      <FontAwesomeIcon className="fa-lg float-right mt-4 modal-close" onClick={props.toggle} icon="times"/>
    </Container>
    <div className="container clearfix" ref={containerRef}>
      <ModalHeader className="text-uppercase mb-4" tag="h2">{props.heading}</ModalHeader>
      <iframe className="modal-iframe mb-4" src={props.website} width={"" + (
        iframeWidth - 30)}/>
    </div>
  </Modal>);
}

function PortfolioItem(props) {
  const [modal, setModal] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  // Open Modal on large screen or Open a new tab
  // to the portfolio URL
  const toggle = () => (windowSize > 760)
    ? setModal(!modal)
    : window.open(props.website, "_blank");

  window.addEventListener('resize', () => {
    setWindowSize(window.innerWidth);
  });

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
    <PortfolioModal toggle={toggle} isOpen={modal} website={props.website} heading={props.heading}/>
  </div>);
}

function Portfolio(props) {
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    axios.get('/portfolios').then(res => setPortfolioItems(res.data)).catch(err => console.error('GET /portfolios', err));
  }, [])

  return (<section id="portfolio" className="page-section bg-light">
    <Container>
      <div className="text-center">
        <h2 className="section-heading text-uppercase">Portfolio</h2>
        <h3 className="section-subheading text-muted">{props.subheading}</h3>
      </div>
      <Row>
        {
          portfolioItems.map(elem => <Col key={elem.id} className="mb-4">
            <PortfolioItem heading={elem.name} type={elem.type} src={elem.image.url} website={elem.webURL}/>
          </Col>)
        }
      </Row>
    </Container>
  </section>);
}

export default Portfolio;
