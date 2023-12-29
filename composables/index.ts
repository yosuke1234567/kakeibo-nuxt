import type { User } from '@firebase/auth'

export const useUser = () => useState<User>('userStore')