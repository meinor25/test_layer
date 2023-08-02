import { CoverageInfo } from "./../types/interfaces";
import { useCoberturasStore } from "../stores/coberturas";
import { storeToRefs } from "pinia";

export const useCoberturas = () => {
  const coberturaStore = useCoberturasStore();
  const { selectedCoverage } = storeToRefs(coberturaStore);
  const setCoverage = (coverage: CoverageInfo) => {
    coberturaStore.setCoverage(coverage);
  };

  return {
    setCoverage,
    selectedCoverage,
  };
};
