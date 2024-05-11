'use client'

import { useEffect, useState } from 'react'
import { Table, Typography, Space, Tag } from 'antd'
import { DollarCircleOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function TransactionHistoryPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { enqueueSnackbar } = useSnackbar()
  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const ownershipId = params.id
        const ownershipWithTransactions = await Api.Ownership.findOne(
          ownershipId,
          {
            includes: ['transactions'],
          },
        )

        if (
          ownershipWithTransactions &&
          ownershipWithTransactions.transactions
        ) {
          setTransactions(ownershipWithTransactions.transactions)
        }
        setLoading(false)
      } catch (error) {
        enqueueSnackbar('Failed to fetch transactions', { variant: 'error' })
        setLoading(false)
      }
    }

    fetchTransactions()
  }, [params.id])

  const columns = [
    {
      title: 'Date',
      dataIndex: 'transactionDate',
      key: 'transactionDate',
      render: text => dayjs(text).format('YYYY-MM-DD'),
    },
    {
      title: 'Type',
      dataIndex: 'transactionType',
      key: 'transactionType',
      render: type => <Tag color="blue">{type}</Tag>,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: amount => <Text>${amount}</Text>,
    },
    {
      title: 'Details',
      key: 'details',
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => router.push(`/assets/${record.ownership?.assetId}`)}
          >
            View Asset
          </a>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>
        <DollarCircleOutlined /> Transaction History
      </Title>
      <Text type="secondary">
        Below is a detailed list of all transactions related to the asset.
      </Text>
      <Table
        columns={columns}
        dataSource={transactions}
        loading={loading}
        rowKey="id"
      />
    </PageLayout>
  )
}
