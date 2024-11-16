'use client';
import {
  Wrapper,
  Inner,
  Header,
  Testimonial,
  Testimony,
  Name,
  Avatar,
  CardGrid,
  TopRow,
  BottomRow,
} from './styles';
import ic_arrow_left from '../../../../public/svgs/ic_arrow_left.svg';
import ic_arrow_right from '../../../../public/svgs/ic_arrow_right.svg';
import Image from 'next/image';
import { MaskText } from '@/components';
import { useIsMobile } from '../../../../libs/useIsMobile';
import { Props, desktopHeaderPhrase, testimonials } from './constants';

const JoinSection = () => {
  const isMobile = useIsMobile();
  
  const topRow = testimonials.slice(0, 2);
  const bottomRow = testimonials.slice(2);

  return (
    <Wrapper>
      <Inner>
        <Header>
          <MaskText phrases={desktopHeaderPhrase} tag="h1" />
        </Header>
        <CardGrid>
          <TopRow>
            {topRow.map((t, i) => (
              <Testimonial key={i}>
                <Avatar>
                  <Image 
                    src={t.avatar} 
                    alt={t.person} 
                    width={160} 
                    height={160}
                    style={{ objectFit: 'cover' }}
                  />
                </Avatar>
                <Name>
                  <MaskText phrases={[t.person]} tag="h3" />
                  <MaskText phrases={[t.role]} tag="p" />
                </Name>
                <Testimony>{t.testimony}</Testimony>
              </Testimonial>
            ))}
          </TopRow>
          <BottomRow>
            {bottomRow.map((t, i) => (
              <Testimonial key={i}>
                <Avatar>
                  <Image 
                    src={t.avatar} 
                    alt={t.person} 
                    width={160} 
                    height={160}
                    style={{ objectFit: 'cover' }}
                  />
                </Avatar>
                <Name>
                  <MaskText phrases={[t.person]} tag="h3" />
                  <MaskText phrases={[t.role]} tag="p" />
                </Name>
                <Testimony>{t.testimony}</Testimony>
              </Testimonial>
            ))}
          </BottomRow>
        </CardGrid>
      </Inner>
    </Wrapper>
  );
};

export default JoinSection;
