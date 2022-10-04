import Status from './Status';
import CoverImage from './CoverImage';

import { DataType } from '../../interfaces/index';

import {
  SingleCardContainer,
  CardTitle,
  CardLanguages,
  LanguageMessage,
} from './styles';
import { Container } from '../../utils/styles';

interface SingleCardProps {
  media: DataType;
}

export default function SingleCard({ media }: SingleCardProps) {
  return (
    <SingleCardContainer>
      <CoverImage media={media} />
      <Container>
        <CardTitle>{media.name}</CardTitle>
        <Status status={media.status} updatedAt={media.updatedAt} />
      </Container>
      <CardLanguages className="card-languages">
        {media.languages.map((language) => (
          <LanguageMessage key={language}>{language}</LanguageMessage>
        ))}
      </CardLanguages>
    </SingleCardContainer>
  );
}
