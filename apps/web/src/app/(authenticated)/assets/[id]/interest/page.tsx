'use client'

import { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Typography, Spin, Modal, Input } from 'antd'
import { HeartOutlined, InfoCircleOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function ExpressInterestPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [asset, setAsset] = useState(null)
  const [loading, setLoading] = useState(true)
  const [interestModalVisible, setInterestModalVisible] = useState(false)
  const [interestStatus, setInterestStatus] = useState('')

  useEffect(() => {
    const fetchAsset = async () => {
      try {
        const assetData = await Api.Asset.findOne(params.id, {
          includes: ['interests', 'interests.user'],
        })
        setAsset(assetData)
      } catch (error) {
        enqueueSnackbar('Failed to fetch asset details', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }

    fetchAsset()
  }, [params.id])

  const handleInterest = async () => {
    if (!userId) {
      enqueueSnackbar('You need to be logged in to express interest', {
        variant: 'info',
      })
      return
    }

    try {
      const newInterest = await Api.Interest.createOneByUserId(userId, {
        assetId: asset.id,
        status: interestStatus,
      })
      setAsset({
        ...asset,
        interests: [...asset.interests, newInterest],
      })
      enqueueSnackbar('Interest expressed successfully', { variant: 'success' })
      setInterestModalVisible(false)
    } catch (error) {
      enqueueSnackbar('Failed to express interest', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Express Interest in Asset</Title>
      <Text type="secondary">
        Here you can express your interest to co-own the asset.
      </Text>
      {loading ? (
        <Spin size="large" />
      ) : (
        <Card
          title={asset?.name}
          extra={
            <Button
              type="link"
              icon={<InfoCircleOutlined />}
              onClick={() => router.push(`/assets/${asset.id}`)}
            >
              More Info
            </Button>
          }
          actions={[
            <Button
              type="primary"
              icon={<HeartOutlined />}
              onClick={() => setInterestModalVisible(true)}
            >
              Express Interest
            </Button>,
          ]}
        >
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Text>
                <strong>Description:</strong> {asset?.description}
              </Text>
            </Col>
            <Col span={24}>
              <Text>
                <strong>Value:</strong> ${asset?.totalValue?.toLocaleString()}
              </Text>
            </Col>
            <Col span={24}>
              <Text>
                <strong>Available Quota:</strong> {asset?.availableQuota}%
              </Text>
            </Col>
            <Col span={24}>
              <Text>
                <strong>Date Created:</strong>{' '}
                {dayjs(asset?.dateCreated).format('MMMM D, YYYY')}
              </Text>
            </Col>
          </Row>
        </Card>
      )}
      <Modal
        title="Express Interest"
        visible={interestModalVisible}
        onOk={handleInterest}
        onCancel={() => setInterestModalVisible(false)}
        okText="Submit"
        cancelText="Cancel"
      >
        <Input
          placeholder="Enter your interest status"
          value={interestStatus}
          onChange={e => setInterestStatus(e.target.value)}
        />
      </Modal>
    </PageLayout>
  )
}
