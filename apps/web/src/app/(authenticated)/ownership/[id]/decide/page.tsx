'use client'

import { useEffect, useState } from 'react'
import {
  Button,
  Card,
  Col,
  Row,
  Typography,
  Modal,
  Form,
  InputNumber,
  message,
} from 'antd'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function DecideSharePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { enqueueSnackbar } = useSnackbar()
  const authentication = useAuthentication()
  const userId = authentication.user?.id

  const [ownerships, setOwnerships] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedOwnership, setSelectedOwnership] = useState(null)
  const [form] = Form.useForm()

  useEffect(() => {
    if (userId) {
      Api.Ownership.findManyByUserId(userId, { includes: ['asset'] })
        .then(setOwnerships)
        .catch(() =>
          enqueueSnackbar('Failed to fetch ownerships', { variant: 'error' }),
        )
    }
  }, [userId])

  const showModal = ownership => {
    setSelectedOwnership(ownership)
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleFormSubmit = async values => {
    if (!selectedOwnership) return

    try {
      const updatedOwnership = await Api.Ownership.updateOne(
        selectedOwnership.id,
        {
          sharePercentage: values.sharePercentage,
        },
      )
      setOwnerships(
        ownerships.map(o =>
          o.id === updatedOwnership.id ? updatedOwnership : o,
        ),
      )
      setIsModalVisible(false)
      message.success('Ownership updated successfully')
    } catch (error) {
      enqueueSnackbar('Failed to update ownership', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Manage Your Shares</Title>
      <Text>Decide whether to sell or hold your shares in assets.</Text>
      <Row gutter={16} style={{ marginTop: 20 }}>
        {ownerships?.map(ownership => (
          <Col key={ownership.id} span={8}>
            <Card
              title={ownership.asset?.name}
              actions={[
                <Button
                  icon={<PlusOutlined />}
                  onClick={() => showModal(ownership)}
                >
                  Modify
                </Button>,
                <Button
                  icon={<MinusOutlined />}
                  onClick={() =>
                    router.push(`/ownership/${ownership.id}/transactions`)
                  }
                >
                  Transactions
                </Button>,
              ]}
            >
              <p>Share Percentage: {ownership.sharePercentage}%</p>
              <p>Value: {ownership.asset?.totalValue}</p>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal
        title="Modify Share"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          onFinish={handleFormSubmit}
          initialValues={{
            sharePercentage: selectedOwnership?.sharePercentage,
          }}
        >
          <Form.Item
            name="sharePercentage"
            label="Share Percentage"
            rules={[
              {
                required: true,
                message: 'Please input the new share percentage!',
              },
            ]}
          >
            <InputNumber min={1} max={100} />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Modal>
    </PageLayout>
  )
}
