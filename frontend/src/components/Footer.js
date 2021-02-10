import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MapContainer from './MapContainer'

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="footer-content pt-5 pb-5">
          <Row>
            <Col xl={4} lg={4} className="mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <img src={process.env.PUBLIC_URL + '/images/logo.png'}/>
                </div>
                <div className="footer-text">
                  <p>A home without a pet is not home
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span>Suivez-nous</span>
                  <a href="https://www.facebook.com/Animalerie.Aniboom"><i className="fab fa-facebook-f"></i></a>
                  <a href="https://www.instagram.com/anib-oom"><i className="fab fa-instagram"></i></a>

                </div>
              </div>
            </Col>
            <Col xl={4} lg={4} md={6} className="mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Categories</h3>
                </div>
                <ul className="category-list">
                  <li><a href="/category/Chiens">Espaces Chiens</a></li>
                  <li><a href="/category/Chats">Espaces Chats</a></li>
                  <li><a href="/category/Oiseaux">Espaces Oiseaux</a></li>
                  <li><a href="/category/Aquariophilie">Espaces Aquariophilie</a></li>
                </ul>
              </div>
            </Col>
            <Col xl={4} lg={4} md={6} className="mb-5">
              <div className="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Contact</h3>
                  <Row className="single-cta">
                    <Col sm={2}>
                      <i class="fas fa-map-marker-alt"></i>
                    </Col>
                    <Col sm={10}>
                      <div className="cta-text">
                        <h4>Trouvez-nous</h4>
                        <span>Avenue hialiej</span>
                      </div>
                    </Col>
                  </Row>
                  <Row className="single-cta contact-m">
                    <Col sm={2}>
                      <i class="fas fa-phone"></i>
                    </Col>
                    <Col sm={10}>
                      <div className="cta-text">
                        <h4>Appelez-nous</h4>
                        <span>+212637780521</span>
                      </div>
                    </Col>
                  </Row>
                  <Row className="single-cta contact-m">
                    <Col sm={2}>
                      <i class="far fa-envelope-open"></i>
                    </Col>
                    <Col sm={10}>
                      <div className="cta-text">
                        <h4>Email</h4>
                        <span>animalerie.aniboom@gmail.com</span>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
