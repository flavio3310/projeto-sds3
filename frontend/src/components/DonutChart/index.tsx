import { SaleSum } from 'assets/css/types/sale';
import axios from 'axios';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import Chart from 'react-apexcharts';
import { BASE_URL } from 'utils/requests';

type ChartData = {
    labels: string[];
    series: number[];
}
const DonutChart = () => {

    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });
     
    useEffect(() => {
        axios.get(`${BASE_URL}/sales/amount-by-seller`)
            .then(response => {
                const data = response.data as SaleSum[];
                const mylabels = data.map(x => x.sellerName);
                const mySeries = data.map(x => x.sum);
            
                setChartData({ labels: mylabels, series: mySeries });
            });
    }, []);
   
const options = {
    legend: {
        show: true
    }
}
      
 return (
    <Chart
            options={{ ...options, labels: chartData.labels }}
            series={chartData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChart;