import React, { FunctionComponent } from 'react'
const ReactExport = require("react-export-excel");

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile?.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile?.ExcelColumn;


interface iExport {
    data: Array<iItems>
    button: React.ReactNode
}
const Export: FunctionComponent<iExport> = ({ data, button }) => {
    return (
        <ExcelFile element={button} filename={"items" + Date.now()}>
            <ExcelSheet data={data} name="Items">
                <ExcelColumn label="Item" value="ITEM_NUMBER" />
                <ExcelColumn label="Descripción" value="DESCRIPTION" />
                <ExcelColumn label="Estatus" value="APPROVAL_STATUS" />
                <ExcelColumn label="Codigo" value="INVENTORY_ITEM_STATUS_CODE" />
                <ExcelColumn label="Organización" value="ORGANIZATION_NAME" />
                <ExcelColumn label="Fecha creacion" value="CREATION_DATE" />
                <ExcelColumn label="Creado por" value="CREATED_BY" />
            </ExcelSheet>
        </ExcelFile>
    )
}

export default Export