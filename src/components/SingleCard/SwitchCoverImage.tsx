import { Delete, ErrorOutline } from '@material-ui/icons';

import {
  EditFileContainer,
  EditFileButton,
  DeleteRecycleButton,
  ErrorFileContainer,
  ErrorMessageContainer,
  ErrorMessage,
  ErrorButtonsContainer,
  DeleteFileButton,
  ReportIssueButton,
  TranscribingFileContainer,
  TranscribingMessage,
} from './styles';

interface SwitchStatusProps {
  status: string;
}

export default function SwitchCoverImage({ status }: SwitchStatusProps) {
  switch (status) {
    case 'ready':
      return (
        <EditFileContainer className="edit-file-container">
          <EditFileButton>Edit</EditFileButton>
          <DeleteRecycleButton>
            <Delete />
          </DeleteRecycleButton>
        </EditFileContainer>
      );
    case 'error':
      return (
        <ErrorFileContainer className="delete-file-container">
          <ErrorMessageContainer>
            <ErrorOutline />
            <ErrorMessage>
              An error occured while processing your file. Delete file to try
              again, and report issue if the problem presists.
            </ErrorMessage>
          </ErrorMessageContainer>
          <ErrorButtonsContainer>
            <DeleteFileButton>Delete file</DeleteFileButton>
            <ReportIssueButton>Report issue</ReportIssueButton>
          </ErrorButtonsContainer>
        </ErrorFileContainer>
      );
    default:
      return (
        <TranscribingFileContainer>
          <TranscribingMessage>Transcribing subtitles</TranscribingMessage>
          <div className="progress">
            <div className="track">
              {[...Array(30)].map(() => (
                <div className="bar"></div>
              ))}
            </div>
          </div>
        </TranscribingFileContainer>
      );
  }
}
