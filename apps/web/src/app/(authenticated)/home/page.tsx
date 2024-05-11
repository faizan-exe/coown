'use client'

import { useEffect, useState } from 'react'
import { Typography, Button, Card, Row, Col, Avatar, Space } from 'antd'
import { UserOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [user, setUser] = useState<Model.User | null>(null)

  useEffect(() => {
    if (!userId) {
      enqueueSnackbar('User not found, please login.', { variant: 'error' })
      return
    }

    const fetchUser = async () => {
      try {
        const userData = await Api.User.findOne(userId, {
          includes: ['interests', 'ownerships'],
        })
        setUser(userData)
      } catch (error) {
        enqueueSnackbar('Failed to fetch user data.', { variant: 'error' })
      }
    }

    fetchUser()
  }, [userId])

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Welcome to CoOwn</Title>
      <Paragraph>
        Explore the possibilities of co-owning assets and managing them
        efficiently through our platform.
      </Paragraph>
      {user && (
        <Card>
          <Row gutter={16} align="middle">
            <Col>
              <Avatar
                size="large"
                src={user.pictureUrl || undefined}
                icon={<UserOutlined />}
              />
            </Col>
            <Col flex="auto">
              <Title level={4}>{user.name || 'Anonymous User'}</Title>
              <Text>Email: {user.email}</Text>
              <br />
              <Text>Status: {user.status}</Text>
              <Paragraph>
                Member since: {dayjs(user.dateCreated).format('MMMM D, YYYY')}
              </Paragraph>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Title level={5}>Your Interests</Title>
              {user.interests?.map((interest, index) => (
                <Text key={index}>{interest.asset?.name}, </Text>
              ))}
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Title level={5}>Your Ownerships</Title>
              {user.ownerships?.map((ownership, index) => (
                <Text key={index}>
                  {ownership.asset?.name} ({ownership.sharePercentage}%),{' '}
                </Text>
              ))}
            </Col>
          </Row>
          <Space>
            <Button type="primary" onClick={() => router.push('/assets')}>
              Browse Assets
            </Button>
            <Button
              onClick={() =>
                router.push(`/assets/${user.ownerships?.[0]?.assetId}/details`)
              }
            >
              View Asset Details
            </Button>
          </Space>
        </Card>
      )}
    </PageLayout>
  )
}
