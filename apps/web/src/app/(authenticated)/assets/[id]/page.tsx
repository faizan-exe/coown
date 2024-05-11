'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Descriptions, Card, List, Button, Spin, Space } from 'antd'
import {
  FileTextOutlined,
  HistoryOutlined,
  GroupOutlined,
  DollarOutlined,
  FileOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function AssetDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [asset, setAsset] = useState<Model.Asset | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAsset = async () => {
      try {
        const assetFound = await Api.Asset.findOne(params.id, {
          includes: [
            'interests',
            'ownerships',
            'groups',
            'legalDocuments',
            'assetValueHistorys',
          ],
        })
        setAsset(assetFound)
      } catch (error) {
        enqueueSnackbar('Failed to fetch asset details', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }

    fetchAsset()
  }, [params.id])

  if (loading) {
    return <Spin size="large" />
  }

  if (!asset) {
    return <Paragraph>No asset found.</Paragraph>
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>{asset.name}</Title>
      <Paragraph>{asset.description}</Paragraph>
      <Descriptions bordered>
        <Descriptions.Item label="Total Value">
          ${asset.totalValue}
        </Descriptions.Item>
        <Descriptions.Item label="Available Quota">
          {asset.availableQuota}%
        </Descriptions.Item>
        <Descriptions.Item label="Creation Date">
          {dayjs(asset.dateCreated).format('DD/MM/YYYY')}
        </Descriptions.Item>
      </Descriptions>
      <Card title="Associated Documents" style={{ marginTop: 20 }}>
        <List
          itemLayout="horizontal"
          dataSource={asset.legalDocuments}
          renderItem={doc => (
            <List.Item>
              <List.Item.Meta
                avatar={<FileTextOutlined />}
                title={<a href={doc.contentUrl}>{doc.documentType}</a>}
                description={`Created on ${dayjs(doc.dateCreated).format('DD/MM/YYYY')}`}
              />
            </List.Item>
          )}
        />
      </Card>
      <Space size="middle" style={{ marginTop: 20 }}>
        <Button
          icon={<HistoryOutlined />}
          onClick={() => router.push(`/assets/${asset.id}/value-history`)}
        >
          Value History
        </Button>
        <Button
          icon={<GroupOutlined />}
          onClick={() => router.push(`/assets/${asset.id}/group`)}
        >
          Co-owner Group
        </Button>
        <Button
          icon={<DollarOutlined />}
          onClick={() => router.push(`/ownership/${asset.id}/transactions`)}
        >
          Transaction History
        </Button>
        <Button
          icon={<FileOutlined />}
          onClick={() => router.push(`/assets/${asset.id}/documents`)}
        >
          Legal Documents
        </Button>
      </Space>
    </PageLayout>
  )
}
