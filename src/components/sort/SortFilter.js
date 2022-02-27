import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToProductListLoad, showProductAction } from '../../action/productAction'
import styles from './styles.module.css'

const SortFilter = () => {
    const [selectValue, setSelectValue] = useState('attributes.isNew')
    const [saveData, setSaveData] = useState([])

    const productListLoad = useSelector(state => state.productListLoad)
    const { product: productTemp, showProduct } = productListLoad

    const dispatch = useDispatch()

    useEffect(() => {
        setSaveData(()=> {
            const data = productTemp.sort((a,b) => {
                return b[selectValue.split('.')[0]][selectValue.split('.')[1]] - a[selectValue.split('.')[0]][selectValue.split('.')[1]]
            })
            return [...data]
        })
    },[selectValue])

    useEffect(() => {
        dispatch(addToProductListLoad(saveData))
    }, [saveData])

    return (
        <div className={styles.sort__container}>
            <span>Urutkan</span>
            <select className="form-select" value={selectValue} aria-label="sort" onChange={(e) => setSelectValue(e.target.value)}>
                <option value="attributes.isNew">Terbaru</option>
                <option value="attributes.numOfReviews">Review</option>
                <option value="attributes.stock">Stock</option>
            </select>
        </div>
    )
}

export default SortFilter