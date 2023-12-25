import React from 'react';
import styles from './MovieCard.module.scss';
import { Card, Image } from 'react-bootstrap';
import { getImageUrl } from '../../../utils';

export type TMovieCard = {
  releaseMovie: any;
};

const MovieCard: React.FC<TMovieCard> = ({ releaseMovie }) => {
  return (
    <Card className={`main-content ${releaseMovie && releaseMovie.original_language}`}>
      <div className='position-relative'>
        <Card.Img variant='top' src={getImageUrl(releaseMovie && releaseMovie.poster_path)} />
      </div>
      <div className={`d-xl-flex justify-content-between align-items-center mt-3 ${styles.content}`}>
        <div className={`${styles.title}`}><p>{releaseMovie && releaseMovie.title}</p></div>
        <div className='d-flex'>
          <div className={`me-2 p-1 ${styles.quality}`}>{releaseMovie && releaseMovie.popularity}</div>
          <div className={`ms-1 p-1 d-flex align-items-center ${styles.info}`}>
            <Image src='/assets/img/icon-clock.svg' alt='Clock' />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MovieCard;
