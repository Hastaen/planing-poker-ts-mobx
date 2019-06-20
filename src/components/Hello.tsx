import * as React from "react";
import { observer } from "mobx-react";

import './styles.css';

export interface IEstimationStore { 
    titleOfWorkItem: string; 
    numberOfEstimators: number; 
    setOfVotes: Array<string>; 
}



@observer 
export class Hello extends React.Component<{estimationStore: IEstimationStore}, {}> {

render() {
    return (
        <h1 className="test">
            Hei!
            {this.props.estimationStore.numberOfEstimators}
        </h1>
    )}
};