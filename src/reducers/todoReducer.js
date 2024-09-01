export const todoInitial = [];

export function todoReducer(state, action) {
    switch (action.type) {
        case 'add':
            return [
                ...state,
                {
                    id: new Date(),
                    title: action.payload.title,
                    description: action.payload.description,
                    endDate: action.payload.endDate,
                    status: action.payload.status,
                    priority: action.payload.priority,
                }
            ];
        case 'update':
            return state.map(todo => 
                todo.id === action.payload.id
                    ? {
                        ...todo,
                        title: action.payload.title,
                        description: action.payload.description,
                        endDate: action.payload.endDate,
                        status: action.payload.status,
                        priority: action.payload.priority,
                    }
                    : todo
            );
        case 'delete':
            return state.filter(todo => todo.id !== action.payload);
        default:
            throw new Error();
    }
}