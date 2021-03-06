//Calculate end date, AKA today
const calcEndDate = () => {
  return new Date().toISOString().substring(0, 10);
};
const endDate = calcEndDate();

//Calculate a month ago (30 days ago)
const calcStartDate = () => {
  const today = new Date();
  const thirtyDaysAgo = new Date(today.setDate(today.getDate() - 29))
    .toISOString()
    .substring(0, 10);
  return thirtyDaysAgo;
};
const startDate = calcStartDate(endDate);

export const BASE_URL = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=${startDate}&end_date=${endDate}`;
