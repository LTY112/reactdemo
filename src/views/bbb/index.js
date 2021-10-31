import { Button, Table, Modal, Form, Input } from 'antd'
import { useState } from 'react'

export default function Bbb() {
  const [tableData, setTableData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('新建');
  const [form] = Form.useForm();

  const add = () => {
    setModalTitle('新建')
    setIsModalVisible(true);
  }

  const del = (_, _2, i) => {
    let arr = JSON.parse(JSON.stringify(tableData))
    arr = arr.splice(i, 0)
    setTableData(arr);
  }
  const edit = (r, i) => {
    console.log(r, i, 99999)
  }
  const handleOk = () => {
    form.validateFields().then(() => {
      let arr = JSON.parse(JSON.stringify(tableData))
      arr.push(form.getFieldsValue(true))
      setTableData(arr);
      setIsModalVisible(false);
    })
  }

  const handleCancel = () => {
    console.log('cancel')
  }

  const columns = [
    { title: 'Name', dataIndex: 'useName', key: 'useName' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (r,p,i) => <><a onClick={() => del(r,p,i)}>Delete</a><a onClick={() => edit(r,i)}>Edit</a></>,
    },
  ];
  return <div>
      <div style={{ margin: '15px 0'}}>
        <Button type="primary" onClick={add}>Add</Button>
      </div>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
          rowExpandable: record => record.name !== 'Not Expandable',
        }}
        dataSource={tableData}
      />
      <Modal title={modalTitle} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form
          form={form}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Form.Item
            label="userName"
            name="userName"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="age"
            name="age"
            rules={[{ required: true, message: 'Please input your age!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="address"
            name="address"
            rules={[{ required: true, message: 'Please input your address!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
}