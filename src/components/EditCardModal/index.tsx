import {
  Modal,
  TransparentBackground,
  Form,
  FormGroup,
  Label,
  Input,
  SaveButton,
  CancelButton,
} from './styles';

export default function EditCardModal({
  formData,
  onHandleEditChange,
  handleUploadFile,
  onCloseEditModal,
  onSaveEdit,
}: any) {
  return (
    <>
      <TransparentBackground onClick={onCloseEditModal} />
      <Modal>
        <Form onSubmit={onSaveEdit}>
          <FormGroup>
            <Label htmlFor="label">Name</Label>
            <Input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={onHandleEditChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Photo</Label>
            <Input
              name="cover"
              accept="image/*"
              type="file"
              onChange={handleUploadFile}
            />
          </FormGroup>
          <FormGroup>
            <SaveButton type="submit">Save</SaveButton>
            <CancelButton type="button" onClick={onCloseEditModal}>
              Cancel
            </CancelButton>
          </FormGroup>
        </Form>
      </Modal>
    </>
  );
}
