import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <div style={{ marginTop: '50px', backgroundColor: '#254D4D', paddingTop: '20px', paddingBottom: '10px', fontFamily: 'font-family: "Montserrat", sans-serif;' }}>
            <Container>
                <Row style={{ height: '335px' }}>
                    <Col style={{ height: '169px', display: 'grid', gridTemplateRows: 'auto, auto', gap: '40px', width: '242px' }}>
                        <div style={{ width: '235px' }}>
                            <div style={{ fontWeight: '500', fontSize: '24px', lineHeight: '29.26px', color: '#FFFFFF' }}>
                                Contact
                            </div>
                            <div style={{ fontWeight: '400', fontSize: '16px', lineHeight: '19.5px', color: '#FFFFFF' }}>
                                For your orders contact us on
                            </div>
                        </div>
                        <div>
                            <div style={{ fontWeight: '400', fontSize: '16px', lineHeight: '19.5px', color: '#FFFFFF' }}>
                                elegantfurnitures@gmail.com
                            </div>
                            <div style={{ fontWeight: '400', fontSize: '16px', lineHeight: '19.5px', color: '#FFFFFF' }}>
                                +2347013781800
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div style={{ height: '265px', width: '375px', gap: '60px', display: 'grid', gridTemplateRows: 'auto auto auto', marginInline: 'auto' }}>
                            <div style={{display: 'grid',  }}>
                                <div style={{ fontWeight: '400', fontSize: '32px', lineHeight: '38.37px', color: '#FFFFFF', textAlign: 'center', fontFamily: '"Inria Serif", serif' }}>
                                    Elegant Furnitures
                                </div>
                                <div style={{ fontWeight: '400', fontSize: '16px', lineHeight: '19.5px', color: '#FFFFFF', textAlign: 'center', fontFamily: '"Montserrat", sans-serif' }}>
                                    We speak your personality!
                                </div>
                            </div>
                            <div style={{ height: '20px', width: '375px', gap: '40px', display: 'grid', gridTemplateColumns: 'auto auto auto auto', }}>
                                <div style={{ fontWeight: '400', fontSize: '16px', lineHeight: '19.5px', color: '#FFFFFF', textAlign: 'center', fontFamily: '"Montserrat", sans-serif' }}>
                                    Home
                                </div>
                                <div style={{ fontWeight: '400', fontSize: '16px', lineHeight: '19.5px', color: '#FFFFFF', textAlign: 'center', fontFamily: '"Montserrat", sans-serif' }}>
                                    Socials
                                </div>
                                <div style={{ fontWeight: '400', fontSize: '16px', lineHeight: '19.5px', color: '#FFFFFF', textAlign: 'center', fontFamily: '"Montserrat", sans-serif' }}>
                                    About
                                </div>
                                <div style={{ fontWeight: '400', fontSize: '16px', lineHeight: '19.5px', color: '#FFFFFF', textAlign: 'center', fontFamily: '"Montserrat", sans-serif' }}>
                                    Contact Us
                                </div>
                            </div>
                            <div style={{ height: '28px', width: '300px', gap: '16px', display: 'grid', gridTemplateColumns: 'auto auto auto auto auto' }}>
                                <div>
                                    <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" width="28" height="28" rx="5" fill="#254D4D" fill-opacity="0.8" />
                                        <path d="M15.897 22.9969V14.8009H18.662L19.073 11.5919H15.897V9.54792C15.897 8.62192 16.155 7.98793 17.484 7.98793H19.168V5.12693C18.3486 5.03912 17.525 4.99672 16.701 4.99993C14.257 4.99993 12.579 6.49193 12.579 9.23093V11.5859H9.832V14.7949H12.585V22.9969H15.897Z" fill="white" />
                                    </svg>
                                </div>
                                <div>
                                    <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" width="28" height="28" rx="5" fill="#254D4D" fill-opacity="0.8" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.929 10.9237H15.643V12.4962C16.178 11.5918 17.55 10.7792 19.611 10.7792C23.562 10.7792 24.5 12.5795 24.5 15.8826V22H20.5V16.6348C20.5 14.7537 19.965 13.693 18.603 13.693C16.714 13.693 15.929 14.8362 15.929 16.634V22H11.929V10.9237ZM5.07 21.8555H9.07V10.7792H5.07V21.8555ZM9.643 7.1675C9.64315 7.45248 9.57666 7.73465 9.44739 7.9976C9.31812 8.26055 9.12865 8.49904 8.89 8.6992C8.4064 9.10773 7.75181 9.33641 7.07 9.335C6.38939 9.33461 5.73631 9.10652 5.252 8.70005C5.01421 8.49921 4.82539 8.26045 4.69634 7.99747C4.5673 7.73448 4.50058 7.45244 4.5 7.1675C4.5 6.59205 4.77 6.04125 5.253 5.63495C5.73689 5.22793 6.39024 4.99975 7.071 5C7.753 5 8.407 5.22865 8.89 5.63495C9.372 6.04125 9.643 6.59205 9.643 7.1675Z" fill="white" />
                                    </svg>
                                </div>
                                <div>
                                    <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" width="28" height="28" rx="5" fill="#254D4D" fill-opacity="0.8" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.965 3.066C11.138 3.012 11.512 3 14.5 3C17.488 3 17.862 3.013 19.034 3.066C20.206 3.119 21.006 3.306 21.706 3.577C22.439 3.854 23.104 4.287 23.654 4.847C24.214 5.396 24.646 6.06 24.922 6.794C25.194 7.494 25.38 8.294 25.434 9.464C25.488 10.639 25.5 11.013 25.5 14C25.5 16.988 25.487 17.362 25.434 18.535C25.381 19.705 25.194 20.505 24.922 21.205C24.646 21.9391 24.2133 22.6042 23.654 23.154C23.104 23.714 22.439 24.146 21.706 24.422C21.006 24.694 20.206 24.88 19.036 24.934C17.862 24.988 17.488 25 14.5 25C11.512 25 11.138 24.987 9.965 24.934C8.795 24.881 7.995 24.694 7.295 24.422C6.56092 24.146 5.89582 23.7133 5.346 23.154C4.78638 22.6047 4.35331 21.9399 4.077 21.206C3.806 20.506 3.62 19.706 3.566 18.536C3.512 17.361 3.5 16.987 3.5 14C3.5 11.012 3.513 10.638 3.566 9.466C3.619 8.294 3.806 7.494 4.077 6.794C4.35372 6.06008 4.78712 5.39531 5.347 4.846C5.89604 4.2865 6.56047 3.85344 7.294 3.577C7.994 3.306 8.794 3.12 9.964 3.066H9.965ZM18.945 5.046C17.785 4.993 17.437 4.982 14.5 4.982C11.563 4.982 11.215 4.993 10.055 5.046C8.982 5.095 8.4 5.274 8.012 5.425C7.499 5.625 7.132 5.862 6.747 6.247C6.38205 6.60205 6.10118 7.03428 5.925 7.512C5.774 7.9 5.595 8.482 5.546 9.555C5.493 10.715 5.482 11.063 5.482 14C5.482 16.937 5.493 17.285 5.546 18.445C5.595 19.518 5.774 20.1 5.925 20.488C6.101 20.965 6.382 21.398 6.747 21.753C7.102 22.118 7.535 22.399 8.012 22.575C8.4 22.726 8.982 22.905 10.055 22.954C11.215 23.007 11.562 23.018 14.5 23.018C17.438 23.018 17.785 23.007 18.945 22.954C20.018 22.905 20.6 22.726 20.988 22.575C21.501 22.375 21.868 22.138 22.253 21.753C22.618 21.398 22.899 20.965 23.075 20.488C23.226 20.1 23.405 19.518 23.454 18.445C23.507 17.285 23.518 16.937 23.518 14C23.518 11.063 23.507 10.715 23.454 9.555C23.405 8.482 23.226 7.9 23.075 7.512C22.875 6.999 22.638 6.632 22.253 6.247C21.8979 5.88207 21.4657 5.60121 20.988 5.425C20.6 5.274 20.018 5.095 18.945 5.046ZM13.095 17.391C13.8797 17.7176 14.7534 17.7617 15.5669 17.5157C16.3805 17.2697 17.0834 16.7489 17.5556 16.0422C18.0278 15.3356 18.2401 14.4869 18.156 13.6411C18.072 12.7953 17.697 12.005 17.095 11.405C16.7112 11.0215 16.2472 10.7278 15.7363 10.5451C15.2255 10.3625 14.6804 10.2954 14.1405 10.3486C13.6006 10.4019 13.0792 10.5742 12.6138 10.8531C12.1485 11.1321 11.7507 11.5107 11.4493 11.9619C11.1479 12.413 10.9502 12.9253 10.8705 13.462C10.7908 13.9986 10.8312 14.5463 10.9885 15.0655C11.1459 15.5847 11.4165 16.0626 11.7807 16.4647C12.145 16.8668 12.5938 17.1832 13.095 17.391ZM10.502 10.002C11.027 9.47697 11.6503 9.0605 12.3363 8.77636C13.0223 8.49222 13.7575 8.34597 14.5 8.34597C15.2425 8.34597 15.9777 8.49222 16.6637 8.77636C17.3497 9.0605 17.973 9.47697 18.498 10.002C19.023 10.527 19.4395 11.1503 19.7236 11.8363C20.0078 12.5223 20.154 13.2575 20.154 14C20.154 14.7425 20.0078 15.4777 19.7236 16.1637C19.4395 16.8497 19.023 17.473 18.498 17.998C17.4377 19.0583 15.9995 19.654 14.5 19.654C13.0005 19.654 11.5623 19.0583 10.502 17.998C9.44166 16.9377 8.84597 15.4995 8.84597 14C8.84597 12.5005 9.44166 11.0623 10.502 10.002ZM21.408 9.188C21.5381 9.06527 21.6423 8.91768 21.7143 8.75397C21.7863 8.59027 21.8248 8.41377 21.8274 8.23493C21.83 8.05609 21.7967 7.87855 21.7295 7.71281C21.6622 7.54707 21.5624 7.39651 21.436 7.27004C21.3095 7.14357 21.1589 7.04376 20.9932 6.97652C20.8275 6.90928 20.6499 6.87598 20.4711 6.87858C20.2922 6.88119 20.1157 6.91965 19.952 6.9917C19.7883 7.06374 19.6407 7.1679 19.518 7.298C19.2793 7.55103 19.1486 7.88712 19.1537 8.23493C19.1588 8.58274 19.2992 8.91488 19.5452 9.16084C19.7911 9.40681 20.1233 9.54723 20.4711 9.5523C20.8189 9.55737 21.155 9.42669 21.408 9.188Z" fill="white" />
                                    </svg>
                                </div>
                                <div>
                                    <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" width="28" height="28" rx="5" fill="#254D4D" fill-opacity="0.8" />
                                        <g clip-path="url(#clip0_5_146)">
                                            <path d="M26.143 6.93708C25.308 7.30708 24.411 7.55708 23.468 7.67008C24.441 7.08787 25.1689 6.17154 25.516 5.09208C24.6018 5.63507 23.6013 6.01727 22.558 6.22208C21.8564 5.47294 20.9271 4.9764 19.9143 4.80955C18.9016 4.6427 17.8621 4.81487 16.9572 5.29933C16.0524 5.78379 15.3328 6.55344 14.9102 7.48878C14.4875 8.42412 14.3855 9.47283 14.62 10.4721C12.7677 10.3791 10.9556 9.89763 9.30142 9.05898C7.64722 8.22034 6.18784 7.04324 5.018 5.60408C4.618 6.29408 4.388 7.09408 4.388 7.94608C4.38755 8.71307 4.57643 9.46832 4.93788 10.1448C5.29932 10.8213 5.82216 11.3981 6.46 11.8241C5.72027 11.8005 4.99687 11.6007 4.35 11.2411V11.3011C4.34992 12.3768 4.72203 13.4195 5.40318 14.2521C6.08433 15.0847 7.03257 15.656 8.087 15.8691C7.40078 16.0548 6.68133 16.0821 5.983 15.9491C6.28049 16.8747 6.85999 17.6841 7.64036 18.264C8.42074 18.8439 9.36291 19.1653 10.335 19.1831C8.68483 20.4785 6.64688 21.1812 4.549 21.1781C4.17738 21.1782 3.80607 21.1565 3.437 21.1131C5.56647 22.4823 8.04534 23.2089 10.577 23.2061C19.147 23.2061 23.832 16.1081 23.832 9.95208C23.832 9.75208 23.827 9.55008 23.818 9.35008C24.7293 8.69105 25.5159 7.87497 26.141 6.94008L26.143 6.93708Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_5_146">
                                                <rect width="24" height="24" fill="white" transform="translate(2.5 2)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div>
                                    <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" width="28" height="28" rx="5" fill="#254D4D" fill-opacity="0.8" />
                                        <path d="M4.8868 8.70674C4.8868 10.4995 5.4856 11.7931 6.6652 12.5527C7.6324 13.1767 8.7532 13.2703 9.3364 13.2703C9.478 13.2703 9.592 13.2631 9.6712 13.2583C9.6712 13.2583 9.4864 14.4631 10.3792 15.6535H10.3384C8.7916 15.6535 3.7468 15.9763 3.7468 20.1259C3.7468 24.3451 8.38 24.5599 9.31 24.5599C9.3832 24.5599 9.4264 24.5575 9.4264 24.5575C9.436 24.5575 9.502 24.5599 9.616 24.5599C10.2124 24.5599 11.7544 24.4855 13.186 23.7883C15.0436 22.8883 15.9856 21.3175 15.9856 19.1263C15.9856 17.0095 14.5504 15.7495 13.5028 14.8279C12.8632 14.2651 12.31 13.7803 12.31 13.3087C12.31 12.8287 12.7144 12.4675 13.2244 12.0103C14.0512 11.2723 14.8312 10.2199 14.8312 8.23034C14.8312 6.48194 14.6044 5.30714 13.2064 4.56194C13.3516 4.48754 13.8676 4.43354 14.122 4.39754C14.8792 4.29434 15.9868 4.17674 15.9868 3.55874V3.43994H10.468C10.4128 3.44234 4.8868 3.64634 4.8868 8.70674ZM13.7956 19.5223C13.9012 21.2095 12.4576 22.4539 10.2892 22.6111C8.0872 22.7731 6.2752 21.7819 6.1696 20.0959C6.118 19.2847 6.4744 18.4927 7.1716 17.8603C7.8784 17.2207 8.8492 16.8247 9.9052 16.7467C10.03 16.7395 10.1536 16.7323 10.2772 16.7323C12.316 16.7335 13.696 17.9311 13.7956 19.5223ZM12.3544 7.55114C12.8956 9.45674 12.0784 11.4463 10.7752 11.8147C10.6252 11.8565 10.4701 11.8775 10.3144 11.8771C9.1216 11.8771 7.9396 10.6699 7.5004 9.00554C7.2556 8.07434 7.276 7.25594 7.5568 6.47114C7.8316 5.69714 8.3284 5.17754 8.9524 5.00114C9.1024 4.95914 9.2572 4.93754 9.4144 4.93754C10.8544 4.93754 11.7808 5.53514 12.3544 7.55114ZM21.7 11.5999V7.99994H19.3V11.5999H15.7V13.9999H19.3V17.5999H21.7V13.9999H25.3V11.5999H21.7Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div style={{ height: '265px', width: '265px', display: 'grid', gridTemplateRows: 'auto auto', gap: '32px', marginInline: 'auto' }}>
                            <div style={{ fontWeight: '500', fontSize: '24px', lineHeight: '29.26px', color: '#FFFFFF', fontFamily: '"Montserrat", sans-serif', }}>
                                Our Office
                            </div>
                            <div style={{ height: '212px', display: 'grid', gridTemplateRows: 'auto auto auto', gap: '32px' }}>
                                <div style={{ fontWeight: '400', fontSize: '16px', lineHeight: '19.5px', color: '#FFFFFF', fontFamily: '"Montserrat", sans-serif' }}>
                                    Visit us at any of our offices
                                </div>
                                <div style={{ height: '64px', display: 'grid', gridTemplateRows: 'auto auto', gap: '4px' }}>
                                    <div style={{ fontWeight: '500', fontSize: '16px', lineHeight: '19.5px', color: '#FFFFFF', fontFamily: '"Montserrat", sans-serif' }}>
                                        Head office
                                    </div>
                                    <div style={{ fontWeight: '400', fontSize: '16px', lineHeight: '19.5px', color: '#FFFFFF', fontFamily: '"Montserrat", sans-serif' }}>
                                        10, Adetokunbo Ademola Cresent, maitama, Abuja.
                                    </div>
                                </div>
                                <div style={{ height: '64px', display: 'grid', gridTemplateRows: 'auto auto', gap: '4px' }}>
                                    <div style={{ fontWeight: '500', fontSize: '16px', lineHeight: '19.5px', color: '#FFFFFF', fontFamily: '"Montserrat", sans-serif' }}>
                                        Branch office
                                    </div>
                                    <div style={{ fontWeight: '400', fontSize: '16px', lineHeight: '19.5px', color: '#FFFFFF', fontFamily: '"Montserrat", sans-serif' }}>
                                        20, Lamil Adeoya Cresent, Ikeja, Lagos.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row style={{ height: '20px' }}>
                    <Col style={{ fontWeight: '400', fontSize: '16px', lineHeight: '19.5px', color: '#FFFFFF', fontFamily: '"Montserrat", sans-serif' }}>
                        Copyright 2023. All Rights Reserved
                    </Col>
                    <Col style={{ fontWeight: '400', fontSize: '16px', lineHeight: '19.5px', color: '#FFFFFF', fontFamily: '"Montserrat", sans-serif' }}>
                        Privacy policy
                    </Col>
                    <Col style={{ fontWeight: '400', fontSize: '16px', lineHeight: '19.5px', color: '#FFFFFF', fontFamily: '"Montserrat", sans-serif' }}>Terms of service</Col>
                </Row>
            </Container>
        </div >
    )
}

export default Footer
