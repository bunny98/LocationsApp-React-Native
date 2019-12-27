import {useState, useEffect} from 'react';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

export default (shouldTrack, callback)=>{
    const [err, setError] = useState(null);
    const [subscriber, setSubs] = useState(null);
    const startWatching = async ()=>{
        const {status} = await requestPermissionsAsync();
        // console.log(status);
        if(status == 'denied')
            setError(status);
        else{
            const sub = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, 
            callback
            )
            setSubs(sub);
        }
    }

    useEffect(()=>{
        if(shouldTrack)
            startWatching();
        else{
            subscriber.remove();
            setSubs(null);
        }
    }, [shouldTrack])

    return [err];

}