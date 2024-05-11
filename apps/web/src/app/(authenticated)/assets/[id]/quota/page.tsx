'use client'

import { useEffect, useState } from 'react'
import { Typography, Progress, Card, Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function QuotaStatusPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [asset, setAsset] = useState(null)

  useEffect(() => {
    const fetchAsset = async () => {
      try {
        const assetData = await Api.Asset.findOne(params.id, {
          includes: ['ownerships'],
        })
        setAsset(assetData)
      } catch (error) {
        enqueueSnackbar('Failed to fetch asset data.', { variant: 'error' })
      }
    }

    if (params.id) {
      fetchAsset()
    }
  }, [params.id])

  const handleBack = () => {
    router.push(`/assets/${params.id}`)
  }

  return (
    <PageLayout layout="narrow">
      <Button
        onClick={handleBack}
        icon={<ArrowLeftOutlined />}
        style={{ marginBottom: 16 }}
      >
        Back to Asset Details
      </Button>
      <Card bordered={false}>
        <Title level={2}>Quota Status</Title>
        {asset ? (
          <>
            <Text strong>{asset.name}</Text>
            <Text type="secondary">
              {' '}
              ({dayjs(asset.dateUpdated).format('MMM DD, YYYY')})
            </Text>
            <Progress
              percent={(asset.availableQuota / asset.totalValue) * 100}
              status="active"
              style={{ margin: '24px 0' }}
            />
            <Text>
              {asset.availableQuota} of {asset.totalValue} units available for
              co-ownership.
            </Text>
          </>
        ) : (
          <Text>Loading asset data...</Text>
        )}
      </Card>
    </PageLayout>
  )
}
