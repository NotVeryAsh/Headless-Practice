import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Row from '@/components/Row'
import Card from '@/components/Card'
import makeRequest from '@/lib/request'
import { useEffect, useState } from "react"
import Form from "@/components/Form";
import Input from "@/components/Input";

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
                    <Card title="Example Widget..." width="w-3/12">
                        <p>Example Widget</p>
                    </Card>
                    <Card>
                        <p>Other Widget</p>
                    </Card>
                </Row>
                <Row>
                    <Card width={"w-3/12"}>
                        <Form name={"update_user"} method={"PATCH"} action={"/api/user"} title={"Update User"}>
                            <Input type={"text"} name={"name"} maxLength={255} placeholder={"Name"} />
                            <Input type={"text"} name={"email"} maxLength={255} placeholder={"Email"} />
                        </Form>
                    </Card>
                </Row>
            </div>
        </AppLayout>
    )
}

export default Dashboard
