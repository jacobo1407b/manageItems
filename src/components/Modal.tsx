import React, { FunctionComponent } from 'react'
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";


interface iModal {
    visible: boolean,
    closeHandler: any,
    textAcep: string,
    title: string,
    children: React.ReactNode
}
const ModalBasic: FunctionComponent<iModal> = ({ visible, closeHandler, textAcep, title, children }) => {

    function closeModal() {
        closeHandler(false)
    }
    return (
        <Modal
            closeButton
            blur
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeModal}
        >
            <Modal.Header>
                <Text id="modal-title" size={18}>
                    <Text b size={18}>
                        {title}
                    </Text>
                </Text>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
            <Modal.Footer>
                <Row justify="space-between">
                    <Button
                        auto
                        onClick={closeModal}
                        flat color="error">
                        Cancelar
                    </Button>
                    <Button auto >
                        {textAcep}
                    </Button>
                </Row>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalBasic