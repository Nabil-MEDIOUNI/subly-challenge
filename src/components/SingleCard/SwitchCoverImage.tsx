import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Delete, ErrorOutline } from '@material-ui/icons';

import EditCardModal from '../EditCardModal';

import { editData, deleteData } from '../../redux/actions/data';

import { DataType } from '../../interfaces';

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
  ProgressContainer,
  TrackContainer,
  BarContainer,
} from './styles';

interface SwitchStatusProps {
  media: DataType;
}

export default function SwitchCoverImage({ media }: SwitchStatusProps) {
  const [editModalIsOpen, setOpenEditModal] = useState(false);
  const [formData, setFormData] = useState({});

  const dispatch: any = useDispatch();

  const deleteFile = () => {
    dispatch(deleteData(media));
  };

  const onOpenEditModal = () => {
    setFormData(media);
    setOpenEditModal(true);
  };

  const onCloseEditModal = () => {
    setOpenEditModal(false);
  };

  const onHandleEditChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleUploadFile = (event: any) => {
    setFormData({
      ...formData,
      cover: URL.createObjectURL(event.target.files[0]),
    });
  };

  const onSaveEdit = (e: any) => {
    e.preventDefault();
    dispatch(editData({ ...formData, updatedAt: new Date() }));
    onCloseEditModal();
  };

  switch (media.status) {
    case 'ready':
      return (
        <>
          <EditFileContainer className="edit-file-container">
            <EditFileButton onClick={onOpenEditModal}>Edit</EditFileButton>
            <DeleteRecycleButton onClick={deleteFile}>
              <Delete />
            </DeleteRecycleButton>
          </EditFileContainer>
          {editModalIsOpen && (
            <EditCardModal
              formData={formData}
              onCloseEditModal={onCloseEditModal}
              onHandleEditChange={onHandleEditChange}
              handleUploadFile={handleUploadFile}
              onSaveEdit={onSaveEdit}
            />
          )}
        </>
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
            <DeleteFileButton onClick={deleteFile}>
              Delete file
            </DeleteFileButton>
            <ReportIssueButton>Report issue</ReportIssueButton>
          </ErrorButtonsContainer>
        </ErrorFileContainer>
      );
    default:
      return (
        <TranscribingFileContainer>
          <TranscribingMessage>Transcribing subtitles</TranscribingMessage>
          <ProgressContainer>
            <TrackContainer className="track">
              {[...Array(30)].map((_, i) => (
                <BarContainer key={i} className="bar" />
              ))}
            </TrackContainer>
          </ProgressContainer>
        </TranscribingFileContainer>
      );
  }
}
