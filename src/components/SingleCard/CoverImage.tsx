import SwitchCoverImage from './SwitchCoverImage';

import { ImageContainer } from './styles';

interface CoverImageProps {
  cover: string;
  status: string;
}

export default function CoverImage({ cover, status }: CoverImageProps) {
  return (
    <ImageContainer picture={cover} status={status}>
      <SwitchCoverImage status={status} />
    </ImageContainer>
  );
}
