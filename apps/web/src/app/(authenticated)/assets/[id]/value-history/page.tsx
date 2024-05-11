'use client'

import { useEffect, useState } from 'react'
import { Typography, Table, Spin, Space } from 'antd'
import { LineChartOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
interface AssetValueHistory {
  id: string
  recordedDate?: string
  value?: number
  assetId: string
  dateCreated: string
  dateUpdated: string
  dateDeleted: string
}
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function AssetValueHistoryPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const { enqueueSnackbar } = useSnackbar()
  const [loading, setLoading] = useState(true)
  const [assetValueHistory, setAssetValueHistory] = useState<
    AssetValueHistory[]
  >([])

  useEffect(() => {
    const fetchAssetValueHistory = async () => {
      try {
        const assetValueHistorys =
          await Api.AssetValueHistory.findManyByAssetId(params.id, {
            includes: ['asset'],
          })
        setAssetValueHistory(assetValueHistorys)
        setLoading(false)
      } catch (error) {
        enqueueSnackbar('Failed to fetch asset value history', {
          variant: 'error',
        })
        setLoading(false)
      }
    }

    if (authentication.isAuthenticated) {
      fetchAssetValueHistory()
    } else {
      router.push('/home')
    }
  }, [authentication.isAuthenticated, params.id, router])

  const columns = [
    {
      title: 'Date Recorded',
      dataIndex: 'recordedDate',
      key: 'recordedDate',
      render: (text: string) => dayjs(text).format('YYYY-MM-DD'),
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
      render: (value: number) => `$${value.toLocaleString()}`,
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large">
        <Title level={2}>
          <LineChartOutlined /> Asset Value History
        </Title>
        <Text>
          This page displays the historical value changes of the specific asset,
          allowing users to track its financial performance over time.
        </Text>
        {loading ? (
          <Spin size="large" />
        ) : (
          <Table dataSource={assetValueHistory} columns={columns} rowKey="id" />
        )}
      </Space>
    </PageLayout>
  )
}
