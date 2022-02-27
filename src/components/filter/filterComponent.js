import React, { useEffect, useState } from 'react'
import { Card, Container, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { showProductAction } from '../../action/productAction'
import roundedNumber from '../../utils/roundedNumber'

// rating = 'attributes.rating' => {  }
// 
// 
// 

const FilterComponent = () => {
    const [checkRating, setCheckRating] = useState()
    const [checkStock, setStock] = useState()

    const [dataProduct, setDataProduct] = useState([])

    const productListLoad = useSelector(state => state.productListLoad)
    const { product: productTemp, showProduct } = productListLoad

    const dispatch = useDispatch()

    useEffect(() => {
        if(!checkStock && !checkRating) {
            setDataProduct(()=> {
                return [...productTemp]
            })
        } else if (checkStock && !checkRating) {
            const data = []
            setDataProduct(() => {
                productTemp.map((item) => {
                    if (item.attributes.stock > 0) {
                        data.push(item)
                    }
                })
                return [...data]
            })
        } else if (checkRating && !checkStock) {
            const data = []
            
            setDataProduct(() => {
                productTemp.map((item) => {
                    if (roundedNumber(item.attributes.rating) >= 4.00) {
                        data.push(item)
                    }
                })
                return [...data]
            })
        } else {
            const data = []
            setDataProduct(() => {
                productTemp.map((item) => {
                    if (roundedNumber(item.attributes.rating) >= 4.00 && item.attributes.stock > 0) {
                        data.push(item)
                    }
                })
                return [...data]
            })
        }
    },[checkStock, checkRating, productTemp])
    
    useEffect(() => {
        dispatch(showProductAction(dataProduct))
    },[dataProduct])

    return (
        <Container className="pt-3 pb-3">
            <Card >
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Rating 4 Ke Atas" onChange={(check) => setCheckRating(check.target.checked)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Stock Tersedia" onChange={(check) => setStock(check.target.checked)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default FilterComponent