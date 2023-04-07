export { };

declare global {
    /**
     * Now declare things that go in the global namespace,
     * or augment existing declarations in the global namespace.
     */

    interface iProxy {
        getlovs: function
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

    interface ClassLov {
        PROP: string,
        TEXT: string,
        CODE: string
    }
    type Selection = Array<Select>

    export interface iItems {
        CREATION_DATE: string
        ORGANIZATION_NAME: string
        INVENTORY_ITEM_ID: string
        INVENTORY_ITEM_STATUS_CODE: string
        APPROVAL_STATUS: string
        CREATED_BY: string
        CURRENT_PHASE_CODE: string
        ITEM_NUMBER: string
        DESCRIPTION: string
        LONG_DESCRIPTION: string
    }
}