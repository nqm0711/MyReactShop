import {USER_ACTION_TYPES} from './user.types';
import {createAction} from '../../utils/reducer/reducer.utils';
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup,
    signOutUser
} from "../../utils/firebase/firebase.utils";

export const setCurrentUser = (user) =>
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

/*
CHECK_USER_SESSION: 'user/CHECK_USER_SESSION',
  GOOGLE_SIGN_IN_START: 'user/GOOGLE_SIGN_IN_START',
  EMAIL_SIGN_IN_START: 'user/EMAIL_SIGN_IN_START',
  SIGN_IN_SUCCESS: 'user/SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE: 'user/SIGN_IN_FAILURE'

*/

export const checkUserSession = () =>
    createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () =>
    createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email, password) =>
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {email, password});

export const signInSuccess = (user) =>
    createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailed = (error) =>
    createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

export const signUpStart = (email, password, displayName) =>
    createAction(USER_ACTION_TYPES.SIGN_UP_START, {email, password, displayName});

export const signUpSuccess = (user, additionalDetails) =>
    createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {user, additionalDetails});

export const signUpFailed = (error) =>
    createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);

export const signOutStart = () =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_START);

export const signOutSuccess = () =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

export const signOutFailed = (error) =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);
export const signOutUserAsync = () => {
    return async (dispatch) => {
        dispatch(signOutStart());
        try {
            await signOutUser();
            dispatch(signOutSuccess());
        } catch (error) {
            dispatch(signOutFailed(error));
        }
    };
};

export const signUpUserAsync = (email, password, displayName) => {
    return async (dispatch) => {
        dispatch(signUpStart(email, password, displayName));
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            dispatch(signUpSuccess(user, {displayName}));

            // SignIn after SignUp
            const userSnapshot = await createUserDocumentFromAuth(user, {displayName});
            dispatch(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
        } catch (error) {
            dispatch(signUpFailed(error));
        }
    };
};

export function signInWithGoogleAsync() {
    return async (dispatch) => {
        dispatch(googleSignInStart())
        try {
            const {user} = await signInWithGooglePopup();
            const userSnapshot = await createUserDocumentFromAuth(user);
            dispatch(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
        } catch (error) {
            dispatch(signInFailed(error));
        }
    }
}

export function signInWithEmailAsync(email, password) {
    return async (dispatch) => {
        dispatch(emailSignInStart(email, password))
        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            const userSnapshot = await createUserDocumentFromAuth(user);
            dispatch(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
        } catch (error) {
            dispatch(signInFailed(error));
        }
    }
}