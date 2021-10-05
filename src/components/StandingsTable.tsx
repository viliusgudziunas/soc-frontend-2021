import { ClassObjectModel } from '@models/com';
import Utils from '@shared/utils';
import { ReactElement } from 'react';

interface StandingsDto {
  calories: number;
  id: number;
  name: string;
  place: number;
}

const data: StandingsDto[] = [
  { id: 1, place: 1, name: 'Vilius', calories: 2500 },
  { id: 2, place: 2, name: 'Test', calories: 2000 },
  { id: 3, place: 3, name: 'Titas', calories: 1750 },
  { id: 4, place: 4, name: 'Marius', calories: 1500 },
  { id: 5, place: 5, name: 'Belekas', calories: 150 },
];

export const StandingsTable = (): ReactElement => {
  const trClasses: ClassObjectModel = { 'hover:bg-blue-300': true };

  return (
    <table className='m-6 divide-y'>
      <thead>
        <tr className='bg-blue-200'>
          <th className='px-8 py-5'>Place</th>
          <th className='px-8 py-5'>Name</th>
          <th className='px-8 py-5'>Calories</th>
        </tr>
      </thead>
      <tbody className='divide-y'>
        {data.map((entry: StandingsDto, index: number) => {
          const { id, place, name, calories } = entry;

          const indexIsEven = index % 2 === 0;
          trClasses['bg-white'] = indexIsEven;
          trClasses['bg-gray-200'] = !indexIsEven;

          const className = Utils.makeClassName(trClasses);

          return (
            <tr className={className} key={id}>
              <td className='p-8 py-5 text-center'>{place}</td>
              <td className='p-8 py-5'>{name}</td>
              <td className='p-8 py-5 text-center'>{calories}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
