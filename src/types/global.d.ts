export { };

declare global {
    /**
     * Now declare things that go in the global namespace,
     * or augment existing declarations in the global namespace.
     */
    interface Item {
        item: string,
        url: string,
        description: string,
        org: string,
        clas: string,
        uom: string,
        IdErp: string,
        id: number
    }

    interface Busqueda {
        item: string,
        keyword: string,
        description: String
    }

    interface Attachment {
        tp: string,
        category: string,
        fileName: string
        title: string,
        desc: string,
        size: number,
        is: number,
        dm: nummber
    }

    interface Select {
        key: number | string,
        text: string,
        value: string
    }
    type Selection = Array<Select>
}