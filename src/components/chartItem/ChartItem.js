import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import { labelsArr, numArr } from '../../utils/transformationData';
import './chartItem.css';

ChartJS.register(...registerables);

const ChartItem = ({ type, data, labels }) => {
    const myData = {
        data: {
            labels: labelsArr(labels),
            datasets: [
                {
                    data: numArr(data),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1,
                }
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    ticks: {
                        color: 'rgb(61, 61, 61)',
                        font: {
                            size: 18
                        }
                    },
                    grid: {
                        color: 'transparent',
                    }
                },
                x: {
                    ticks: {
                        color: 'rgb(61, 61, 61)',
                        font: {
                            size: 18
                        }
                    },
                    grid: {
                        color: 'transparent',
                    }
                }
            },
            layout: {
                padding: {
                    top: 50,
                    bottom: 50,
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    }

    return (
        <div className='chart-item' >
            <Chart type={type}
                data={myData.data}
                options={myData.options} />
        </div>
    );
};

export default ChartItem;