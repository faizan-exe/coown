'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Card, Col, Row, Space, Button } from 'antd'
import { EyeOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function BrowseAssetsPage() {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const [assets, setAssets] = useState<Model.Asset[]>([])

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const assetsFound = await Api.Asset.findMany({
          includes: [
            'interests',
            'ownerships',
            'groups',
            'legalDocuments',
            'assetValueHistorys',
          ],
        })
        setAssets(assetsFound)
      } catch (error) {
        enqueueSnackbar('Failed to fetch assets', { variant: 'error' })
      }
    }

    fetchAssets()
  }, [])

  const navigateToAssetDetails = (assetId: string) => {
    router.push(`/assets/${assetId}`)
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Explore Co-Ownership Assets</Title>
        <Text>
          Discover various assets available for co-ownership. Click on any asset
          to view more details or express interest.
        </Text>
        <Row gutter={[16, 16]}>
          {assets?.map(asset => (
            <Col key={asset.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                title={asset.name}
                actions={[
                  <Button
                    type="link"
                    icon={<EyeOutlined />}
                    onClick={() => navigateToAssetDetails(asset.id)}
                  >
                    View Details
                  </Button>,
                ]}
              >
                <Text>{asset.description}</Text>
                <div>
                  <strong>Total Value:</strong> $
                  {asset.totalValue?.toLocaleString()}
                </div>
                <div>
                  <strong>Available Quota:</strong> {asset.availableQuota}%
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Space>
    </PageLayout>
  )
}
