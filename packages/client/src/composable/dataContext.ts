import { ref } from 'vue';
export interface Data {
  id: number;
  name: string;
}
export function init() {
  const data = ref<Data[]>([]);
  const fetch = async() => {
    data.value = [
      {
        id: 1,
        name: 'A'
      },
      {
        id: 2,
        name: 'B'
      },
      {
        id: 3,
        name: 'C'
      },
    ];
  };
  return {
    data,
    fetch,
  };
}
