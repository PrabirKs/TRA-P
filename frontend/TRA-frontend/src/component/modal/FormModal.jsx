import React, { useState } from "react";
import { Button, Modal } from "antd";
import JobAddForm from "../forms/JobAddForm";
import NewJobTitile from "../NewJobTitile";
const FormModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open Modal of 1000px width
      </Button>
      <Modal
        title={<NewJobTitile/>}
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
        footer={null}
      >
        <div className="h-[80vh] job-add-form-container w-full flex justify-center ">
          <JobAddForm/>
        </div>
      </Modal>
    </>
  );
};
export default FormModal;
