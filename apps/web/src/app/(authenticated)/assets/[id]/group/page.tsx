'use client'

import { useEffect, useState } from 'react'
import {
  Typography,
  List,
  Avatar,
  Button,
  Card,
  Col,
  Row,
  Space,
  Spin,
} from 'antd'
import { UserOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
interface User {
  id: string
  name?: string
  pictureUrl?: string
}
interface GroupMembership {
  id: string
  role?: string
  user?: User
}
interface Group {
  id: string
  name?: string
  groupMemberships?: GroupMembership[]
}
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function AssetCoOwnerGroupPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { enqueueSnackbar } = useSnackbar()
  const [asset, setAsset] = useState<any>(null)
  const [groups, setGroups] = useState<Group[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAssetAndGroups = async () => {
      try {
        const assetData = await Api.Asset.findOne(params.id, {
          includes: ['groups'],
        })
        setAsset(assetData)
        const groupsData = (await Api.Group.findManyByAssetId(params.id, {
          includes: ['groupMemberships.user'],
        })) as Group[]
        setGroups(groupsData)
      } catch (error) {
        enqueueSnackbar('Failed to fetch asset and group data', {
          variant: 'error',
        })
      } finally {
        setLoading(false)
      }
    }

    fetchAssetAndGroups()
  }, [params.id])

  if (loading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Asset Co-Owner Group</Title>
      <Text type="secondary">
        Manage and view the groups associated with this asset.
      </Text>

      {asset && (
        <Card style={{ margin: '20px 0' }}>
          <Title level={4}>{asset.name}</Title>
          <Text>{asset.description}</Text>
        </Card>
      )}

      <Row gutter={[16, 16]}>
        {groups?.map(group => (
          <Col key={group.id} span={24} md={12} lg={8}>
            <Card title={`Group: ${group.name || 'Unnamed'}`}>
              <List
                itemLayout="horizontal"
                dataSource={group.groupMemberships}
                renderItem={(membership: GroupMembership) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Avatar
                          icon={<UserOutlined />}
                          src={membership.user?.pictureUrl}
                        />
                      }
                      title={membership.user?.name || 'Unknown User'}
                      description={`Role: ${membership.role || 'Member'}`}
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        ))}
      </Row>

      <Space style={{ marginTop: 20 }}>
        <Button
          type="primary"
          onClick={() => router.push(`/assets/${params.id}`)}
        >
          View Asset Details
        </Button>
        <Button onClick={() => router.push('/home')}>Return to Home</Button>
      </Space>
    </PageLayout>
  )
}
