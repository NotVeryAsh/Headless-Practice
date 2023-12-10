import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Row from '@/components/Row'
import Card from '@/components/Card'
import makeRequest from '@/lib/request'
import { useEffect, useState } from "react"

const Dashboard = () => {

    const [time, SetTime] = useState(
        new Date().toLocaleTimeString(
            'en-US',
            {
                hour12: false,
                hour: "numeric",
                minute: "numeric",
                day: "numeric",
                month: "numeric",
                year: "numeric",
            }
        )
    )

    useEffect(() => {

        var timerID = setInterval(function() {
            getTime().then((data) => {
                SetTime(data.time)
            })
        }, 60000);

        return () => clearInterval(timerID);

    }, [time]);

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
                        <p>The time is {time}</p>
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

async function getTime() {
    return await makeRequest('/api/time', 'GET')
}

export default Dashboard
