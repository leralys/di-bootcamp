import FavoriteIcon from '@mui/icons-material/Favorite';
import { Card, CardHeader, CardContent, CardActions, IconButton, Typography, Button } from '@mui/material';
import './styles/WeatherCard.css';

const WeatherCard = () => {
    let num = 1;
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader title='Shrimp and Chorizo Paella' />
            <img src={require(`../assets/images/weatherImages/${num}.png`)} />
            <CardContent>
                <Typography variant='body2' color='text.secondary'>
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label='add to favorites'>
                    <FavoriteIcon />
                </IconButton>
                <Button variant='text'>View on AccuWeather.com</Button>
            </CardActions>
        </Card>
    );
}

export default WeatherCard;