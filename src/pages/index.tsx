import { useState } from "react"
import Head from 'next/head'
import { Input, Button, Table, Text, Tooltip, Grid as Gr } from "@nextui-org/react";
import { Grid } from "semantic-ui-react"
import { AiFillFileExcel, AiOutlinePlusCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { FaSistrix } from "react-icons/fa"
import ModalBasic from '@components/Modal';
import CreateItem from "@components/CreateItem";

export default function Home() {
  const [visible, setVisible] = useState(false);


  return (
    <>
      <Head>
        <title>Manage Items</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid stackable>
        <Grid.Row columns={2}>

          <Grid.Column width={11}>
            <>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={7}>
                    <Input clearable bordered labelPlaceholder="Item" size="lg" fullWidth />
                  </Grid.Column>
                  <Grid.Column width={7}>
                    <Input clearable bordered labelPlaceholder="Keyword" size="lg" fullWidth />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={14}>
                    <Input clearable bordered labelPlaceholder="Descripcion" size="lg" fullWidth />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </>
          </Grid.Column>
          <Grid.Column width={5}>
            <>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={5}>
                    <Button
                      color="success"
                      auto size="lg"
                      icon={<FaSistrix />}
                    >
                      Buscar
                    </Button>
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <Button
                      color="error"
                      auto
                      size="lg"
                      icon={<AiOutlineCloseCircle />}
                    >
                      Resetear
                    </Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Gr.Container>
            <Gr>
              <Text h6>Acciones:</Text>
            </Gr>
            <Gr>

              <Tooltip content="Exportar a excel" color="success" placement="right">
                <Button auto light>
                  <AiFillFileExcel color="green" size={20} />
                </Button>
              </Tooltip>
            </Gr>
            <Gr>
              <Tooltip content="Agregar Item" color="primary" placement="right">
                <Button auto light onClick={() => setVisible(true)}>
                  <AiOutlinePlusCircle color="green" size={20} />
                </Button>
              </Tooltip>
            </Gr>
            <Gr>
              <Tooltip content="Eliminar Item" color="error" placement="right">
                <Button auto light>
                  <AiOutlineCloseCircle color="red" size={20} />
                </Button>
              </Tooltip>
            </Gr>
          </Gr.Container>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <Table
              aria-label="Example table with custom cells"
              css={{
                height: "auto",
                minWidth: "100%",
              }}
              selectionMode="none"
            >
              <Table.Header>
                <Table.Column
                >
                  Item
                </Table.Column>
                <Table.Column
                >
                  Descripcion
                </Table.Column>
                <Table.Column
                >
                  Organización
                </Table.Column>
                <Table.Column
                >
                  Class
                </Table.Column>
                <Table.Column
                >
                  Unidad de medida
                </Table.Column>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>line1</Table.Cell>
                  <Table.Cell>line2</Table.Cell>
                  <Table.Cell>line3</Table.Cell>
                  <Table.Cell>line2</Table.Cell>
                  <Table.Cell>line3</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <ModalBasic
        visible={visible}
        closeHandler={setVisible}
        textAcep="Crear"
        title='Crear Item'
        children={<CreateItem />}
      />
    </>
  )
}
