import React from 'react'
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';

export default function LineChart1(props) {


    const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(0, 169, 244)',
        tension: 0.1
    }]
    };

    const config = {
        type: 'doughnut',
        responsive: true,
          plugins: {
            legend: {
              position: "bottom",
            },
            title: {
                display: true,
                Align: "start",
                text: props.title,
                font: {
                    size: 18
                }
            }
          }
      };
   

    return (
        <Line data={data} options={config}/>
  )
  }

