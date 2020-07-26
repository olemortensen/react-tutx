import React from "react";
import axios from 'axios';
import {List, ListItem} from "@material-ui/core";

interface Item {
    id: number,
    userId: number,
    title: string
}
interface State {
    error: any,
    isLoaded: boolean,
    items: any[]
}
export default class Files extends React.Component {
    state: State = {
        error: null,
        isLoaded: false,
        items: []
    };

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            result => {
                this.setState({
                    error: null,
                    isLoaded: true,
                    items: result.data
                });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            err => {
                this.setState({
                    error: err,
                    isLoaded: true,
                    items: []
                });
            }
        );
    }

    render() {
        const { error, isLoaded, items } = this.state;
        console.log(isLoaded, items)
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <List>
                    <ListItem key='0'><a href='/main/42'>file 4</a></ListItem>
                    {items.map(item => (
                        <ListItem key={item.id}>
                            {item.id}: {item.title}
                        </ListItem>
                    ))}
                </List>
            );
        }
    }

}