import {useState, useEffect} from 'react';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

export default (shouldTrack, callback)=>{
    const [err, setError] = useState(null);

    useEffect(()=>{
        let subscriber;
        const startWatching = async ()=>{
            const {status} = await requestPermissionsAsync();
            // console.log(status);
            if(status == 'denied')
                setError(status);
            else{
                const subscriber = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                }, 
                callback
                )
            }
        }
        if(shouldTrack)
            startWatching();
        else{
            if(subscriber)
                subscriber.remove();
            subscriber = null;
        }
        return ()=>{
            if(subscriber)
                subscriber.remove();
        }
    }, [shouldTrack, callback])

    return [err];

}