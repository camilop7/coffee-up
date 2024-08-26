import { createOrUpdateBarista } from './baristaService';

const seedBaristas = async () => {
  const baristas = [
    {
      id: 'barista1',
      name: 'John Doe',
      introduction: 'John is a skilled barista...',
      avatar: 'avatar1.png',
      availability: [
        { date: '2024-08-01', color: 'blue' },
        { date: '2024-08-05', color: 'green' }
      ]
    },
    {
      id: 'barista2',
      name: 'Jane Smith',
      introduction: 'Jane is an expert in latte art...',
      avatar: 'avatar2.png',
      availability: [
        { date: '2024-08-02', color: 'blue' },
        { date: '2024-08-06', color: 'green' }
      ]
    },
    // Add more baristas as needed
  ];

  for (const barista of baristas) {
    await createOrUpdateBarista(barista.id, barista);
  }
};

seedBaristas();
