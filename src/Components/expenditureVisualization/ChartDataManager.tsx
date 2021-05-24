import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from '../../State-Management/configureStore';
import { fetchDataFromServer } from '../../State-Management/expenditureVisualization/expenditure-action-creators';
import UserAccess from './UserAccess';
import './SankeyChart.css';
import { getLanguageLocales } from '../../locales';
import { useTranslation } from 'react-i18next';
import { ReactGoogleChartProps } from 'react-google-charts/dist/types';
import Chart from 'react-google-charts';



export default function ChartDataManager() {

    const data = useSelector((state: IAppState) => state.expenditureData.data);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchDataFromServer(dispatch);
    }, [])

    const { i18n } = useTranslation();
    let languageLocales = getLanguageLocales();
    let chartProps: ReactGoogleChartProps = {
        chartType: "Sankey",
        width: 750,
        height: 500,
        data
    }
    console.log("ChartDataManager rending");
    
    return (
        <div className={"Body-Container"}>
            <div className={"User-Container"}>
                <UserAccess></UserAccess>
            </div>
            <div className={"Language-Container"}>
                <label>Language Switch:</label>
                <select onChange={(event) => i18n.changeLanguage(event.target.value)}>
                    <option key={"en"} value={"en"}>English</option>
                    {Object.keys(languageLocales).map(ll => <option key={ll} value={languageLocales[ll]}>{ll}</option>)}
                </select>
            </div>
            <div className={"Chart-Container"}>
                <Chart
                    {...chartProps}
                ></Chart>
            </div>
        </div>
    )
}
