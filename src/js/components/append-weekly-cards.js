import renderWeeklyCards from './render-weekly-cards';
import { trendsApi } from './trendsApi';

export default async function appendTrendsCards() {
  try {
    renderWeeklyCards(await trendsApi.fetchWeeklyCards());
  } catch (error) {
    console.log('ошибка в append Weekly Cards', error);
  }
}
