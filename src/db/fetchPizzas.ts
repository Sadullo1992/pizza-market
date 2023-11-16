import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { IPizza, TSortType } from '../types/types';
import { db } from './firebaseDB';

const pizzasCollectionRef = collection(db, 'pizzas');

export const fetchPizzas = async (category: number, sortBy: TSortType) => {
  const q = !category
    ? query(pizzasCollectionRef, orderBy(sortBy))
    : query(pizzasCollectionRef, where('category', '==', category), orderBy(sortBy));
  const data = await getDocs(q);
  const fetchedPizzas = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }) as IPizza);
  return fetchedPizzas;
};
