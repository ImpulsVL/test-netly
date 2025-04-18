import { z } from 'zod'

export const EmailSendValidator = z.object({
  email: z
    .string()
    .nonempty('Необходимо заполнить все обязательные поля')
    .max(256, 'Количество символов в электронной почте превышает допустимое')
    .email('Недействительный адрес электронной почты')
    .regex(
      /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~.-]+@[A-Za-z0-9-]+\.(ru|com)$/i,
      'Недействительный адрес электронной почты'
    )
})
