import { defineStore } from 'pinia';
import { nextTick } from 'vue';
import { createMap } from '../composables/map';

const ipAddressRegex = /^(25[0-5]|2[0-4][0-9]|1?[0-9]{1,2})(\.(25[0-5]|2[0-4][0-9]|1?[0-9]{1,2})){3}$/;

export const useIpTrackerStore = defineStore('ipTrackerStore', {
  state: () => ({
    apiKey: 'at_xjFz6C6ximjSncPnh4eSW4G09thBL',
    ipInputData: null,
    validIp: null,
    isLoading: false,
    isIpFetchSuccessful: false,
    ipData: {
      baseDataArray: [],
      lat: null,
      lng: null
    },
    map: null,
    wasResetDone: false,
    errors: []
  }),
  getters: {
    url (state) {
      return `https://geo.ipify.org/api/v2/country,city?apiKey=${state.apiKey}&ipAddress=${state.validIp}`;
    }
  },
  actions: {
    clearErrors () {
      this.errors = [];
    },
    addErrorMessage (errorMsg) {
      this.errors.push(errorMsg);
    },
    validateIpAddress () {
      this.clearErrors();

      if (!this.ipInputData) {
        this.addErrorMessage('Please provide a valid IP Address!');
        return false;
      }

      if (!ipAddressRegex.test(this.ipInputData)) {
        this.addErrorMessage('Input must be a valid Ip Address!');
        return false;
      }

      return true;
    },
    resetMap () {
      if (this.map) {
        this.map.remove();
        this.map = null;
      }
    },
    resetApp () {
      this.isLoading = false;
      this.isIpFetchSuccessful = false;
      this.ipData.baseDataArray = [];
      this.ipData.lat = null;
      this.ipData.lng = null;
      this.resetMap();
      this.wasResetDone = true;
      this.ipInputData = '';
    },
    initMap () {
      if (!this.map) {
        this.map = createMap({
          lat: this.ipData.lat,
          lng: this.ipData.lng,
          iconUrl: new URL('/images/icon-location.svg', import.meta.url).href,
          mapId: 'map'
        });
      }
    },
    async submitIpAddress () {
      if (!this.validateIpAddress()) {
        return;
      }

      this.resetMap();
      this.isLoading = true;

      this.validIp = this.ipInputData;
      this.clearErrors();

      try {
        const response = await fetch(this.url);
        if (!response.ok) {
          throw new Error(`Error ${response.status}`);
        }
        const data = await response.json();

        const parsedData = {
          baseDataArray: [
            { label: 'IP ADDRESS', data: data.ip },
            { label: 'LOCATION', data: `${data.location.country}, ${data.location.region}` },
            { label: 'TIMEZONE', data: `UTC ${data.location.timezone}` },
            { label: 'ISP', data: data.isp ? data.isp : 'N/A' }
          ],
          lat: data.location.lat,
          lng: data.location.lng
        };

        this.ipData = parsedData;
        this.isIpFetchSuccessful = true;
        await nextTick();
        this.initMap();
        this.isLoading = false;
      } catch (err) {
        console.error('Fetch error:', err);
        this.addErrorMessage('Failed to fetch IP data.');
      }
    }
  }
});
