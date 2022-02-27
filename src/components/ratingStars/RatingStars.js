import classNames from 'classnames';
import React from 'react'
import { useMemo } from 'react';
import roundedNumber from '../../utils/roundedNumber';
import PropTypes from 'prop-types';
import styles from './styles.module.css'
import { Image } from 'react-bootstrap';

const RatingStars = ({ id, containerClassName, rating, width = 11, height = 10, quality = 100 }) => {
  const stars = useMemo(() => {
    let stars = [];
    const roundRating = roundedNumber(rating);
    const starProps = {
      width,
      height,
      quality,
    };

    for (let i = 0; i < 5; i++) {
      if (roundRating - i === 0.5) stars.push(<HalfStar key={`rating_${id}_${i}`} {...starProps} />);
      else if (i <= roundRating - 1) stars.push(<Star key={`rating_${id}_${i}`} {...starProps} />);
      else stars.push(<DimStar key={`rating_${id}_${i}`} {...starProps} />);
    }

    return stars;
  }, [height, id, quality, rating, width]);

  return <span className={classNames(styles.star__rating, containerClassName)}>{stars}</span>;
}

export default RatingStars

const STAR_PROPTYPES = {
  width: PropTypes.number,
  height: PropTypes.number,
  quality: PropTypes.number,
};

RatingStars.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  rating: PropTypes.number,
  ...STAR_PROPTYPES,
};


const DimStar = ({ width, height, quality }) => (
  <Image src="/assets/svg/dim-star.svg" alt="dim star" width={width} height={height} quality={quality} />
);
const HalfStar = ({ width, height, quality }) => (
  <Image src="/assets/svg/half-star.svg" alt="half star" width={width} height={height} quality={quality} />
);
const Star = ({ width, height, quality }) => (
  <Image src="/assets/svg/star.svg" alt="star" width={width} height={height} quality={quality} />
);

DimStar.propTypes = STAR_PROPTYPES;
HalfStar.propTypes = STAR_PROPTYPES;
Star.propTypes = STAR_PROPTYPES;