import React from 'react'
import { useEffect } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { productByIdAction } from '../../action/productAction'
import RatingStars from '../../components/ratingStars/RatingStars'

const ProductInfo = ({ match }) => {
  const productById = useSelector(state => state.productById)
  const { loading, error, productInfo } = productById

  const dispatch = useDispatch()

  useEffect(() => {
    // console.log('match = ', match.params.id)
    dispatch(productByIdAction(match.params.id))
  }, [])

  console.log('data product = ', productInfo)

  return (
    <>
      <Container className="pt-4 pb-4">
        <div>
          Kenapa <Link to='/product' >Bisa to</Link>
        </div>
        {productInfo && (
          <>
            <Row className="pt-4">
              <Col lg={6} md={12}>
                <Image src={productInfo.images[0]} width={'70%'} />
              </Col>
              <Col lg={6} md={12}>
                <h2>{productInfo.name}</h2>
                <div>
                  <RatingStars id={productInfo.id} rating={productInfo.rating} height={20} width={20} />
                </div>
                <div>
                  <div dangerouslySetInnerHTML={{ __html: productInfo.info }}>
                  </div>
                </div>
              </Col>
            </Row>
            <Container className='pt-4'>
              <div style={{borderBottom: 'solid 1px black'}}>
                <h5>Info Produk</h5>
              </div>
              <div>
                <h2>Rincian</h2>
              </div>
              <div dangerouslySetInnerHTML={{ __html: productInfo.description }}>
              </div>
            </Container>
          </>
        )}
      </Container>
    </>
  )
}

export default ProductInfo