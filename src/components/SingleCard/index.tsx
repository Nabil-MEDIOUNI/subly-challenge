import Status from './Status';
import CoverImage from './CoverImage';

import { DataType } from '../../interfaces/index';

import { SingleCardContainer, CardContant, CardTitle } from './styles';

interface SingleCardProps {
  media: DataType;
}

export default function SingleCard({ media }: SingleCardProps) {
  return (
    <SingleCardContainer>
      <CoverImage cover={media.cover} status={media.status} />
      <CardContant>
        <CardTitle>{media.name}</CardTitle>
        <Status status={media.status} updatedAt={media.updatedAt} />
      </CardContant>
    </SingleCardContainer>
  );
}
