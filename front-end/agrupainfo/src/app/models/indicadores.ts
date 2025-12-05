// src/app/models/indicadores.interface.ts

export interface IndicadoresData {
  indicadoresGerais: IndicadoresGerais;
  populacao: Populacao;
  pib: PIB;
  renda: Renda;
  educacao: Educacao;
  saude: Saude;
  infraestrutura: Infraestrutura;
  habitacao: Habitacao;
  seguranca: Seguranca;
  desenvolvimento: Desenvolvimento;
  turismo: Turismo;
  meioAmbiente: MeioAmbiente;
  tecnologiaInovacao: TecnologiaInovacao;
}

export interface IndicadoresGerais {
  municipio: string;
  estado: string;
  ultimaAtualizacao: string;
}

export interface Populacao {
  total: number;
  ano: number;
  crescimentoAnual: number;
  densidade: number;
  unidade: string;
  evolucao: EvolucaoPopulacao[];
  distribuicaoEtaria: DistribuicaoEtaria[];
}

export interface EvolucaoPopulacao {
  ano: number;
  populacao: number;
}

export interface DistribuicaoEtaria {
  faixa: string;
  quantidade: number;
  percentual: number;
}

export interface PIB {
  total: number;
  unidade: string;
  ano: number;
  perCapita: number;
  crescimentoAnual: number;
  evolucao: EvolucaoPIB[];
  composicao: ComposicaoPIB[];
}

export interface EvolucaoPIB {
  ano: number;
  pib: number;
  perCapita: number;
}

export interface ComposicaoPIB {
  setor: string;
  valor: number;
  percentual: number;
}

export interface Renda {
  rendaMensalMedia: number;
  rendaDomiciliarMedia: number;
  unidade: string;
  ano: number;
  salarioMinimo: number;
  evolucao: EvolucaoRenda[];
  distribuicaoRenda: DistribuicaoRenda[];
}

export interface EvolucaoRenda {
  ano: number;
  rendaMedia: number;
  rendaDomiciliar: number;
}

export interface DistribuicaoRenda {
  faixa: string;
  percentual: number;
  quantidade: number;
}

export interface Educacao {
  taxaAlfabetizacao: number;
  ideb: IDEB;
  matriculas: Matriculas;
  instituicoesEnsino: InstituicoesEnsino;
}

export interface IDEB {
  ensinoFundamentalI: number;
  ensinoFundamentalII: number;
  ensinoMedio: number;
}

export interface Matriculas {
  educacaoInfantil: number;
  ensinoFundamental: number;
  ensinoMedio: number;
  ensinoSuperior: number;
  total: number;
}

export interface InstituicoesEnsino {
  municipais: number;
  estaduais: number;
  federais: number;
  privadas: number;
  total: number;
}

export interface Saude {
  expectativaVida: number;
  mortalidadeInfantil: number;
  unidadeSaude: string;
  estabelecimentosSaude: EstabelecimentosSaude;
  leitos: Leitos;
  coberturaSaude: CoberturaSaude;
}

export interface EstabelecimentosSaude {
  hospitais: number;
  ubsPostos: number;
  clinicas: number;
  total: number;
}

export interface Leitos {
  sus: number;
  privados: number;
  total: number;
}

export interface CoberturaSaude {
  sus: number;
  planoPrivado: number;
}

export interface Infraestrutura {
  saneamento: Saneamento;
  energia: Energia;
  transporte: Transporte;
  internet: Internet;
}

export interface Saneamento {
  aguaEncanada: number;
  esgotoTratado: number;
  coletaLixo: number;
}

export interface Energia {
  coberturaEletrica: number;
  consumoMedioMensal: number;
  unidade: string;
}

export interface Transporte {
  frotaVeiculos: number;
  veiculosPorHabitante: number;
  linhasOnibus: number;
  frotaOnibus: number;
}

export interface Internet {
  domiciliosConectados: number;
  velocidadeMedia: number;
  unidade: string;
}

export interface Habitacao {
  totalDomicilios: number;
  habitantesPorDomicilio: number;
  tiposDomicilio: TiposDomicilio;
  situacaoDomicilio: SituacaoDomicilio;
}

export interface TiposDomicilio {
  casas: number;
  apartamentos: number;
  outros: number;
}

export interface SituacaoDomicilio {
  proprio: number;
  alugado: number;
  cedido: number;
  outros: number;
}

export interface Seguranca {
  taxaHomicidios: number;
  unidade: string;
  ano: number;
  efetivoPolicialPorHabitante: number;
  unidadePolicial: string;
}

export interface Desenvolvimento {
  idhm: number;
  ano: number;
  ranking: Ranking;
  componentesIDH: ComponentesIDH;
}

export interface Ranking {
  nacional: number;
  estadual: number;
}

export interface ComponentesIDH {
  longevidade: number;
  educacao: number;
  renda: number;
}

export interface Turismo {
  visitantesAnuais: number;
  ano: number;
  receita: number;
  unidade: string;
  hoteisEPousadas: number;
  leitosDisponiveis: number;
  principaisAtracoes: string[];
}

export interface MeioAmbiente {
  areaVerde: number;
  unidade: string;
  coletaSeletiva: number;
  unidadeColetaSeletiva: string;
  areasProtegidas: AreasProtegidas;
}

export interface AreasProtegidas {
  parques: number;
  areaTotalProtegida: number;
  unidadeArea: string;
}

export interface TecnologiaInovacao {
  empresasTecnologia: number;
  startups: number;
  incubadoras: number;
  centrosPesquisa: number;
  patentesAnuais: number;
  investimentoPD: number;
  unidadeInvestimento: string;
}