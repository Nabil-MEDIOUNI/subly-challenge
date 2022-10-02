import Status from './Status';
import CoverImage from './CoverImage';

import { DataType } from '../../interfaces/index';

import {
  SingleCardContainer,
  CardContent,
  CardTitle,
  CardLanguages,
  LanguageMessage,
} from './styles';

interface SingleCardProps {
  media: DataType;
}

export default function SingleCard({ media }: SingleCardProps) {
  return (
    <SingleCardContainer>
      <CoverImage media={media} />
      <CardContent>
        <CardTitle>{media.name}</CardTitle>
        <Status status={media.status} updatedAt={media.updatedAt} />
      </CardContent>
      <CardLanguages className="card-languages">
        {media.languages.map((language) => (
          <LanguageMessage key={language}>{language}</LanguageMessage>
        ))}
      </CardLanguages>
    </SingleCardContainer>
  );
}
