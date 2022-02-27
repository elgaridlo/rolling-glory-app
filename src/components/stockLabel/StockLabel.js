import React, { useMemo } from 'react'
import classNames from 'classnames';
import styles from './styles.module.css';

const StockLabel = ({ stock, className, redStockClassName, greenStockClassName }) => {
    const [stockLabel, stockClassName] = useMemo(() => {
        let red = redStockClassName ? redStockClassName : styles.stock__red;
        let green = greenStockClassName ? greenStockClassName : styles.stock__green;

        let label = 'Stock < 5';
        let resolveClassName = [styles.product__stock_label, red, className];

        if (stock > 5) {
            label = 'In Stock';
            resolveClassName[1] = green;
        } else if (stock <= 0) {
            label = 'Sold Out';
        }

        return [label, classNames(resolveClassName)];
    }, [className, greenStockClassName, redStockClassName, stock]);

    return (<span className={stockClassName} style={{paddingTop: '1rem'}}>{stockLabel}</span>);
}

export default StockLabel