import './styles.scss'

const InDevelopment = () => {
  return (
    <div className='under-construction'>
      <title>Сайт в разработке</title>
      <div className='icon'>🏗️</div>
      <h1>Сайт в разработке</h1>
      <p>Мы скоро закончим строительство и вернёмся с новым сайтом!</p>
      <div className='loader'>
        <span className='dot' />
        <span className='dot' />
        <span className='dot' />
      </div>
    </div>
  )
}

export default InDevelopment
