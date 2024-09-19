import Todo from '../models/Todo';

const resolvers = {
  Query: {
    todos: async () => {
      try {
        return await Todo.find();
      } catch (err) {
        throw new Error('Error fetching todos');
      }
    },
    todoById: async (_: any, { id }: { id: string }) => {
      try {
        return await Todo.findById(id);
      } catch (err) {
        throw new Error('Error fetching todo');
      }
    },
  },
  Mutation: {
    createTodo: async (
      _: any,
      { title, description }: { title: string; description?: string }
    ) => {
      try {
        const todo = new Todo({ title, description });
        return await todo.save();
      } catch (err) {
        throw new Error('Error creating todo');
      }
    },
    updateTodo: async (
      _: any,
      { id, completed }: { id: string; completed: boolean }
    ) => {
      try {
        const updatedTodo = await Todo.findByIdAndUpdate(
          id,
          { completed },
          { new: true }
        );
        if (!updatedTodo) {
          throw new Error('Todo not found');
        }
        return updatedTodo;
      } catch (err) {
        throw new Error('Error updating todo');
      }
    },
    deleteTodo: async (_: any, { id }: { id: string }) => {
      try {
        const deleted = await Todo.findByIdAndDelete(id);
        return !!deleted;
      } catch (err) {
        throw new Error('Error deleting todo');
      }
    },
  },
};

export default resolvers;
