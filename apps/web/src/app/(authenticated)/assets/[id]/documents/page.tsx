'use client'

import { useEffect, useState } from 'react'
import { Typography, List, Card } from 'antd'
import { FilePdfOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function LegalDocumentsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const { enqueueSnackbar } = useSnackbar()
  const [legalDocuments, setLegalDocuments] = useState([])

  useEffect(() => {
    if (!params.id) {
      enqueueSnackbar('Asset ID is missing', { variant: 'error' })
      router.push('/assets')
      return
    }

    const fetchLegalDocuments = async () => {
      try {
        const documents = await Api.LegalDocument.findManyByAssetId(params.id, {
          includes: ['asset'],
        })
        setLegalDocuments(documents)
      } catch (error) {
        enqueueSnackbar('Failed to fetch legal documents', { variant: 'error' })
      }
    }

    fetchLegalDocuments()
  }, [params.id, router])

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Legal Documents</Title>
      <Text type="secondary">
        Here you can view all legal documents related to the asset.
      </Text>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={legalDocuments}
        renderItem={item => (
          <List.Item>
            <Card
              title={item.documentType || 'No Title'}
              actions={[
                <a
                  href={item.contentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FilePdfOutlined /> Open Document
                </a>,
              ]}
            >
              <Text>
                Date Created: {dayjs(item.dateCreated).format('DD/MM/YYYY')}
              </Text>
              {item.asset && <Text>Asset: {item.asset.name}</Text>}
            </Card>
          </List.Item>
        )}
      />
    </PageLayout>
  )
}
