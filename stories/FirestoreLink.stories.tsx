import React, {useEffect} from 'react';
import Layout from '@kross77/react-native-layout';
import useFirestoreLink from '../src';
import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyAvevNA9EeAGTZIdpEpGSWS7UGZjnC9qz8",
    authDomain: "mobietu-fi-dev.firebaseapp.com",
    databaseURL: "https://mobietu-fi-dev.firebaseio.com",
    projectId: "mobietu-fi-dev",
    storageBucket: "mobietu-fi-dev.appspot.com",
    messagingSenderId: "462403576246",
    appId: "1:462403576246:web:7937f7ec40bf63e65c2117",
    measurementId: "G-SD7M6ZKWSM"
};


if (firebase.apps.length === 0) {
    firebase.initializeApp(config);
}

export default {
    title: 'FirestoreLink',
};

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const Add = (props: any) => {
    const testLink = useFirestoreLink(firebase.firestore, 'test');
    useEffect(() => {
        console.log({edit: testLink.editItem.value})
    }, [testLink.editItem.value])
    useEffect(() => {
        console.log({data: testLink.data})
    }, [testLink.data])
    return (
        <Layout w h={'100vh'} ac jc>
            <Layout w={300} gap={10}>
                <h1>Add new item</h1>
                <input onChange={e => testLink.editItem.update({name: e.target.value})}/>
                <input type={'submit'} onClick={testLink.add}/>
                <div>
                    {testLink.data ? testLink.data.map(({name}: any) => <h5>{name}</h5>) : "Loading"}
                </div>
            </Layout>
        </Layout>
    )
};


export const Edit = (props: any) => {
    const testLink = useFirestoreLink(firebase.firestore, 'test');

    useEffect(() => {
        testLink.load("bL0IwLuVak2s8rwtkkyC");
    }, [])

    return (
        <Layout w h={'100vh'} ac jc>
            <Layout w={300} gap={10}>
                <h3>Edit item with id bL0IwLuVak2s8rwtkkyC</h3>
                <input value={testLink.editItem.value.name}
                       onChange={e => testLink.editItem.update({name: e.target.value})}/>
                <input type={'submit'} onClick={testLink.save}/>
                <div>
                    {testLink.data ? testLink.data.map(({name}: any) => <h5 key={name}>{name}</h5>) : "Loading"}
                </div>
            </Layout>
        </Layout>
    )
};
