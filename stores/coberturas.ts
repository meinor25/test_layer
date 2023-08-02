import { Coverage, CoverageInfo } from "./../types/interfaces";
import { defineStore } from "pinia";

export const useCoberturasStore = defineStore("coberturas", {
  // a function that returns a fresh state - STATE ES COMO DATA
  state: (): Coverage => ({
    coberturas: [],
    selectedCoverage: {
      id: 0,
      nombre: "",
      explicacion: "",
      precio: 0,
      precio_2: 0,
      precio_3: 0,
      codigo: "",
      nodexml: "",
      marca: "",
      aviso: "",
    },
  }),
  getters: {
    getCoberturas: (state) => {
      return state.coberturas;
    },
  },
  actions: {
    setCoverage(coverage: CoverageInfo) {
      this.selectedCoverage = coverage;
    },
  },
  // actions: {
  //   // setCoverage () {
  //   //   this.selectedCoverage = {
  //   //     id: 1,
  //   //     nombre: "Test",
  //   //     explicacion: "Test",
  //   //     precio: 10,
  //   //     precio_2: 10,
  //   //     precio_3: 10,
  //   //     codigo: "10",
  //   //     nodexml: "3232",
  //   //     marca: "3232",
  //   //     aviso: "3232",
  //   //   }
  //   // }
  // }
  //   actions: {
  //     async fetchCoberturas() {
  //       try {
  //         const { getItems } = useDirectusItems();
  //         var filters = { marca: "Hertz" };
  //         const coberturas = await getItems<CoverageInfo>({
  //           collection: "coberturas",
  //           params: {
  //             filter: filters,
  //           },
  //         });
  //         this.coberturas = coberturas;
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     },
  //   },
});
