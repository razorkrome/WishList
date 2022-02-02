import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button, Card, Container } from '@mui/material';
import { ListItem } from './ListItem';
import { useRandomizeRate } from '../hooks/useRandomizeRate';
import { useActions } from '../hooks/useActions';

export const List = () => {
    const listData = useSelector(state => state.list.data)
    const { sortList } = useActions()
    const [isActiveRandomize, clickHandler] = useRandomizeRate()

    useEffect(() => {
        sortList()
    },[])

    return (
        <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Button sx={{marginTop: '20px', alignSelf:'flex-end', width: '170px'}} variant="contained" onClick={clickHandler}>{isActiveRandomize ? "Stop randomize" : "Start randomize"}</Button>
            {listData.map((item, index) => (
                <Card sx={{marginBottom:'20px', maxWidth: '500px'}} key={item.id}>
                    <ListItem
                        item={item}
                        index={index}
                    />
                </Card>   
            ))} 
        </Container>
    )
};
