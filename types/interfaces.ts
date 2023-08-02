export interface CoverageInfo {
  id: number;
  nombre: string;
  explicacion: string;
  precio: number;
  precio_2: number;
  precio_3: number;
  codigo: string;
  nodexml: string;
  marca: string;
  aviso: string;
}

export interface Coverage {
  coberturas: Array<CoverageInfo>;
  selectedCoverage: CoverageInfo;
}
