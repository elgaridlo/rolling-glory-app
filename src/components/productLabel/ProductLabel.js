import React from 'react'
import classNames from 'classnames';
import { useMemo } from 'react';
import styles from './styles.module.css';
import { Image } from 'react-bootstrap';


const ProductLabel = ({ containerClassName, isNew, numOfReviews, rating = 4.5 }) => {
    const [label, backgroundImage] = useMemo(() => {
        let label = null;
        let backgroundImage = '';
        const roundRating = rating;
        const isBestSeller = roundRating >= 4 && numOfReviews > 25;

        if (isNew && isBestSeller) {
            label = <><span>Hot</span><span>Item</span></>;
            backgroundImage = '/assets/svg/product-hot-label.svg';
        } else if (isNew) {
            label = <span>New</span>;
            backgroundImage = '/assets/svg/product-new-label.svg';
        } else if (isBestSeller) {
            label = <><span>Best</span><span>Seller</span></>;
            backgroundImage = '/assets/svg/product-best-seller.svg';
        }

        return [label, backgroundImage];
    }, [isNew, numOfReviews, rating]);

    // console.log({ isNew, numOfReviews, rating, });

    return (
        <div className={classNames(styles.product__label, containerClassName)}>
            {backgroundImage && <Image src={backgroundImage} width={76} height={80} alt="label product" />}
            <span className={styles.label}>{label}</span>
        </div>
    );
}

export default ProductLabel