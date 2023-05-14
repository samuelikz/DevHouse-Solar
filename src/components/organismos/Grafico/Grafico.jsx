import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title
);

export default function Grafico() {
  const [labels, setLabels] = useState([]);
  const [valores, setValores] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const response = await fetch('http://localhost:3000/gerados');
    const dados = await response.json();
  
    const dataPorMes = dados.reduce((acumulador, item) => {
      const mes = new Date(item.data).toLocaleString('default', { month: 'long' });
      if (!acumulador[mes]) {
        acumulador[mes] = 0;
      }
      acumulador[mes] += item.totalKwGerado;
      return acumulador;
    }, {});
  
    const labels = Object.keys(dataPorMes);
    const valores = Object.values(dataPorMes);
  
    setLabels(labels);
    setValores(valores);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const data = {
    labels,
    datasets: [
      {
        data: valores,
        backgroundColor: 'white',
        borderColor: '#3751FF',
        pointBorderColor: 'transparent',
        pointBorderWidth: 4,
        tension: 0.5,
      },
    ],
  };
  
  const options = {
    plugins:{
     resposive: true,
      legend: false,
      title:{
        display: true,
        text: 'Total de energia gerada por mês',
        align: 'start',
        color: 'black'
      }
    },
    scales:{
      x:{
        gid:{
          display: false
        }
      },
      y:{
        position: 'right',
        min: 0,
        max: 1000,
        ticks:{
          stepSize: 2,
          callback: (value) => value
        },
        grid:{
          borderDash: [10]
        }
      }
    },
    borderRadius: 10
  };

  if (loading) {
    return (
        <div>
            <p style={{padding:'20px'}}>Carregando dados...</p>
        </div>
    )
  }

  return (
    <div style={{width: 'auto', height: 'auto', margin: '20px'}}>
      <Line style={{padding: '10px', width: '90%', backgroundColor: 'white'}} data={data} options={options} />
    </div>
  );
}
