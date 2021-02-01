import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MapContainer from './MapContainer'

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="footer-cta pt-5 pb-5">
          <Row>
            <Col xl={4} md={4} className="mb-30">
              <div className="single-cta">
                <i class="fas fa-map-marker-alt"></i>
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>Z3, 1065, Zone Villa - Sala Al Jadida</span>
                </div>
              </div>
            </Col>
            <Col xl={4} md={4} className="mb-30">
              <div className="single-cta">
                <i className="fas fa-phone"></i>
                <div className="cta-text">
                  <h4>Appelez-nous</h4>
                  <span>+212637780521</span>
                </div>
              </div>
            </Col>
            <Col xl={4} md={4} className="mb-30">
              <div className="single-cta">
                <i className="far fa-envelope-open"></i>
                <div className="cta-text">
                  <h4>Envoyez-nous un email</h4>
                  <span>animalerie.aniboom@gmail.com</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="footer-content pt-5 pb-5">
          <Row>
            <Col xl={4} lg={4} className="mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <img src={process.env.PUBLIC_URL + '/images/logo.png'}/>
                </div>
                <div className="footer-text">
                  <p>Une description de votre marque de 2 ligne ou 3
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span>Suivez-nous</span>
                  <a href="https://www.facebook.com/Animalerie.Aniboom"><i className="fab fa-facebook-f"></i></a>
                  <a href="https://www.instagram.com/ani_boom"><i className="fab fa-instagram"></i></a>

                </div>
              </div>
            </Col>
            <Col xl={4} lg={4} md={6} className="mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Nos univers</h3>
                </div>
                <ul>
                  <li><a href="/">Espaces Chiens</a></li>
                  <li><a href="#">Espaces Chats</a></li>
                  <li><a href="#">Espaces Oiseaux</a></li>
                  <li><a href="#">Espaces Aquariophilie</a></li>
                  <li><a href="#">Espaces Reptiles</a></li>
                  <li><a href="#">Espaces Rongeurs </a></li>
                </ul>
              </div>
            </Col>
            <Col xl={4} lg={4} md={6} className="mb-5">
              <div className="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Ou nous trouver?</h3>
                </div>
                <div className="footer-text mb-25">
                  <MapContainer></MapContainer>
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
