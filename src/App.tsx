import { Grid } from '@mui/material';
import { Currency } from './entities';
import { ProductCard } from './features/ProductCard';

function App() {
  return (
    <body>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6, xl: 4 }}>
          <ProductCard
            title='Чебубу'
            origin='Россия'
            price={250000}
            currency={Currency.RUB}
            imageUrl='https://s15.stc.yc.kpcdn.net/share/i/12/14592994/wr-960.webp'
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6, xl: 4 }}>
          <ProductCard
            title='POPMART Labubu'
            origin='Китай'
            price={1349000}
            currency={Currency.RUB}
            imageUrl='https://basket-17.wbbasket.ru/vol2746/part274690/274690553/images/big/1.webp'
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6, xl: 4 }}>
          <ProductCard
            title='Попмарт лабубу'
            origin='Китай'
            price={549000}
            currency={Currency.RUB}
          />
        </Grid>
      </Grid>

    </body>
  );
}

export default App;
