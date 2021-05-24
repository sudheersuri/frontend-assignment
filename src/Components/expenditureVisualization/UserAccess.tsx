import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { IAppState } from '../../State-Management/configureStore';
import { addRow, deleteRow, editRow } from '../../State-Management/expenditureVisualization/expenditure-action-creators';
import EditableTable from './EditableTable';

export default function UserAccess() {

    const data = useSelector((state: IAppState) => state.expenditureData.data);
    const dispatch = useDispatch();

    const { t } = useTranslation();
    
    const onAddClick = () => {
        addRow(dispatch, data);
    }
    const onEditClick = (rowId: number, columnId: number, value: any) => {
        if (columnId === 2) value = +value;
        editRow(dispatch, data, rowId, columnId, value);
    }
    const onDeleteClick = (rowId: number) => {
        deleteRow(dispatch, data, rowId);
    }
    console.log("UA rending");
    let tableRows = data.slice(1,);

    return (

        data && data.length > 0 ?
            <div className={"table-container"}>
                <table>
                    <thead>
                        <tr>
                            {data[0].map((header: any, index: number) =>
                                <td key={index + "td"}> {t(header)} </td>
                            )}
                            <td><button key={"add"} type="button" onClick={onAddClick}>ADD</button></td>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows.map((flow: any[], rowId) => <tr>
                            <td>
                                <input value={flow[0]} onChange={(e) => onEditClick(rowId + 1, 0, e.target.value)}></input>
                            </td>
                            <td>
                                <input value={flow[1]} onChange={(e) => onEditClick(rowId + 1, 1, e.target.value)}></input>
                            </td>
                            <td>
                                <input value={flow[2]} onChange={(e) => onEditClick(rowId + 1, 2, e.target.value)}></input>
                            </td>
                            <td>
                                <button type="button" onClick={() => onDeleteClick(rowId + 1)}>DEL</button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div> :
            <div />
    )
}
