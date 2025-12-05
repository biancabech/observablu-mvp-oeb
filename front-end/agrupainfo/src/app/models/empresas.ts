// src/app/models/empresas.interface.ts

export interface EmpresasData {
  totalEmpresas: number;
  ultimaAtualizacao: string;
  empresasPorSetor: EmpresaPorSetor[];
  empresasPorPorte: EmpresaPorPorte[];
  empresasPorBairro: EmpresaPorBairro[];
  evolucaoTemporal: EvolucaoTemporal[];
  empresasDestaque: EmpresaDestaque[];
}

export interface EmpresaPorSetor {
  setor: string;
  quantidade: number;
  percentual: number;
  crescimentoAnual: number;
}

export interface EmpresaPorPorte {
  porte: string;
  quantidade: number;
  percentual: number;
}

export interface EmpresaPorBairro {
  bairro: string;
  quantidade: number;
  percentual: number;
  principalSetor: string;
}

export interface EvolucaoTemporal {
  ano: number;
  total: number;
  novasEmpresas: number;
  empresasFechadas: number;
}

export interface EmpresaDestaque {
  nome: string;
  setor: string;
  porte: string;
  funcionarios: number;
  anoFundacao: number;
}