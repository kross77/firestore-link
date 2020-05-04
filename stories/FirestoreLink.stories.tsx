import React, {useEffect} from 'react';
import {Text} from 'react-native';
import Layout from '@kross77/react-native-layout';
import useFirestoreLink from '../src';
import firebase from 'firebase';

console.log({env: process.env})
const config = JSON.parse(process.env.STORYBOOK_FIREBASE_CONFIG);


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


export const Restaurants = (props: any) => {
    const restaurantsLink = useFirestoreLink(firebase.firestore, 'restaurants', {
        //@ts-ignore
        organization: ['organization_id', 'organizations'],
    });


    return (
        <Layout w h={'100vh'} ac jc>
            <Text>{JSON.stringify(restaurantsLink.data)}</Text>
        </Layout>
    )
};
