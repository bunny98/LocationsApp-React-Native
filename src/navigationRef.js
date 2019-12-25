import {NavigationActions} from 'react-navigation';

let naviagtor;

export const setNavigator = (nav)=>{
    naviagtor = nav;
};

export const navigate = (routeName, params)=>{
    naviagtor.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    );
};