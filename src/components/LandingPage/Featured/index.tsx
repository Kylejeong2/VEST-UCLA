'use client';
import Image from 'next/image';
import { Wrapper, Inner, ImageContainer } from './styles';
import companies_image from '../../../../public/images/companies.png';

const Featured = () => {
  return (
    <Wrapper>
      <Inner>
        <h2>Winter 2025 Companies</h2>
        <ImageContainer>
          <Image 
            src="https://utfs.io/f/S5FODHw5IM4mwsX5LIevUF9XL70Anhsk5zdKxtYboJwp6rDP"
            alt="Companies we're working with"
            width={1200}
            height={200}
            style={{
              maxWidth: '100%',
              height: 'auto',
              objectFit: 'contain'
            }}
            priority
          />
        </ImageContainer>
      </Inner>
    </Wrapper>
  );
};

export default Featured;