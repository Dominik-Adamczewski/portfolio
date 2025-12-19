import { ref, onMounted, onUnmounted } from 'vue';
import throttle from 'lodash/throttle';

export function useDevice () {
  const device = ref(getDeviceByWidth());

  function getDeviceByWidth () {
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
  }

  function updateDevice () {
    device.value = getDeviceByWidth();
  }

  onMounted(() => {
    updateDevice();
    window.addEventListener('resize', throttle(updateDevice, 200));
  });

  onUnmounted(() => {
    window.removeEventListener('resize', throttle(updateDevice, 200));
  });

  return { device };
}
