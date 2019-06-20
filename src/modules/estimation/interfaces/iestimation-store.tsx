import { EstimationPhase } from '../types/estimation-enums';

export default interface IEstimationStore { 
    titleOfWorkItem: string; 
    numberOfEstimators: number; 
    votes: Array<number>; 
    currentPhase: EstimationPhase;
    setTitleOfWorkItem(title: string): void;
    setNumberOfEstimators(numberOfEstimators: number): void;
    addVotes(vote: number): void;
    resetCurrentEstimation(): void;
    nextPhase(): void;
}