import { CardContent, Rating, Typography } from '@mui/material';
import React from 'react';
import { useActions } from '../hooks/useActions';

export const ListItem = ({item}) => {
    const { setRatingByID, sortList } = useActions()

    return (
        <CardContent sx={{display:'flex', flexDirection:'column', color: '#1976d2'}}>
            <Typography sx={{my: '10px', fontSize:'1.5rem', fontWeight:'bold'}}> {item.name} </Typography>
            <Typography sx={{fontSize:'1.2rem'}}>{item.desc}</Typography>
            <Rating
                sx={{marginTop: '20px', marginRight: '20px', alignSelf:'flex-end'}}
                value = {item.rate}
                onChange={(event, value) => {
                    setRatingByID({id: item.id, rate: value})
                    sortList()
                }}
            >
            </Rating>
        </CardContent>
    )
};


