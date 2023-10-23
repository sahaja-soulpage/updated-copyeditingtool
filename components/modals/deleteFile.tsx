import React, { FC, useState } from "react";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { CommonService } from "services";
import Button from "react-bootstrap-button-loader";
interface INewFileProps {
  deleteFile: any;
  setDeleteFile: any;
  // projectId: number;
  id: number;
  setId: any;
  getData: any;
}

const DeleteFile: FC<INewFileProps> = (props) => {
  const { deleteFile, setDeleteFile, id, setId, getData } = props;
  const [loading, setLoading] = useState(false);
  const deleteProject = new CommonService();
  const handleDelete = (id: number) => {
    setDeleteFile(true);
    setLoading(true);
    deleteProject
      .deleteFile(id)
      .then(() => {
        setDeleteFile(false);
        getData();
        setId();
        setLoading(false);
        toast.success("Project deleted...!");
      })
      .catch((error: any) => {
        setDeleteFile(true);
        setLoading(false);
        toast.error(error.msg);
        toast.error("Error deleting project");
      });
  };
  return (
    <div>
      <Modal backdrop="static" keyboard={false} show={deleteFile?.model}>
        <Modal.Body>
          <div>
            <h2 className="py-2 f-28 fw-600 text-center">Confirm action</h2>
            <p className="text-center">
              The following action is irreversible, once deleted cannot be retrieved. Are you sure
              to delete this project?
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0 mb-2 dflex justify-content-center align-items-center">
          <button
            className="btn ms-3 bg-white"
            onClick={() => {
              setDeleteFile({ ...deleteFile, model: false });
            }}
          >
            Cancel
          </button>

          <Button
            variant="primary"
            type="button"
            style={{ opacity: 0.9, width: 117 }}
            loading={loading}
            className="text-white f-17 text-center new-file-button"
            onClick={() => handleDelete(id)}
          >
            Yes, delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DeleteFile;
