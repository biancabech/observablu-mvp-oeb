import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js';
import { DashboardService } from '../../services/dashboard.service';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard implements OnInit, AfterViewInit, OnDestroy {

  // Propriedades dos cards
  totalEmpresas: number = 0;
  totalEmpregos: number = 0;
  taxaCrescimento: number = 0;
  setoresAtivos: number = 0;

  // Gráficos
  graficoSetores: Chart | undefined;
  graficoEvolucao: Chart | undefined;
  graficoEmpregos: Chart | undefined;

  // Dados carregados do mock
  empresasPorSetor: Array<any> = [];
  empregosPorSetor: Array<any> = [];
  evolucaoTemporal: Array<any> = [];

  // Lista combinada para uso no template (evita necessidade de índices)
  setoresDetalhados: Array<any> = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    // Carregar dados ANTES dos gráficos serem criados
    this.carregarDados();
  }

  ngAfterViewInit(): void {
    // Criar gráficos APÓS o DOM estar pronto
    setTimeout(() => {
      this.criarGraficos();
    }, 100);
  }

  private carregarDados(): void {
    try {
      // Carregar dados do serviço
      const dados = this.dashboardService.getEmpresas() as any;
      const empregos = this.dashboardService.getEmpregos() as any;
      const indicadores = this.dashboardService.getIndicadores() as any;

      // Populando dados dos cards
      this.totalEmpresas = dados.totalEmpresas || 0;
      this.totalEmpregos = empregos.totalEmpregos || 0;
      this.setoresAtivos = dados.empresasPorSetor?.length || 0;

      // Calcular taxa de crescimento média
      if (dados.empresasPorSetor?.length > 0) {
        const crescimentos = dados.empresasPorSetor.map((s: any) => s.crescimentoAnual || 0);
        this.taxaCrescimento = Math.round((crescimentos.reduce((a: number, b: number) => a + b, 0) / crescimentos.length) * 10) / 10;
      }

      // Populando arrays
      this.empresasPorSetor = dados.empresasPorSetor || [];
      this.empregosPorSetor = empregos.empregosPorSetor || [];

      // Evolução temporal (extrair de indicadores)
      if (indicadores.pib?.evolucao) {
        this.evolucaoTemporal = indicadores.pib.evolucao.map((e: any) => ({
          ano: e.ano,
          total: this.totalEmpresas
        }));
      }

      // Construir lista combinada empresa+emprego
      this.setoresDetalhados = this.dashboardService.getSetoresDetalhados();
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    }
  }

  private criarGraficos(): void {
    try {
      // Gráfico de barras - Empresas por Setor
      this.graficoSetores = this.dashboardService.criarGraficoBarras(
        'graficoSetores',
        this.empresasPorSetor.map(item => item.setor),
        this.empresasPorSetor.map(item => item.quantidade),
        'Empresas por Setor'
      ) || undefined;

      // Gráfico de linha - Evolução Temporal
      this.graficoEvolucao = this.dashboardService.criarGraficoLinha(
        'graficoEvolucao',
        this.evolucaoTemporal.map(item => item.ano.toString()),
        this.evolucaoTemporal.map(item => item.total),
        'Evolução Temporal de Empresas'
      ) || undefined;

      // Gráfico de pizza - Empregos por Setor
      this.graficoEmpregos = this.dashboardService.criarGraficoPizza(
        'graficoEmpregos',
        this.empregosPorSetor.map(item => item.setor),
        this.empregosPorSetor.map(item => item.empregos),
        'Distribuição de Empregos por Setor'
      ) || undefined;
    } catch (error) {
      console.error('Erro ao criar gráficos:', error);
    }
  }

  ngOnDestroy(): void {
    // Destruir gráficos ao sair do componente
    this.dashboardService.destruirGrafico(this.graficoSetores);
    this.dashboardService.destruirGrafico(this.graficoEvolucao);
    this.dashboardService.destruirGrafico(this.graficoEmpregos);
  }
}
