import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

const initialState = {
    username: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateName(state, action) {
            state.username = action.payload
        },
    },
})

export const { updateName } = userSlice.actions

export default userSlice.reducer

export const getUsername = (store: RootState) => store.user.username
