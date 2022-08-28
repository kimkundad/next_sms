import React from 'react'
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

export default function BarChart1(props) {


    const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)'
          ],
          borderWidth: 1
    }]
    };

    const config = {
        type: 'bar',
        data: data,
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
          },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
      };
   

    return (
        <Bar data={data} options={config}/>
  )
  }

