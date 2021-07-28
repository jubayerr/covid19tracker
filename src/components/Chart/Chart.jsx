import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { fetchDailyData } from '../../api'


import styles from './Chart.module.css'

const Chart = () => {
    
    const [dailyData, setDailyData] = useState([])

    useEffect(()=>{
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData())
        }
        // console.log(dailyData);
        fetchAPI()
    },[])

    const lineChart = (
        dailyData.length
            ? (
                <Line
                    data={{
                        labels: dailyData.map(({ date }) =>  new Date(date).toLocaleDateString()),
                        datasets: [{
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: 'Infected',
                            borderColor: '#3333ff',
                            fill: true,
                        }, {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: 'Deaths',
                            borderColor: 'red',
                            backgroundColor: 'rgba(255, 0, 0, 0.5)',
                            fill: true,
                        }],
                    }}
                />
            ) : null

    )

    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    );
};

export default Chart;