import classNames from 'classnames'
import React from 'react'
import { Card, Image } from 'react-bootstrap'
import ProductLabel from '../productLabel/ProductLabel'
import StockLabel from '../stockLabel/StockLabel'
import styles from './styles.module.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import RatingStars from '../ratingStars/RatingStars'

const ProductCard = ({ image, stock, isNew, numOfReviews, rating, name, product_id, points }) => {
    const errorHandler = (err) => {
        console.log('error Handler = ', err)
    }
    return (
        <>
            <Card className='my-3 rounded-3 d-flex align-items-stretch h-100'>
                <StockLabel stock={stock} className={styles.product__stock} />
                <div className={classNames(styles.product__image)}>
                    <div className={styles.image__box} style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <Image src={image} layout="fill" quality={80} onError={(err) => {errorHandler(err)}} />
                    </div>
                </div>
                <Card.Body>
                    <Card.Title as='div' className='extra-small'>
                        <strong>
                            {/* {product.name.length < 27 ? product.name : `${product.name.slice(0, 26)}...`}
                            {product.name.length < 17 ? ('') : ('')} */}
                        </strong>
                    </Card.Title>


                    <Card.Text as='div'>                        
                        {name}
                    </Card.Text>
                    <Card.Text as='div'>
                        <div>
                            <div className={styles.product__points}>
                                <Image src="/assets/svg/logo-points.svg" width={11} height={11} alt="logo points" quality={100} />
                                <span>{points} poins</span>
                            </div>
                            <div>
                                <span><RatingStars id={product_id} rating={rating} height={10} width={10} /></span> {numOfReviews} reviews
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
                <ProductLabel isNew={isNew} numOfReviews={numOfReviews} rating={rating} />
                <div className={styles.overlay__items}>
                    <span>{name}</span>
                    <Link to={`/product/${product_id}`}>
                        <button className="btn btn-outline-light">
                            View detail
                        </button>
                    </Link>
                </div>
            </Card>
        </>
    )
}

ProductCard.propTypes = {
    image: PropTypes.string,
    stock: PropTypes.number,
    isNew: PropTypes.number,
    numOfReviews: PropTypes.number,
    rating: PropTypes.number,
    name: PropTypes.string,
    points: PropTypes.number
}

export default ProductCard