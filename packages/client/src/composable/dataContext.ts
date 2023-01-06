import { ref } from 'vue';
import { DefaultApi } from 'api-client';
export interface Data {
  id: number;
  name: string;
}
export function init() {
  const data = ref<Data[]>([]);
  const fetch = async() => {
    data.value = await new DefaultApi().appControllerGetAll();
  };
  return {
    data,
    fetch,
  };
}
