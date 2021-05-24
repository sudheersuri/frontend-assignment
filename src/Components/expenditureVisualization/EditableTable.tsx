import { useTranslation } from 'react-i18next';

interface IEditableTable {
    data: any[];
    isheaderTranslate?: boolean
    addButton?: Function;
    editButton?: Function;
    delButton?: Function;
}

export default function EditableTable(props: IEditableTable) {
    let data = props.data;
    const { t } = useTranslation();

    let getHeader = (header: string) => {
        let headerValue = props.isheaderTranslate ? t(header) : header;
        return headerValue;
    }
    const tableHeaderView = <thead key="tableHeader">
        <tr>
            {data[0].map((header: any, index: number) =>
                <td key={index + "td"}> {getHeader(header)} </td>
            )}
            {props.addButton && <td><button key={"add"} type="button" onClick={() => props.addButton!()}>ADD</button></td>}
        </tr>
    </thead>
    const getRowView = ((row: any[], rowId: number) =>
        row.map((cell: any, columnId) =>
            <td key={row[0] + row[1] + columnId + "td"}>
                {props.editButton ?
                    <input value={cell} key={row[0] + row[1] + columnId + "i"} onChange={(event) => props.editButton!(rowId + 1, columnId, event.target.value)}></input>
                    :
                    <label>{cell}</label>
                }
            </td>)
    )
    const tableBodyView = <tbody>
        {data.slice(1,).map((flow: any[], rowId) => {
            return <tr key={flow[0] + flow[1]}>
                {getRowView(flow, rowId)}
                {props.delButton && <td><button key={flow[0] + flow[1] + "del"} type="button" onClick={() => props.delButton!(rowId + 1)}>DEL</button></td>}
            </tr>
        })}
    </tbody>

    console.log("Editable rending");

    return (
        <div className={"table-container"}>
            <table>
                {tableHeaderView}
                {tableBodyView}
            </table>
        </div>
    )
}
