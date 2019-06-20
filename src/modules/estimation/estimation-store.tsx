import { observable, action, computed } from "mobx";
import { EstimationPhase } from '../estimation/types/estimation-enums';

class EstimationStore {
    @observable titleOfWorkItem: string;
    @observable numberOfEstimators: number;
    @observable votes: number[];
    @observable currentPhase: EstimationPhase;

    constructor() {
        this.titleOfWorkItem = '';
        this.numberOfEstimators = 1;
        this.currentPhase = EstimationPhase.NAMING_WORK_ITEM;
    }

    @action setTitleOfWorkItem(title: string) {
        this.titleOfWorkItem = title;
    }

    @action setNumberOfEstimators(numberOfEstimators: number) {
        this.numberOfEstimators = numberOfEstimators;
    }

    @action addVotes(vote: number) {
        this.votes.push(vote);
    }

    @action resetCurrentEstimation() {
        this.titleOfWorkItem = '';
        this.numberOfEstimators = 0;
        this.votes = [];
        this.currentPhase = EstimationPhase.NAMING_WORK_ITEM;
        // save historic sets of estimations
    }

    @action nextPhase() {
        let phase:EstimationPhase = this.currentPhase;
        switch(this.currentPhase) { 
            case EstimationPhase.NAMING_WORK_ITEM: { 
                this.currentPhase = EstimationPhase.SELECTING_NUMBER_OF_ESTIMATORS
               break; 
            } 
            case EstimationPhase.SELECTING_NUMBER_OF_ESTIMATORS: { 
                this.currentPhase = EstimationPhase.PICKING_ESTIMATIONS
               break; 
            }
            case EstimationPhase.PICKING_ESTIMATIONS: { 
                this.currentPhase = EstimationPhase.NAMING_WORK_ITEM
               break; 
            }
            default: { 
               console.log("Invalid phase"); 
               break;              
            } 
         }
    }

};

export default new EstimationStore();