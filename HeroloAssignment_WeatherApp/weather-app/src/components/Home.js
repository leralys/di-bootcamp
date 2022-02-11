import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import allActions from '../redux/actions/index';
import Search from './Search';
import WeatherCard from './WeatherCard';

const Home = () => {
  const dispatch = useDispatch();
  const days = useSelector(state => state.forecast.data.DailyForecasts);
  const isDailyLoading = useSelector(state => state.forecast.loading);
  const curr = useSelector(state => state.current.data);
  const isCurrLoading = useSelector(state => state.current.loading);
  useEffect(() => {
    dispatch(allActions.requestForecast());
    dispatch(allActions.requestCurrWeather());
  }, [dispatch]);
  let city;
  let daily;
  if (curr && !isCurrLoading) {
    city = <div>HELLO</div>
  }
  if (days && !isDailyLoading) {
    daily =
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 4, md: 12 }}>
          {days.map(el => (
            <Grid item xs={4} sm={4} md={4} key={el.EpochDate}>
              <WeatherCard />
            </Grid>
          ))}
        </Grid>
      </Box>
  }
  return (
    <main className="page">
      <Search />
      {city}
      {daily}
    </main>
  );
}

export default Home;







// prev
// daily =
// // <div className='WeatherCards-container'>
// //   {days.map(el => {
// //     return <WeatherCard key={el.EpochDate} />
// //   })}
// // </div>