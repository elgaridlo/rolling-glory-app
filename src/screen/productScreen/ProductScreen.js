import Button from '@restart/ui/esm/Button'
import classNames from 'classnames'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Col, Container, Dropdown, DropdownButton, FormControl, InputGroup, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addToProductListLoad, listProductsAction, showProductAction } from '../../action/productAction'
import FilterComponent from '../../components/filter/filterComponent'
import Loader from '../../components/loader/Loader'
import ProductCard from '../../components/productdetail/ProductCard'
import SortFilter from '../../components/sort/SortFilter'
import styles from './styles.module.css'

const ProductScreen = () => {

  const [counter, setCounter] = useState(1)
  const [dataProduct, setDataProduct] = useState([])
  const [showButton, setShowButton] = useState(true)

  const productList = useSelector(state => state.productList)
  const { loading, error, products } = productList

  const productListLoad = useSelector(state => state.productListLoad)
  const { product: productTemp, showProduct } = productListLoad

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listProductsAction(counter, '9'))
  }, [counter])

  useEffect(() => {
    const existItem = dataProduct.find((x) => x.id === products.id)
    if (!existItem) {
      setDataProduct(prevProduct => {
        return [...prevProduct, ...products]
      })
      dispatch(addToProductListLoad(products))
    }

    if (products.length === 0) {
      setShowButton(false)
    } else {
      setShowButton(true)
    }
  }, [products])

  useEffect(() => {
    dispatch(showProductAction(productTemp))
  }, [productTemp])

  const loadHandler = () => {
    setCounter(counter + 1)
  }
  return (
    <>
      {/* <ProductDetailScreen /> */}
      <div style={{ paddingRight: '0px !important', paddingLeft: '0px !important' }}>
        <Container>
          <Row>
            <Col lg={3}>
              <div style={{ borderBottom: 'solid 1px black', paddingBottom: '1.5rem' }}>
                <h5>Filter</h5>
              </div>
              <div>
                <FilterComponent />
              </div>
            </Col>
            <Col lg={9}>
              <Container>
                <div style={{ borderBottom: 'solid 1px black' }}>
                  <Row>
                    <Col>
                      <h5>Product List</h5>
                    </Col>
                    <Col lg={4}>
                      <SortFilter />
                    </Col>
                  </Row>
                </div>
              </Container>
              <Container>
                <Row>
                  {loading && (
                    <div className="pt-4">
                      <Loader />
                    </div>
                  )}
                  {products && showProduct.map(item => (
                    <Col key={item.id} xs={12} sm={12} md={12} lg={4} xl={4} className='pb-4'>
                      <ProductCard
                        isNew={item.attributes.isNew}
                        stock={item.attributes.stock}
                        numOfReviews={item.attributes.numOfReviews}
                        rating={item.attributes.rating}
                        image={item.attributes.images[0]}
                        name={item.attributes.name}
                        product_id={item.attributes.id}
                        points={item.attributes.points}
                      />
                    </Col>
                  ))}
                </Row>
              </Container>
              <Container className={classNames('pt-4 pb-4')} style={{ position: 'relative' }}>
                <div className={styles.vertical__center}>
                  {showButton ? (
                    <Button
                      className="btn btn-outline-primary"
                      style={{ justifyContent: 'center', zIndex: '99' }}
                      onClick={() => loadHandler()}
                    >Load More</Button>
                  ) : (
                    <div>
                      Tidak ada lagi
                    </div>
                  )}
                </div>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default ProductScreen