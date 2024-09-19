import bcrypt from 'bcryptjs';
import User from '../models/User'; // Import your User model

const userResolvers = {
  Mutation: {
    register: async (
      _: any,
      {
        username,
        email,
        password,
      }: { username: string; email: string; password: string }
    ) => {
      console.log('Register mutation called with:', {
        username,
        email,
        password,
      });

      try {
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create new user
        const newUser = new User({ username, email, password: hashedPassword });
        const savedUser = await newUser.save();

        console.log('New user created:', savedUser);

        // Check if the user is null or undefined
        if (!savedUser) {
          console.error('Saved user is null or undefined');
          throw new Error('Failed to register user');
        }

        // Return the new user
        return savedUser;
      } catch (error) {
        console.error('Error in register resolver:', error);
        throw new Error('Failed to register user');
      }
    },
  },
};

export default userResolvers;
