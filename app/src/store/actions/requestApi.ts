import { createAction } from '@reduxjs/toolkit';
import IRequest from '../../core/interfaces/IRequest';

export const requestStarted = createAction<IRequest>('api/requestStarted');
export const requestSuccess = createAction<IRequest>('api/requestSuccess');
export const requestFailed = createAction<IRequest>('api/requestFailed');