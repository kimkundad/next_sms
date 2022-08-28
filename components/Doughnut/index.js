import React from 'react'
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

export default function Doughnut1(props) {

    const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [70, 30],
          backgroundColor: [
            'rgb(19, 100, 192)',
            'rgb(0, 169, 244)'
          ],
          hoverOffset: 4
        }]
      };

      const config = {
        type: 'doughnut',
        responsive: true,
          plugins: {
            legend: {
              position: "bottom",
              labels: {
                usePointStyle: true
              }
            },
            title: {
                display: true,
                Align: "center",
                text: props.title,
                font: {
                    size: 18
                }
            }
          }
      };

      const plugins = [{
        beforeDraw: function(chart) {
         var width = chart.width,
             height = chart.height,
             ctx = chart.ctx;
             ctx.restore();
             var fontSize = (height / 200).toFixed(2);
             ctx.font = fontSize + "em sans-serif";
             ctx.textBaseline = "top";
             var text = "1824 คน",
             textX = Math.round((width - ctx.measureText(text).width) / 2),
             textY = height / 2;
             ctx.fillText(text, textX, textY);
             ctx.save();
        } 
      }]
   

    return (
        <Doughnut options={config} data={data} plugins={plugins} borderWidth="1" />
  )
  }

