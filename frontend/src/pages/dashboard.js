import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Row from '@/components/Row'
import Card from '@/components/Card'

const Dashboard = () => {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }>
            <Head>
                <title>Laravel - Dashboard</title>
            </Head>

            <div className="w-11/12 mx-auto">
                <Row>
                    <Card title="Time" width="w-3/12">
                        <p>The time is ...</p>
                    </Card>
                    <Card title="Time" width="w-9/12">
                        <p>The time is ...</p>
                    </Card>
                </Row>
                <Row>
                    <Card>
                        <p>The time is ...</p>
                    </Card>
                </Row>
            </div>
        </AppLayout>
    )
}

export default Dashboard
