import { defineStore } from 'pinia';
import countriesData from '../../data/data.json';

export const useCountriesStore = defineStore('countriesStore', {
  state: () => ({
    isDarkModeEnabled: false,
    regions: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'All countries'],
    currentlySelectedRegion: '',
    searchInput: '',
    countriesListData: null,
    countriesListDataForCards: null,
    currentlyFilteredCountriesCount: null,
    isCountryDetailsViewOpened: false,
    countryForDetailsView: null,
    currentPage: 1,
    itemsPerPage: 30
  }),
  getters: {
    // gets all countries as initial state after loading the app
    countriesForCards () {
      if (this.countriesListData) {
        return this.countriesListData.map(country => {
          return {
            flag: country.flag,
            name: country.name,
            population: country.population,
            region: country.region,
            capital: country.capital
          };
        });
      }
    },
    allCountriesCount () {
      if (this.countriesListData) {
        return this.countriesListData.length;
      }
    },
    filteredCountries () {
      let countries = this.countriesForCards;

      if (this.currentlySelectedRegion && this.currentlySelectedRegion !== 'All countries') {
        countries = countries.filter(country => country.region === this.currentlySelectedRegion);
      }

      if (this.searchInput) {
        const searchLower = this.searchInput.toLowerCase();
        countries = countries.filter(country => {
          return Object.values(country).some(value => {
            return String(value).toLowerCase().includes(searchLower);
          });
        });
      }
      this.currentlyFilteredCountriesCount = countries?.length;
      return countries;
    }
  },
  actions: {
    toggleDarkMode () {
      this.isDarkModeEnabled = !this.isDarkModeEnabled;
    },
    async fetchCountriesListData () {
      try {
        this.countriesListData = countriesData;
      } catch (error) {
        throw new Error('Error while loading countries data!');
      }
    },
    getCountryForDetailsView (countryName) {
      if (this.countriesListData) {
        return this.countriesListData.find(country => country.name === countryName);
      }
    },
    getCountryNameFromAlphaCode (alphaCode) {
      if (this.countriesListData) {
        return this.countriesListData.find(country => country.alpha3Code === alphaCode).name;
      }
    },
    resetCurrentPage () {
      this.currentPage = 1;
    },
    clearSearchInputField () {
      this.searchInput = '';
    }
  }
});
