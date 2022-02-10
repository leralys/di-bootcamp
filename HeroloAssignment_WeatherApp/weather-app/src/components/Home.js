import Search from './Search';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import WeatherCard from './WeatherCard';


const Home = () => {
  // let arr = [1, 2, 3, 4, 5]
  return (
    <main className="page">
      <Search />
      {/* {arr.length > 0 &&
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 4, md: 12 }}>
            {arr.map((el, index) => (
              <Grid item xs={4} sm={4} md={4} key={index}>
                <WeatherCard />
              </Grid>
            ))}
          </Grid>
        </Box>
      } */}
    </main>
  );
}

export default Home;
