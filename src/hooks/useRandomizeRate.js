import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';

export const useRandomizeRate = () => {
    const [isActiveRandomize, setIsActiveRandomize] = useState(false)
    const timerId = useSelector(state => state.list.timerId)
    const intervalId = useSelector(state => state.list.intervalId)
    const { sortList, randomize, setTimerId, setIntervalId } = useActions()

    useEffect(() => {    
        if(isActiveRandomize) {
            let random = (Math.floor(Math.random() * 40) + 20) * 100    

            let intervalId = setInterval(() => {
                randomize()
            },100)

            let timerId = setTimeout(() => {
                clearInterval(intervalId)
                setIsActiveRandomize(false)
                sortList()
            }, random)

            setIntervalId(intervalId)
            setTimerId(timerId)
            
        } else if (timerId) {
            clearTimeout(timerId)
            clearInterval(intervalId)
            sortList()
        }

        return () => {
            if(timerId) clearTimeout()
            if(intervalId) clearInterval()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isActiveRandomize])

    const clickHandler = () => {
        setIsActiveRandomize(!isActiveRandomize)
    }

    return [isActiveRandomize, clickHandler]
}
