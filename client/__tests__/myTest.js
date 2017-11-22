import React from 'react';
import { shallow, mount } from 'enzyme';
import { testNewTaskValidity } from "../src/components/stateFunctions";


const sampleNewTaskData = {
    taskSummary: 'sample summary',
    taskValue: 50,
    taskCategory: 'electrical',
    taskNeededDate: 'today',
    taskNeededHour: '12:00am',
    taskDescription: 'sample description'
};

const completedForm = testNewTaskValidity(sampleNewTaskData);

describe('submitNewTask', () => {
    it('retrieves newly created task data specified by user', () => {
        expect(completedForm).toEqual(sampleNewTaskData);
    });

    it('should have six properties for newTask object', () => {
        expect(Object.keys(sampleNewTaskData).length).toBe(6);
    });
});




/*
helpful links, maybe
http://www.cloudypoint.com/Tutorials/discussion/javascript-solved-test-suite-failed-to-run-invariant-violation-_registercomponent-target-container-is-not-a-dom-element/
https://stackoverflow.com/questions/40465047/how-can-i-mock-an-es6-module-import-using-jest

 */