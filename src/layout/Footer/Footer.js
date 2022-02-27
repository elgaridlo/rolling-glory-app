import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import styles from './styles.module.css';

const Footer = () => {
    return (
        // <footer className="bg-dark text-center text-white py-3">
        <footer className={styles.footer}>
            <div className={styles.footer__splash_before}></div>
            <Container>
                <Row>
                    <Col lg={4} className={styles.footer__social_links}>
                        <a href="#"><Image src="/assets/svg/ig.svg" width={22.68} height={22.68} alt="Instagram" /></a>
                        <a href="#"><Image src="/assets/svg/fb.svg" width={22.68} height={22.68} alt="Facebook" /></a>
                        <a href="#"><Image src="/assets/svg/twt.svg" width={22.68} height={22.68} alt="Twitter" /></a>
                    </Col>
                    <Col lg={8} className={styles.footer__misc}>
                        <div className="d-flex justify-content-end">
                            <span>{'Terms & Condition'}</span>
                            <span>|</span>
                            <span>{'Copyright © 2018. All rights reserved. PT Radya Gita Bahagi'}</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
