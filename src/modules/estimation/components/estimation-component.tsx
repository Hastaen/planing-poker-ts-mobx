import * as React from "react";
import { observer } from "mobx-react";
import IEstimationStore from '../interfaces/iestimation-store';
import { EstimationPhase } from '../types/estimation-enums';

import './styles.css';

@observer 
export class EstimationComponent extends React.Component<{estimationStore: IEstimationStore}, {}> {

updateTitleOfOfWorkItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    this.props.estimationStore.setTitleOfWorkItem(e.target.value);
}

updateNumberOfEstimators = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    this.props.estimationStore.setNumberOfEstimators(5);
}

test = () => {
    this.props.estimationStore.nextPhase();
}

render() {
    return (


        <section className="estimation-block">
            <div>
                titleOfWorkItem: {this.props.estimationStore.titleOfWorkItem}
                numberOfEstimators: {this.props.estimationStore.numberOfEstimators}
                votes: {this.props.estimationStore.votes}
                currentPhase: {this.props.estimationStore.currentPhase}
            </div>
            <div>
                <input 
                    type="text" 
                    onChange={this.updateTitleOfOfWorkItem} 
                    value={this.props.estimationStore.titleOfWorkItem} 
                />
                <button 
                    type="button"
                    onClick={this.test}
                >
                    nextPhase
                </button>
            </div>
        </section>
    )}
};

export default EstimationComponent;
