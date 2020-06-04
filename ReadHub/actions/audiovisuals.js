import * as types from '../types/audiovisuals';

export const startFetchingEquipment = equipments =>({
    type: types.FETCHING_EQUIPMENT_STARTED,
    payload: {equipments}
});

export const completeFetchingEquipments = (entities, order)=>({
    type: types.FETCHING_EQUIPMENT_COMPLETED,
    payload: {
        entities,
        order
    }
});

export const failFetchingEquipment = error =>({
    type: types.FETCHING_EQUIPMENT_FAILED,
    payload: {error}
});

export const startLoaningEquipment = equipment =>({
    type: types.LOAN_EQUIPMENT_STARTED,
    payload: {equipment}
});

export const completeLoaningEquipment = equipment =>({
    type: types.LOAN_EQUIPMENT_COMPLETED,
    payload: {equipment}
});

export const failLoaningEquipment= error =>({
    type: types.LOAN_EQUIPMENT_FAILED,
    payload: {error}
});

export const startReturningEquipment = equipment =>({
    type: types.RETURN_EQUIPMENT_STARTED,
    payload: {equipment}
});

export const completeReturningEquipment= ()=>({
    type: types.RETURN_EQUIPMENT_COMPLETED,
});

export const failReturningEquipment= error =>({
    type: types.RETURN_EQUIPMENT_FAILED,
    payload: {error}
});



export const startFetchingEquipmentLoans = () =>({
    type: types.FETCHING_LOAN_EQUIPMENT_COLLECTION_STARTED,
});

export const completeFetchingEquipmentLoans = (entities, order) =>({
    type: types.FETCHING_LOAN_EQUIPMENT_COLLECTION_COMPLETED,
    payload: { 
        entities,
        order
    }
});

export const failFetchingEquipmentLoans = error =>({
    type: types.FECTHING_LOAN_EQUIPMENT_COLLECTION_FAILED,
    payload: {error}
});