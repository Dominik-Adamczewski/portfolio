import { defineStore } from 'pinia'

export const useUrlsStore = defineStore('urlsStore', {
  state: () => {
    return {
      longUrl: '',
      shortenUrls: [],
      formErrors: [],
      navigationLinks: [
        { label: 'Features', href: '#' },
        { label: 'Pricing', href: '#' },
        { label: 'Resources', href: '#' }
      ],
      footerLinkSections: [
        {
          label: 'Features',
          links: [
            { label: 'Link Shortening', href: '#' },
            { label: 'Branded Links', href: '#' },
            { label: 'Analytics', href: '#' }
          ]
        },
        {
          label: 'Resources',
          links: [
            { label: 'Blog', href: '#' },
            { label: 'Developers', href: '#' },
            { label: 'Support', href: '#' }
          ]
        },
        {
          label: 'Company',
          links: [
            { label: 'About', href: '#' },
            { label: 'Our Team', href: '#' },
            { label: 'Careers', href: '#' },
            { label: 'Contact', href: '#' }
          ]
        }
      ],
      socialMediaIcons: [
        { iconPath: '/images/icon-facebook.svg', href: 'https://www.facebook.com', alt: 'Facebook icon' },
        { iconPath: '/images/icon-twitter.svg', href: 'https://www.twitter.com', alt: 'Twitter icon' },
        { iconPath: '/images/icon-pinterest.svg', href: 'https://www.pinterest.com', alt: 'Pinterest icon' },
        { iconPath: '/images/icon-instagram.svg', href: 'https://www.instagram.com', alt: 'Instagram icon' }
      ],
      socialProofItems: [
        {
          id: 1,
          heading: 'Brand Recognition',
          text: 'Boost your brand recognition with each click. Generic links don\'t mean a thing. Branded links help instil confidence in your content.',
          iconPath: '/images/icon-brand-recognition.svg'
        },
        {
          id: 2,
          heading: 'Detailed Records',
          text: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
          iconPath: '/images/icon-detailed-records.svg'
        },
        {
          id: 3,
          heading: 'Fully Customizable',
          text: 'Improve brand\'s awareness and content discoverability through customizable links, supercharging audience engagement.',
          iconPath: '/images/icon-fully-customizable.svg'
        }
      ]
    }
  },
  getters: {
    getEncodedUrl () {
      return new URLSearchParams({ url: this.longUrl.trim() });
    },
    getShortenUrlsFromLocalStorage () {
      return JSON.parse(localStorage.getItem('shortenUrls'));
    }
  },
  actions: {
    validateLongUrl () {
      const validUrlRegexPattern = /^https:\/\/(localhost|(\d{1,3}\.){3}\d{1,3}|([\w-]+\.)+[\w-]{2,})(:\d{1,5})?([\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/i;
      if (!this.longUrl) {
        return this.formErrors.push('Please add a link');
      }

      if (!validUrlRegexPattern.test(this.longUrl)) {
        return this.formErrors.push('Please provide a valid url');
      }
    },
    clearFormErrors () {
      this.formErrors = [];
    },
    saveShortenedLinkToLocalStorage () {
      localStorage.setItem('shortenUrls', JSON.stringify(this.shortenUrls));
    },
    async submitShortenUrlForm () {
      this.validateLongUrl();

      if (this.formErrors.length) return;

      const originalUrl = this.longUrl;
      try {
        const response = await fetch('/api/shorten', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: this.getEncodedUrl
        });
        const json = await response.json();

        if (!response.ok) {
          return this.formErrors.push(json.error || 'Failed to shorten URL');
        }

        if (!json || !this.longUrl) return;

        const shortUrlObj = {
          id: this.shortenUrls.length + 1,
          originalUrl,
          shortUrl: json.result_url
        };
        this.shortenUrls.push(shortUrlObj);
        this.saveShortenedLinkToLocalStorage();
        this.longUrl = '';
      } catch (error) {
        console.error('Fetch error:', error.message);
        this.formErrors.push('Something went wrong while shortening the URL. Please try again later.');
      }
    },
    setShortenLinksWithDataFromLocalStorage () {
      const data = this.getShortenUrlsFromLocalStorage;
      this.shortenUrls = Array.isArray(data) ? data : [];
    }
  }
})
