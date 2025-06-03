import './styles.scss'

type Props = {
  onClick?: () => void
  padding?: string
  text: string
}

const Button = ({ onClick, padding, text }: Props) => {
  return (
    <button onClick={onClick} style={{ padding: padding }} className='button'>
      {text}
    </button>
  )
}

export default Button
