import stylex from '@stylexjs/stylex'
import { colors } from './vars.stylex.ts'

export const backgrounds = stylex.create({
  primary: {
    background: colors.primary,
  },
  secondary: {
    background: colors.secondary,
  },
})

type ButtonProps = React.ComponentProps<'button'> & {
  background?: keyof typeof backgrounds
}

export const Button2 = ({ background, ...props }: ButtonProps) => (
  <button
    {...props}
    {...stylex.props(background && backgrounds[background])}
  />
)
