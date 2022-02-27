import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import styles from './styles.module.css'

const ProductDetailScreen = () => {
    return (
        <>
            {/* <figure className={classNames('card', styles.product__card, { [styles.is__sold_out]: stock <= 0 })}> */}
            <figure className={classNames('card', styles.product__card)}>

                {/* <ProductStockLabel stock={stock} className={styles.product__stock} /> */}
                {/* <ProductImageComponent image={images[0]} slug={slug} /> */}
                {/* <div className={classNames(styles.product__image, containerClassName)}> */}
                <div className={classNames(styles.product__image)}>
                    <div className={styles.image__box}>
                        {<Image src="https://rgbtest.s3.ap-southeast-1.amazonaws.com/images/gift/full/xiaomi-pocophone-f1.jpg" layout="fill"  quality={80} />}
                        {/* {!image && <h5 className="h-100 w-100">No Image</h5>} */}
                    </div>
                </div>
                <div className={styles.card__body}>
                    <h5 className={classNames(styles.product__name, 'font-style-1')}>{'nama'}</h5>
                    <div className={styles.product__description}>
                        <div className={styles.product__misc}>
                            <div className={styles.product__points}>
                                <Image src="/images/logo-points.svg" width={11} height={11} alt="logo points" quality={100} />
                                <span>10000 poins</span>
                            </div>
                            <div className={styles.product__tooltips}>
                                {/* <StarRatingComponent id={product_id} rating={rating} /> */}
                                <div className={styles.product__reviews}>9000 reviews</div>
                            </div>
                        </div>
                        <div className={styles.product__wishlist}>
                            {/* <WishlistButton data-index={index} className={classNames({ [styles.wishlist__active]: isWishlist })} onClick={handleWishlist} /> */}
                        </div>
                    </div>
                </div>
                {/* <ProductLabelComponent isNew={isNew} numOfReviews={numOfReviews} rating={rating} /> */}
                <div className={styles.overlay__items}>
                    {/* <span>{name}</span> */}
                    <Link href={{
                        pathname: '/products/1',
                        // query: { product_id: product_id },
                    }}>
                        <a className="btn btn-outline-light">
                            View detail
                        </a>
                    </Link>
                </div>
            </figure >
        </>
    )
}

export default ProductDetailScreen