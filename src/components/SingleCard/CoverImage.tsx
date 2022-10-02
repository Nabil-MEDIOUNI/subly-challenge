import SwitchCoverImage from './SwitchCoverImage';

import { DataType } from '../../interfaces';

import { ImageContainer } from './styles';

interface CoverImageProps {
  media: DataType;
}

export default function CoverImage({ media }: CoverImageProps) {
  return (
    <ImageContainer
      data-testid="cover-image"
      picture={media.cover}
      status={media.status}
    >
      <SwitchCoverImage media={media} />
    </ImageContainer>
  );
}
