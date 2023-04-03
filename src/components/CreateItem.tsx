import React from 'react'
import { Input, Button, Table, Text, Tooltip, Row } from "@nextui-org/react";
import { Grid, Select } from "semantic-ui-react";


const CreateItem = () => {
    return (
        <>
            <Row justify="space-between">
                <Text size={20} h3>Organization</Text>
                <Select placeholder='Select your country' options={[]} />
            </Row>
            <Row justify="space-between">
                <Text size={20} h3>Numero Items</Text>
                <Input clearable placeholder="Numero items" size="lg"  initialValue="" />
            </Row>
            <Row justify="space-between">
                <Text size={20} h3>Item class</Text>
                <Select placeholder='Select your country' options={[]} />
            </Row>
            <Grid>
                <Grid.Column width={7}>
                </Grid.Column>
                <Grid.Column width={2}></Grid.Column>
                <Grid.Column width={7}></Grid.Column>
            </Grid>
        </>
    )
}

export default CreateItem