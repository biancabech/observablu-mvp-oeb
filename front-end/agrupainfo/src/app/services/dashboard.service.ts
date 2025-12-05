import { Injectable } from '@angular/core';
import Chart from 'chart.js/auto';
import empresasData from '../mock-db/empresas.json' assert { type: 'json' };
import empregosData from '../mock-db/empregos.json' assert { type: 'json' };
import indicadoresData from '../mock-db/indicadores.json' assert { type: 'json' };

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  /**
   * Carrega dados de empresas do mock-db
   */
  getEmpresas() {
    return empresasData;
  }

  /**
   * Carrega dados de empregos do mock-db
   */
  getEmpregos() {
    return empregosData;
  }

  /**
   * Carrega indicadores gerais do mock-db
   */
  getIndicadores() {
    return indicadoresData;
  }

  /**
   * Retorna setores detalhados (combinação de empresas + empregos)
   */
  getSetoresDetalhados() {
    const empresas = this.getEmpresas() as any;
    const empregos = this.getEmpregos() as any;

    if (!empresas.empresasPorSetor) return [];

    return empresas.empresasPorSetor.map((e: any) => {
      const emp = empregos.empregosPorSetor?.find((x: any) => x.setor === e.setor);
      return {
        setor: e.setor,
        quantidade: e.quantidade,
        percentual: e.percentual,
        empregos: emp?.empregos ?? null,
        salario: emp?.salarioMedio ?? null
      };
    });
  }

  criarGraficoBarras(canvasId: string, labels: string[], data: number[], titulo: string = ''): Chart | null {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) {
      console.warn(`Canvas ${canvasId} não encontrado`);
      return null;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    return new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: titulo,
          data,
          backgroundColor: [
            'rgba(59, 130, 246, 0.8)',
            'rgba(16, 185, 129, 0.8)',
            'rgba(245, 158, 11, 0.8)',
            'rgba(139, 92, 246, 0.8)',
            'rgba(236, 72, 153, 0.8)',
            'rgba(99, 102, 241, 0.8)',
            'rgba(168, 85, 247, 0.8)',
            'rgba(249, 115, 22, 0.8)',
            'rgba(34, 197, 94, 0.8)',
            'rgba(14, 165, 233, 0.8)'
          ],
          borderColor: [
            'rgb(59, 130, 246)',
            'rgb(16, 185, 129)',
            'rgb(245, 158, 11)',
            'rgb(139, 92, 246)',
            'rgb(236, 72, 153)',
            'rgb(99, 102, 241)',
            'rgb(168, 85, 247)',
            'rgb(249, 115, 22)',
            'rgb(34, 197, 94)',
            'rgb(14, 165, 233)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: !!titulo,
            text: titulo,
            font: {
              size: 16,
              weight: 'bold'
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (value) {
                return (value as number).toLocaleString('pt-BR');
              }
            }
          }
        }
      }
    });
  }

  criarGraficoLinha(canvasId: string, labels: string[], data: number[], titulo: string = ''): Chart | null {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) {
      console.warn(`Canvas ${canvasId} não encontrado`);
      return null;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    return new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: titulo,
          data,
          borderColor: 'rgb(59, 130, 246)',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointRadius: 5,
          pointHoverRadius: 7,
          pointBackgroundColor: 'rgb(59, 130, 246)',
          pointBorderColor: '#fff',
          pointBorderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: !!titulo,
            text: titulo,
            font: {
              size: 16,
              weight: 'bold'
            }
          }
        },
        scales: {
          y: {
            beginAtZero: false,
            ticks: {
              callback: function (value) {
                return (value as number).toLocaleString('pt-BR');
              }
            }
          }
        }
      }
    });
  }


  criarGraficoPizza(canvasId: string, labels: string[], data: number[], titulo: string = ''): Chart | null {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) {
      console.warn(`Canvas ${canvasId} não encontrado`);
      return null;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    return new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels,
        datasets: [{
          label: titulo,
          data,
          backgroundColor: [
            'rgba(59, 130, 246, 0.8)',
            'rgba(16, 185, 129, 0.8)',
            'rgba(245, 158, 11, 0.8)',
            'rgba(139, 92, 246, 0.8)',
            'rgba(236, 72, 153, 0.8)',
            'rgba(99, 102, 241, 0.8)',
            'rgba(168, 85, 247, 0.8)',
            'rgba(249, 115, 22, 0.8)',
            'rgba(34, 197, 94, 0.8)',
            'rgba(14, 165, 233, 0.8)'
          ],
          borderColor: '#fff',
          borderWidth: 3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              padding: 15,
              font: {
                size: 12
              }
            }
          },
          title: {
            display: !!titulo,
            text: titulo,
            font: {
              size: 16,
              weight: 'bold'
            }
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const label = context.label || '';
                const value = context.parsed || 0;
                return label + ': ' + (value as number).toLocaleString('pt-BR');
              }
            }
          }
        }
      }
    });
  }

  /**
   * Destrói um gráfico
   * @param grafico - Instância do Chart a destruir
   */
  destruirGrafico(grafico: Chart | undefined): void {
    if (grafico) {
      grafico.destroy();
    }
  }
}
