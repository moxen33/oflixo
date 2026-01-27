import React, { Fragment, memo } from 'react'

//react-boostrap
import { Button, Form, Row, Col } from 'react-bootstrap'

//hook
import { useTranslation } from 'react-i18next'

const ReviewComponent = memo(() => {
    const { t } = useTranslation();
    return (
        <Fragment>
            <div className="streamit-reviews">
                <div id="comments" className="comments-area validate-form">
                    <p className='masvideos-noreviews mt-3'>
                        {t('streamReview.no_reviews')}
                    </p>
                </div>
                <div className="review_form">
                    <div className="comment-respond">
                        <h3 className='fw-500 my-2'>
                            {t('streamReview.first_review')}
                        </h3>
                        <p className="comment-notes">
                            <span>{t('streamReview.email_address_will_not')}<span className="required"> * </span></span>
                        </p>
                            <div className="d-flex align-items-center mb-4">
                                            <label>
                                                {t('streamShop.your_rating')}
                                            </label>
                                            <div className="star ms-4 text-primary">
                                                <span>
                                                <i className="fa-regular fa-star"></i>
                                                </span>{" "}
                                                <span>
                                                <i className="fa-regular fa-star"></i>
                                                </span>{" "}
                                                <span>
                                                <i className="fa-regular fa-star"></i>
                                                </span>{" "}
                                                <span>
                                                <i className="fa-regular fa-star"></i>
                                                </span>{" "}
                                                <span>
                                                <i className="fa-regular fa-star"></i>
                                                </span>
                                            </div>
                                        </div>
                        <Row>
                            <Col md="12">
                                <Form.Group className='form-group'>
                                    <Form.Label>{t('streamReview.your_review')} <span className='required'> *</span></Form.Label>
                                    <textarea className='form-control' name='comment' cols="5" rows="8" required></textarea>
                                </Form.Group>
                            </Col>
                            <Col md="6">
                                <Form.Group className='form-group'>
                                    <Form.Label>{t('streamShop.name')} <span className='required'> *</span></Form.Label>
                                    <Form.Control type='text' name='author' size='30' required />
                                </Form.Group>
                            </Col>
                            <Col md="6">
                                <Form.Group className='form-group'>
                                    <Form.Label>{t('streamShop.email')} <span className='required'> *</span></Form.Label>
                                    <Form.Control type='email' name='email' size='30' required />
                                </Form.Group>
                            </Col>
                            <Col md="12">
                                
                                    <div className='mt-3 mt-3 d-flex gap-2 align-items-center'>
                                        <Form.Check.Input className='mt-0' type='checkbox' id='check1' />
                                        <Form.Check.Label htmlFor="check1">{t('streamShop.save_name')}</Form.Check.Label>
                                    </div>
 
                            </Col>
                            <Col md="12">
                                <div className='form-submit mt-4'>
                                    <div className="iq-button">
                                        <Button name="submit" type="submit" id="submit" className="btn text-uppercase position-relative" value="Submit">
                                            <span className="button-text">{t('streamButtons.submit')}</span>{" "}
                                            <i className="fa-solid fa-play"></i>
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </Fragment>
    )
})

export default ReviewComponent