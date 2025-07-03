import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Box, CardContent, Typography } from '@mui/material';
import { Currency } from '../../entities';
import {
    DescriptionContainer,
    OriginContainer,
    Price,
    StyledCard,
    StyledCardMedia,
} from './ProductCard.components';

type ProductCardProps = {
    title?: string;
    origin?: string;
    price?: number;
    currency?: Currency;
    imageUrl?: string;
};

export const ProductCard = ({
    title,
    origin,
    price,
    currency,
    imageUrl = 'images/NoImageStub.png',
}: ProductCardProps) => {

    const formattedPrice = price && currency ? Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: currency,
    }).format(price / 100) : null;

    return (
        <StyledCard>
            <StyledCardMedia
                component='img'
                image={imageUrl}
            />

            <CardContent sx={{ alignContent: "flex-end" }}>
                <DescriptionContainer>
                    <Box>
                        {formattedPrice && (
                            <Price>
                                {formattedPrice}
                            </Price>
                        )}
                        {title && (
                            <Typography
                                variant='h4'
                                color='textPrimary'
                            >
                                {title}
                            </Typography>
                        )}
                        {origin && (
                            <OriginContainer>
                                <LocationOnOutlinedIcon />
                                <Typography variant='body1'>{origin}</Typography>
                            </OriginContainer>
                        )}
                    </Box>
                </DescriptionContainer>
            </CardContent>
        </StyledCard>
    );
};
