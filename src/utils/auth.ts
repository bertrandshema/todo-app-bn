import jwt, { JwtPayload } from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server';

const SECRET_KEY = process.env.SECRET_KEY as string;

// Define a User Payload type that includes the id
interface UserPayload extends JwtPayload {
  id: string;
  email: string;
}

export const checkAuth = (context: any) => {
  const authHeader = context.req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split('Bearer ')[1]; // Expect format: Bearer <token>
    if (token) {
      try {
        // Cast the token to UserPayload to ensure the id field exists
        const user = jwt.verify(token, SECRET_KEY) as UserPayload;
        if (!user.id) {
          throw new AuthenticationError(
            'Token does not contain user information'
          );
        }
        return user;
      } catch (err: any) {
        throw new AuthenticationError('Invalid/Expired token', err);
      }
    }
    throw new Error('Authentication token must be "Bearer [token]"');
  }
  throw new Error('Authorization header must be provided');
};
