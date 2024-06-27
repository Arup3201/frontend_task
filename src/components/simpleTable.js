import { React } from "react";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal, Table, Button, Space } from "antd";

const SimpleTable = ({ dataSource, onDelete, onEdit }) => {
  const { confirm } = Modal;
  const showConfirm = (id) => {
    confirm({
      title: "Do you want to delete these items?",
      icon: <ExclamationCircleFilled />,
      content:
        "If you apply this operation then this data will be parmanently be removed from the database.",
      onOk() {
        console.log("Proceeding to Delete...");
        onDelete(id);
      },
      onCancel() {
        console.log("Delete Cancelled...");
      },
    });
  };

  let columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    {
      title: "Actions",
      key: "action",
      render: (_, record) => (
        <Space size={"middle"}>
          <Button type="primary" onClick={() => onEdit(record)}>
            Edit
          </Button>
          <Button type="primary" danger onClick={() => showConfirm(record.id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="datatable">
      {dataSource.length ? (
        <Table dataSource={dataSource} columns={columns} />
      ) : (
        "No user data"
      )}
    </div>
  );
};

export default SimpleTable;
