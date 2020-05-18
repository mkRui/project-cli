declare namespace MenuData {
    interface MenuMeta {
        title: string,
        hidden: boolean,
        parentId: number,
        id: number
    }
    
    interface Menu {
        path: string,
        meta: MenuMeta,
        components?: ReactElement,
        Children?: Menu[] | string
    }
}